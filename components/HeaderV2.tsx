import styled from "@emotion/styled";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import LogoActive from "../assets/logoActive.svg";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { keyframes } from "@emotion/react";

const Layout = styled.header`
  width: 100vw;
  height: 60px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`;

const Box = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  color: rgba(51, 32, 24, 0.65);
`;

const HeaderV2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

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

  return (
    <Layout>
      <Box>
        <Image
          className="logo"
          onClick={() => router.push("/")}
          src={LogoActive}
          alt="Logo"
          width={77}
          height={20}
        />
        <Column
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
        </Column>
      </Box>
    </Layout>
  );
};
const Data = styled.div`
  color: #4b4b4b;
  cursor: pointer;
  transition: font-weight 0.2s ease-in-out;
  &:hover {
    font-weight: 700;
  }
`;

const Title = styled.div`
  color: #9b9b9b;
  font-size: 16px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (max-width: 1300px) {
    display: none;
  }
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

export default HeaderV2;
