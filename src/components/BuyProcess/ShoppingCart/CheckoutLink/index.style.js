import styled from 'styled-components';

export const CheckoutLinkStyled = styled.a`
  width: 100%;
  font-weight: 400;

  &.disabled {
    pointer-events: none;
    opacity: 0.4;
  }
`;

export const CheckoutLinkContainer = styled.div`
  width: 100%;

  .dp-tooltip-container {
    width: 100%;
  }
`;
