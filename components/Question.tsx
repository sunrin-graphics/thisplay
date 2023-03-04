import styled from "@emotion/styled";
import Image from "next/image";
import GrayBox from "@/components/GrayBox";

import {useState} from "react"

import questionList, { QuestionList } from "../data/questionData";
const data: QuestionList = questionList;

const Parent = styled.div`
  width: 100%;
  height: 730px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Child = styled.div`
  width: 1440px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Zone = styled.div`
  width: 340px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

const Part = styled.div`
  width: 100%;
  height: 346px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AutoBox = styled.div`
  width: 100%;
  height: auto;
  padding: 24px;
  background-color: #F3F2F1;
  border-radius: 20px;
`

const ParentBox = styled.div`
  width: 342px;
  height: 340px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #332C29;
  margin-bottom: 8px;
`

const Desc = styled.div`
  color: #594E49;
  line-height: 150%;
`

const ZoneTitle = styled.div`
  font-size: 28px;
  color: #332C29;
  font-weight: 500;
`

const ZoneDesc = styled.div`
  font-size: 20px;
  color: #33251F;
  opacity: 0.8;
`

const Mg = styled.div`
  width: 342px;
  height: 24px;
`

const Question = () => {
  return (
    <Parent>
      <Child>
        <Zone>
          <ZoneTitle>
            질문과 답변
          </ZoneTitle>
          <ZoneDesc>
            많이하는 질문에 대한 답변들을 모아봤어요!
          </ZoneDesc>
        </Zone>
        <Part>
          {[...Array(4)].map((_, i) => (
            <ParentBox key={i}>
              {[...Array(2)].map((_, j) => {
                const question = questionList[(i * 2) + j];
                return (
                  <>
                    {j === 1 && <Mg/>}
                    <AutoBox key={i + j}>
                      <Title>{question.title}</Title>
                      <Desc dangerouslySetInnerHTML={{ __html: question.desc }}></Desc>
                    </AutoBox>
                  </>
                );
              })}
            </ParentBox>
          ))}
        </Part>
      </Child>
    </Parent>
  );
};

export default Question;
