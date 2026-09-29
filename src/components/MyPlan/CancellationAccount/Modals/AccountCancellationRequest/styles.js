import styled from 'styled-components';

export const RadiosContainer = styled.div`
  margin: 16px 0;
`;

export const CancellationRequestModal = styled.div`
  @media (max-width: 767px) {
    &&& .modal-content--medium {
      box-sizing: border-box;
      width: calc(100% - 32px) !important;
      max-width: none !important;
      min-width: 0 !important;
      margin: 16px auto !important;
      padding: 24px !important;
      top: 16px !important;
    }

    .field-group > .field-item,
    .dp-cancellation-reason-options .field-item--50 {
      float: none;
      width: 100%;
      padding-right: 0;
    }

    .dp-group-buttons,
    .buttons-container {
      flex-direction: column;
      gap: 12px;
    }

    .dp-group-buttons .dp-button {
      width: 100%;
      margin-right: 0;
    }

    .buttons-container .primary-green {
      order: 1;
    }

    .buttons-container .secondary-green {
      order: 2;
    }
  }
`;
