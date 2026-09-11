import styled from 'styled-components';
import HeaderSection from '../../shared/HeaderSection/HeaderSection';

export const CheckoutHeader = styled(HeaderSection)`
  @media (max-width: 767px) {
    padding: 16px 0 12px;

    h2.dp-first-order-title {
      font-size: 22px !important;
      line-height: 1.2;
      margin: 0 !important;
    }
  }
`;

export const CheckoutContainer = styled.div`
  .dp-checkout-buy-mobile-sticky {
    display: none;
  }

  @media (max-width: 1199px) {
    padding-bottom: 76px;

    .dp-checkout-buy-inline {
      display: none !important;
    }

    .dp-checkout-buy-mobile-sticky {
      background: #fff;
      border-top: 1px solid #e5e5e5;
      bottom: 0;
      box-sizing: border-box;
      display: block !important;
      left: 0;
      margin: 0 !important;
      padding: 12px 18px !important;
      position: fixed;
      right: 0;
      z-index: 60;
    }

    .dp-checkout-buy-mobile-sticky .dp-button {
      width: 100%;
    }
  }

  @media (max-width: 767px) {
    .dp-checkout-back-section {
      display: none;
    }

    .dp-checkout-back-button {
      display: none;
    }

    .dp-wrapper-payment-process,
    .dp-wrapper-payment-process .dp-form-payment-method,
    .dp-wrapper-payment-process .dp-form-fields,
    .dp-wrapper-payment-process .field-credit-card,
    .dp-wrapper-payment-process .field-credit-card .campos {
      min-width: 0;
    }

    .dp-wrapper-payment-process .dp-form-payment-method .dp-form-fields {
      box-sizing: border-box;
      padding-left: 16px;
      padding-right: 16px;
    }

    .dp-wrapper-payment-process .dp-accordion {
      box-sizing: border-box;
      padding-left: 0;
    }

    .dp-wrapper-payment-process .dp-number-item {
      display: none !important;
    }

    .dp-wrapper-payment-process .dp-accordion::before,
    .dp-wrapper-payment-process .dp-accordion::after,
    .dp-wrapper-payment-process .dp-accordion > li::before,
    .dp-wrapper-payment-process .dp-accordion > li::after {
      display: none !important;
    }

    .dp-wrapper-payment-process .dp-radio-input {
      display: flex;
      flex-wrap: wrap;
      gap: 2px 16px;
      margin: 4px 0 0 !important;
      overflow: visible;
      padding: 0;
    }

    .dp-wrapper-payment-process .dp-steps-payment-process > .dp-accordion-thumb,
    .dp-wrapper-payment-process .dp-form-payment-method legend {
      margin-bottom: 0 !important;
      padding-bottom: 0;
    }

    .dp-wrapper-payment-process .dp-steps-payment-process .dp-accordion-panel,
    .dp-wrapper-payment-process .dp-steps-payment-process .dp-accordion-content {
      padding-top: 8px !important;
    }

    .dp-wrapper-payment-process .dp-radio-input li,
    .dp-wrapper-payment-process .dp-radio-input .dp-volume-option {
      margin: 0 !important;
      min-height: 0;
      padding-bottom: 0;
      padding-top: 0;
      width: auto;
    }

    .dp-wrapper-payment-process .dp-radio-input label {
      white-space: nowrap;
    }

    .dp-wrapper-payment-process .dp-form-payment-method .field-item--70,
    .dp-wrapper-payment-process .dp-form-payment-method .field-item--30 {
      box-sizing: border-box;
      flex: 0 0 100% !important;
      max-width: 100% !important;
      width: 100% !important;
    }

    .dp-wrapper-payment-process .dp-form-payment-method .field-item--30 {
      padding-right: 12px !important;
    }

    .dp-wrapper-payment-process .dp-form-payment-method .field-item--70 select,
    .dp-wrapper-payment-process .dp-form-payment-method .field-item--30 select {
      box-sizing: border-box;
      max-width: 100%;
      width: 100%;
    }

    .dp-wrapper-payment-process .dp-form-payment-method .field-item--70 input,
    .dp-wrapper-payment-process .dp-form-payment-method .field-item--30 input {
      box-sizing: border-box;
      max-width: 100%;
      width: 100%;
    }

    .dp-wrapper-payment-process .dp-automatic-debit-name-cbu-fields {
      box-sizing: border-box;
      flex-direction: column;
      gap: 12px;
      padding-right: 12px;
      width: 100%;
    }

    .dp-wrapper-payment-process .dp-automatic-debit-name-cbu-fields .field-item--50 {
      box-sizing: border-box;
      flex: 0 0 100%;
      max-width: none;
      min-width: 0;
      padding-right: 0;
      width: 100%;
    }

    .dp-wrapper-payment-process .field-credit-card .dp-field-inputs {
      flex-wrap: wrap;
      gap: 10px;
      width: 100%;
    }

    .dp-wrapper-payment-process .field-credit-card,
    .dp-wrapper-payment-process .field-credit-card .campos,
    .dp-wrapper-payment-process .field-credit-card input,
    .dp-wrapper-payment-process .field-credit-card select {
      box-sizing: border-box;
      max-width: 100%;
      width: 100%;
    }

    .dp-wrapper-payment-process .field-credit-card {
      display: block;
    }

    .dp-wrapper-payment-process .field-credit-card .tarjeta {
      display: none;
    }

    .dp-wrapper-payment-process .field-credit-card .dp-field-inputs > .campo-izq {
      flex: 0 0 100% !important;
      min-width: 0;
    }

    .dp-wrapper-payment-process .field-credit-card .dp-field-inputs > .dp--expiry,
    .dp-wrapper-payment-process .field-credit-card .dp-field-inputs > .dp--cvv {
      box-sizing: border-box;
      min-width: 0;
      padding-right: 0;
      width: calc(50% - 5px);
    }

    .dp-wrapper-payment-process .dp-footer-button {
      box-sizing: border-box;
      padding: 16px;
    }

    .dp-wrapper-payment-process .dp-footer-button .dp-button {
      width: 100%;
    }

    .dp-wrapper-payment-process .dp-considerations,
    .dp-wrapper-payment-process .dp-considerations p {
      max-width: 100%;
      overflow-wrap: break-word;
      white-space: normal;
    }
  }
`;
