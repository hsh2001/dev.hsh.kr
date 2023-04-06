import { css } from 'styled-components';

export const generateCenterOptionalCss = () => css`
  ${({ center }: { center?: boolean }) => (center ? 'text-align: center' : '')};
`;
