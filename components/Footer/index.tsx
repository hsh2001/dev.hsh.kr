import { Paragraph } from '../Typo/Paragraph';

import { FooterContainer } from './FooterContainer';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Paragraph center>
        <a href={'https://github.com/hsh2001/dev.hsh.kr'} target="_blank">
          문서를 직접 수정해보기
        </a>
      </Paragraph>
    </FooterContainer>
  );
};

export default Footer;
