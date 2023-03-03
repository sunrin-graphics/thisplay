type ClubInfo = {
  id: number;
  name: string;
  department: string;
  desc: string;
  logo: string;
  field: string;
  member: number;
  site: string;
  sns: string[];
  awards: string[];
  info: string;
};

export type ClubList = {
  id: number;
  name: string;
  department: string;
  desc: string;
  logo: string;
  field: string;
  member: number;
  site: string;
  sns: string[];
  awards: string[];
  info: string;
}[];

const clubInfo: ClubInfo[] = [
  {
    id: 1,
    name: "v.friends",
    department: "콘텐츠디자인과",
    desc: "디자인 교육 봉사 동아리",
    logo: "",
    field: "",
    member: 0,
    site: "",
    sns: [],
    awards: [],
    info: ""
  },
  {
    id: 2,
    name: "EDCAN",
    department: "소프트웨어과",
    desc: "모바일 콘텐츠 개발 동아리",
    logo: "",
    field: "",
    member: 0,
    site: "",
    sns: [],
    awards: [],
    info: ""
  },
  {
    id: 3,
    name: "App:ple Pi",
    department: "소프트웨어과",
    desc: "앱 개발·창업 동아리",
    logo: "",
    field: "",
    member: 0,
    site: "",
    sns: [],
    awards: [],
    info: ""
  },
  {
    id: 4,
    name: "IWOP",
    department: "소프트웨어과",
    desc: "웹 개발 동아리",
    logo: "",
    field: "",
    member: 0,
    site: "",
    sns: [],
    awards: [],
    info: ""
  },
  {
    id: 5,
    name: "MIR",
    department: "콘텐츠디자인과",
    desc: "만화·일러스트레이션 동아리",
    logo: "",
    field: "",
    member: 0,
    site: "",
    sns: [],
    awards: [],
    info: ""
  },
  {
    id: 6,
    name: "TATE",
    department: "콘텐츠디자인과",
    desc: "디자인 연구 동아리",
    logo: "",
    field: "",
    member: 0,
    site: "",
    sns: [],
    awards: [],
    info: ""
  },
  {
    id: 7,
    name: "RG",
    department: "소프트웨어과",
    desc: "게임 전문 개발 동아리",
    logo: "",
    field: "",
    member: 0,
    site: "",
    sns: [],
    awards: [],
    info: ""
  },
  {
    id: 8,
    name: "zer0pen",
    department: "소프트웨어과",
    desc: "게임 전문 개발 동아리",
    logo: "",
    field: "",
    member: 0,
    site: "",
    sns: [],
    awards: [],
    info: ""
  },
  {
    id: 9,
    name: "아우내",
    department: "콘텐츠디자인과",
    desc: "영상·영화 일반 동아리",
    logo: "",
    field: "",
    member: 0,
    site: "",
    sns: [],
    awards: [],
    info: ""
  },
  {
    id: 10,
    name: "자의누리",
    department: "콘텐츠디자인과",
    desc: "영상제작 전문 동아리",
    logo: "",
    field: "",
    member: 0,
    site: "",
    sns: [],
    awards: [],
    info: ""
  },
];

const clubList: ClubList = clubInfo.map(club => ({
  id: club.id,
  name: club.name,
  department: club.department,
  desc: club.desc,
  logo: club.logo,
  field: club.field,
  member: club.member,
  site: club.site,
  sns: club.sns,
  awards: club.awards,
  info: club.info
}));

export default clubList;