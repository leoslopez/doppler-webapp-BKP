import styled from 'styled-components';

export const ImpressionsQuestion = styled.div`
  @media (max-width: 767px) {
    .dp-second-order-title {
      width: 100%;
    }
  }
`;

export const TooltipPanel = styled.span`
  display: inline-block;

  .onsite-tooltip-container {
    display: inline-block;
    font-size: 16px;
    margin-left: 6px;
    position: relative;
    top: -2px;
    vertical-align: middle;
  }
`;

export const SelectedOnSitePlanContainer = styled.div`
  @media (max-width: 767px) {
    .dp-boxgrey .dp-price {
      margin: 8px 0 12px;
      position: static;
      width: auto;
    }

    .dp-boxgrey .dp-price h2 {
      font-size: 20px;
      line-height: 26px;
      margin: 0;
    }
  }
`;
