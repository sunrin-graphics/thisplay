// @ts-nocheck

import Head from "next/head";
import React, { useEffect, useState , useRef } from "react";
import styled from "@emotion/styled";

import Header from "../components/HeaderV2"
import Box from "../components/box"
import Button from "../components/Button"

const Layout = styled.div`
  --main-color: rgba(51, 37, 31, 0.8);
  --gray-color: rgba(51, 37, 31, 0.2);
  width: 100vw;
  height: 150vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Submit = styled.div`
  width: 300px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 200px;
  margin-top: 45px;
`

const Child = styled.div`
  width: 640px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ApplyTitle = styled.div`
  margin-top: 200px;
  width: 576px;
  height: 209px;
  color: var(--main-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.div`
  line-height: 130%;
  text-align: center;
  font-size: 48px;
  font-weight: 600;
`

const Desc = styled.div`
  text-align: center;
  font-size: 15px;
  line-height: 150%;
`

const ChooseUnit = styled.div`
  width: 420px;
  height: 67px;
  display: flex;
  margin-top: 64px;
  justify-content: space-between;
  margin-bottom: 64px;
`

const UnitBorder = styled.div`
  width: 136px;
  height: 47px;
  border: ${props => props.active ? "1px solid #425563" : "1px solid var(--gray-color)" };
  border-radius: ${props => props.border};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  background-color: ${props => props.active ? "var(--main-color)" : "white"};
  color: ${props => props.active ? "white" : "var(--main-color)"};
  cursor: pointer;
`

const SubmitNext = styled.div`
  width: 640px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Form = () => {

  const [width, setWidth] = useState()
  const widthRef = useRef();

  const clubdata = [
    {id: 1, name: "v.friends"},
    {id: 2, name: "EDCAN"},
    {id: 3, name: "MIR"},
    {id: 4, name: "IWOP"},
    {id: 5, name: "TATE"},
    {id: 6, name: "Zer0pen"},
    {id: 7, name: "RG"},
    {id: 8, name: "자의누리"},
    {id: 9, name: "아우내"},
    {id: 10, name: "App:ple Pi"}
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      widthRef.current = window.innerWidth;
      const handleResize = () => (widthRef.current = window.innerWidth);
      window.addEventListener("resize", handleResize);
      setWidth(widthRef.current)

      if (club1[0] && club2[0] && club3[0]) {
        setInputInfo([true])
      }

      return () =>
        clearInterval(interval);
    })
  });

  const [club1, setClub1] = useState([false, "1지망"])
  const [club2, setClub2] = useState([false, "2지망"])
  const [club3, setClub3] = useState([false, "3지망"])

  const [inputInfo, setInputInfo] = useState([false, "", "", ""])

  return (
    <>
      <Head>
        <title>동아리 지원하기</title>
        <meta
          name="description"
          content="2023 콘텐츠디자인과 시연회 thisPlay!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Layout>
        <Child>
          <ApplyTitle>
            <Title>
              콘텐츠디자인과<br/>
              동아리 지원
            </Title>
            <Desc>
              3지망까지 선택할 수 있습니다. 공통 질문에 답한 후, <br/>
              동아리별 선택질문을 답해주세요. 포트폴리오 제출은 선택입니다. <br/>
              지망 순위가 없을 경우 “지망없음"을 선택하세요. <br/>
            </Desc>
          </ApplyTitle>
          <ChooseUnit>

            <UnitBorder
              border="32px 8px 8px 32px"
              onClick={() => setClub1([true, "EDCAN"])}
              active={club1[0] === true}
            >
              {club1[1]}
            </UnitBorder>

            <UnitBorder
              border="8px 8px 8px 8px"
              onClick={() => setClub2([true, "자의누리"])}
              active={club2[0] === true}
            >
              {club2[1]}
            </UnitBorder>

            <UnitBorder
              border="8px 32px 32px 8px"
              onClick={() => setClub3([true, "App:ple Pi"])}
              active={club3[0] === true}
            >
              {club3[1]}
            </UnitBorder>
          </ChooseUnit>
          { inputInfo[0] &&
              <SubmitNext>
               
                <Box
                  title="학번"
                  desc="필수 입력사항입니다."
                  placeholder="학번 5자리를 정확하게 입력해주세요"
                  height="56px"
                  value={inputInfo[1]}
                  onPaste={(event) => setInputInfo(
                    [true, event.target.value, inputInfo[2], inputInfo[3]]
                  )}
                  onChange={(event) => setInputInfo(
                    [true, event.target.value, inputInfo[2], inputInfo[3]]
                  )}/>

                <Box
                  title="이름"
                  desc="필수 입력사항입니다."
                  placeholder="홍길동"
                  height="56px"
                  value={inputInfo[2]}
                  onPaste={(event) => setInputInfo(
                    [true, inputInfo[1], event.target.value, inputInfo[3]]
                  )}
                  onChange={(event) => setInputInfo(
                    [true, inputInfo[1], event.target.value, inputInfo[3]]
                  )}/>

                <Box
                  title="전화번호"
                  desc="필수 입력사항입니다."
                  placeholder="010 1234 5678"
                  height="56px"
                  value={inputInfo[3]}
                  onPaste={(event) => setInputInfo(
                    [true, inputInfo[1], inputInfo[2], event.target.value]
                  )}
                  onChange={(event) => setInputInfo(
                    [true, inputInfo[1], inputInfo[2], event.target.value]
                  )}/>  

                <Submit>
                  <Button
                    // onIncrement={submitOK}
                    color={false}
                    width="130px" 
                    title="다음 단계"
                  >
                  </Button>
                </Submit>

              </SubmitNext>
            }
        </Child>
      </Layout>
    </>
  )
}

export default Form