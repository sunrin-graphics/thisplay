import styled from "@emotion/styled";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import LogoActive from "../assets/logoActive.svg";
import React, { useEffect, useState } from "react";
import {useRouter} from "next/router";
import Link from "next/link";

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

  const Title = styled.div`
    color: #9B9B9B;
    font-size: 16px;
  `

  const Modal = styled.div`
    width: 276px;
    height: 224px;
    background: white;
    box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.1);
    border: 1px solid #DDDDDD;
    position: absolute;
    border-radius: 12px;
    top: 70px;
    right: 70px;
    display: flex;
    align-items: center;
    padding: 20px;
  `
  const ModalBody = styled.div`
    width: 224px;
    height: 184px;
    display: flex;
    justify-content: space-between;
  `
  
  const DP = styled.div`
    width: 98px;
    height: 184px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `

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
    color: #4B4B4B;
    cursor: pointer;
  `

  const [isOpen, setIsOpen] = useState(false);

  const changeModal = () => {
    if (isOpen) {
      setIsOpen(false)
    }
    else if (!isOpen) {
      setIsOpen(true)
    }
  }

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
          <LinkStyled onClick={props.sc1}>시연회 소개</LinkStyled>
          <LinkStyled onClick={props.sc2}>동아리 목록</LinkStyled>
          <LinkStyled onClick={props.sc3}>질문과 답변</LinkStyled>
          <LinkStyled onClick={props.sc4}>지원하기</LinkStyled>
        </List>
        <ClubSelectButton
          onClick={() => changeModal()}
        >
          동아리별 소개
          <Icon className="material-symbols-outlined">expand_more</Icon>
        </ClubSelectButton>
        { isOpen === true &&
          <Modal>
            <ModalBody>
              <DP>
                <Title>
                  콘텐츠디자인과
                </Title>
                {
                  CD_data.map((item) => (
                    <div onClick={() => router.push(`/clubs/${item.move}`)} key={item.id}>
                      <Data>
                        {item.title}
                      </Data>
                    </div>
                  ))
                }
              </DP>
              <DP>
                <Title>
                  소프트웨어과
                </Title>
                {
                  SW_data.map((item) => (
                    <Data key={item.id}>
                      {item.title}
                    </Data>
                  ))
                }
              </DP>
            </ModalBody>
          </Modal>
      }
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
