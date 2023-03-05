// @ts-nocheck

import styled from "@emotion/styled";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import LogoActive from "../assets/logoActive.svg";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { keyframes } from "@emotion/react";

const Header = (props: any) => {
  const [nav, setNav] = React.useState(false);

  useEffect(() => {
    function handleScroll() {
      setNav(window.scrollY > 100 ? true : false);
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
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
    cursor: pointer;
    color: ${!nav ? "#FFFFFF" : "rgba(51, 37, 31, 0.8)"};
    transition: color 0.2s ease-in-out;
    &:hover {
      opacity: 0.5;
    }
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
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
    @media (max-width: 1300px) {
      ${(props) => props.hideOnSmall && "display: none;"}
    }
  `;

  const router = useRouter();

  const CD_data = [
    { id: 1, title: "v.friends", move: 1 },
    { id: 2, title: "MIR", move: 4 },
    { id: 3, title: "TATE", move: 5 },
    { id: 4, title: "자의누리", move: 9 },
    { id: 5, title: "아우내", move: 8 },
  ];

  const SW_data = [
    { id: 1, title: "EDCAN", move: 2 },
    { id: 2, title: "IWOP", move: 3 },
    { id: 3, title: "zer0pen", move: 7 },
    { id: 4, title: "RG", move: 6 },
    { id: 5, title: "App:ple Pi", move: 10 },
  ];

  const Data = styled.div`
    color: #4b4b4b;
    cursor: pointer;
    transition: font-weight 0.2s ease-in-out;
    &:hover {
      font-weight: 700;
    }
  `;

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Layout navBar={nav}>
      <Box>
        <Image
          onClick={props.sc0}
          src={nav ? LogoActive : Logo}
          alt="Logo"
          width={77}
          height={20}
          style={{ cursor: "pointer" }}
        />
        <List>
          <LinkStyled onClick={props.sc1}>시연회 소개</LinkStyled>
          <LinkStyled onClick={props.sc2}>동아리 목록</LinkStyled>
          <LinkStyled onClick={props.sc3}>질문과 답변</LinkStyled>
          <LinkStyled onClick={props.sc4}>지원하기</LinkStyled>
        </List>
        <ListMobile>
          <LinkStyled onClick={props.sc1}>소개</LinkStyled>
          <LinkStyled onClick={props.sc2}>목록</LinkStyled>
          <LinkStyled onClick={props.sc3}>QnA</LinkStyled>
        </ListMobile>
        <Column23
          onMouseOver={() => openModal()}
          onMouseLeave={() => closeModal()}
        >
          <ClubSelectButton>동아리 목록</ClubSelectButton>
          {isOpen && (
            <Modal
              onMouseOver={() => openModal()}
              onMouseLeave={() => closeModal()}
            >
              <ModalBody>
                <DP>
                  <Title>콘텐츠디자인과</Title>
                  {CD_data.map((item) => (
                    <Data
                      key={item.id}
                      onClick={() => router.push(`/clubs/${item.move}`)}
                    >
                      {item.title}
                    </Data>
                  ))}
                </DP>
                <DP>
                  <Title>소프트웨어과</Title>
                  {SW_data.map((item) => (
                    <Data
                      onClick={() => router.push(`/clubs/${item.move}`)}
                      key={item.id}
                    >
                      {item.title}
                    </Data>
                  ))}
                </DP>
              </ModalBody>
            </Modal>
          )}
        </Column23>
      </Box>
    </Layout>
  );
};

export default Header;

const Title = styled.div`
  color: #9b9b9b;
  font-size: 16px;
`;

const slideIn = keyframes`
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

const Layout = styled.header<{ navBar: boolean }>`
  width: 100vw;
  height: 60px;
  background-color: ${(props) => (props.navBar ? "#ffffff" : "transparent")};
  transition: background-color 0.8s ease;
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
  @media (max-width: 1300px) {
    width: 940px;
    left: 48px;
  }
  @media (max-width: 550px) {
    width: 350px;
    left: 20px;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  @media (max-width: 1300px) {
    display: none;
  }
`;

const ListMobile = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  @media (min-width: 1300px) {
    display: none;
  }
`;
const Modal = styled.div`
  width: 276px;
  height: 224px;
  background: white;
  box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.03);
  border: 1px solid #dddddd;
  border-radius: 12px;
  top: 40px;
  right: calc(50vw - 600px);
  display: flex;
  align-items: center;
  padding: 20px;
  position: absolute;
  animation: ${slideIn} 0.2s ease-in-out;
`;
const ModalBody = styled.div`
  width: 224px;
  height: 184px;
  display: flex;
  justify-content: space-between;
`;

const DP = styled.div`
  width: 98px;
  height: 184px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Column23 = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (max-width: 1300px) {
    display: none;
  }
`;
