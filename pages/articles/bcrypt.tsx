import { NextPage } from 'next';

import { Container } from '../../components/Container';
import Layout from '../../components/Layout';
import { Paragraph } from '../../components/Typo/Paragraph';
import { Title } from '../../components/Typo/Title';

const Page: NextPage = () => {
  return (
    <Layout>
      <Title center gradient>
        비밀번호 암호화
      </Title>

      <Container grid gridGap="16px">
        <Paragraph>
          멀티유저 서비스를 만드려면 로그인이 필요합니다. 이를 위해 사용자의
          비밀번호를 저장해야 합니다. 비밀번호는 민감한 정보인데, 어떻게
          저장해야할까요? 이거 안지키면, 감옥갑니다.
        </Paragraph>

        <Paragraph>
          멀티유저 서비스를 만드려면 로그인이 필요합니다. 이를 위해 사용자의
          비밀번호를 저장해야 합니다. 비밀번호는 민감한 정보인데, 어떻게
          저장해야할까요? 이거 안지키면, 감옥갑니다.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Page;
