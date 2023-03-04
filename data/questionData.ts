type QuestionInfo = {
  id: number,
  title: string,
  desc: string
};

export type QuestionList = {
  id: number,
  title: string,
  desc: string
}[];

const questionInfo: QuestionInfo[] = [
  {
    id: 1,
    title: "동아리가 고민될땐 어떡하나요?",
    desc: "> 시연회 사이트를 통해 여러분의 적성에 맞는 동아리를 찾아보세요!",
  },
  {
    id: 2,
    title: "노트북이 꼭 필요하나요?",
    desc: "> 동아리에서 쓰는 용도 외에도 과제를 수행하기 위해 노트북이 필요한 경우가 많습니다.<br/>하지만, 노트북 소지가 필수는 아니므로 신중하게 고르시는게 좋겠죠?",
  },
  {
    id: 3,
    title: "동아리는 어떻게 신청하나요?",
    desc: "> 3월 11일부터 12일까지 사이트에 공개되는 면접 폼 작성을 통해 신청할 수 있어요!",
  },
  {
    id: 4,
    title: "포트폴리오를 받나요?",
    desc: "> 동아리마다 상이하지만 내가 가고싶은<br/>동아리중 포트폴리오를 받는 동아리가<br/>한곳이라도 존재한다면 면접 지원폼에<br/>포트폴리오를 기재해주세요!",
  },
  {
    id: 5,
    title: "언제 진행되나요?",
    desc: "> 3월 2일부터 온라인으로, 3월 7일 7교시에 오프라인으로 진행됩니다! 아마... 도요?",
  },
  {
    id: 6,
    title: "시연회가 도대체 뭔가요?",
    desc: "> 콘텐츠디자인과 시연회는 2020년부터 매년 신입생들을 위해 준비하는 행사예요.",
  },
  {
    id: 7,
    title: "동아리에서 전부 탈락하면 어떻게 되나요?",
    desc: "> 동아리에서 전부 탈락하면 인원이<br/>다 모집되지 않은 동아리중 2차면접을<br/>응시해서 들어갈 수 있어요!",
  },
  {
    id: 8,
    title: "제가 궁금한게 여기에 없어요...",
    desc: "> 혹시 추가적으로 궁금한 사항이 있다면<br/>시연회 인스타그램 DM으로 연락해주세요!"
  },
];

const questionList: QuestionList = questionInfo.map((questions) => ({
  id: questions.id,
  title: questions.title, // 'name' -> 'title'로 수정
  desc: questions.desc,
}));

export default questionList;
