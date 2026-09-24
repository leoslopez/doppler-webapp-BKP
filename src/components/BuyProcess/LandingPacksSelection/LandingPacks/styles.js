import styled from 'styled-components';
import { Form } from 'formik';

export const LandingPacksForm = styled(Form)`
  @media (max-width: 767px) {
    &.dp-packs fieldset {
      align-items: start;
      column-gap: 16px;
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      row-gap: 8px;
    }

    &.dp-packs .dp-pack-box {
      width: auto;
    }

    &.dp-packs .dp-pack-box:nth-child(1) {
      align-items: flex-start;
      grid-column: 1;
      grid-row: 1;
      justify-content: flex-start;
    }

    &.dp-packs .dp-pack-box:nth-child(2) {
      align-items: flex-end;
      grid-column: 2;
      grid-row: 1;
      text-align: right;

      h3,
      p {
        text-align: right;
        width: 168px;
      }
    }

    &.dp-packs .dp-pack-box:nth-child(3) {
      align-items: flex-end;
      grid-column: 2;
      grid-row: 2;
    }

    &.dp-packs .dp-pack-box .labelcontrol {
      display: grid;
      grid-template-columns: 32px minmax(0, 1fr) 32px;
      width: 136px;

      button {
        min-width: 32px;
        padding: 8px;
        width: 32px;
      }

      input[type='number'] {
        min-width: 0;
        width: 100%;
      }
    }
  }
`;
