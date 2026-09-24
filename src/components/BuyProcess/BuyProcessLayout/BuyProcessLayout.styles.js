import styled from 'styled-components';

export const BuyProcessLayoutContainer = styled.div`
  .dp-add-on-selection .dp-first-order-title,
  .dp-add-on-selection .dp-second-order-title,
  .dp-add-on-selection h6 {
    text-wrap: pretty;
  }

  .hero-banner.dp-add-on-selection {
    padding-top: 24px;
  }

  .dp-add-on-selection .dp-new-plan-selection-back {
    margin-bottom: 8px;
  }

  .dp-add-on-selection .dp-new-plan-selection-back .dp-button.ctaTertiary {
    align-items: center;
    background: transparent;
    border: 0;
    color: #33ad73;
    display: inline-flex;
    font-size: 13px;
    gap: 0;
    min-height: auto;
    padding: 0;
    text-decoration: none;
  }

  .dp-add-on-selection .dp-new-plan-selection-back .dp-button.ctaTertiary::before {
    content: '<';
    display: inline-block;
    margin-right: 6px;
  }

  .dp-add-on-selection
    .dp-new-plan-selection-back
    .dp-button.ctaTertiary
    .dp-new-plan-selection-back-text {
    text-decoration: underline;
    text-transform: uppercase;
  }

  .dp-add-on-selection .dp-new-plan-selection-back .dp-button.ctaTertiary:hover {
    color: #008046;
  }

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
