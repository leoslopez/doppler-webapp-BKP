import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import IntlProvider from '../../../i18n/DopplerIntlProvider.double-with-ids-as-values';
import { AppServicesProvider } from '../../../services/pure-di';
import { BuyProcessLayout } from '.';

describe('BuyProcessLayout', () => {
  it('should return to My Plan from the first step of an add-on purchase', () => {
    const { container } = render(
      <AppServicesProvider
        forcedServices={{
          appSessionRef: { current: { userData: { user: { plan: {} } } } },
        }}
      >
        <IntlProvider>
          <Router initialEntries={['/buy-onsite-plans?buyType=4']}>
            <Routes>
              <Route
                path="/buy-onsite-plans"
                element={
                  <BuyProcessLayout>
                    <span>Onsite plans</span>
                  </BuyProcessLayout>
                }
              />
              <Route path="/my-plan" element={<span>My plan</span>} />
            </Routes>
          </Router>
        </IntlProvider>
      </AppServicesProvider>,
    );

    fireEvent.click(container.querySelector('.dp-new-plan-selection-stepper-back'));

    expect(container).toHaveTextContent('My plan');
  });
});
