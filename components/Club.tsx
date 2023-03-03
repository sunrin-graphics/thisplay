import styled from "@emotion/styled";
import Image from "next/image";
import GrayBox from "@/components/GrayBox";
import clubList, { ClubList } from "../data/clubInfo";

const Parent = styled.div`
  width: 100%;
  height: 1008px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Child = styled.div`
  width: 1218px;
  height: 728px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

const Emphasize = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

const Title = styled.div`
  font-size: 28px;
  color: #332C29;
  font-weight: 500;
`

const Desc = styled.div`
  font-size: 20px;
  color: #33251F;
  opacity: 0.8;
`

const ClubParent = styled.div`
  height: 624px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`

const clubData: ClubList = clubList;

const Club = () => {
  return (
    <Parent>
      <Child>
        <Emphasize>
          <Title>
            동아리 목록
          </Title>
          <Desc>
            시연회에 함께한 동아리들을 알아보세요!
          </Desc>
        </Emphasize>
        <ClubParent>
          {
            clubData.map((club) => (
              <div key={club.id}>
                <GrayBox
                  name={club.name}
                  department={club.department}
                  desc={club.desc}
                  logo={club.logo}
                />
              </div>
            ))
          }
        </ClubParent>
      </Child>
    </Parent>
  );
};

export default Club;
