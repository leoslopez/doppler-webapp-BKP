import styled from 'styled-components';

export const TooltipPanel = styled.div`
  .onsite-tooltip-container {
    font-size: 16px;
    margin-top: 8px;
    margin-left: 6px;
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
