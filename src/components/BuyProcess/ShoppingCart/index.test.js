import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AppServicesProvider } from '../../../services/pure-di';
import IntlProvider from '../../../i18n/DopplerIntlProvider.double-with-ids-as-values';
import { ShoppingCart } from '.';
import {
  BUY_CHAT_PLAN,
  BUY_MARKETING_PLAN,
  PaymentMethodType,
  PLAN_TYPE,
} from '../../../doppler-types';

describe('ShoppingCart', () => {
  it('should render Argentina transfer totals in pesos when billing country is lowercase', async () => {
    const getPlanBillingDetailsData = jest.fn().mockResolvedValue({
      success: true,
      value: {
        currentMonthTotal: 10,
        nextMonthTotal: 10,
        currencyRate: 1000,
        nextMonthDate: '2024-08-01T00:00:00',
        currencyDate: '2024-08-01T00:00:00',
      },
    });

    const forcedServices = {
      appSessionRef: {
        current: {
          userData: {
            user: {
              plan: {
                planSubscription: 1,
                planType: PLAN_TYPE.byContact,
                isFreeAccount: true,
              },
              locationCountry: 'ar',
              billingCountry: 'ar',
            },
          },
        },
      },
      dopplerAccountPlansApiClient: {
        getPlanBillingDetailsData,
      },
      dopplerBillingUserApiClient: {},
    };

    const renderCart = (selectedPaymentMethod) => (
      <BrowserRouter>
        <AppServicesProvider forcedServices={forcedServices}>
          <IntlProvider>
            <ShoppingCart
              discountConfig={{
                paymentFrequenciesList: [],
                selectedPaymentFrequency: {
                  id: 1,
                  numberMonths: 1,
                  applyPromo: false,
                },
                onSelectPaymentFrequency: jest.fn(),
                disabled: true,
                currentSubscriptionUser: 1,
              }}
              selectedMarketingPlan={{
                id: 1,
                type: PLAN_TYPE.byContact,
                fee: 10,
                subscriberLimit: 1500,
                subscribersQty: 500,
              }}
              canBuy={true}
              selectedPaymentMethod={selectedPaymentMethod}
              isArgentina={true}
              hidePromocode={true}
              buyType={BUY_MARKETING_PLAN}
              billingCountry="ar"
            />
          </IntlProvider>
        </AppServicesProvider>
      </BrowserRouter>
    );

    const { rerender } = render(renderCart(PaymentMethodType.transfer));

    await waitFor(() =>
      expect(getPlanBillingDetailsData).toHaveBeenCalledWith(
        1,
        'Marketing',
        1,
        '',
        PaymentMethodType.transfer,
      ),
    );

    rerender(renderCart(PaymentMethodType.transfer));
    await waitFor(() => expect(getPlanBillingDetailsData).toHaveBeenCalledTimes(1));

    const totalElement = document.querySelector('h3.dp-total-purchase');
    expect(totalElement).toHaveTextContent('$ 10,000.00**');
    expect(totalElement).not.toHaveTextContent('US$ 10.00*');
  });

  it('should show Argentina transfer clarifications for add-on purchases', async () => {
    const getAddOnPlanBillingDetailsData = jest.fn().mockResolvedValue({
      success: true,
      value: {
        currentMonthTotal: 10,
        currencyRate: 1000,
        currencyDate: '2024-08-01T00:00:00',
      },
    });

    const forcedServices = {
      appSessionRef: {
        current: {
          userData: {
            user: {
              plan: {
                planSubscription: 1,
                planType: PLAN_TYPE.byContact,
                isFreeAccount: true,
              },
            },
          },
        },
      },
      dopplerAccountPlansApiClient: {
        getAddOnPlanBillingDetailsData,
      },
      dopplerBillingUserApiClient: {},
    };

    render(
      <BrowserRouter>
        <AppServicesProvider forcedServices={forcedServices}>
          <IntlProvider>
            <ShoppingCart
              discountConfig={{
                paymentFrequenciesList: [],
                selectedPaymentFrequency: { id: 1, numberMonths: 1 },
                onSelectPaymentFrequency: jest.fn(),
                disabled: true,
              }}
              selectedAddOnPlan={{ planId: 1, fee: 10, quantity: 1000 }}
              selectedPaymentMethod={PaymentMethodType.transfer}
              buyType={BUY_CHAT_PLAN}
              billingCountry="ar"
            />
          </IntlProvider>
        </AppServicesProvider>
      </BrowserRouter>,
    );

    await waitFor(() => expect(getAddOnPlanBillingDetailsData).toHaveBeenCalled());

    expect(
      screen.getByText('buy_process.shopping_cart.final_price_including_taxes'),
    ).toBeInTheDocument();
    expect(screen.getByText('buy_process.shopping_cart.next_invoices_estimate')).toBeInTheDocument();
    expect(screen.queryByText('buy_process.shopping_cart.price_without_taxes')).not.toBeInTheDocument();
  });
});
