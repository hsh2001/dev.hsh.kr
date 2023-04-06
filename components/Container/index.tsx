import styled, { css } from 'styled-components';

export const Container = styled.div<{
  grid?: boolean;
  gridGap?: string;
}>`
  width: 90%;
  margin: auto;
  max-width: 500px;

  ${({ grid }) =>
    grid
      ? css`
          display: grid;
        `
      : ''}

  ${({ gridGap }) =>
    gridGap
      ? css`
          grid-gap: ${gridGap};
        `
      : ''}
`;
