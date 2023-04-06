import styled, { css } from 'styled-components';

import { generateCenterOptionalCss } from './generateCenterOptionalCss';

const titleCss = css`
  font-size: 86px;
  font-weight: 800;
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

export const SubTitle = styled.h2`
  ${generateCenterOptionalCss()};
  ${titleCss};

  font-size: 32px;
`;
