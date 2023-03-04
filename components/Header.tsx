import styled from "@emotion/styled";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import LogoActive from "../assets/logoActive.svg";
import React, { useEffect } from "react";

const Header = () => {
  const [nav, setNav] = React.useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setNav(window.scrollY > 100 ? true : false)
      );
    }
  }, []);

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

    color: ${!nav ? "#FFFFFF" : "rgba(51, 37, 31, 0.8)"};
    transition: all 0.2s ease-in-out;
  `;

  const Icon = styled.div`
    font-size: 24px;

    color: ${!nav ? "#FFFFFF" : "rgba(51, 37, 31, 0.8)"};
    transition: all 0.2s ease-in-out;
  `;

  const LinkStyled = styled.a`
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    align-items: center;
    text-align: center;
    transition: all 0.2s ease-in-out;
    color: ${!nav ? "#FFFFFF" : "rgba(51, 37, 31, 0.8)"};
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  `;

  return (
    <Layout navBar={nav}>
      <Box>
        <Image
          src={nav ? LogoActive : Logo}
          alt="Logo"
          width={77}
          height={20}
        />
        <List>
          <LinkStyled>시연회 소개</LinkStyled>
          <LinkStyled>동아리 목록</LinkStyled>
          <LinkStyled>질문과 답변</LinkStyled>
          <LinkStyled>지원하기</LinkStyled>
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

const Layout = styled.header<{ navBar: boolean }>`
  width: 100vw;
  height: 60px;
  background-color: ${(props) => (props.navBar ? "#ffffff" : "transparent")};
  transition: all 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 99;
`;

const Box = styled.div`
  width: 1200px;
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
