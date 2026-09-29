import styled from 'styled-components';

const Text = styled.span`
  color: #fff !important;
  font-size: 8px !important;
`;

const Badge = styled.span`
  background: #33ad73;
  border-radius: 12px;
  color: #fff;
  flex: 0 0 auto;
  font-size: 10px;
  font-weight: 700;
  line-height: 1;
  padding: 4px 11px 4px;
  text-transform: uppercase;
  margin-left: 13px;
  margin-bottom: 16px;
  margin-top: 7px;
`;

const PromotionAddOnFree = styled.p`
  color: #33ad73;
  font-size: 14px !important;
  font-weight: 700;
  padding-left: 6px;
`;

const AddOnCard = styled.div`
  @media (max-width: 767px) {
    .dp-addons-wrapper {
      header {
        padding: 18px 18px 0;
      }

      .dp-content-addons {
        display: block;
        padding: 0 18px 18px;

        > div {
          width: 100%;
          max-width: 100%;
          padding: 0;
        }

        > div::before {
          display: none;
        }

        > div:first-child {
          border-bottom: 1px solid #eaeaea;
          margin-bottom: 16px;
          padding-bottom: 16px;
        }

        > div:not(:first-child) {
          margin-bottom: 16px;
        }

        > div:not(:first-child):last-child {
          margin-bottom: 0;
        }

        h2,
        .dp-legend-price,
        .dp-disclaimer {
          padding-left: 0;
        }
      }

      .dp-footer-addons {
        flex-direction: column;
        gap: 16px;
        padding: 18px;

        > a:not(.dp-more-information),
        > button {
          order: 1;
          width: 100%;
        }

        > a:not(.dp-more-information) .dp-button,
        > button.dp-button {
          width: 100%;
        }

        .dp-more-information {
          order: 2;
          text-align: center;
        }
      }
    }
  }
`;

export { AddOnCard, Text, Badge, PromotionAddOnFree };
