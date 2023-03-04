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
  mainColor: string;
  subColor: String;
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
  mainColor: string;
  subColor: String;
}[];

const clubInfo: ClubInfo[] = [
  {
    id: 1,
    name: "v.friends",
    department: "콘텐츠디자인과",
    desc: "디자인 교육 봉사 동아리",
    logo: "images/v.friends.svg",
    field: "",
    member: 0,
    site: "",
    sns: [],
    awards: [],
    info: "",
    mainColor: "",
    subColor: ""
  },
  {
    id: 2,
    name: "EDCAN",
    department: "소프트웨어과",
    desc: "모바일 콘텐츠 개발 동아리",
    logo: "images/edcan.svg",
    field: "",
    member: 0,
    site: "",
    sns: [],
    awards: [],
    info: "",
    mainColor: "",
    subColor: ""
  },

  {
    id: 3,
    name: "IWOP",
    department: "소프트웨어과",
    desc: "웹 개발 동아리",
    logo: "images/iwop.svg",
    field: "",
    member: 0,
    site: "",
    sns: [],
    awards: [],
    info: "",
    mainColor: "",
    subColor: ""
  },
  {
    id: 4,
    name: "MIR",
    department: "콘텐츠디자인과",
    desc: "만화·일러스트레이션 동아리",
    logo: "images/mir.svg",
    field: "",
    member: 0,
    site: "",
    sns: [],
    awards: [],
    info: "",
    mainColor: "",
    subColor: ""
  },
  {
    id: 5,
    name: "TATE",
    department: "콘텐츠디자인과",
    desc: "디자인 연구 동아리",
    logo: "images/tate.svg",
    field: "",
    member: 0,
    site: "",
    sns: [],
    awards: [],
    info: "",
    mainColor: "",
    subColor: ""
  },
  {
    id: 6,
    name: "RG",
    department: "소프트웨어과",
    desc: "게임 개발 전문 동아리",
    logo: "images/rg.svg",
    field: "",
    member: 0,
    site: "",
    sns: [],
    awards: [],
    info: "",
    mainColor: "",
    subColor: ""
  },
  {
    id: 7,
    name: "zer0pen",
    department: "소프트웨어과",
    desc: "게임 개발 전문 동아리",
    logo: "images/zer0pen.svg",
    field: "",
    member: 0,
    site: "",
    sns: [],
    awards: [],
    info: "",
    mainColor: "",
    subColor: ""
  },
  {
    id: 8,
    name: "아우내",
    department: "콘텐츠디자인과",
    desc: "영상·영화 일반 동아리",
    logo: "/images/aun.svg",
    field: "",
    member: 0,
    site: "",
    sns: [],
    awards: [],
    info: "",
    mainColor: "",
    subColor: ""
  },
  {
    id: 9,
    name: "자의누리",
    department: "콘텐츠디자인과",
    desc: "영상 제작 전문 동아리",
    logo: "/images/junr.svg",
    field: "",
    member: 0,
    site: "",
    sns: [],
    awards: [],
    info: "",
    mainColor: "",
    subColor: ""
  },
  {
    id: 10,
    name: "App:ple Pi",
    department: "소프트웨어과",
    desc: "앱 개발·창업 동아리",
    logo: "images/apple.pi.svg",
    field: "",
    member: 0,
    site: "",
    sns: [],
    awards: [],
    info: "",
    mainColor: "",
    subColor: ""
  },
];

const clubList: ClubList = clubInfo.map((club) => ({
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
  info: club.info,
  mainColor: club.mainColor,
  subColor: club.subColor,
}));

export default clubList;
