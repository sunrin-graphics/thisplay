// @ts-nocheck

import Head from "next/head";
import React, { useEffect } from "react";
import HeaderV2 from "@/components/HeaderV2";
import Footer from "@/components/Footer";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import clubList, { ClubList } from "../../data/clubInfo";
import Image from "next/image";
import Header from "@/components/Header";

const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  width: 100%;
  margin-top: 110px;
  min-height: 100vh;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
    margin-top: 98px;
  }
`;

const ClubInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 28px;
  width: 389px;
  height: 59px;
  background: rgba(51, 27, 14, 0.06);
  border-radius: 20px;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ApplicationButton = styled.button`
  width: 389px;
  height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-weight: 600;
  font-size: 18px;
  border: none;
  line-height: 150%;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;

    svg {
      display: none;
    }
  }
`;

const ClubBox = styled.div`
  width: 100%;
  display: flex;
  padding: 28px;
  background: rgba(51, 27, 14, 0.06);
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const InfoTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: #332c29;
`;

const InfoContent = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: rgba(51, 32, 24, 0.65);
`;

const InfoContentV2 = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: rgba(51, 37, 31, 0.8);
`;

const ClubInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 90px;
  justify-content: space-between;
`;

const BackIcon = styled.span`
  cursor: pointer;
  width: 64px;
  height: 64px;
  color: #7a6e69;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 32px;
    height: 32px;
    font-size: 20px;
  }
`;

const BackAndClub = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-weight: 600;
  font-size: 60px;
  color: #332c29;

  @media screen and (max-width: 768px) {
    font-size: 30px;
    gap: 5px;
  }
`;

const ColumnV2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ClubInfoTitle = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;

  color: #332c29;
`;

const ClubInfoContent = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  /* identical to box height, or 27px */

  display: flex;
  align-items: center;
  text-align: right;

  color: #5a4d48;
`;
const ClubInfoContentV3 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BoxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 389px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 32px;
  }
`;

const ClubInfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media screen and (max-width: 768px) {
    margin-top: 32px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const ClubInfoTitleText = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: #332c29;

  @media screen and (max-width: 768px) {
    font-weight: 600;
    font-size: 25px;
    color: #000000;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ClubInfoContentText = styled.span`
  width: 560px;

  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: rgba(51, 32, 24, 0.65);

  @media screen and (max-width: 768px) {
    width: 100%;
    word-break: keep-all;
    color: rgba(51, 32, 24, 0.65);
    font-weight: 600;
  }
`;

const ClubInfoContentTextV2 = styled.span`
  width: 580px;
  font-weight: 500;
  font-size: 16px;
  line-height: 200%;
  color: rgba(51, 32, 24, 0.65);

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Edcan = () => {
  const router = useRouter();
  const { id } = router.query;

  const clubData: ClubList = clubList;
  const data = clubData.find((club) => club.id === Number(id));

  return (
    <>
      <Head>
        <title>동아리 소개</title>
        <meta
          name="description"
          content="2023 콘텐츠디자인과 시연회 thisPlay!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header isDetail={true} />
        <Main>
          {data && (
            <Wrapper>
              <Row>
                <BackAndClub>
                  <BackIcon
                    className="material-symbols-outlined"
                    onClick={() => router.push("/")}
                  >
                    arrow_back_ios
                  </BackIcon>
                  {data.name}
                </BackAndClub>
                <svg
                  width="106"
                  height="45"
                  viewBox="0 0 106 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M29.3878 22.5C29.3878 26.304 26.304 29.3878 22.5 29.3878C18.696 29.3878 15.6122 26.304 15.6122 22.5C15.6122 18.696 18.696 15.6122 22.5 15.6122C26.304 15.6122 29.3878 18.696 29.3878 22.5ZM23.8776 22.5C23.8776 23.2608 23.2608 23.8776 22.5 23.8776C21.7392 23.8776 21.1224 23.2608 21.1224 22.5C21.1224 21.7392 21.7392 21.1224 22.5 21.1224C23.2608 21.1224 23.8776 21.7392 23.8776 22.5Z"
                    fill={data.subColor}
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.5 37.1939C30.6152 37.1939 37.1939 30.6152 37.1939 22.5C37.1939 14.3848 30.6152 7.80612 22.5 7.80612C14.3848 7.80612 7.80612 14.3848 7.80612 22.5C7.80612 30.6152 14.3848 37.1939 22.5 37.1939ZM22.5 31.6837C27.572 31.6837 31.6837 27.572 31.6837 22.5C31.6837 17.428 27.572 13.3163 22.5 13.3163C17.428 13.3163 13.3163 17.428 13.3163 22.5C13.3163 27.572 17.428 31.6837 22.5 31.6837Z"
                    fill={data.subColor}
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45ZM22.5 39.4898C31.8832 39.4898 39.4898 31.8832 39.4898 22.5C39.4898 13.1168 31.8832 5.5102 22.5 5.5102C13.1168 5.5102 5.5102 13.1168 5.5102 22.5C5.5102 31.8832 13.1168 39.4898 22.5 39.4898Z"
                    fill={data.subColor}
                  />
                  <path
                    d="M89.0102 0.918367C89.0102 0.411167 88.599 0 88.0918 0H78.9082C78.401 0 77.9898 0.411167 77.9898 0.918367V6.9801C77.9898 7.79828 77.0006 8.20803 76.422 7.62949L72.1358 3.34321C71.7771 2.98457 71.1956 2.98457 70.837 3.34321L64.3432 9.83705C63.9845 10.1957 63.9845 10.7772 64.3432 11.1358L68.6294 15.4221C69.208 16.0006 68.7982 16.9898 67.98 16.9898H61.9184C61.4112 16.9898 61 17.401 61 17.9082L61 27.0919C61 27.5991 61.4112 28.0102 61.9184 28.0102H67.98C68.7982 28.0102 69.208 28.9994 68.6294 29.578L64.3432 33.8642C63.9845 34.2229 63.9845 34.8044 64.3432 35.163L70.837 41.6568C71.1957 42.0155 71.7771 42.0155 72.1358 41.6568L76.422 37.3706C77.0006 36.792 77.9898 37.2018 77.9898 38.02V44.0816C77.9898 44.5888 78.401 45 78.9082 45H88.0918C88.599 45 89.0102 44.5888 89.0102 44.0816V38.02C89.0102 37.2018 89.9994 36.7921 90.578 37.3706L94.8642 41.6569C95.2228 42.0155 95.8043 42.0155 96.163 41.6569L102.657 35.163C103.015 34.8044 103.015 34.2229 102.657 33.8643L98.3705 29.578C97.792 28.9994 98.2017 28.0102 99.0199 28.0102H105.082C105.589 28.0102 106 27.5991 106 27.0919V17.9082C106 17.401 105.589 16.9898 105.082 16.9898H99.0199C98.2018 16.9898 97.792 16.0006 98.3706 15.4221L102.657 11.1358C103.015 10.7772 103.015 10.1957 102.657 9.83703L96.163 3.34319C95.8043 2.98455 95.2229 2.98455 94.8642 3.34319L90.578 7.62946C89.9994 8.208 89.0102 7.79825 89.0102 6.98007V0.918367Z"
                    fill={data.mainColor}
                  />
                </svg>
              </Row>
              <Row
                style={{
                  marginTop: "40px",
                  "@media screen and (max-width: 768px)": {
                    marginTop: "20px",
                  },
                }}
              >
                <Column>
                  <ClubInfoGroup>
                    <ClubInfoTitleText>동아리 설명</ClubInfoTitleText>
                    <Column2>
                      <ClubInfoContentTextV2>{data.info}</ClubInfoContentTextV2>
                    </Column2>
                  </ClubInfoGroup>
                  <ClubInfoGroup>
                    <ClubInfoTitleText>주요 수상 실적</ClubInfoTitleText>
                    <Column2>
                      {data.awards.map((item, i: number) => (
                        <ClubInfoContentText key={i}>
                          {item}
                        </ClubInfoContentText>
                      ))}
                    </Column2>
                  </ClubInfoGroup>
                </Column>
                <BoxGroup>
                  <ClubBox>
                    <ClubInfoColumn>
                      <InfoTitle>{data.name}</InfoTitle>
                      <ColumnV2>
                        <InfoContentV2>{data.department}</InfoContentV2>
                        <InfoContentV2>{data.desc}</InfoContentV2>
                      </ColumnV2>
                    </ClubInfoColumn>
                    <Image src={data.logo} width={85} height={85} alt="logo" />
                  </ClubBox>
                  <ClubInfoBox>
                    <ClubInfoTitle>소속 학과</ClubInfoTitle>
                    <ClubInfoContent>{data.department}</ClubInfoContent>
                  </ClubInfoBox>
                  <ClubInfoBox>
                    <ClubInfoTitle>모집 분야</ClubInfoTitle>
                    <ClubInfoContent>{data.field}</ClubInfoContent>
                  </ClubInfoBox>
                  <ClubInfoBox>
                    <ClubInfoTitle>모집 인원</ClubInfoTitle>
                    <ClubInfoContent>총 {data.member}명</ClubInfoContent>
                  </ClubInfoBox>
                  <ClubInfoBox>
                    <ClubInfoTitle>사이트</ClubInfoTitle>
                    <ClubInfoContent>{data.site}</ClubInfoContent>
                  </ClubInfoBox>
                  <ClubInfoBox>
                    <ClubInfoTitle>외부 SNS</ClubInfoTitle>
                    <ClubInfoContentV3>
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C6.4775 2 2 6.50057 2 12.0515C2 17.0907 5.69333 21.252 10.505 21.9791V14.7152H8.03083V12.0733H10.505V10.3151C10.505 7.40436 11.9158 6.12698 14.3225 6.12698C15.475 6.12698 16.085 6.21326 16.3733 6.25179V8.55778H14.7317C13.71 8.55778 13.3533 9.53193 13.3533 10.6292V12.0733H16.3475L15.9417 14.7152H13.3533V22C18.2342 21.3349 22 17.1401 22 12.0515C22 6.50057 17.5225 2 12 2Z"
                          fill="#5A4D48"
                        />
                      </svg>
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.59844 3C4.51124 3 2 5.51356 2 8.60156V16.6016C2 19.6888 4.51356 22.2 7.60156 22.2H15.6016C18.6888 22.2 21.2 19.6864 21.2 16.5984V8.59844C21.2 5.51124 18.6864 3 15.5984 3H7.59844ZM17.2 6.2C17.6416 6.2 18 6.5584 18 7C18 7.4416 17.6416 7.8 17.2 7.8C16.7584 7.8 16.4 7.4416 16.4 7C16.4 6.5584 16.7584 6.2 17.2 6.2ZM11.6 7.8C14.2472 7.8 16.4 9.9528 16.4 12.6C16.4 15.2472 14.2472 17.4 11.6 17.4C8.9528 17.4 6.8 15.2472 6.8 12.6C6.8 9.9528 8.9528 7.8 11.6 7.8ZM11.6 9.4C10.7513 9.4 9.93737 9.73714 9.33726 10.3373C8.73714 10.9374 8.4 11.7513 8.4 12.6C8.4 13.4487 8.73714 14.2626 9.33726 14.8627C9.93737 15.4629 10.7513 15.8 11.6 15.8C12.4487 15.8 13.2626 15.4629 13.8627 14.8627C14.4629 14.2626 14.8 13.4487 14.8 12.6C14.8 11.7513 14.4629 10.9374 13.8627 10.3373C13.2626 9.73714 12.4487 9.4 11.6 9.4Z"
                          fill="#5A4D48"
                        />
                      </svg>
                    </ClubInfoContentV3>
                  </ClubInfoBox>
                  <ApplicationButton
                    style={{
                      backgroundColor: data.mainColor,
                      color: data.textColor,
                    }}
                  >
                    동아리 지원하기
                  </ApplicationButton>
                </BoxGroup>
              </Row>
              <ClubInfoGroup
                style={{
                  marginTop: "35px",
                }}
              ></ClubInfoGroup>
            </Wrapper>
          )}
        </Main>
        <Footer />
      </Layout>
    </>
  );
};

export default Edcan;
