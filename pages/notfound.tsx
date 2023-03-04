import React from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import Header from "@/components/HeaderV2";
import { GetServerSideProps } from 'next';

const Child = styled.div`
  height: 298px;
  width: 290px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #5C504B;
  flex-direction: column;
`

const Layout = styled.div`
  width: 100vw;
  height: 55vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Child404 = styled.div`
  font-size: 128px;
  font-weight: 600;
`

const ChildCaution = styled.div`
  font-size: 18px;
  text-align: center;
  line-height: 175%;
`

const Btn = styled.div`
  width: 192px;
  height: 48px;
  border-radius: 100px;
  background-color: #EFEDEC;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
`

const Section2 = styled.div`
  width: 100%;
  height: 126px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`

export default function Fun404() {
  return (
    <>
      <Head>
        <title>thisPlay! - 404</title>
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
          <Child404>
            404
          </Child404>
          <Section2>
            <ChildCaution>
              잘못된 접근입니다. <br/>
              올바른 URL로 접속했는지 확인해주세요.
            </ChildCaution>
            <Btn>
              메인 페이지로 돌아가기
            </Btn>  
          </Section2>
        </Child>
      </Layout>
    </>
  );
}