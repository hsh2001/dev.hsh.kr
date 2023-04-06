import { NextPage } from 'next';
import styled from 'styled-components';

import { Card } from '../components/Card';
import Layout from '../components/Layout';
import { Paragraph } from '../components/Typo/Paragraph';
import { SubTitle, Title } from '../components/Typo/Title';

const Cards = styled.div`
  display: grid;
  grid-gap: 16px;
`;

const Page: NextPage = () => {
  return (
    <Layout>
      <Title center gradient>
숨참고
<br />
        DEV
        <br />
        DIVE
      </Title>

      <Cards>
        <Card clickable>
          <SubTitle>React 메모이제이션</SubTitle>
          <Paragraph>
            스마트폰, PC, 심지어 닌텐도에서도 접속할 수 있는 우리의 웹 사이트.
            이러한 다양한 기기를 대응하기 위해, 우리는 우리의 사이트의 성능을
            더욱 끌어올려야 합니다. 이때 유용한 기술이 메모이제이션인데,
            여러분들은 메모이제이션을 잘 사용하고 계신가요? 정말... "잘"
            사용하고 계신가요?
          </Paragraph>
        </Card>

        <Card clickable>
          <SubTitle>비밀번호 암호화</SubTitle>
          <Paragraph>
            멀티유저 서비스를 만드려면 로그인이 필요합니다. 이를 위해 사용자의
            비밀번호를 저장해야 합니다. 비밀번호는 민감한 정보인데, 어떻게
            저장해야할까요? 이거 안지키면, 감옥갑니다.
          </Paragraph>
        </Card>
      </Cards>
    </Layout>
  );
};

export default Page;
