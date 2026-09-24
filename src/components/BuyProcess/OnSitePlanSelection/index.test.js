import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { PLAN_TYPE } from '../../../doppler-types';
import {
  fakeAccountPlanDiscounts,
  fakePlanAmountDetails,
  fakePlan,
} from '../../../services/doppler-account-plans-api-client.double';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { OnSitePlansSelection } from '.';
import { AppServicesProvider } from '../../../services/pure-di';
import IntlProvider from '../../../i18n/DopplerIntlProvider.double-with-ids-as-values';
import '@testing-library/jest-dom/extend-expect';

const settleAsyncState = async () => {
  await act(async () => {
    await Promise.resolve();
  });
};

describe('OnSitePlansSelection component', () => {
  it('should render OnSitePlansSelection component', async () => {
    // Arrange
    const selectedPlan = 1;

    const forcedServices = {
      appSessionRef: {
        current: {
          userData: {
            user: {
              addOnPromotions: [{ idAddOnType: 3, idAddOnPlan: 1, discount: 10, quantity: 10000 }],
              plan: {
                idPlan: 3,
                planType: PLAN_TYPE.free,
              },
              onSite: {
                plan: {
                  idPlan: 3,
                  printQty: 500,
                  active: false,
                },
              },
            },
          },
        },
      },
      dopplerAccountPlansApiClient: {
        getPlanData: async (selectedPlan) => ({ success: true, value: fakePlan }),
        getDiscountsData: async () => ({ success: true, value: fakeAccountPlanDiscounts }),
      },
    };
    // Act
    render(
      <AppServicesProvider forcedServices={forcedServices}>
        <IntlProvider>
          <Router initialEntries={[`/buy-onsite-plans?buyType=4`]}>
            <Routes>
              <Route path="/buy-onsite-plans" element={<OnSitePlansSelection />} />
            </Routes>
          </Router>
        </IntlProvider>
      </AppServicesProvider>,
    );

    // Assert
    const loader = screen.getByTestId('wrapper-loading');
    await waitForElementToBeRemoved(loader);
    await settleAsyncState();
  });

  it('should update the shopping cart when the selected plan changes', async () => {
    // Arrange
    const firstPlan = { planId: 1, quantity: 50000, fee: 50, additional: 0.001, active: true };
    const secondPlan = { planId: 2, quantity: 100000, fee: 100, additional: 0.001, active: true };
    const getAddOnPlanBillingDetailsData = jest.fn(async () => ({
      success: true,
      value: fakePlanAmountDetails,
    }));
    const forcedServices = {
      appSessionRef: {
        current: {
          userData: {
            user: {
              addOnPromotions: [],
              plan: { idPlan: 3, planType: PLAN_TYPE.free, planSubscription: 1 },
              onSite: { plan: { quantity: 0 } },
            },
          },
        },
      },
      dopplerAccountPlansApiClient: {
        getPlanData: async () => ({ success: true, value: fakePlan }),
        getDiscountsData: async () => ({ success: true, value: fakeAccountPlanDiscounts }),
        getAddOnPlans: async () => ({ success: true, value: [firstPlan, secondPlan] }),
        getCustomAddOnPlans: async () => ({ success: true, value: [] }),
        getPlanBillingDetailsData: async () => ({ success: true, value: fakePlanAmountDetails }),
        getAddOnPlanBillingDetailsData,
      },
      dopplerBillingUserApiClient: {
        getPaymentMethodData: async () => ({ success: true, value: { paymentMethodName: 'CC' } }),
      },
    };

    render(
      <AppServicesProvider forcedServices={forcedServices}>
        <IntlProvider>
          <Router initialEntries={['/buy-onsite-plans?buyType=4']}>
            <Routes>
              <Route path="/buy-onsite-plans" element={<OnSitePlansSelection />} />
            </Routes>
          </Router>
        </IntlProvider>
      </AppServicesProvider>,
    );

    await waitForElementToBeRemoved(screen.getByTestId('wrapper-loading'));

    // Act
    const slider = screen.getByRole('slider');
    fireEvent.change(slider, { target: { value: 1 } });

    // Assert
    await waitFor(() =>
      expect(getAddOnPlanBillingDetailsData).toHaveBeenLastCalledWith(1, 4, 0, 'CC'),
    );

    // Act
    fireEvent.change(slider, { target: { value: 2 } });

    // Assert
    await waitFor(() =>
      expect(getAddOnPlanBillingDetailsData).toHaveBeenLastCalledWith(2, 4, 0, 'CC'),
    );
  });
});
