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

const InstagramButton = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 175px;
  height: 48px;
  background: none;
  border: 2px solid #ffffff;
  border-radius: 24px;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background: #fff;
    color: #000;
    mix-blend-mode: screen;
  }
`;

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
  /* @media (max-width: 1300px) {
    display: none;
  } */
`;

const ApplyButtonDisabled = styled.div`
  background: rgba(255, 255, 255, 0.47);
  margin-top: 48px;
  width: 300px;
  padding: 16px 36px;
  gap: 16px;
  border-radius: 100px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  mix-blend-mode: screen;
  transition: all 0.2s ease;

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

const Ltb2 = styled.div`
  width: 250px;
  height: 60px;
  border: 1px solid white;
  border-radius: 100px;
  display: flex;
  background-color: white;
  color: #000;
  mix-blend-mode: screen;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  opacity: 0.8;
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

  const isApplicationDate = () => {
    const today = new Date();
    const start = new Date("2023-03-10");
    const end = new Date("2021-03-12");
    return start <= today && today <= end;
  };
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
    const targetTime = new Date("2023-03-14T07:00:00.000Z").getTime();

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
                2023년 3월 8일 7교시
                <br />
                선린인터넷고등학교 영상교육관
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
                <InstagramButton
                  href={"https://www.instagram.com/sunrin_contents/"}
                  target="_blank"
                >
                  시연회 인스타그램
                </InstagramButton>
              </Hid>
            </SpaceBetweenV2>
            <ApplyButton onClick={() => window.open("https://forms.gle/quQ9FfqZWHAxH8BCA", "_BLANK")}>
              신청 마감까지 {leftHour} : {leftMinute} : {leftSecond}{" "}
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

          <LeftContainer>
          <Ltb>
            <LtbTxt>지망서 작성 바로가기</LtbTxt>
            <Icon2 className={"material-symbols-outlined"}>
              arrow_forward
            </Icon2>
          </Ltb>
        </LeftContainer>

        <LastSection ref={ref4}>
          <Container>
            <LeftContainer>
              <Ltt>
                <LttTitle>즐거운 시연회 관람 되셨나요?</LttTitle>
                <LttDesc>
                  이제 우리들의 놀이터에 당신을 초대합니다. <br />
                  지원서를 작성하고 함께 하고 싶은 동아리를 선택해주세요!
                </LttDesc>
                <LttCaution>
                  * 지망서 작성 후, 동아리별 페이지에서 지원서를 꼭 작성하셔야 합니다.
                </LttCaution>
              </Ltt>
              <Ltb  onClick={() => window.open("https://forms.gle/quQ9FfqZWHAxH8BCA", "_BLANK")}>
                <LtbTxt>지망서 작성 바로가기</LtbTxt>
                <Icon2 className={"material-symbols-outlined"}>
                  arrow_forward
                </Icon2>
              </Ltb>
            </LeftContainer>
            <RightContainer>
              {/* <M>지원폼 공개까지 <br/></M> */}
              <M>
                동아리 지원 마감까지 <br />
              </M>
              <B>
                {leftHour} : {leftMinute} : {leftSecond}
              </B>{" "}
              <Sb>남았어요.</Sb>
            </RightContainer>
          </Container>
        </LastSection>

        <Footer />
      </Layout>
    </>
  );
}
