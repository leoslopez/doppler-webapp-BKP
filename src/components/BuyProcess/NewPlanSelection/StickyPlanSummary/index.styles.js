import styled from 'styled-components';
import { StickyFooterAction } from '../../StickyFooterAction';

export const StickyPlanSummaryContainer = styled(StickyFooterAction)`
  background: #f5f5f5;
  border-top: 1px solid #e5e5e5;
  display: block;
  height: auto !important;
  max-height: none !important;
  min-height: 0;
  overflow: visible !important;

  .dp-new-plan-selection-sticky-summary-content {
    align-items: center;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1250px;
    max-height: none !important;
    min-height: 0;
    overflow: visible !important;
    padding: 12px 18px;
  }

  .dp-new-plan-selection-sticky-summary-copy {
    min-width: 0;
  }

  .dp-new-plan-selection-sticky-summary-copy h1,
  .dp-new-plan-selection-sticky-summary-discount-text {
    margin: 0;
    padding-bottom: 0;
  }

  .dp-button {
    display: block !important;
    flex: 0 0 auto;
    min-width: 230px;
    position: static !important;
    visibility: visible !important;
  }

  @media (max-width: 991px) {
    .dp-new-plan-selection-sticky-summary-content {
      align-items: flex-start;
      display: block;
    }

    .dp-new-plan-selection-sticky-summary-title,
    .dp-new-plan-selection-sticky-summary-price {
      font-size: 20px;
    }

    .dp-new-plan-selection-sticky-summary-subtitle {
      font-size: 15px;
      margin-bottom: 10px;
    }

    .dp-new-plan-selection-sticky-summary-discount {
      display: block !important;
      font-size: 14px;
      margin-bottom: 10px;
      text-align: left;
    }

    .dp-button {
      min-width: 0;
      width: 100%;
    }
  }

  @media (max-width: 767px) {
    background: #f5f5f5 !important;
    height: var(--dp-buy-process-footer-height, 80px) !important;

    .dp-new-plan-selection-sticky-summary-content {
      align-items: center;
      box-sizing: border-box;
      display: flex;
      height: 100%;
      padding: 0 18px;
    }

    .dp-new-plan-selection-sticky-summary-copy,
    .dp-new-plan-selection-sticky-summary-discount {
      display: none !important;
    }

    .dp-new-plan-selection-sticky-summary-title,
    .dp-new-plan-selection-sticky-summary-price {
      font-size: 18px;
    }

    .dp-new-plan-selection-sticky-summary-price {
      display: inline;
      margin-left: 6px;
      white-space: nowrap;
    }

    .dp-new-plan-selection-sticky-summary-subtitle {
      font-size: 14px;
      line-height: 1.3;
      margin-bottom: 6px;
    }

    .dp-new-plan-selection-sticky-summary-discount {
      font-size: 13px;
      margin-bottom: 6px;
    }

    .dp-button {
      min-height: 34px;
      padding-bottom: 6px;
      padding-top: 6px;
    }
  }
`;
