import styled from "@emotion/styled";
import Image from "next/image";
import LogoActive from "../assets/logoActive.svg";

const Layout = styled.footer`
    width:100vw;
    height: 220px;
  border-top: 1px solid #EBE8E7;
  display: flex;
    justify-content: center;
  align-items:center;
`;

const Box = styled.div`
  width: 1440px;
  display: flex;
  align-content: center;
  justify-content: space-between;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap:16px;
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap:4px;
`

const Content = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: rgba(51, 32, 24, 0.65);
`

const Bold = styled.span`
  font-weight: 700;
`

const Footer = () => {
    return (
        <Layout>
            <Box>
                <Column>
                    <Image src={LogoActive} alt="logo" width={77} height={20} />
                    <Contents>
                        <Content>© 2023 선린인터넷고등학교 콘텐츠디자인과</Content>
                        <Content>서울특별시 용산구 원효로97길 33-4 3호관 2층</Content>
                    </Contents>
                </Column>
                <Column>
                    <Content>시연회 준비</Content>
                    <Contents>
                        <Content><Bold>박정우 백시현 주현명</Bold></Content>
                        <Content><Bold>김한비 표한빈 이하람 오지후</Bold></Content>
                    </Contents>
                </Column>
                <Column>
                    <Content>웹사이트</Content>
                    <Contents>
                        <Content>개발 <Bold>주현명 이하람</Bold></Content>
                        <Content>디자인 <Bold>표한빈 백시현 박정우</Bold></Content>
                    </Contents>
                </Column>
                <Column>
                    <Content>바로가기</Content>
                    <Contents>
                        <Content onClick={() => window.open("https://www.instagram.com/sunrin_contents", "_blank")}>시연회 인스타그램</Content>
                        <Content onClick={() => window.open("https://www.facebook.com/sunrin.contents", "_blank")}>시연회 페이스북</Content>
                    </Contents>
                </Column>
            </Box>
        </Layout>
    );
    };

export default Footer;