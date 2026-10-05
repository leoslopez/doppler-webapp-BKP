import styled from 'styled-components';

export const HeaderStyled = styled.div`
  width: 100%;

  @media (max-width: 767px) {
    .dp-title-plan h3 {
      margin-bottom: 4px;
    }

    .dp-title-plan > p {
      margin: 0;
    }

    .dp-buttons--plan {
      margin-top: 16px;
    }
  }
`;
