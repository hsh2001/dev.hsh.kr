import { NextPage } from 'next';
import styled, { css } from 'styled-components';

import Layout from '../components/Layout';
import { HashtagText } from '../components/Typo/Hashtag';
import { ShadowImage } from '../components/Typo/Images/ShadowImage';
import { Paragraph } from '../components/Typo/Paragraph';
import { SubTitle } from '../components/Typo/Title';
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
      </IntroSection>

      <SubTitle center>👋 안녕하세요. 개발자 황승현입니다.</SubTitle>

      <TypoContainer>
        <Paragraph>
          <b>🤹 동료와 소통하길 좋아해요.</b>
          <br />
          <span>
            우리가 무엇을 해결해야 하고, 어떻게 해결해야 할지 동료들과 끊임없이
            소통하고 의견을 나누길 좋아합니다. 이 과정에서 업무를 더욱
            효율적으로 해결하거나 잘못된 부분을 바로 잡으면 큰 보람을 느낍니다.
            업무뿐만 아니라 일상적인 대화에서도 동료들과 가까워지기 위해
            대화하길 즐깁니다. 어떠한 직장에서는 제가 "분위기 메이커"로
            불렸답니다.
          </span>

          <br />
          <br />

          <b>🤺 한번 발견한 문제는 끈질기게 물고 늘어져요.</b>
          <br />
          <span>
            내 사전에 포기란 없다! 한번 마주한 문제는 해결하기 전까지는 잠에
            들지 못할 정도로 주어진 문제를 해결하고자 하는 열정이 있습니다.
            이러한 모습은 주변 동료에게도 긍정적인 영향을 미쳐 모두 힘낼 수 있는
            원동력이 되었습니다.
          </span>

          <br />
          <br />

          <b>
            🕵️ 스스로 문제를 발견하고, 해결법을 제시하고, 실행에 옮길 수 있어요.
          </b>
          <br />
          <span>
            제 업무는 PM이나 기획자등이 제시한 문제를 해결하는 것에서 그치지
            않았습니다. 새로운 문제를 발견하면 그 문제를 동료에게 공유하고
            해결법을 제시해서 실행에 옮기곤 했습니다.
          </span>
        </Paragraph>
      </TypoContainer>

      <SubTitle center>🛫 이런 곳에서 근무했어요.</SubTitle>

      <TypoContainer>
        <Paragraph>
          <b>총 경력 4년 4개월</b>
        </Paragraph>
      </TypoContainer>

      <TypoContainer>
        <SubTitle>Mathpang</SubTitle>
        <Paragraph>
          <b>
            2022년 5월 ~ 2024년 1월 (1년 8개월) / 서울, 한국 / 백엔드 개발자
          </b>
          <br />
          서울시 관악구에 위치한 수학 교육 서비스 Mathpang을 개발하고 서비스하는
          업체
        </Paragraph>

        <ul>
          <li>
            <a href="http://mathpang.com/" target="_blank">
              http://mathpang.com
            </a>
          </li>
        </ul>

        <SubTitle>에코앤컴퍼니 (Mark87)</SubTitle>
        <Paragraph>
          <b>2021년 4월 ~ 2022년 4월 (1년) / 서울, 한국 / 풀스택 개발자</b>
          <br />
          인플루언서 마케팅 플랫폼 에코블로그를 개발하고 서비스하는 서울시
          강서구에 위치한 마케팅 업체로, 추후 IT 사업 확장을 위해 자회사 법인
          Mark87을 설립하며 편입
        </Paragraph>

        <ul>
          <li>
            <a href="http://www.echoimc.com/" target="_blank">
              http://www.echoimc.com
            </a>
          </li>
          <li>
            <a href="https://www.mark87.com/ko/" target="_blank">
              https://www.mark87.com/ko
            </a>
          </li>
        </ul>

        <SubTitle>Cultural Resources LLC</SubTitle>

        <Paragraph>
          <b>
            2019년 7월 ~ 2021년 2월 (1년 8개월) / 캘리포니아, 미국 / 프리랜서
          </b>
          <br />
          미국 캘리포니아에 위치한 Cultural Atlas를 개발하고 서비스하는 업체
        </Paragraph>

        <ul>
          <li>
            <a href="https://spots.edu/" target="_blank">
              https://spots.edu
            </a>
          </li>
          <li>
            <a href="https://cultureatlas.app/" target="_blank">
              https://cultureatlas.app
            </a>
          </li>
        </ul>

        <Paragraph></Paragraph>
      </TypoContainer>

      <SubTitle center>👾 이런 프로젝트에 참여했어요.</SubTitle>

      <TypoContainer>
        <SubTitle>Mathpang</SubTitle>
        <ShadowImage src="/images/mathpang/main.png" alt="" />
        <HashtagContainer>
          <HashtagText>#NestJS</HashtagText>
          <HashtagText>#AWS</HashtagText>
          <HashtagText>#CDK</HashtagText>
          <HashtagText>#NextJS</HashtagText>
        </HashtagContainer>
        <Paragraph>
          <a href="https://mathpang.com" target="_blank">
            https://mathpang.com
          </a>
          <br />
          <br />
          <b>📝 프로젝트 소개</b>
          <br />
          수학 교육의 게이미피케이션 서비스입니다. 아이들은 수학은 싫어하지만
          게임은 좋아합니다. 이 둘을 섞어서 아이들이 수학을 즐겁게 학습한다면
          어떨까요? 이런 아이디어에서 출발한 서비스입니다. 수학을 게임으로
          만들어 아이들이 즐겁게 학습할 수 있도록 서비스를 제공합니다.
          <br />
          <br />
          <b>🛠️ 기여한 부분</b>
          <br />
        </Paragraph>
        <ul>
          <li>
            서비스의 게임적 요소인 "디저트 점령전"을 구현하며 게임 서버를 개발
          </li>
          <li>
            서비스의 게임적 요소인 "젤리 듀얼"을 구현하며 게임 서버를 개발
          </li>
          <li>사용자를 하나의 클랜으로 묶어 커뮤니티를 형성하는 기능을 구현</li>

          <li>유저간의 친구 추가 기능을 구현</li>

          <li>
            클랜 유저끼리 클랜을 성장 시킬 수 있는 게임적 요소인 "클랜 기술"을
            구현
          </li>
          <li>
            UnitTest 코드를 지속적으로 작성하고 CI를 구축하여 코드의 품질을 유지
          </li>

          <li>
            어드민 페이지를 구현하여 서비스의 운영을 도와주는 기능을 개발하고
            운영
          </li>
          <li>구글 플레이스토어에서 구독 멤버십 기능을 구현하고 수익화함.</li>
          <li>
            멀티유저 서비스에 필요한 실시간 채팅 서비스를 구현하며 게임
            사용자끼리 소통하고 하나의 커뮤니티를 형성
          </li>
        </ul>
        <Paragraph>
          <b>🥊 트러블슈팅</b>
          <br />
        </Paragraph>
        <ul>
          <li>
            <b>CRA에서 Next.js로 마이그레이션</b>
            <br />
            CRA(CreateReactApp)는 핫리로드가 느리고 빌드도 오래 걸렸습니다. 이를
            Next.js로 마이그레이션하여 빌드 시간을 단축하고 핫리로드를 빠르게 할
            수 있도록 개선하여 동료 개발자들의 개발 환경을 개선하였습니다.
          </li>
          <li>
            <b>앱 개발 TF팀 결성</b>
            <br />
            많은 어린 사용자들이 웹 사이트에 방문해서 로그인하는 것을 어려워하는
            문제를 발견했습니다. 이를 해결하기 위해 웹 서비스였던 Mathpang을
            앱으로 확장하기 위해 앱 개발 TF팀을 결성하였습니다. 이를 통해 앱
            마켓 진출 및 해외 시장 진출을 위한 기반을 마련하였습니다.
          </li>
          <li>
            <b>이미지를 업로드하는 기능에서 음란물을 차단</b>
            <br />
            사용자가 늘어나고 서비스의 규모가 성장함에 따라 음란물이 업로드되는
            경우가 발생했습니다. 이를 방지하기 위해 AWS Amazon Rekognition을
            사용하여 음란물을 차단하는 기능을 구현하였습니다.
          </li>
          <li>
            <b>RDS의 레플리케이션 전략을 구현</b>
            <br />
            사용자가 늘어나고 서비스의 규모가 성장함에 따라 RDS의 가용성을
            높이기 위해 RDS의 레플리케이션 전략을 구현하였습니다. 이를 통해 작은
            비용으로 약 1.5배 더 많은 사용자를 수용할 수 있도록 하였습니다.
          </li>
          <li>
            <b>Redis 쿼리 캐싱</b>
            <br />
            Apollo Studio 에 로깅되는 쿼리 중 일부 쿼리가 느리게 작동하던 문제를
            발견했습니다. 자주 사용되거나 실행시간이 오래 걸리는 쿼리를 Redis에
            캐싱하는 데코레이터를 구현하여 서비스의 응답속도를 높였습니다. 이를
            통해 p95 응답속도를 약 80% 줄일 수 있었습니다.
          </li>
          <li>
            <b>온프레미스 테스트 서버를 구축</b>
            <br />
            클라우드 서비스는 높은 안정성을 위해 사용되는데, 이는 비용이 많이
            들기 때문에 테스트 서버를 온프레미스로 구축하여 매달 AWS 비용을 약
            150만원 절감하였습니다.
          </li>
          <li>
            <b>GitHub 비용 절감</b>
            <br />
            GitHub 팀에 미리 지불한 금액을 초과하여 GitHub Action이 사용되며
            동료 개발자들이 불시에 CI/CD를 사용할 수 없던 문제가 발생했습니다.
            CI/CD 전략을 개선하며 GitHub Action을 Self-hosted Runner로 구성하여
            개발환경을 안정화하고, GitHub 비용을 매달 약 10만원 절감했습니다.
          </li>
          <li>
            <b>블루 그린 배포 전략 구현</b>
            <br />
            기존 배포 스크립트의 불안정성으로 인해 백엔드 서비스를 배포할 때마다
            서비스가 일시적으로 마비되던 문제가 있었습니다. 이를 블루 그린 배포
            전략을 채택하고 구현하는 것으로 해결하였습니다.
          </li>
        </ul>
        <SubTitle>Cultural Atlas</SubTitle>
        <ShadowImage src="/images/cri.png" alt="" />
        <HashtagContainer>
          <HashtagText>#웹_크롤링</HashtagText>
          <HashtagText>#데이터_처리</HashtagText>
          <HashtagText>#레거시_코드_리팩토링</HashtagText>
          <HashtagText>#Stripe_결제_연동</HashtagText>
        </HashtagContainer>
        <Paragraph>
          <a href="https://cultureatlas.app" target="_blank">
            https://cultureatlas.app
          </a>
          <br />
          <br />
          교육용으로 제작된 웹 어플리케이션입니다. 지구본 모형 위에 여러 정보를
          보여주는 UI를 제공합니다. UI의 기본 구현과 사용될 데이터의 크롤링 및
          전처리를 담당했습니다. Perl로 작성된 레거시 코드를 NodeJS 코드로
          리팩토링하여 유지보수에 용이하게 하였습니다. 이후 Stripe 와의 연동을
          구현하며 수익화를 유도했습니다.
        </Paragraph>
        <ul>
          <li>
            약 1년간 크롤러 및 전처리 프로그램을 개발하며 웹앱에 사용될 데이터를
            수집
          </li>
          <li>
            이후 UI 개발과 Stripe를 통한 결제 서비스 도입으로 수익화에 성공
          </li>
        </ul>
        <SubTitle>EchoBlog</SubTitle>
        <ShadowImage src="/images/echoblog.jpg" alt="" />
        <HashtagContainer>
          <HashtagText>#토스_페이먼츠_결제_연동</HashtagText>
          <HashtagText>#CS팀과의_협업</HashtagText>
        </HashtagContainer>
        <Paragraph>
          <a href="https://echoblog.net" target="_blank">
            https://echoblog.net
          </a>
          <br />
          <br />
          EchoBlog는 무료로 서비스되던 인플루언서 마케팅 플랫폼입니다. 플랫폼의
          수익화를 위해 토스 페이먼츠의 연동을 구현하며 수익화에 성공했습니다.
          CS팀과의 협업을 위해 관리자 페이지를 꾸준히 개선하고 운영하며 안정적인
          운영을 도왔습니다.
        </Paragraph>
        <ul>
          <li>
            무료 서비스였던 에코블로그에 토스 페이먼츠와의 연동으로 수익 모델의
            기능을 구현하여 수익화에 성공
          </li>
          <li>
            음원 NFT 서비스 MARS를 개발하며 NFT와 블록체인에 대한 지식 습득
          </li>
          <li>온프레미스 서버를 구축하여 테스트 서버 구성을 담당.</li>
        </ul>
        <SubTitle>MARS</SubTitle>
        <ShadowImage src="/images/nft.jpg" alt="" />
        <HashtagContainer>
          <HashtagText>#WEB3</HashtagText>
          <HashtagText>#NFT</HashtagText>
          <HashtagText>#IPFS</HashtagText>
          <HashtagText>#Solidity</HashtagText>
        </HashtagContainer>
        <Paragraph>
          <a href="https://mars.club/" target="_blank">
            https://mars.club (현재 서비스 종료)
          </a>
          <br />
          <br />
          음악을 NFT화하는 서비스입니다. Solidity를 사용하여 Smart Contract를
          작성하고 배포하였습니다. IPFS에 음원을 올리고 NodeJS로 NFT를
          민트했습니다. OpenSea에도 올리고 거래 수수료 정책을 이용하여 수익화를
          시도하였습니다.
        </Paragraph>
        <SubTitle>Gibbon Edu</SubTitle>
        <ShadowImage src="/images/gibbon.png" alt="" />
        <HashtagContainer>
          <HashtagText>#오픈소스</HashtagText>
          <HashtagText>#PHP</HashtagText>
        </HashtagContainer>
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
              #1811 (Merged, 강의계획서를 자동저장하는 기능의 추가.)
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

      <SubTitle center>🔧 이런 기술을 쓸 수 있어요.</SubTitle>

      <TypoContainer>
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
      </TypoContainer>

      <SubTitle center>📞 연락처</SubTitle>

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
