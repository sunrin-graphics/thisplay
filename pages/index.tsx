// @ts-nocheck

import Head from "next/head";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styled from "@emotion/styled";
import Logo from "@/assets/logo.svg";
import Help from "@/assets/help.svg";
import Image from "next/image";
import logo from "../assets/character.png";
import bottom from "../assets/expand_more.svg";
import GrayBox from "@/components/GrayBox";
import clubList, { ClubList } from "../data/clubInfo";
import questionList from "@/data/questionData";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import GrayBox2 from "@/components/GrayBox2";

const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const LtbTxt = styled.span`
  font-size: 18px;
  margin-right: 4px;
`;

const IntroduceHelp = styled.div`
  position: relative;
  width: 408px;
  height: 118px;
  @media (max-width: 1300px) {
    width: 368px;
    height: 108px;
  }
  @media (max-width: 550px) {
    width: 100%;
    height: auto;
    margin-top: 24px;
  }
`;

const Section1 = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0px auto;
  position: relative;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: brightness(0.5);
`;

const PageTitle = styled.div`
  font-weight: 700;
  font-size: 76px;
  line-height: 125%;
  color: #ffffff;
  white-space: nowrap;
  @media (max-width: 1300px) {
    font-size: 60px;
  }
  @media (max-width: 550px) {
    font-size: 39px;
  }
`;

const SpaceBetween = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;

const SpaceBetweenV2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  @media (max-width: 1300px) {
    width: 90px;
    height: 41px;
    margin-top: 14px;
  }
  @media (max-width: 550px) {
    width: 74px;
    height: 33px;
    margin-top: 14px;
  }
`;

const Line = styled.div`
  background: rgba(255, 255, 255, 0.25);
  width: 100%;
  height: 1px;
  @media (max-width: 1300px) {
    display: none;
  }
`;

const Views = styled.div`
  position: absolute;
  top: calc(50vh - 143px);
  left: calc(50vw - 600px);
  width: 1200px;
  @media (max-width: 1300px) {
    width: 600px;
    left: 42px;
  }
  @media (max-width: 550px) {
    width: auto;
    left: 20px;
  }
  display: block;
`;

const Text1 = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  text-align: right;
  white-space: nowrap;
  color: #ffffff;
  @media (max-width: 1300px) {
    display: none;
  }
`;

const Hid = styled.div`
  @media (max-width: 1300px) {
    display: none;
  }
`;

const ApplyButton = styled.button`
  background: none;
  margin-top: 48px;
  padding: 16px 36px;
  gap: 16px;
  border: 2px solid #ffffff;
  border-radius: 100px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #000; /* 텍스트 색상을 투명하게 설정 */
    mix-blend-mode: screen;
  }
  @media (max-width: 1300px) {
    display: none;
  }
`;

const Section2 = styled.div`
  margin-top: 96px;
  width: 100%;
  height: 699px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FixedCenter = styled.div`
  position: absolute;
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: center;
`;

const BottomFixed = styled.div`
  display: flex;
  position: relative;
  bottom: 80px;
  width: 162px;
  height: 52px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Txt = styled.div`
  color: white;
`;

const Section2Body = styled.div`
  width: 1200px;
  height: 555px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1300px) {
    max-width: 940px;
  }
  @media (max-width: 550px) {
    width: 100%;
  }
`;

const Section2Text = styled.div`
  width: 553px;
  height: 147px;
  font-size: 28px;
  color: #33251f;
  opacity: 0.8;
  font-weight: 600;
  line-height: 175%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
  margin-bottom: 48px;
  @media (max-width: 1300px) {
    font-size: 18px;
  }
  @media (max-width: 550px) {
    font-size: 17px;
    width: 100%;
  }
`;

const Section2Border = styled.div`
  border-left: 1px solid rgba(51, 27, 14, 0.2);
  position: relative;
  height: 156px;
`;

const Section3 = styled.div`
  width: 100%;
  height: 802.4px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1300px) {
    height: 882px;
  }
  @media (max-width: 550px) {
    height: 891px;
  }
`;

const Section3Body = styled.div`
  width: 1200px;
  height: 602px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1300px) {
    max-width: 940px;
    height: 602px;
  }
  @media (max-width: 550px) {
    width: 350px;
    flex-direction: column;
    height: 817px;
  }
`;

const Section3Introduce = styled.div`
  width: 579px;
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1300px) {
    width: calc(100% - 20px);
    height: 355px;
  }
  @media (max-width: 550px) {
    width: 100%;
    height: 395px;
  }
`;

const Section3Illu = styled.div`
  width: 480px;
  height: 602.4px;
  background-color: #f3f2f1;
  border-radius: 48px;
  transition: all 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.03);
  }
  @media (max-width: 1300px) {
    width: 290px;
    height: 364px;
    margin-top: 24px;
  }
  @media (max-width: 850px) {
    width: 100%;
    height: 440px;
  }
`;

const IntroduceTitle = styled.div`
  font-size: 40px;
  color: #332c29;
  font-weight: 600;
  line-height: 150%;
  @media (max-width: 1300px) {
    font-size: 35px;
  }
  @media (max-width: 550px) {
    font-size: 25px;
  }
`;

const IntroduceDesc = styled.div`
  width: 100%;
  line-height: 175%;
  @media (max-width: 1300px) {
    font-size: 15px;
  }
`;

const Parent = styled.div`
  width: 100%;
  height: 1008px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1300px) {
    height: 1054px;
  }
  @media (max-width: 550px) {
    height: 918px;
  }
`;

const LastSection = styled.div`
  width: 100%;
  height: 402px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/images/main_bottom_img.png");
  background-size: cover;
  background-position: center;
  @media (max-width: 550px) {
    display: none;
  }
`;

const Container = styled.div`
  width: 1200px;
  height: 214px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1300px) {
    width: 940px;
    height: 241px;
  }
`;

const LeftContainer = styled.div`
  width: 464px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  @media (max-width: 1300px) {
    width: 329px;
  }
`;

const Ltt = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1300px) {
    height: 157px;
  }
`;

const Ltb = styled.div`
  width: 230px;
  height: 60px;
  border: 1px solid white;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #000;
    mix-blend-mode: screen;
  }
`;

const LttDesc = styled.div`
  font-size: 18px;
  line-height: 150%;
`;

const LttCaution = styled.div`
  font-size: 14px;
  color: #f3f2f1;
`;

const RightContainer = styled.div`
  width: 555px;
  line-height: 160%;
  height: 136px;
  font-size: 48px;
  color: white;
  text-align: right;
  @media (max-width: 1300px) {
    font-size: 38px;
  }
`;

const M = styled.span`
  font-weight: 400;
`;

const B = styled.span`
  font-weight: 600;
`;

const Sb = styled.span`
  font-weight: 500;
`;

const LttTitle = styled.div`
  font-size: 28px;
  font-weight: 500;
`;

const Child = styled.div`
  width: 1218px;
  gap: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1300px) {
    width: 660px;
    height: 886px;
  }
  @media (max-width: 550px) {
    width: 100%;
    gap: 24px;
  }
`;

const Emphasize = styled.div`
  width: 100%;
  gap: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  @media (max-width: 550px) {
    gap: 8px;
  }
`;

const Title = styled.div`
  font-size: 28px;
  color: #332c29;
  font-weight: 500;
  @media (max-width: 550px) {
    font-size: 25px;
  }
`;

const Desc = styled.div`
  font-size: 20px;
  color: #33251f;
  opacity: 0.8;
  @media (max-width: 550px) {
    font-size: 15px;
  }
`;

const ClubParent = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1300px) {
    height: 770px;
  }
  @media (max-width: 850px) {
    display: none;
  }
`;

const Mg = styled.div`
  width: 390px;
  height: 138px;
  border-radius: 24px;
  align-self: center;
`;

const CImage = styled(Image)`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

const DImage = styled(Image)`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: contain;
`;

const Parent2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 778px;
  @media (max-width: 1300px) {
    height: 804px;
  }
  @media (max-width: 550px) {
    height: 554px;
  }
`;

const Child2 = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  @media (max-width: 1300px) {
    width: 940px;
  }
  @media (max-width: 550px) {
    width: 100%;
    gap: 24px;
  }
`;

const Zone = styled.div`
  gap: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  @media (max-width: 550px) {
    gap: 8px;
  }
`;

const Part = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  @media (max-width: 550px) {
    display: none;
  }
`;

const AutoBox = styled.div`
  width: 282px;
  height: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background-color: #f3f2f1;
  border-radius: 20px;
  @media (max-width: 1300px) {
    width: 303px;
  }
  @media (max-width: 550px) {
    width: 350px;
  }
`;

const ParentBox = styled.div`
  width: 282px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 24px;
`;

const Title2 = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #332c29;
`;

const Desc2 = styled.div`
  color: #594e49;
  line-height: 150%;
  font-size: 16px;
`;

const ZoneTitle = styled.div`
  font-size: 28px;
  color: #332c29;
  font-weight: 500;
  @media (max-width: 550px) {
    font-size: 25px;
  }
`;

const ZoneDesc = styled.div`
  font-size: 20px;
  color: #33251f;
  opacity: 0.8;
  @media (max-width: 550px) {
    font-size: 15px;
  }
`;

const Mg2 = styled.div`
  width: 342px;
  height: 24px;
`;

const Icon2 = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const CustomSwiper = styled(Swiper)`
  width: 100%;
  height: 780px;
  @media (min-width: 550px) {
    display: none;
  }
`;

const CustomSwiper2 = styled(Swiper)`
  width: 100%;
  height: 397px;
  @media (min-width: 550px) {
    display: none;
  }
`;

const CustomSwiperSlide = styled(SwiperSlide)`
  width: 100%;
  height: 760px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export default function Home() {
  const clubData: ClubList = clubList;

  const ref0 = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>();

  const refDown = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("sc") !== null)
        window.scrollTo({
          top: localStorage.getItem("sc"),
        });
      localStorage.removeItem("sc");
    }
  }, []);
  function gotoScroll0(className: string) {
    if (ref0 !== null) {
      const { offsetTop } = ref0.current as any;
      window.scrollTo({ behavior: "smooth", top: offsetTop });
    }
  }

  function gotoScrollDown(className: string) {
    if (refDown !== null) {
      const { offsetTop } = refDown.current as any;
      window.scrollTo({ behavior: "smooth", top: offsetTop - 120 });
    }
  }

  function gotoScroll(className: string) {
    if (ref1 !== null) {
      const { offsetTop } = ref1.current as any;
      window.scrollTo({ behavior: "smooth", top: offsetTop - 70 });
    }
  }

  function gotoScroll2(className: string) {
    if (ref2 !== null) {
      const { offsetTop } = ref2.current as any;
      window.scrollTo({ behavior: "smooth", top: offsetTop + 40 });
    }
  }

  function gotoScroll3(className: string) {
    if (ref3 !== null) {
      const { offsetTop } = ref3.current as any;
      window.scrollTo({ behavior: "smooth", top: offsetTop - 70 });
    }
  }

  function gotoScroll4(className: string) {
    if (ref4 !== null) {
      const { offsetTop } = ref4.current as any;
      window.scrollTo({ behavior: "smooth", top: offsetTop - 70 });
    }
  }

  const [leftHour, setLeftHour] = useState("00");
  const [leftMinute, setLeftMinute] = useState("00");
  const [leftSecond, setLeftSecond] = useState("00");

  const router = useRouter();

  useEffect(() => {
    // const targetTime = new Date('2023-03-11T00:00:00.000Z').getTime();
    const targetTime = new Date("2023-03-06T07:00:00.000Z").getTime();

    const updateLeftTime = () => {
      const now = new Date().getTime();
      const distance = targetTime - 1000 * 60 * 60 * 9 - now;

      if (distance <= 0) {
        setLeftHour("00");
        setLeftMinute("00");
        setLeftSecond("00");
        return;
      }

      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setLeftHour(hours.toString().padStart(2, "0"));
      setLeftMinute(minutes.toString().padStart(2, "0"));
      setLeftSecond(seconds.toString().padStart(2, "0"));
    };

    const intervalId = setInterval(updateLeftTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      console.log(window.innerWidth);
    }
  }, []);

  const [introTxt, setIntroTxt] = useState(
    "콘텐츠디자인과 시연회는 2020년부터 매년 신입생들을 위해 준비하는 행사예요. <br />" +
      "시연회를 통해 신입생들은 앞서 입학한 선배들의 작품을 감상하고, <br />" +
      "앞으로의 동아리 선택부터 콘텐츠디자인과 생활까지에 대해 힌트를 얻을 수 있어요! <br />"
  );

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
    if (width <= 850) {
      setIntroTxt(
        "콘텐츠디자인과 시연회는 2020년부터<br/>매년 신입생들을 위해 준비하는 행사예요. <br /><br />" +
          "시연회를 통해 신입생들은 앞서 입학한 선배들의<br/작품을 감상하고, 앞으로의 동아리 선택부터<br/>" +
          "콘텐츠디자인과 생활까지에 대해 힌트를 얻을 수 있어요!"
      );
    } else {
      setIntroTxt(
        "콘텐츠디자인과 시연회는 2020년부터 매년 신입생들을 위해 준비하는 행사예요. <br />" +
          "시연회를 통해 신입생들은 앞서 입학한 선배들의 작품을 감상하고, <br />" +
          "앞으로의 동아리 선택부터 콘텐츠디자인과 생활까지에 대해 힌트를 얻을 수 있어요! <br />"
      );
    }
  }, [width]);

  return (
    <>
      <Head>
        <title>thisPlay!</title>
        <meta
          name="description"
          content="2023 콘텐츠디자인과 시연회 thisPlay!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header
          sc0={gotoScroll0}
          sc1={gotoScroll}
          sc2={gotoScroll2}
          sc3={gotoScroll3}
          sc4={gotoScroll4}
        />
        <Section1 ref={ref0}>
          <Video muted autoPlay loop>
            <source src="video/MainVideo.mp4" type="video/mp4" />
            <strong>Your browser does not support the video tag.</strong>
          </Video>
          <Views>
            <SpaceBetween>
              <PageTitle>우리의 놀이터에</PageTitle>
              <Line />
              <Hid>
                <Image src={Logo} width={170} height={44} alt="logo" />
              </Hid>
            </SpaceBetween>
            <SpaceBetween>
              <PageTitle>당신을 초대합니다!</PageTitle>
              <Line />
              <Text1>
                2023년 3월 10일 7교시
                <br />
                콘텐츠디자인과 실습실
              </Text1>
            </SpaceBetween>
            <SpaceBetweenV2>
              <svg
                width="160"
                height="72"
                viewBox="0 0 160 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M47.0204 36C47.0204 42.0864 42.0864 47.0204 36 47.0204C29.9136 47.0204 24.9796 42.0864 24.9796 36C24.9796 29.9136 29.9136 24.9796 36 24.9796C42.0864 24.9796 47.0204 29.9136 47.0204 36ZM38.2041 36C38.2041 37.2173 37.2173 38.2041 36 38.2041C34.7827 38.2041 33.7959 37.2173 33.7959 36C33.7959 34.7827 34.7827 33.7959 36 33.7959C37.2173 33.7959 38.2041 34.7827 38.2041 36Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M36 59.5102C48.9843 59.5102 59.5102 48.9843 59.5102 36C59.5102 23.0157 48.9843 12.4898 36 12.4898C23.0157 12.4898 12.4898 23.0157 12.4898 36C12.4898 48.9843 23.0157 59.5102 36 59.5102ZM36 50.6939C44.1152 50.6939 50.6939 44.1152 50.6939 36C50.6939 27.8848 44.1152 21.3061 36 21.3061C27.8848 21.3061 21.3061 27.8848 21.3061 36C21.3061 44.1152 27.8848 50.6939 36 50.6939Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M36 72C55.8822 72 72 55.8822 72 36C72 16.1177 55.8822 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8822 16.1177 72 36 72ZM36 63.1837C51.0131 63.1837 63.1837 51.0131 63.1837 36C63.1837 20.9869 51.0131 8.81633 36 8.81633C20.9869 8.81633 8.81633 20.9869 8.81633 36C8.81633 51.0131 20.9869 63.1837 36 63.1837Z"
                  fill="white"
                />
                <path
                  d="M132.816 1.46939C132.816 0.657867 132.158 0 131.347 0H116.653C115.842 0 115.184 0.657867 115.184 1.46939V11.1682C115.184 12.4772 113.601 13.1328 112.675 12.2072L105.817 5.34914C105.243 4.77531 104.313 4.77531 103.739 5.34914L93.3491 15.7393C92.7752 16.3131 92.7752 17.2435 93.3491 17.8173L100.207 24.6753C101.133 25.601 100.477 27.1837 99.1681 27.1837H89.4694C88.6579 27.1837 88 27.8416 88 28.6531L88 43.347C88 44.1585 88.6579 44.8164 89.4694 44.8164H99.1681C100.477 44.8164 101.133 46.3991 100.207 47.3248L93.3491 54.1828C92.7753 54.7566 92.7753 55.687 93.3491 56.2608L103.739 66.6509C104.313 67.2248 105.243 67.2248 105.817 66.6509L112.675 59.7929C113.601 58.8673 115.184 59.5229 115.184 60.8319V70.5306C115.184 71.3421 115.842 72 116.653 72H131.347C132.158 72 132.816 71.3421 132.816 70.5306V60.832C132.816 59.5229 134.399 58.8673 135.325 59.793L142.183 66.651C142.757 67.2248 143.687 67.2248 144.261 66.651L154.651 56.2608C155.225 55.687 155.225 54.7566 154.651 54.1828L147.793 47.3248C146.867 46.3991 147.523 44.8164 148.832 44.8164H158.531C159.342 44.8164 160 44.1585 160 43.347V28.6531C160 27.8416 159.342 27.1837 158.531 27.1837H148.832C147.523 27.1837 146.867 25.601 147.793 24.6753L154.651 17.8173C155.225 17.2434 155.225 16.3131 154.651 15.7392L144.261 5.34911C143.687 4.77528 142.757 4.77527 142.183 5.34911L135.325 12.2071C134.399 13.1328 132.816 12.4772 132.816 11.1681V1.46939Z"
                  fill="white"
                />
              </svg>
              <Hid>
                <svg
                  width="184"
                  height="48"
                  viewBox="0 0 184 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_b_575_1262)">
                    <g clipPath="url(#clip0_575_1262)">
                      <path
                        d="M29.5006 24C29.5006 22.6193 30.6196 21.4998 32.0003 21.4998C33.381 21.4998 34.5006 22.6193 34.5006 24C34.5006 25.3807 33.381 26.5002 32.0003 26.5002C30.6196 26.5002 29.5006 25.3807 29.5006 24ZM28.149 24C28.149 26.127 29.8732 27.8512 32.0003 27.8512C34.1274 27.8512 35.8516 26.127 35.8516 24C35.8516 21.873 34.1274 20.1488 32.0003 20.1488C29.8732 20.1488 28.149 21.873 28.149 24ZM35.104 19.9961C35.1038 20.4932 35.5066 20.8963 36.0037 20.8965C36.5008 20.8967 36.9039 20.4939 36.9041 19.9969C36.9043 19.4998 36.5015 19.0967 36.0044 19.0965C35.5076 19.0967 35.1045 19.4993 35.104 19.9961ZM28.9702 30.1048C28.2389 30.0715 27.8415 29.9497 27.5773 29.8468C27.2272 29.7105 26.9773 29.5481 26.7146 29.2858C26.4519 29.0235 26.2893 28.7739 26.1536 28.4237C26.0506 28.1597 25.9288 27.7622 25.8956 27.031C25.8592 26.2404 25.852 26.0029 25.852 24.0001C25.852 21.9972 25.8598 21.7604 25.8956 20.9692C25.9289 20.2379 26.0516 19.8412 26.1536 19.5764C26.2899 19.2262 26.4523 18.9764 26.7146 18.7137C26.977 18.451 27.2266 18.2884 27.5773 18.1527C27.8414 18.0497 28.2389 17.9279 28.9702 17.8947C29.7608 17.8583 29.9983 17.8511 32.0003 17.8511C34.0023 17.8511 34.2401 17.8589 35.0313 17.8947C35.7626 17.928 36.1594 18.0507 36.4242 18.1527C36.7743 18.2884 37.0242 18.4514 37.2869 18.7137C37.5496 18.976 37.7116 19.2262 37.8479 19.5764C37.9509 19.8404 38.0727 20.2379 38.1059 20.9692C38.1423 21.7604 38.1495 21.9972 38.1495 24.0001C38.1495 26.0029 38.1423 26.2397 38.1059 27.031C38.0726 27.7622 37.9502 28.1596 37.8479 28.4237C37.7116 28.7739 37.5492 29.0237 37.2869 29.2858C37.0245 29.5479 36.7743 29.7105 36.4242 29.8468C36.1601 29.9498 35.7626 30.0716 35.0313 30.1048C34.2407 30.1412 34.0032 30.1484 32.0003 30.1484C29.9974 30.1484 29.7605 30.1412 28.9702 30.1048ZM28.9081 16.5454C28.1096 16.5818 27.564 16.7084 27.0875 16.8938C26.5941 17.0852 26.1763 17.3421 25.7589 17.7589C25.3415 18.1756 25.0853 18.594 24.8938 19.0874C24.7084 19.5642 24.5818 20.1095 24.5454 20.9079C24.5085 21.7076 24.5 21.9632 24.5 24C24.5 26.0368 24.5085 26.2924 24.5454 27.0921C24.5818 27.8906 24.7084 28.4358 24.8938 28.9126C25.0853 29.4057 25.3415 29.8246 25.7589 30.2411C26.1763 30.6577 26.5941 30.9142 27.0875 31.1062C27.5649 31.2916 28.1096 31.4182 28.9081 31.4546C29.7082 31.4909 29.9635 31.5 32.0003 31.5C34.0371 31.5 34.2928 31.4915 35.0925 31.4546C35.891 31.4182 36.4363 31.2916 36.9131 31.1062C37.4062 30.9142 37.8243 30.6579 38.2417 30.2411C38.6591 29.8244 38.9148 29.4057 39.1068 28.9126C39.2922 28.4358 39.4194 27.8905 39.4552 27.0921C39.4915 26.2918 39.5 26.0368 39.5 24C39.5 21.9632 39.4915 21.7076 39.4552 20.9079C39.4188 20.1094 39.2922 19.5639 39.1068 19.0874C38.9148 18.5943 38.6585 18.1763 38.2417 17.7589C37.8249 17.3414 37.4062 17.0852 36.9137 16.8938C36.4363 16.7084 35.891 16.5812 35.0931 16.5454C34.2934 16.5091 34.0377 16.5 32.0009 16.5C29.9641 16.5 29.7082 16.5085 28.9081 16.5454Z"
                        fill="white"
                      />
                    </g>
                    <path
                      d="M51.9148 18.304V20.704C51.9148 21.5573 52.0748 22.4 52.3948 23.232C52.7148 24.0533 53.1521 24.7893 53.7068 25.44C54.2721 26.08 54.9068 26.56 55.6108 26.88L54.7468 28.048C53.9468 27.664 53.2374 27.0933 52.6188 26.336C52.0108 25.568 51.5414 24.6933 51.2108 23.712C50.8801 24.768 50.4001 25.7013 49.7708 26.512C49.1414 27.312 48.4108 27.9147 47.5788 28.32L46.6988 27.12C47.4134 26.7893 48.0534 26.2933 48.6188 25.632C49.1948 24.96 49.6428 24.192 49.9628 23.328C50.2828 22.464 50.4427 21.5893 50.4427 20.704V18.304H51.9148ZM56.9068 17.088H58.3628V31.248H56.9068V17.088ZM72.4431 17.12V27.504H70.9871V23.84H67.5151C67.1845 24.2347 66.7685 24.544 66.2671 24.768C65.7658 24.992 65.2271 25.104 64.6511 25.104C63.9685 25.104 63.3445 24.9547 62.7791 24.656C62.2245 24.3573 61.7871 23.9413 61.4671 23.408C61.1578 22.864 61.0031 22.2507 61.0031 21.568C61.0031 20.8853 61.1578 20.272 61.4671 19.728C61.7871 19.184 62.2245 18.7627 62.7791 18.464C63.3445 18.1547 63.9685 18 64.6511 18C65.2271 18 65.7605 18.112 66.2511 18.336C66.7418 18.5493 67.1578 18.8533 67.4991 19.248H70.9871V17.12H72.4431ZM62.3791 21.568C62.3791 22.24 62.5925 22.7893 63.0191 23.216C63.4565 23.632 64.0005 23.84 64.6511 23.84C65.3018 23.84 65.8405 23.632 66.2671 23.216C66.6938 22.7893 66.9071 22.24 66.9071 21.568C66.9071 20.896 66.6938 20.352 66.2671 19.936C65.8405 19.5093 65.3018 19.296 64.6511 19.296C64.0005 19.296 63.4565 19.5093 63.0191 19.936C62.5925 20.352 62.3791 20.896 62.3791 21.568ZM63.3551 26.448H64.8271V29.728H72.8271V30.928H63.3551V26.448ZM68.1551 20.448C68.2618 20.8427 68.3151 21.216 68.3151 21.568C68.3151 21.9627 68.2618 22.32 68.1551 22.64H70.9871V20.448H68.1551ZM86.3315 17.12V31.232H84.8595V17.12H86.3315ZM74.8435 27.392C76.4862 27.392 77.7662 27.3813 78.6835 27.36V25.904C77.8622 25.7973 77.2062 25.52 76.7155 25.072C76.2355 24.6133 75.9955 24.0373 75.9955 23.344C75.9955 22.8213 76.1342 22.3627 76.4115 21.968C76.6995 21.5733 77.0995 21.2693 77.6115 21.056C78.1342 20.832 78.7315 20.72 79.4035 20.72C80.0755 20.72 80.6675 20.832 81.1795 21.056C81.7022 21.2693 82.1075 21.5733 82.3955 21.968C82.6835 22.3627 82.8275 22.8213 82.8275 23.344C82.8275 24.0267 82.5822 24.5973 82.0915 25.056C81.6115 25.504 80.9662 25.7867 80.1555 25.904V27.296C81.6382 27.2213 82.9235 27.1147 84.0115 26.976L84.1075 28.048C82.7315 28.2933 81.3235 28.448 79.8835 28.512C78.4435 28.576 76.8275 28.608 75.0355 28.608L74.8435 27.392ZM75.1315 18.8H78.6835V17.136H80.1555V18.8H83.6915V19.968H75.1315V18.8ZM77.3715 23.344C77.3715 23.792 77.5582 24.1547 77.9315 24.432C78.3155 24.6987 78.8062 24.832 79.4035 24.832C80.0115 24.832 80.5022 24.6987 80.8755 24.432C81.2595 24.1547 81.4515 23.792 81.4515 23.344C81.4515 22.8853 81.2648 22.5227 80.8915 22.256C80.5182 21.9787 80.0222 21.84 79.4035 21.84C78.8062 21.84 78.3155 21.9787 77.9315 22.256C77.5582 22.5227 77.3715 22.8853 77.3715 23.344ZM104.051 17.12V27.376H102.579V17.12H104.051ZM92.7394 21.584C92.7394 20.912 92.8994 20.3093 93.2194 19.776C93.55 19.2427 93.998 18.8267 94.5634 18.528C95.1287 18.2293 95.758 18.08 96.4514 18.08C97.1447 18.08 97.774 18.2293 98.3394 18.528C98.9047 18.8267 99.3474 19.2427 99.6674 19.776C99.998 20.3093 100.163 20.912 100.163 21.584C100.163 22.2453 99.998 22.8427 99.6674 23.376C99.3474 23.9093 98.9047 24.3253 98.3394 24.624C97.774 24.9227 97.1447 25.072 96.4514 25.072C95.758 25.072 95.1287 24.9227 94.5634 24.624C93.998 24.3253 93.55 23.9093 93.2194 23.376C92.8994 22.8427 92.7394 22.2453 92.7394 21.584ZM94.1634 21.584C94.1634 22.2347 94.382 22.768 94.8194 23.184C95.2567 23.5893 95.8007 23.792 96.4514 23.792C97.1127 23.792 97.662 23.5893 98.0994 23.184C98.5367 22.768 98.7554 22.2347 98.7554 21.584C98.7554 20.9227 98.5367 20.384 98.0994 19.968C97.662 19.552 97.1127 19.344 96.4514 19.344C95.79 19.344 95.2407 19.552 94.8034 19.968C94.3767 20.384 94.1634 20.9227 94.1634 21.584ZM94.9154 26.336H96.3714V29.728H104.467V30.928H94.9154V26.336ZM113.54 18.032V19.104C113.54 19.8613 113.774 20.592 114.244 21.296C114.724 22 115.353 22.6027 116.132 23.104C116.921 23.5947 117.758 23.92 118.644 24.08L117.988 25.28C116.857 25.024 115.817 24.544 114.868 23.84C113.918 23.136 113.22 22.2987 112.772 21.328C112.313 22.3093 111.609 23.152 110.66 23.856C109.721 24.56 108.686 25.0347 107.556 25.28L106.916 24.08C107.79 23.92 108.617 23.5893 109.396 23.088C110.185 22.5867 110.814 21.984 111.284 21.28C111.764 20.576 112.004 19.8507 112.004 19.104V18.032H113.54ZM106.436 28.144H119.22V29.344H106.436V28.144ZM127.62 18.368V19.568H122.5V22.32H127.332V23.472H122.5V26.672C123.759 26.672 124.852 26.6453 125.78 26.592C126.708 26.528 127.657 26.416 128.628 26.256L128.772 27.424C127.759 27.6053 126.756 27.728 125.764 27.792C124.783 27.8453 123.577 27.872 122.148 27.872H121.044V18.368H127.62ZM129.86 17.12H131.332V22.72H133.572V23.936H131.332V31.232H129.86V17.12ZM145.493 18.544V20.016C145.493 21.264 145.461 22.384 145.397 23.376C145.343 24.368 145.199 25.5307 144.965 26.864L143.493 26.736C143.738 25.488 143.887 24.368 143.941 23.376C144.005 22.384 144.037 21.264 144.037 20.016V19.728H135.781V18.544H145.493ZM134.405 28H147.173V29.216H134.405V28ZM160.309 17.104V25.504H158.917V21.824H157.205V25.344H155.829V17.376H157.205V20.64H158.917V17.104H160.309ZM148.981 18.032H154.309V21.952H150.421V23.76C151.392 23.7493 152.224 23.7173 152.917 23.664C153.621 23.6107 154.33 23.5093 155.045 23.36L155.189 24.528C154.368 24.688 153.562 24.7947 152.773 24.848C151.994 24.9013 151.05 24.928 149.941 24.928H149.029V20.848H152.901V19.184H148.981V18.032ZM150.981 26.16H160.309V31.04H150.981V26.16ZM158.901 29.872V27.328H152.405V29.872H158.901Z"
                      fill="white"
                    />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="183"
                      height="47"
                      rx="23.5"
                      stroke="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_b_575_1262"
                      x="-24"
                      y="-24"
                      width="232"
                      height="96"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="12"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_575_1262"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_575_1262"
                        result="shape"
                      />
                    </filter>
                    <clipPath id="clip0_575_1262">
                      <rect
                        width="15"
                        height="15"
                        fill="white"
                        transform="translate(24.5 16.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Hid>
            </SpaceBetweenV2>
            <ApplyButton>
              동아리 신청 마감까지 {leftHour} : {leftMinute} : {leftSecond}{" "}
              <Icon2 className={"material-symbols-outlined"}>
                arrow_forward
              </Icon2>{" "}
            </ApplyButton>
          </Views>
          <FixedCenter>
            <div onClick={gotoScrollDown}>
              <BottomFixed>
                <Txt>스크롤해서 더 알아보세요</Txt>
                <Image src={bottom} width={24} height={24} alt="logo" />
              </BottomFixed>
            </div>
          </FixedCenter>
        </Section1>
        <Section2 ref={refDown}>
          <Section2Body>
            <Section2Border />
            <Section2Text>
              상상을 현실로 만드는 힘을 가진 우리의 놀이터에서 <br />
              새롭게 꿈을 펼칠 여러분을 위해 <br />
              작은 선물을 준비했어요.
            </Section2Text>
            <Section2Border />
          </Section2Body>
        </Section2>
        <Section3 ref={ref1}>
          <Section3Body>
            <Section3Introduce>
              <IntroduceTitle>
                콘텐츠디자인과 <br />
                시연회가 무엇인가요?
              </IntroduceTitle>
              <IntroduceDesc dangerouslySetInnerHTML={{ __html: introTxt }} />
              <IntroduceHelp>
                <DImage src={Help} alt="image" />
              </IntroduceHelp>
            </Section3Introduce>
            <Section3Illu>
              <CImage src={logo} alt="image" />
            </Section3Illu>
          </Section3Body>
        </Section3>

        <Parent ref={ref2}>
          <Child>
            <Emphasize>
              <Title>동아리 목록</Title>
              <Desc>시연회에 함께한 동아리들을 알아보세요!</Desc>
            </Emphasize>
            <ClubParent>
              {clubData.map((club) => (
                <>
                  <div
                    key={club.id}
                    onClick={() => {
                      localStorage.setItem("sc", window.scrollY);
                      router.push(`/clubs/${club.id}`);
                    }}
                  >
                    <GrayBox
                      name={club.name}
                      department={club.department}
                      desc={club.desc}
                      logo={club.logo}
                    />
                  </div>
                </>
              ))}
            </ClubParent>

            <CustomSwiper
              modules={[Pagination]}
              slidesPerView={1}
              pagination={{ clickable: false }}
            >
              {[...Array(2)].map((_, i) => (
                <CustomSwiperSlide key={i}>
                  {[...Array(5)].map((_, j) => {
                    const club = clubList[i * 5 + j];
                    return (
                      <div
                        key={club.id}
                        onClick={() => {
                          localStorage.setItem("sc", window.scrollY);
                          router.push(`/clubs/${club.id}`);
                        }}
                      >
                        <GrayBox2
                          name={club.name}
                          department={club.department}
                          desc={club.desc}
                          logo={club.logo}
                        />
                      </div>
                    );
                  })}
                </CustomSwiperSlide>
              ))}
            </CustomSwiper>
          </Child>
        </Parent>
        <Parent2 ref={ref3}>
          <Child2>
            <Zone>
              <ZoneTitle>질문과 답변</ZoneTitle>
              <ZoneDesc>많이하는 질문에 대한 답변들을 모아봤어요!</ZoneDesc>
            </Zone>
            <Part>
              {questionList.map((question, i) => (
                <>
                  <AutoBox key={i}>
                    <Title2>{question.title}</Title2>
                    <Desc2
                      dangerouslySetInnerHTML={{ __html: question.desc }}
                    ></Desc2>
                  </AutoBox>
                </>
              ))}
            </Part>
            <CustomSwiper2
              modules={[Pagination]}
              slidesPerView={1}
              pagination={{ clickable: false }}
            >
              {[...Array(4)].map((_, i) => (
                <CustomSwiperSlide key={i}>
                  {[...Array(2)].map((_, j) => {
                    const question = questionList[i * 2 + j];
                    return (
                      <AutoBox key={i}>
                        <Title2>{question.title}</Title2>
                        <Desc2
                          dangerouslySetInnerHTML={{ __html: question.desc }}
                        ></Desc2>
                      </AutoBox>
                    );
                  })}
                </CustomSwiperSlide>
              ))}
            </CustomSwiper2>
          </Child2>
        </Parent2>

        <LastSection ref={ref4}>
          <Container>
            <LeftContainer>
              <Ltt>
                <LttTitle>즐거운 시연회 관람 되셨나요?</LttTitle>
                <LttDesc>
                  이제 우리들의 놀이터에 당신을 초대합니다. <br />
                  면접 지원을 통해 여러분이 함께 하고 싶은 동아리를
                  선택해주세요!
                </LttDesc>
                <LttCaution>
                  * 3월 11일부터 12일까지 지원폼이 공개됩니다.
                </LttCaution>
              </Ltt>
              <Ltb>
                <LtbTxt>면접 지원폼 바로가기</LtbTxt>
                <Icon2 className={"material-symbols-outlined"}>
                  arrow_forward
                </Icon2>
              </Ltb>
            </LeftContainer>
            <RightContainer>
              {/* <M>지원폼 공개까지 <br/></M> */}
              <M>
                시연회 홈페이지 마감까지 <br />
              </M>
              <B>
                {leftHour} : {leftMinute} : {leftSecond}
              </B>{" "}
              <Sb>남았어요?</Sb>
            </RightContainer>
          </Container>
        </LastSection>

        <Footer />
      </Layout>
    </>
  );
}
