import styled from "@emotion/styled";
import Image from "next/image";

const Parent = styled.div`
  width: 390px;
  height: 138px;
  background-color: #f3f2f1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  align-self: center;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.03);
  }
  @media (max-width: 1300px) {
    width: 320px;
  }
`;

const Child = styled.div`
  padding: 24px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface GrayBoxProps {
  name: string;
  department: string;
  desc: string;
  logo: string;
}

const Name = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #332c29;
`;

const Box1 = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const Department = styled.div`
  font-size: 16px;
  color: #594e49;
`;

const Desc = styled.div`
  font-size: 16px;
  color: #594e49;
  font-weight: 500;
`;

const BoxChild = styled.div`
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Icon = styled.div`
  font-size: 20px;
  color: #766a64;
  font-weight: 600;
`;

const TitleAndButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const GrayBox = ({ name, department, desc, logo }: GrayBoxProps) => {
  return (
    <Parent>
      <Child>
        <Box1>
          <TitleAndButton>
            <Name>{name}</Name>
            <Icon className="material-symbols-outlined">
              google_plus_reshare
            </Icon>
          </TitleAndButton>
          <BoxChild>
            <Department>{department}</Department>
            <Desc>{desc}</Desc>
          </BoxChild>
        </Box1>
        <Image src={logo} alt="logo" width={64} height={64} />
      </Child>
    </Parent>
  );
};

export default GrayBox;
