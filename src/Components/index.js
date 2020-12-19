import styled, { css } from 'styled-components';

export const ButtonAdd = styled.button`
  color: white;
  background-color: ${(props) =>
    props.btnType === 'primary' ? 'blue' : 'gray'};

  &:hover {
    color: yellow;
    background-color: orange;
  }

  ${(props) =>
    props.btnType === 'primary' &&
    css`
      border: 4px solid lightgreen;
      font-size: 29px;

      &:hover {
        color: pink;
        background-color: cyan;
      }
    `};

  ${(props) =>
    props.btnType === 'secondary' &&
    css`
      border: 8px solid salmon;
      font-size: 34px;

      &:hover {
        color: lightsalmon;
        background-color: pink;
      }
    `}
`;
