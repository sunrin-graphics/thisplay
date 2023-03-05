// @ts-nocheck


import styled from "@emotion/styled";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import LogoActive from "../assets/logoActive.svg";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { keyframes } from "@emotion/react";

const Header = (props: any) => {
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
    cursor: pointer;
    color: ${!nav ? "#FFFFFF" : "rgba(51, 37, 31, 0.8)"};
    transition: color 0.2s ease-in-out;
    &:hover {
      opacity: 0.5;
    }
  `;

  const Icon = styled.div`
    font-size: 24px;

    color: ${!nav ? "#FFFFFF" : "rgba(51, 37, 31, 0.8)"};
    transition: color 0.2s ease-in-out;
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

  const Title = styled.div`
    color: #9b9b9b;
    font-size: 16px;
  `;

  const Modal = styled.div`
    width: 276px;
    height: 224px;
    background: white;
    box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.03);
    border: 1px solid #dddddd;
    border-radius: 12px;
    top: 60px;
    right: calc(50vw - 600px);
    display: flex;
    align-items: center;
    padding: 20px;
    position: absolute;
    animation: ${slideIn} 0.5s;
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
    @media (max-width: 1300px) {
      display: none;
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
  `;

  const [isOpen, setIsOpen] = useState(false);

  const changeModal = () => {
    setIsOpen(!isOpen);
  };

  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      console.log(window.innerWidth);
    }
  }, []);

  const [i1, setI1] = useState("시연회 소개")
  const [i2, setI2] = useState("동아리 목록")

  const [i3, setI3] = useState("질문과 답변")
  
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width <= 1300) {
      setI1("소개");
      setI2("목록");
      setI3("QnA");
    }
    else {
      setI1("시연회 소개");
      setI2("동아리 목록");
      setI3("질문과 답변");
    }
  }, [width]);

  return (
    <Layout navBar={nav}>
      <Box>
        <Image
          onClick={props.sc0}
          src={nav ? LogoActive : Logo}
          alt="Logo"
          width={77}
          height={20}
        />
        <List>
          <LinkStyled onClick={props.sc1}>{i1}</LinkStyled>
          <LinkStyled onClick={props.sc2}>{i2}</LinkStyled>
          <LinkStyled onClick={props.sc3}>{i3}</LinkStyled>
          <LinkStyled hideOnSmall={true} onClick={props.sc4}>지원하기</LinkStyled>
        </List>
        <Column23>
          <ClubSelectButton onClick={() => changeModal()}>
            동아리별 소개
            <Icon className="material-symbols-outlined">expand_more</Icon>
          </ClubSelectButton>
          {isOpen === true && (
            <Modal>
              <ModalBody>
                <DP>
                  <Title>콘텐츠디자인과</Title>
                  {CD_data.map((item) => (
                    <div
                      onClick={() => router.push(`/clubs/${item.move}`)}
                      key={item.id}
                    >
                      <Data>{item.title}</Data>
                    </div>
                  ))}
                </DP>
                <DP>
                  <Title>소프트웨어과</Title>
                  {SW_data.map((item) => (
                    <Data key={item.id}>{item.title}</Data>
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
  position: absolute;
  @media (max-width: 1300px) {
    width: calc(100% - 48px);
    left: 48px;
  }
  @media (max-width: 550px) {
    width: calc(100% - 40px);
    left: 20px;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  @media (max-width: 1300px) {
    position: absolute;
    right: 48px;
  }
  @media (max-width: 550px) {
    position: absolute;
    right: 20px;
  }
`;
