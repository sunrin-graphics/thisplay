import styled from "@emotion/styled";
import Image from "next/image";

const Parent = styled.div`
  width: 390px;
  height: 138px;
  background-color: #F3F2F1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
`

const Child = styled.div`
  width: 342px;
  height: 90px;
`

interface GrayBoxProps {
  name: string;
  department: string;
  desc: string;
  logo: string;
}

const Name = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #332C29;
`

const Box1 = styled.div`
  display: flex;
  height: 90px;
  flex-direction: column;
  justify-content: space-between;
`

const Department = styled.div`
  font-size: 16px;
  color: #594E49;
`

const Desc = styled.div`
  font-size: 16px;
  color: #594E49;
  font-weight: 500;
`

const BoxChild = styled.div`
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const GrayBox = ({ name, department, desc, logo }: GrayBoxProps) => {
  return (
    <Parent>
      <Child>
        <Box1>
          <>
            <Name>
              {name}
            </Name>
          </>
          <BoxChild>
            <Department>
              {department}
            </Department>
            <Desc>
              {desc}
            </Desc>
          </BoxChild>
        </Box1>
      </Child>
    </Parent>
  );
};

export default GrayBox;
