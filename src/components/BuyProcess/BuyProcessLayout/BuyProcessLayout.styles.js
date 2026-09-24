import styled from 'styled-components';

export const BuyProcessLayoutContainer = styled.div`
  @media (max-width: 1199px) {
    &.dp-buy-process-trial {
      --dp-buy-process-menu-height: var(--dp-buy-process-trial-menu-height);
    }

    .dp-buy-process-stepper-wrapper {
      padding-top: 24px;
    }

    .dp-buy-process-stepper-wrapper > hr {
      margin: 0;
    }

    && .dp-buy-process-stepper-wrapper > .dp-container-steper.dp-new-plan-selection-stepper {
      background: #fff;
      left: 0;
      position: fixed;
      right: 0;
      top: 0 !important;
      transform: none !important;
      z-index: var(--dp-buy-process-stepper-z-index);
    }
  }
`;
