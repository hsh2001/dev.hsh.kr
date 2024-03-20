import { NextPage } from 'next';
import styled, { css } from 'styled-components';

import Layout from '../components/Layout';
import { HashtagText } from '../components/Typo/Hashtag';
import { ShadowImage } from '../components/Typo/Images/ShadowImage';
import { Paragraph } from '../components/Typo/Paragraph';
import { SubTitle, Title } from '../components/Typo/Title';
import { TypoContainer } from '../components/Typo/TypoContainer';

const HashtagContainer = styled.div<{
  center?: boolean;
}>`
  margin: auto;
  line-break: anywhere;

  ${({ center }) =>
    center
      ? css`
          text-align: center;
        `
      : ''}

  > ${HashtagText} {
    margin-right: 8px;
    word-break: keep-all;
    display: inline-block;
  }
`;

const IntroSection = styled.div`
  > .myPic {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: auto;
    display: block !important;
    margin-top: 40px;
  }
`;

const Page: NextPage = () => {
  return (
    <Layout>
      <IntroSection>
        <img
          className="myPic"
          src="/images/me.jpg"
          alt=""
          style={{
            display: 'none',
          }}
        />

        <Title center>황승현</Title>

        <TypoContainer>
          <HashtagContainer center>
            <HashtagText>#백엔드 개발자</HashtagText>
            <HashtagText>#풀스택 개발자</HashtagText>
            <HashtagText>#인프라 엔지니어</HashtagText>
            <HashtagText>#DEVOPS 엔지니어</HashtagText>
            <HashtagText>#CI/CD 엔지니어</HashtagText>
          </HashtagContainer>
        </TypoContainer>

        <Paragraph center>무엇이든 해내는 실행력 좋은 개발자.</Paragraph>
      </IntroSection>

      <SubTitle center coloredBackground>
        경력
      </SubTitle>

      <TypoContainer>
        <Paragraph>
          <b>총 경력 4년 4개월</b>
        </Paragraph>
      </TypoContainer>

      <TypoContainer>
        <SubTitle>Cultural Resources LLC</SubTitle>
        <Paragraph>
          <b>
            2019년 7월 ~ 2021년 2월 (1년 8개월) / 캘리포니아, 미국 / 프리랜서
          </b>
        </Paragraph>

        <ul>
          <li>
            미국 캘리포니아에 위치한 Cultural Atlas를 개발하고 서비스하는 업체
          </li>

          <li>
            약 1년간 크롤러 및 전처리 프로그램을 개발하며 웹앱에 사용될 데이터를
            수집
          </li>
          <li>
            이후 UI 개발과 Stripe를 통한 결제 서비스 도입으로 수익화에 성공
          </li>
        </ul>

        <SubTitle>에코앤컴퍼니 (Mark87)</SubTitle>
        <Paragraph>
          <b>2021년 4월 ~ 2022년 4월 (1년) / 서울, 한국 / 풀스택 개발자</b>
        </Paragraph>
        <ul>
          <li>
            인플루언서 마케팅 플랫폼 에코블로그를 개발하고 서비스하는 서울시
            강서구에 위치한 마케팅 업체로, 추후 IT 사업 확장을 위해 자회사 법인
            Mark87을 설립하며 편입
          </li>
          <li>
            무료 서비스였던 에코블로그에 토스 페이먼츠와의 연동으로 수익 모델의
            기능을 구현하여 수익화에 성공
          </li>
          <li>
            음원 NFT 서비스 MARS를 개발하며 NFT와 블록체인에 대한 지식 습득
          </li>
          <li>온프레미스 서버를 구축하여 테스트 서버 구성을 담당.</li>
        </ul>

        <SubTitle>Mathpang</SubTitle>
        <Paragraph>
          <b>
            2022년 5월 ~ 2024년 1월 (1년 8개월) / 서울, 한국 / 백엔드 개발자
          </b>
        </Paragraph>
        <ul>
          <li>
            서울시 관악구에 위치한 수학 교육 서비스 Mathpang을 개발하고
            서비스하는 업체
          </li>

          <li>
            학부모를 위한 독립된 서비스를 기존 CRA에서 Next.js로 마이그레이션
          </li>

          <li>
            서비스의 게임적 요소인 "디저트 점령전"을 구현하며 게임 서버를 개발
          </li>

          <li>
            서비스의 게임적 요소인 "젤리 듀얼"을 구현하며 게임 서버를 개발
          </li>

          <li>사용자를 하나의 클랜으로 묶어 커뮤니티를 형성하는 기능을 구현</li>

          <li>
            이미지를 업로드하는 기능에서 음란물을 차단하는 기능을 AWS Amazon
            Rekognition 을 사용하여 구현
          </li>

          <li>유저간의 친구 추가 기능을 구현</li>

          <li>
            자주 사용되거나 실행시간이 오래 걸리는 쿼리를 Redis에 캐싱하는
            데코레이터를 구현하여 서비스의 응답속도를 높임
          </li>

          <li>
            클랜 유저끼리 클랜을 성장 시킬 수 있는 게임적 요소인 "클랜 기술"을
            구현
          </li>

          <li>
            UnitTest 코드를 지속적으로 작성하고 CI를 구축하여 코드의 품질을 유지
          </li>

          <li>
            온프레미스 서버를 구축하여 테스트 서버 구성을 담당하여 매달 AWS
            비용을 약 150만원 절감.
          </li>

          <li>
            CI/CD에 사용되는 GitHub Action을 사내 컴퓨터에서 Self-hosted
            Runner로 구성하여 개발환경을 안정화하고, GitHub 비용을 매달 약
            10만원 절감.
          </li>

          <li>
            어드민 페이지를 구현하여 서비스의 운영을 도와주는 기능을 개발하고
            운영
          </li>

          <li>RDS의 레플리케이션 전략을 구현하여 서비스의 가용성을 높임.</li>

          <li>
            기존 배포 스크립트의 불안정성으로 인해 백엔드 서비스를 배포할 때마다
            서비스가 일시적으로 마비되던 문제가 있었는데, 이를 블루 그린 배포
            전략을 채택하고 구현하는 것으로 해결
          </li>

          <li>구글 플레이스토어에서 구독 멤버십 기능을 구현하고 수익화함.</li>

          <li>
            멀티유저 서비스에 필요한 실시간 채팅 서비스를 구현하며 게임
            사용자끼리 소통하고 하나의 커뮤니티를 형성
          </li>
        </ul>
        <Paragraph></Paragraph>
      </TypoContainer>

      <SubTitle center coloredBackground>
        기술 스택
      </SubTitle>

      <TypoContainer>
        <SubTitle>ReactJS 및 NextJS</SubTitle>
        <HashtagContainer>
          <HashtagText>#SSR</HashtagText>
          <HashtagText>#CSR</HashtagText>
          <HashtagText>#SSG</HashtagText>
          <HashtagText>#FunctionComponent</HashtagText>
          <HashtagText>#HOC</HashtagText>
        </HashtagContainer>
        <Paragraph>
          함수형 컴포넌트와 HOC 패턴등을 적극 활용하여 재활용성 높은 웹 UI
          개발을 합니다. NextJS 로 Server-side 렌더링을 사용해 사용자에게 더욱
          빠르게 컨텐츠를 전달할 수 있도록 개선할 수 있습니다.
        </Paragraph>
        <SubTitle>NestJS</SubTitle>
        <HashtagContainer>
          <HashtagText>#의존성_주입</HashtagText>
          <HashtagText>#TypeORM</HashtagText>
          <HashtagText>#클래스의_책임_분리</HashtagText>
          <HashtagText>#GraphQL</HashtagText>
        </HashtagContainer>
        <Paragraph>
          Dependency Injection 의 개념을 이해하고 활용하여 웹 서버
          애플리케이션을 구축합니다. MySQL, Redis 와 같은 DB 서비스를 연동하여
          다양한 서비스를 제작할 수 있습니다. TypeORM 과 연동하여 더욱 직관성
          높은 쿼리을 사용할 수 있습니다. 데이터 읽기와 쓰기를 Repository 라는
          클래스에 구현하고, 이를 활용하고 조합하여 결과를 도출하는 메소드의
          집합을 Service에 구현합니다. 또한 사용자의 요청에 응답하여 응답값을
          제작하기 위해 Controller 또는 Resolver(GraphQL)을 구현합니다. 이렇게
          각 클래스의 책임을 분산하여 재활용성 높고 읽기 쉬운 코드를 작성할 수
          있습니다.
        </Paragraph>
        <SubTitle>MySQL</SubTitle>
        <HashtagContainer>
          <HashtagText>#트랜잭션</HashtagText>
          <HashtagText>#인덱싱</HashtagText>
          <HashtagText>#구조화</HashtagText>
        </HashtagContainer>
        <Paragraph>
          트랜잭션을 활용하여, 동시 성공 또는 동시 실패가 보장되는 쿼리를 작성할
          수 있습니다. 적절한 인덱스 부여로 데이터의 읽기 시간을 단축할 수
          있습니다. 관계형 데이터의 테이블화를 하여 사용성 높게 저장하는 전략을
          구상할 수 있습니다.
        </Paragraph>
        <SubTitle>Redis</SubTitle>
        <HashtagContainer>
          <HashtagText>#캐싱</HashtagText>
          <HashtagText>#PUB/SUB</HashtagText>
        </HashtagContainer>
        <Paragraph>
          빠른 읽기 쓰기 성능을 활용하여 쿼리 또는 메소드의 결과값을 캐싱하는
          것으로 웹 애플리케이션의 응답 속도를 획기적으로 줄일 수 있습니다.
        </Paragraph>
        <SubTitle>CI/CD</SubTitle>
        <HashtagContainer>
          <HashtagText>#자동화</HashtagText>
          <HashtagText>#개발_경혐</HashtagText>
        </HashtagContainer>
        <Paragraph>
          GitHub Actions와 AWS Pipelines을 사용하며 DEVOPS 설계하고 구현할 수
          있습니다. 프론트엔드 서비스 및 백엔드 서비스의 배포 자동화를 구현할 수
          있습니다. 또한 코드의 빌드 성공 여부, 린트 성공 여부, 유닛 테스트 성공
          여부 등 코드의 퀄리티를 결정하는 여러 스크립트를 매 커밋마다 자동으로
          실행하게 하여 코드의 품질을 항상 높게 관리할 수 있습니다.
        </Paragraph>
        <SubTitle>CloudWatch 및 Sentry 등을 활용한 시스템 모니터링</SubTitle>
        <HashtagContainer>
          <HashtagText>#CloudWatch</HashtagText>
          <HashtagText>#Sentry</HashtagText>
          <HashtagText>#서비스_모니터링</HashtagText>
          <HashtagText>#긴급_상황_대응</HashtagText>
        </HashtagContainer>
        <Paragraph>
          CloudWatch와 Sentry 등의 로그 수집 서비스를 사용하여 서비스를 감시하고
          긴급한 서비스의 결함을 빠르게 찾아낼 수 있습니다.
        </Paragraph>
        <SubTitle>AWS를 이용한 인프라 설계</SubTitle>
        <HashtagContainer>
          <HashtagText>#EC2</HashtagText>
          <HashtagText>#AutoScaling</HashtagText>
          <HashtagText>#RDS</HashtagText>
          <HashtagText>#CloudFront</HashtagText>
          <HashtagText>#CloudFormation</HashtagText>
          <HashtagText>#ElastiCache</HashtagText>
        </HashtagContainer>
        <Paragraph>
          CDK를 활용하여 CloudFormation Stack 을 작성하고 이에 따라 인프라
          구조를 생성하고 유지보수할 수 있습니다. EC2 인스턴스를 AutoScaling과
          연동하여 예상치 못하게 늘어나는 사용자의 증가를 대응할 수 있습니다.
        </Paragraph>
        <SubTitle>WebSocket을 사용한 실시간 게임 개발</SubTitle>
        <HashtagContainer>
          <HashtagText>#socket.io</HashtagText>
        </HashtagContainer>
        <Paragraph>
          소켓 통신을 활용하여 실시간 소통 게임 또는 채팅 서비스를 구현할 수
          있습니다.
        </Paragraph>
        <SubTitle>웹 크롤링 및 데이터 전처리</SubTitle>
        <HashtagContainer>
          <HashtagText>#cheerio</HashtagText>
          <HashtagText>#axios</HashtagText>
        </HashtagContainer>
        <Paragraph>
          웹 페이지를 읽고 해석하여 필요한 정보를 얻어내는 웹 크롤러를 구현할 수
          있습니다. 이렇게 모은 데이터를 가공하여 사용성 좋도록 전처리할 수
          있습니다.
        </Paragraph>
        <SubTitle>WEB3 기술을 응용한 NFT 발행</SubTitle>
        <HashtagContainer>
          <HashtagText>#eth</HashtagText>
          <HashtagText>#NFT</HashtagText>
        </HashtagContainer>
        <Paragraph>
          Solidity 를 사용하여 Smart Contract를 작성하고 배포할 수 있습니다.
          이렇게 작성된 계약으로 NFT를 민팅하고 OpenSea와 같은 플랫폼에서 거래할
          수 있습니다. 이 거래를 통해 거래 수수료를 책정해 수익화할 수 있습니다.
        </Paragraph>
      </TypoContainer>

      <SubTitle center coloredBackground>
        참여 프로젝트
      </SubTitle>

      <TypoContainer>
        <SubTitle>Cultural Atlas</SubTitle>
        <ShadowImage src="/images/cri.png" alt="" />
        <HashtagContainer>
          <HashtagText>#웹_크롤링</HashtagText>
          <HashtagText>#데이터_처리</HashtagText>
          <HashtagText>#레거시_코드_리팩토링</HashtagText>
          <HashtagText>#Stripe_결제_연동</HashtagText>
        </HashtagContainer>
        <Paragraph>
          교육용으로 제작된 웹 어플리케이션입니다. 지구본 모형 위에 여러 정보를
          보여주는 UI를 제공합니다. UI의 기본 구현과 사용될 데이터의 크롤링 및
          전처리를 담당했습니다. Perl로 작성된 레거시 코드를 NodeJS 코드로
          리팩토링하여 유지보수에 용이하게 하였습니다. 이후 Stripe 와의 연동을
          구현하며 수익화를 유도했습니다.
          <br />
          <br />
          <a href="https://cultureatlas.app" target="_blank">
            https://cultureatlas.app
          </a>
        </Paragraph>
        <SubTitle>EchoBlog</SubTitle>
        <ShadowImage src="/images/echoblog.jpg" alt="" />
        <HashtagContainer>
          <HashtagText>#토스_페이먼츠_결제_연동</HashtagText>
          <HashtagText>#CS팀과의_협업</HashtagText>
        </HashtagContainer>
        <Paragraph>
          EchoBlog는 무료로 서비스되던 인플루언서 마케팅 플랫폼입니다. 플랫폼의
          수익화를 위해 토스 페이먼츠의 연동을 구현하며 수익화에 성공했습니다.
          CS팀과의 협업을 위해 관리자 페이지를 꾸준히 개선하고 운영하며 안정적인
          운영을 도왔습니다.
          <br />
          <br />
          <a href="https://echoblog.net" target="_blank">
            https://echoblog.net
          </a>
        </Paragraph>
        <SubTitle>MARS</SubTitle>
        <ShadowImage src="/images/nft.jpg" alt="" />
        <HashtagContainer>
          <HashtagText>#WEB3</HashtagText>
          <HashtagText>#NFT</HashtagText>
          <HashtagText>#IPFS</HashtagText>
          <HashtagText>#Solidity</HashtagText>
        </HashtagContainer>
        <Paragraph>
          음악을 NFT화하는 서비스입니다. Solidity를 사용하여 Smart Contract를
          작성하고 배포하였습니다. IPFS에 음원을 올리고 NodeJS로 NFT를
          민트했습니다. OpenSea에도 올리고 거래 수수료 정책을 이용하여 수익화를
          시도하였습니다.
          <br />
          <br />
          <a href="https://mars.club/" target="_blank">
            https://mars.club (현재 서비스 종료)
          </a>
        </Paragraph>
        <SubTitle>Mathpang</SubTitle>
        <ShadowImage src="/images/mathpang/main.png" alt="" />
        <Paragraph>
          수학 교육의 게이미피케이션 서비스입니다. NestJS로 작성된 서버를
          작성하고 AWS 인프라를 유지보수하였습니다.
          <br />
          <br />
          <a href="https://mathpang.com" target="_blank">
            https://mathpang.com
          </a>
        </Paragraph>
        <SubTitle>Gibbon Edu</SubTitle>
        <ShadowImage src="/images/gibbon.png" alt="" />
        <Paragraph>
          Gibbon Edu는 학교의 학사 관리를 위한 오픈소스 소프트웨어입니다. PHP로
          작성된 소프트웨어를 개선하여 v27을 배포하는 데 기여했습니다.
        </Paragraph>
        <br />
        작성한 PR:
        <ul>
          <li>
            <a
              href="https://github.com/GibbonEdu/core/pull/1811"
              target="_blank"
            >
              #1811 (Open, 강의계획서를 자동저장하는 기능의 추가.)
            </a>
          </li>
        </ul>
        <Paragraph>
          <br />
          <a href="https://gibbonedu.org" target="_blank">
            https://gibbonedu.org
          </a>
          <br />
          <a href="https://github.com/GibbonEdu/core" target="_blank">
            https://github.com/GibbonEdu/core
          </a>
        </Paragraph>
      </TypoContainer>

      <SubTitle center coloredBackground>
        연락처
      </SubTitle>

      <TypoContainer>
        <Paragraph>Phone: 010-6379-0084</Paragraph>
        <Paragraph>Email: tmdgus008447@gmail.com</Paragraph>
      </TypoContainer>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Layout>
  );
};

export default Page;
