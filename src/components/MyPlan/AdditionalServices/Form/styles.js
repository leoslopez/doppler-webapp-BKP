import styled from 'styled-components';

export const RadiosContainer = styled.div`
  margin: 30px 0;
`;

export const AdditionalServicesFormWrapper = styled.div`
  @media screen and (max-width: 767px) {
    .field-group .field-item--50 {
      width: 100%;
      padding-right: 0;
    }

    .dp-additional-services-form-volume-per-month {
      flex-wrap: wrap;

      li {
        width: 50%;
      }

      .dp-additional-services-form-volume-option {
        width: 100%;
        max-width: none;
        margin-right: 0;
      }
    }

    .dp-wrapper-additional-services-content-accept-and-buttons {
      align-items: stretch;
      flex-direction: column;
      gap: 12px;

      .dp-items-accept,
      .dp-action {
        width: 100%;
      }

      .dp-action .dp-button {
        flex: 1;
      }
    }
  }
`;
