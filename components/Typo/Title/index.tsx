import styled, { css } from 'styled-components';

import { generateCenterOptionalCss } from './generateCenterOptionalCss';

const titleCss = css`
  font-size: 42px;
  font-weight: 800;

  ${({ center }: { center?: boolean }) => (center ? 'margin-top: 80px' : '')};
`;

export const Title = styled.h1<{
  center?: boolean;
  gradient?: boolean;
}>`
  ${generateCenterOptionalCss()};
  ${titleCss};

  ${({ gradient }) =>
    gradient
      ? css`
          background: linear-gradient(to right, #f7b733, #fc4a1a);
          color: transparent;
          -webkit-background-clip: text;
        `
      : ''}
`;

export const SubTitle = styled.h2<{
  coloredBackground?: boolean;
  center?: boolean;
}>`
  ${generateCenterOptionalCss()};
  ${titleCss};

  ${({ coloredBackground }) =>
    coloredBackground
      ? css`
          background-color: #ffffeb;
          padding: 8px;
        `
      : ``}

  font-size: 32px;
`;
