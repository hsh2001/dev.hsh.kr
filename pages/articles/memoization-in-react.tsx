import { NextPage } from 'next';

import { Container } from '../../components/Container';
import Layout from '../../components/Layout';
import { Paragraph } from '../../components/Typo/Paragraph';
import { SubTitle, Title } from '../../components/Typo/Title';

const Page: NextPage = () => {
  return (
    <Layout>
      <Title center gradient>
        React 메모이제이션
      </Title>

      <Container grid gridGap="16px">
        <Paragraph>
          스마트폰, PC, 심지어 닌텐도에서도 접속할 수 있는 우리의 웹 사이트.
          이러한 다양한 기기를 대응하기 위해, 우리는 우리의 사이트의 성능을 더욱
          끌어올려야 합니다. 이때 유용한 기술이 메모이제이션인데, 여러분들은
          메모이제이션을 잘 사용하고 계신가요? 정말... "잘" 사용하고 계신가요?
        </Paragraph>

        <SubTitle>메모이제이션이 무엇인가요?</SubTitle>

        <Paragraph>
          메모이제이션이란, 연산을 할 때 그 결과를 저장하고, 다음에 동일한
          연산을 시도하면 저장된 결과를 응답해서 중복되는 연산을 방지하여 속도를
          향상시키는 기술입니다. 아주 효과적이고 유용한 기술인 것은 사실이나,
          효율을 따지지 않고 모든 함수와 기능에 메모이제이션을 도입하는 것은
          피해야 합니다. 메모이제이션을 하는 것 또한 컴퓨터 자원을 소비합니다.
          메모이제이션 없이 연산을 하는 것보다 메모이제이션을 사용할 때 연산이
          더 빠르거나 컴퓨터 자원을 덜 소모한다면 사용하는 것이 좋습니다.
        </Paragraph>

        <SubTitle>리액트의 가상DOM</SubTitle>

        <Paragraph>
          리액트는 가상DOM을 기반으로 작동합니다. 이는 우리가 리액트 컴포넌트로
          만든 가상의 객체들에서 변화가 감지되면 리액트가 자동으로 실제DOM(Real
          DOM)에 이 변화를 적용시키는 방식입니다. 실제DOM을 자주 변경하는 것은
          컴퓨터 자원을 가상DOM을 변경하는 것보다 더 많이 소모합니다. 그래서
          리액트는 가상DOM이라는 개념을 사용하여 실제DOM의 변경을 최소화하여
          성능을 최적화하는 방식을 채택한 것입니다.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Page;
