import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Stepper } from '.';
import { PLAN_TYPE, URL_PLAN_TYPE } from '../../../doppler-types';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import IntlProvider from '../../../i18n/DopplerIntlProvider.double-with-ids-as-values';

describe('Stepper', () => {
  it('should render Stepper component', async () => {
    // Arrange
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
});
