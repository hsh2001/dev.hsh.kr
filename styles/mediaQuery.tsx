import { css } from 'styled-components';

export const onlyMobile = (style: ReturnType<typeof css>) => css`
  @media only screen and (max-width: 600px) {
    ${style}
  }
`;
