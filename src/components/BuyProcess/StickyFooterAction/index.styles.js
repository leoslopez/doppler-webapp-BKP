import styled from 'styled-components';

export const StickyFooterActionContainer = styled.section`
  bottom: 0;
  box-sizing: border-box;
  display: none;
  left: 0;
  margin: 0;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;

  @media (max-width: 1199px) {
    background: #fff;
    border-top: 1px solid #e5e5e5;
    display: block;
    height: var(--dp-buy-process-footer-height, 80px);
  }

  &.dp-checkout-buy-mobile-sticky {
    padding: 12px 18px;
  }

  &.dp-checkout-buy-mobile-sticky .dp-button,
  &.dp-checkout-buy-mobile-sticky .dp-tooltip-container {
    width: 100%;
  }

  @media (max-width: 767px) {
    align-items: center;
    display: flex;
  }
`;
