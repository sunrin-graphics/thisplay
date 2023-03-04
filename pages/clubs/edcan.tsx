import Head from "next/head";
import React from "react";
import HeaderV2 from "@/components/HeaderV2";
import Footer from "@/components/Footer";
import styled from "@emotion/styled";

const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  width: 100%;
  margin-top: 110px;
  display: flex;
  justify-content: center;
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
`;

const ApplicationButton = styled.button`
  width: 389px;
  height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00a9ce;
  border-radius: 20px;
  font-weight: 600;
  font-size: 18px;
  border: none;
  line-height: 150%;
  color: #425563;
  transition: all 0.2s ease;
  &:hover {
    filter: brightness(1.1);
    transform: scale(1.05);
  }
`;

const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-content: center;
`;

const BackIcon = styled.span`
  width: 64px;
  height: 64px;
  color: #7a6e69;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackAndClub = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-weight: 600;
  font-size: 60px;
  color: #332c29;
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

const BoxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 389px;
`;

const ClubInfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
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
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ClubInfoContentText = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: rgba(51, 32, 24, 0.65);
`;

export default function Edcan() {
  return (
    <>
      <Head>
        <title>EDCAN - thisPlay!</title>
        <meta
          name="description"
          content="2023 콘텐츠디자인과 시연회 thisPlay!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HeaderV2 />
        <Main>
          <Wrapper>
            <Row>
              <BackAndClub>
                <BackIcon className="material-symbols-rounded">
                  arrow_back_ios
                </BackIcon>
                EDCAN
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
                  fill="#00A9CE"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.5 37.1939C30.6152 37.1939 37.1939 30.6152 37.1939 22.5C37.1939 14.3848 30.6152 7.80612 22.5 7.80612C14.3848 7.80612 7.80612 14.3848 7.80612 22.5C7.80612 30.6152 14.3848 37.1939 22.5 37.1939ZM22.5 31.6837C27.572 31.6837 31.6837 27.572 31.6837 22.5C31.6837 17.428 27.572 13.3163 22.5 13.3163C17.428 13.3163 13.3163 17.428 13.3163 22.5C13.3163 27.572 17.428 31.6837 22.5 31.6837Z"
                  fill="#00A9CE"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45ZM22.5 39.4898C31.8832 39.4898 39.4898 31.8832 39.4898 22.5C39.4898 13.1168 31.8832 5.5102 22.5 5.5102C13.1168 5.5102 5.5102 13.1168 5.5102 22.5C5.5102 31.8832 13.1168 39.4898 22.5 39.4898Z"
                  fill="#00A9CE"
                />
                <path
                  d="M89.0102 0.918367C89.0102 0.411167 88.599 0 88.0918 0H78.9082C78.401 0 77.9898 0.411167 77.9898 0.918367V6.9801C77.9898 7.79828 77.0006 8.20803 76.422 7.62949L72.1358 3.34321C71.7771 2.98457 71.1956 2.98457 70.837 3.34321L64.3432 9.83705C63.9845 10.1957 63.9845 10.7772 64.3432 11.1358L68.6294 15.4221C69.208 16.0006 68.7982 16.9898 67.98 16.9898H61.9184C61.4112 16.9898 61 17.401 61 17.9082L61 27.0919C61 27.5991 61.4112 28.0102 61.9184 28.0102H67.98C68.7982 28.0102 69.208 28.9994 68.6294 29.578L64.3432 33.8642C63.9845 34.2229 63.9845 34.8044 64.3432 35.163L70.837 41.6568C71.1957 42.0155 71.7771 42.0155 72.1358 41.6568L76.422 37.3706C77.0006 36.792 77.9898 37.2018 77.9898 38.02V44.0816C77.9898 44.5888 78.401 45 78.9082 45H88.0918C88.599 45 89.0102 44.5888 89.0102 44.0816V38.02C89.0102 37.2018 89.9994 36.7921 90.578 37.3706L94.8642 41.6569C95.2228 42.0155 95.8043 42.0155 96.163 41.6569L102.657 35.163C103.015 34.8044 103.015 34.2229 102.657 33.8643L98.3705 29.578C97.792 28.9994 98.2017 28.0102 99.0199 28.0102H105.082C105.589 28.0102 106 27.5991 106 27.0919V17.9082C106 17.401 105.589 16.9898 105.082 16.9898H99.0199C98.2018 16.9898 97.792 16.0006 98.3706 15.4221L102.657 11.1358C103.015 10.7772 103.015 10.1957 102.657 9.83703L96.163 3.34319C95.8043 2.98455 95.2229 2.98455 94.8642 3.34319L90.578 7.62946C89.9994 8.208 89.0102 7.79825 89.0102 6.98007V0.918367Z"
                  fill="#425563"
                />
              </svg>
            </Row>
            <Row
              style={{
                marginTop: "40px",
              }}
            >
              <Column>
                <ClubInfoGroup>
                  <ClubInfoTitleText>동아리 설명</ClubInfoTitleText>
                  <Column2>
                    <ClubInfoContentText>
                      저희 EDCAN은 2015년부터 시작된 소프트웨어과 소속의 모바일
                      콘텐츠 개발 동아리로,
                    </ClubInfoContentText>
                    <ClubInfoContentText>
                      안드로이드 앱 개발과 앱을 디자인하는 UI/UX를 담당하고
                      있습니다.
                    </ClubInfoContentText>
                  </Column2>
                </ClubInfoGroup>
                <ClubInfoGroup>
                  <ClubInfoTitleText>수상 실적</ClubInfoTitleText>
                  <Column2>
                    <ClubInfoContentText>
                      2022 소프트웨어과 디지털 콘텐츠 개발대회 앱/웹 콘텐츠 부문
                      금상
                    </ClubInfoContentText>
                    <ClubInfoContentText>
                      2022 소프트웨어과 디지털 콘텐츠 개발대회 앱/웹 콘텐츠 부문
                      동상
                    </ClubInfoContentText>

                    <ClubInfoContentText>
                      2022 제 8회 선린 해커톤 은상
                    </ClubInfoContentText>
                    <ClubInfoContentText>
                      2022 제 8회 선린 해커톤 동상
                    </ClubInfoContentText>
                    <ClubInfoContentText>
                      2022 제 8회 선린 해커톤 동상
                    </ClubInfoContentText>
                    <ClubInfoContentText>
                      제주 ICT이노베이션스퀘어 해커톤 대상
                    </ClubInfoContentText>
                    <ClubInfoContentText>
                      2022 메타버스 개발자 경진대회 대상
                    </ClubInfoContentText>
                    <ClubInfoContentText>
                      제 20회 임베디드 소프트웨어 경진대회 틴 스타트업 부문
                      성균관대학교 총장상
                    </ClubInfoContentText>
                    <ClubInfoContentText>
                      2022 콘텐츠디자인과 그래픽 디자인 공모전 UI/UX 은상
                    </ClubInfoContentText>
                    <ClubInfoContentText>
                      2022 콘텐츠디자인과 그래픽 디자인 공모전 UI/UX 은상
                    </ClubInfoContentText>
                    <ClubInfoContentText>
                      2022 콘텐츠디자인과 그래픽 디자인 공모전 UI/UX 은상
                    </ClubInfoContentText>
                    <ClubInfoContentText>
                      2022 콘텐츠디자인과 영상 공모전 광고 부문 대상
                    </ClubInfoContentText>
                    <ClubInfoContentText>
                      2022 콘텐츠디자인과 영상 공모전 광고 부문 금상
                    </ClubInfoContentText>
                    <ClubInfoContentText>
                      2022 콘텐츠디자인과 영상 공모전 모션 그래픽 부문 금상
                    </ClubInfoContentText>
                  </Column2>
                </ClubInfoGroup>
              </Column>
              <BoxGroup>
                <ClubInfoBox>
                  <ClubInfoTitle>소속 학과</ClubInfoTitle>
                  <ClubInfoContent>소프트웨어과</ClubInfoContent>
                </ClubInfoBox>
                <ClubInfoBox>
                  <ClubInfoTitle>모집 분야</ClubInfoTitle>
                  <ClubInfoContent>UI/UX 디자인</ClubInfoContent>
                </ClubInfoBox>
                <ClubInfoBox>
                  <ClubInfoTitle>모집 인원</ClubInfoTitle>
                  <ClubInfoContent>총 3명(디자이너)</ClubInfoContent>
                </ClubInfoBox>
                <ClubInfoBox>
                  <ClubInfoTitle>사이트</ClubInfoTitle>
                  <ClubInfoContent>https://edcan.kr</ClubInfoContent>
                </ClubInfoBox>
                <ClubInfoBox>
                  <ClubInfoTitle>외부 SNS</ClubInfoTitle>
                  <ClubInfoContent>소프트웨어과</ClubInfoContent>
                </ClubInfoBox>
                <ApplicationButton>동아리 지원하기</ApplicationButton>
              </BoxGroup>
            </Row>
            <ClubInfoGroup
              style={{
                marginTop: "35px",
              }}
            >
              <ClubInfoTitleText>작품 소개</ClubInfoTitleText>
            </ClubInfoGroup>
          </Wrapper>
        </Main>
        <Footer />
      </Layout>
    </>
  );
}
