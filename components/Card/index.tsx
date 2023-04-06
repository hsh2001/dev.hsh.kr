import styled, { css } from 'styled-components';

export const Card = styled.div<{
  clickable?: boolean;
}>`
  ${({ clickable }) =>
    clickable
      ? css`
          cursor: pointer;
        `
      : ``}

  border: #ddd 1px solid;
  border-radius: 8px;
  padding: 16px;
  width: 80%;
  max-width: 500px;
  margin: auto;
`;
