import styled from "@emotion/styled";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import LogoActive from "../assets/logoActive.svg";
import {useRouter} from "next/router";


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

const Icon = styled.div`
  font-size: 24px;
  color: #7a6e69;
`;

const HeaderV2 = () => {
  const router = useRouter();
  return (
    <Layout>
      <Box>
        <Image className="logo" onClick={() => router.push("/")} src={LogoActive} alt="Logo" width={77} height={20} />
        <ClubSelectButton>
          동아리 소개
          <Icon className="material-symbols-outlined">expand_more</Icon>
        </ClubSelectButton>
      </Box>
    </Layout>
  );
};

export default HeaderV2;
