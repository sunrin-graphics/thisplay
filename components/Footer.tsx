import styled from "@emotion/styled";
import Image from "next/image";
import LogoActive from "../assets/footer_logo.svg";

const Layout = styled.footer`
  width: 100vw;
  height: 220px;
  border-top: 1px solid #ebe8e7;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 550px) {
    height: auto;
    padding: 32px 0;
  }
`;

const Box = styled.div`
  width: 1200px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  @media (max-width: 1300px) {
    width: 940px;
  }
  @media (max-width: 550px) {
    width: 350px;
    flex-direction: column;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 550px) {
    margin-bottom: 24px;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Contents3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media (max-width: 550px) {
    flex-direction: row;
  }
`;
const Contents2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media (max-width: 550px) {
    flex-direction: row;
    gap: 24px;
  }
`;

const Content = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: rgba(51, 32, 24, 0.65);
`;

const ContentC = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: rgba(51, 32, 24, 0.65);
  cursor: pointer;
  display: flex;
  gap: 6px;
  align-items: center;
  &:hover {
    text-decoration: underline;
    filter: brightness(0.9);
  }
`;

const Bold = styled.span`
  font-weight: 600;
`;

const Footer = () => {
  return (
    <Layout>
      <Box>
        <Column>
          <Image src={LogoActive} alt="logo" width={272} height={24} />
          <Contents>
            <Content>© 2023 선린인터넷고등학교 콘텐츠디자인과</Content>
            <Content>서울특별시 용산구 원효로97길 33-4 3호관 2층</Content>
          </Contents>
        </Column>
        <Column>
          <Content>시연회 준비</Content>
          <Contents3>
            <Content>
              <Bold>박정우 백시현 주현명</Bold>
            </Content>
            <Content>
              <Bold>김한비 표한빈 이하람 오지후</Bold>
            </Content>
          </Contents3>
        </Column>
        <Column>
          <Content>웹사이트</Content>
          <Contents>
            <Content>
              개발 <Bold>주현명 이하람 김성빈</Bold>
            </Content>
            <Content>
              디자인 <Bold>표한빈 백시현 박정우</Bold>
            </Content>
          </Contents>
        </Column>
        <Column>
          <Content>바로가기</Content>
          <Contents2>
            <ContentC
              onClick={() =>
                window.open(
                  "https://www.instagram.com/sunrin_contents",
                  "_blank"
                )
              }
            >
              <Image
                src={"/images/instagram.svg"}
                width={20}
                height={20}
                alt="페이스북"
              />
              시연회 인스타그램
            </ContentC>
            <ContentC
              onClick={() =>
                window.open(
                  "https://www.facebook.com/sunrin.contents",
                  "_blank"
                )
              }
            >
              <Image
                src={"/images/facebook.svg"}
                width={20}
                height={20}
                alt="페이스북"
              />
              시연회 페이스북
            </ContentC>
          </Contents2>
        </Column>
      </Box>
    </Layout>
  );
};

export default Footer;
