import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Stepper } from '.';
import { PLAN_TYPE, URL_PLAN_TYPE } from '../../../doppler-types';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import IntlProvider from '../../../i18n/DopplerIntlProvider.double-with-ids-as-values';

describe('Stepper', () => {
  const steps = [
    {
      label: 'buy_process.stepper.email_marketing_plan_step',
      icon: '',
      pathname: '/plan-selection/premium/by-contacts',
    },
    {
      label: 'buy_process.stepper.conversation_plan_step',
      icon: '',
      pathname: '/checkout',
    },
    {
      label: 'buy_process.stepper.finalize_purchase_step',
      icon: '',
      pathname: '/checkout-summary',
    },
  ];

  it('should render Stepper component', async () => {
    // Arrange
    // Act
    const { container } = render(
      <IntlProvider>
        <Router initialEntries={['/checkout']}>
          <Routes>
            <Route path="/plan-selection/premium/:planType" element={<span>Plan selection</span>} />
            <Route path="/checkout" element={<Stepper steps={steps} mobileVariant />} />
          </Routes>
        </Router>
        ,
      </IntlProvider>,
    );

    expect(container.querySelector('.dp-new-plan-selection-stepper-summary')).toBeInTheDocument();
    expect(container.querySelector('.dp-new-plan-selection-stepper-progress')).toBeInTheDocument();

    fireEvent.click(container.querySelector('.dp-new-plan-selection-stepper-back'));

    expect(container).toHaveTextContent('Plan selection');
  });

  it('should not render the legacy lateral stepper in mobile', async () => {
    const originalMatchMedia = window.matchMedia;
    window.matchMedia = jest.fn().mockReturnValue({
      addEventListener: jest.fn(),
      matches: true,
      removeEventListener: jest.fn(),
    });

    const { container } = render(
      <IntlProvider>
        <Router initialEntries={['/checkout']}>
          <Routes>
            <Route path="/checkout" element={<Stepper steps={steps} />} />
          </Routes>
        </Router>
      </IntlProvider>,
    );

    await waitFor(() => expect(container.querySelector('.dp-steper')).not.toBeInTheDocument());

    window.matchMedia = originalMatchMedia;
  });

  it('should navigate to the configured destination when returning from the first step', () => {
    const { container } = render(
      <IntlProvider>
        <Router initialEntries={['/plan-selection/premium/by-contacts']}>
          <Routes>
            <Route
              path="/plan-selection/premium/:planType"
              element={<Stepper steps={steps} mobileVariant firstStepBackUrl="/my-plan" />}
            />
            <Route path="/my-plan" element={<span>My plan</span>} />
          </Routes>
        </Router>
      </IntlProvider>,
    );

    fireEvent.click(container.querySelector('.dp-new-plan-selection-stepper-back'));

    expect(container).toHaveTextContent('My plan');
  });
});
