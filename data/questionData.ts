// @ts-nocheck

type QuestionInfo = {
  id: number;
  title: string;
  desc: string;
};

export type QuestionList = {
  id: number;
  title: string;
  desc: string;
}[];

const questionInfo: QuestionInfo[] = [
  {
    id: 3,
    title: "동아리가 고민될 때는 어쩌죠?",
    desc: "시연회 사이트를 통해 여러분의 적성에 맞는 동아리를 찾아보세요!",
  },

  {
    id: 2,
    title: "언제 진행되나요?",
    desc:
      "3월 2일부터 온라인으로, 3월 10일 \n" +
      "방과후에 오프라인으로 진행됩니다!",
  },

  {
    id: 4,
    title: "동아리는 어떻게 신청하나요?",
    desc: "신청이 가능한 날짜에 시연회 사이트에\n" + "신청 폼이 공개됩니다!",
  },
  {
    id: 6,
    title: "전부 탈락하면 어떻게 되나요?",
    desc: "추가 모집이 필요한 동아리에서\n" + "추가모집을 진행합니다.",
  },
  {
    id: 7,
    title: "학교에서 노트북이 필요한가요?",
    desc: "동아리에서 쓰는 용도 외에도 과제를 수행하기 위해 노트북이 필요한 경우가 있어요. 하지만, 노트북 소지가 필수는 아니므로 신중하게 고르시는 것이 좋겠죠?",
  },
  {
    id: 5,
    title: "포트폴리오를 받나요?",
    desc: "동아리마다 상이하지만, 내가 지원하는 동아리 중 포트폴리오를 받는 동아리가 한 곳이라도 존재한다면 면접 지원 폼에 포트폴리오를 첨부해주세요.",
  },
  {
    id: 1,
    title: "시연회가 도대체 무엇인가요?",
    desc: "콘텐츠디자인과 시연회는 2020년부터 매년 신입생들의 동아리 선택과 앞으로의 선린 생활을 도와주기 위해 준비하는 행사에요.",
  },

  {
    id: 8,
    title: "궁금한 질문이 여기에 없어요.",
    desc: "시연회 인스타그램 DM으로 질문을 남겨주시면 답변해드리겠습니다!",
  },
];

const questionList: QuestionList = questionInfo.map((questions) => ({
  id: questions.id,
  title: questions.title, // 'name' -> 'title'로 수정
  desc: questions.desc,
}));

export default questionList;
