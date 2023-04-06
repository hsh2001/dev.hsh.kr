import styled from 'styled-components';

import { generateCenterOptionalCss } from '../Title/generateCenterOptionalCss';

export const Paragraph = styled.p<{
  center?: boolean;
}>`
  ${generateCenterOptionalCss()}
`;
