import styled, { css } from 'styled-components';

import { onlyMobile } from '../../../styles/mediaQuery';

import { generateCenterOptionalCss } from './generateCenterOptionalCss';

const titleCss = css`
  font-size: 86px;
  font-weight: 800;

  ${onlyMobile(
    css`
      font-size: 40px;
    `,
  )}
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
  margin-top: 0.83em;
  margin-bottom: 0;

  ${onlyMobile(
    css`
      font-size: 24px;
    `,
  )}
`;
