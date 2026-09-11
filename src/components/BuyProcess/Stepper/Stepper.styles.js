import styled from 'styled-components';

export const StepperContainer = styled.div`
  .dp-new-plan-selection-stepper-summary {
    display: none;
  }

  @media (max-width: 1199px) {
    &&&.hero-banner.dp-new-plan-selection-stepper {
      box-sizing: border-box;
      display: block;
      height: 92px !important;
      margin: 0;
      min-height: 0 !important;
      padding: 0 !important;

      .dp-steper {
        display: none !important;
      }

      .dp-new-plan-selection-stepper-summary {
        align-items: center;
        box-sizing: border-box;
        column-gap: 8px;
        display: grid;
        grid-template-columns: 16px minmax(0, 1fr) 68px;
        height: 100%;
        padding: 12px 20px !important;
      }

      .dp-new-plan-selection-stepper-summary span {
        position: static;
        top: auto;
      }

      .dp-new-plan-selection-stepper-back {
        align-self: start;
        background: transparent;
        border: 0;
        box-sizing: border-box;
        cursor: pointer;
        height: 24px;
        margin: 0;
        margin-top: 10px;
        min-width: 0 !important;
        padding: 0;
        position: relative;
        width: 16px;
      }

      .dp-new-plan-selection-stepper-back::before {
        border-bottom: 2px solid #666;
        border-left: 2px solid #666;
        content: '';
        height: 9px;
        left: 3px;
        position: absolute;
        top: 7px;
        transform: rotate(45deg);
        width: 9px;
      }

      .dp-new-plan-selection-stepper-back:focus-visible {
        outline: 2px solid #e58900;
        outline-offset: 4px;
      }

      .dp-new-plan-selection-stepper-copy {
        display: flex;
        flex-direction: column;
        gap: 10px;
        min-width: 0;
      }

      .dp-new-plan-selection-stepper-current {
        color: #333;
        font-size: 16px;
        font-weight: 700;
        line-height: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: left !important;
        text-transform: uppercase;
        white-space: nowrap;
      }

      .dp-new-plan-selection-stepper-next {
        color: #999;
        font-size: 14px;
        line-height: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: left !important;
        white-space: nowrap;
      }

      .dp-new-plan-selection-stepper-progress {
        align-items: center;
        background: conic-gradient(#33ad73 var(--stepper-progress), #d8d8d8 0);
        border-radius: 50%;
        display: inline-flex;
        height: 68px;
        justify-content: center;
        margin: 0;
        position: relative !important;
        text-align: center !important;
        top: auto !important;
        width: 68px;
      }

      .dp-new-plan-selection-stepper-progress > span {
        align-items: center;
        background: #fff;
        border-radius: 50%;
        color: #333;
        display: inline-flex;
        font-size: 13px;
        font-weight: 700;
        height: 58px;
        justify-content: center;
        position: static !important;
        text-align: center !important;
        top: auto !important;
        white-space: nowrap;
        width: 58px;
      }
    }
  }
`;
