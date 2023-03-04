import React from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import Header from "@/components/HeaderV2";
import { GetServerSideProps } from 'next';
import {useRouter} from "next/router";

const Child = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap:12px;
`

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Child404 = styled.div`
  font-size: 128px;
  font-weight: 600;
  line-height: 160px;
  color: #5C504B;
`

const ChildCaution = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 34px;
  text-align: center;
  color: #5C504B;
`

const Btn = styled.button`
  width: 192px;
  height: 48px;
  border-radius: 100px;
  background-color: #EFEDEC;
  display: flex;
  border: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  cursor: pointer;
  color: #594D48;
  &:hover {
    transform: scale(1.03);
    filter: brightness(0.9);
  }
`

const Section2 = styled.div`
  gap: 24px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`

export default function Fun404() {
  const router = useRouter();
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
            <Btn onClick={() => router.push("/")}>
              메인 페이지로 돌아가기
            </Btn>  
          </Section2>
        </Child>
      </Layout>
    </>
  );
}