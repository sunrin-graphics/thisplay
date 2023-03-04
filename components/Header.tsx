import styled from "@emotion/styled";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import LogoActive from "../assets/logoActive.svg";
import React, { useEffect } from "react";

const Header = (
  props:any
) => {
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

  const LinkStyled = styled.div`
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
      opacity: 0.5;
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
          <LinkStyled onClick={props.sc1}>시연회 소개</LinkStyled>
          <LinkStyled onClick={props.sc2}>동아리 목록</LinkStyled>
          <LinkStyled onClick={props.sc3}>질문과 답변</LinkStyled>
          <LinkStyled onClick={props.sc4}>지원하기</LinkStyled>
        </List>
        <ClubSelectButton>
          동아리 소개
          <Icon className="material-symbols-outlined">expand_more</Icon>
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
  transition: all 0.8s ease;
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
