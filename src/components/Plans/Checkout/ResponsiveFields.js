import styled from 'styled-components';

export const ResponsiveFields = styled.div`
  @media (max-width: 767px) {
    .field-item--50 {
      width: 100% !important;
      padding-right: 0 !important;
    }

    .field-item--50.dp-p-r .dropdown-arrow {
      right: 18px !important;
    }
  }
`;
