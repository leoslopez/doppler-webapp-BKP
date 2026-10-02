import styled from 'styled-components';

export const ResponsiveFields = styled.div`
  @media (max-width: 767px) {
    .field-item--50 {
      width: 100% !important;
      padding-right: 0 !important;
    }

    .field-item--50.dp-p-r .dropdown-arrow {
      right: 18px !important;
    }

    &.contact-information-fields > .field-group {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    &.contact-information-fields > .field-group > .field-item,
    &.contact-information-fields > .field-group > .field-item > .field-group {
      display: contents;
    }

    &.contact-information-fields .field-item {
      box-sizing: border-box;
      min-width: 0;
      padding-right: 6px !important;
      width: auto !important;
    }

    &.contact-information-fields .contact-field-full {
      grid-column: 1 / -1;
      padding-right: 0 !important;
    }

    &.contact-information-fields .contact-field-firstname {
      order: 1;
    }

    &.contact-information-fields .contact-field-lastname {
      order: 2;
    }

    &.contact-information-fields .contact-field-address {
      order: 3;
    }

    &.contact-information-fields .contact-field-city {
      order: 5;
      padding-left: 6px;
      padding-right: 0 !important;
    }

    &.contact-information-fields .contact-field-province {
      order: 6;
    }

    &.contact-information-fields .contact-field-country {
      order: 7;
      padding-left: 6px;
      padding-right: 0 !important;
    }

    &.contact-information-fields .contact-field-zip-code {
      order: 4;
    }

    &.contact-information-fields .contact-field-company {
      order: 9;
    }

    &.contact-information-fields .contact-field-industry {
      order: 10;
      padding-left: 6px;
      padding-right: 0 !important;
    }

    &.contact-information-fields .contact-field-phone {
      order: 8;
    }

    &.contact-information-fields .contact-field-security-question {
      order: 11;
    }

    &.contact-information-fields .contact-field-security-response {
      order: 12;
    }

    &.contact-information-fields .field-item .dropdown-arrow {
      right: 12px !important;
    }

    &.billing-information-fields > .field-group {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    &.billing-information-fields > .field-group > .billing-field-group,
    &.billing-information-fields > .field-group > .billing-field-group > .field-group {
      display: contents;
    }

    &.billing-information-fields .field-item {
      box-sizing: border-box;
      min-width: 0;
      padding-right: 6px !important;
      width: auto !important;
    }

    &.billing-information-fields .billing-field-full,
    &.billing-information-fields .billing-field-checkbox,
    &.billing-information-fields .billing-field-invoice-recipients {
      grid-column: 1 / -1;
      padding-right: 0 !important;
    }

    &.billing-information-fields .billing-field-checkbox {
      order: 1;
    }

    &.billing-information-fields .billing-field-firstname {
      order: 2;
    }

    &.billing-information-fields .billing-field-lastname {
      order: 3;
    }

    &.billing-information-fields .billing-field-address {
      order: 4;
    }

    &.billing-information-fields .billing-field-zip-code {
      order: 5;
    }

    &.billing-information-fields .billing-field-city {
      order: 6;
      padding-left: 6px;
      padding-right: 0 !important;
    }

    &.billing-information-fields .billing-field-province {
      order: 7;
    }

    &.billing-information-fields .billing-field-country {
      order: 8;
      padding-left: 6px;
      padding-right: 0 !important;
    }

    &.billing-information-fields .billing-field-phone {
      order: 9;
    }

    &.billing-information-fields .billing-field-invoice-recipients {
      order: 10;
    }

    &.billing-information-fields .field-item .dropdown-arrow {
      right: 12px !important;
    }
  }
`;
