import styled from 'styled-components';
import HeaderSection from '../../../shared/HeaderSection/HeaderSection';

export const CheckoutSummaryHeader = styled(HeaderSection)`
  @media (max-width: 767px) {
    padding: 12px 0 0 !important;

    .dp-first-order-title {
      font-size: 24px;
      line-height: 32px;
      margin: 0 !important;
    }
  }
`;

export const CheckoutSummaryLayout = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 24px;
  padding-bottom: 48px;

  .checkout-summary-main {
    flex: 5 1 0;
    min-width: 0;
  }

  .checkout-summary-main .dp-content-message p {
    text-wrap: pretty;
  }

  .checkout-summary-addons {
    flex: 1 1 280px;
    margin-top: -46px;
    min-width: 0;
    overflow: hidden;
  }

  .checkout-summary-addons > div {
    height: 100%;
  }

  @media (max-width: 991px) {
    display: block;

    .checkout-summary-addons {
      margin-top: 0;
    }

    .checkout-summary-addons > div {
      height: auto;
    }
  }

  .checkout-summary-mobile-title {
    display: none;
  }

  @media (max-width: 767px) {
    padding-bottom: 24px;

    .checkout-summary-main .dp-wrap-message {
      align-items: flex-start;
      box-sizing: border-box;
      min-height: 100px;
      padding: 16px;
    }

    .checkout-summary-main .dp-message-icon {
      flex: 0 0 22px;
      height: 20px;
      margin-top: 28px;
      width: 22px;
    }

    .checkout-summary-main .dp-content-message {
      padding-left: 16px;
    }

    .checkout-summary-main .dp-content-full {
      align-items: flex-start;
      display: block;
      justify-content: initial;
    }

    .checkout-summary-main .dp-content-message p {
      font-size: 12px;
      line-height: 18px;
      margin: 0;
      padding-right: 0;
    }

    .checkout-summary-main .dp-content-message strong {
      display: block;
      font-weight: 600;
    }

    .checkout-summary-main .dp-content-message strong + br {
      display: none;
    }

    .checkout-summary-main .dp-message-link {
      align-self: flex-start !important;
      display: block !important;
      font-size: 10px;
      line-height: 16px;
      margin: 10px 0 0 !important;
      min-width: 0 !important;
      text-align: left !important;
      width: fit-content;
    }

    .checkout-summary-main .dp-tit-plan-purchased {
      font-size: 12px;
      line-height: 18px;
      margin-top: 16px;
    }

    .checkout-summary-desktop-title {
      display: none;
    }

    .checkout-summary-mobile-title {
      display: inline;
    }

    .checkout-summary-main .dp-purchase-summary-list {
      display: block;
      margin: 8px 0 18px;
      padding: 16px 18px;
    }

    .checkout-summary-main .dp-purchase-summary-list li {
      display: block;
      line-height: normal;
      padding: 0;
      width: 100%;
    }

    .checkout-summary-main .dp-purchase-summary-list li + li {
      margin-top: 14px;
    }

    .checkout-summary-main .dp-purchase-summary-list span {
      display: block;
      font-size: 11px;
      line-height: 16px;
    }

    .checkout-summary-main .dp-purchase-summary-list h3,
    .checkout-summary-main .dp-purchase-summary-list h4 {
      font-size: 16px;
      line-height: 20px;
      margin: 0;
    }
  }
`;
