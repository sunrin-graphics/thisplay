import styled from "@emotion/styled";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import LogoActive from "../assets/logoActive.svg";

const Layout = styled.header`
  width: 100vw;
  height: 60px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 99;
`;

const Box = styled.div`
  width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;

const ClubSelectButton = styled.button`
  height: 40px;
  background: none;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  align-items: center;
  text-align: center;
  gap: 2px;
  //color: rgba(51, 32, 24, 0.65);
  color: #ffffff;
`;

const Icon = styled.div`
  font-size: 24px;
  //color: #7a6e69;
  color: #ffffff;
`;

const LinkStyled = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  display: flex;
  align-items: center;
  text-align: center;

  //color: rgba(51, 32, 24, 0.65);
  color: #ffffff;
`;

const Header = () => {
  return (
    <Layout>
      <Box>
        <Image src={Logo} alt="Logo" width={77} height={20} />
        <List>
          <LinkStyled>시연회 소개</LinkStyled>
          <LinkStyled>동아리 목록</LinkStyled>
          <LinkStyled>질문과 답변</LinkStyled>
        </List>
        <ClubSelectButton>
          동아리 소개
          <Icon className="material-symbols-rounded">expand_more</Icon>
        </ClubSelectButton>
      </Box>
    </Layout>
  );
};

export default Header;
