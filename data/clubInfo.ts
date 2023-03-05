// @ts-nocheck

type ClubInfo = {
  id: number;
  name: string;
  department: string;
  desc: string;
  logo: string;
  field: string;
  member: number;
  site: string;
  sns: {
    instagram: string;
    facebook: string;
  };
  awards: string[];
  info: string;
  mainColor: string;
  subColor: string;
  textColor: string;
  gallery: {
    path: string;
    name: string;
    isVideo: boolean;
  }[];
};

export type ClubList = ClubInfo[];

const clubInfo: ClubInfo[] = [
  {
    id: 1,
    name: "v.friends",
    department: "콘텐츠디자인과",
    desc: "디자인 교육 봉사 동아리",
    logo: "/images/v.friends.svg",
    field: "그래픽 디자이너",
    member: 8,
    site: "https://vfriends.github.io/",
    sns: {
      instagram: "https://www.instagram.com/v.friends_official/",
      facebook: "https://www.facebook.com/with.v.friends",
    },
    awards: [
      "2019년",
      "",
      "스마틴앱챌린지 STA+C 생활부문 최우수상 | 김민",
      "정션해커톤 Zepetto 부문 3등 | 최성희",
      "",
      "2020년",
      "",
      "한국공항공사 창업경진대회 우수상 | 김민",
      "선린인터넷고등학교 그래픽디자인 공모전 모션그래픽 부문 대상 | 김민",
      "선린인터넷고등학교 그래픽디자인 공모전 포스터 부문 대상 | 김시온",
      "선린인터넷고등학교 그래픽디자인 공모전 UI/UX 부문 대상 | 최원호",
      "",
      "2021년",
      "",
      "국민의힘 X 여의도연구원 공정한 대한민국 만들기 정책공모전 대상 | 김민",
      "동그라미재단과 함께하는 TIDE 인스티튜드 Teu Med 4기 최우수상 | 김민",
      "",
      "2022년",
      "",
      "선린인터넷고등학교 그래픽공모전 캐릭터 부문 금상 | 박정우",
      "선린인터넷고등학교 영상공모전 모션그래픽 부문 대상 | 박정우",
      "선린인터넷고등학교 영상공모전 광고 부문 금상 | 박정우",
      "",
      "2023년",
      "숙명여자대학교 AI - X Super Hackathon Challenge 최우수상 | 박정우",
    ],
    info:
      "브이프렌즈는 선린인터넷고등학교의 유일한 디자인 교육봉사 동아리로, 그래픽 디자인, UI/UX, 모션 그래픽, 영상 기획 등 다양한 분야를 배우고 여러 프로젝트를 수행하며 실력과 아이디어를 발휘할 수 있는 동아리입니다. 브이프렌즈는 체계적인 교육과 선후배 간의 교류를 통해 부원들의 성장과 발전을 지원하고, 부원들 사이의 화목하고 즐거운 분위기가 자랑입니다.\n" +
      "또한, 교내 / 교외에서 진행되는 디자인 교육 봉사 프로그램에 참여하여, 지식과 기술을 나누고 학생들의 창의적인 사고와 디자인 능력을 향상시키는 데 기여하고 있습니다.",
    subColor: "#FBCC26",
    mainColor: "#D99D3D",
    textColor: "#ffffff",
    gallery: [
      {
        path: "/images/v.friends/2023새해 포스터.png",
        name: "2023년도 새해 포스터",
        isVideo: false,
      },
      {
        url: "https://www.youtube.com/embed/Rnm0Sj3AOa8",
        path: "/images/v.friends/2023새해 포스터.png",
        name: "2023년도 새해 포스터",
        isVideo: true,
      },
    ],
  },
  {
    id: 2,
    name: "EDCAN",
    department: "소프트웨어과",
    desc: "모바일 콘텐츠 개발 동아리",
    logo: "/images/edcan.svg",
    field: "UI/UX 디자이너",
    member: 3,
    site: "https://edcan.kr/",
    sns: {
      instagram: "https://www.instagram.com/sunrin_edcan/",
      facebook: "https://www.facebook.com/sunrinedcan",
    },
    awards: [
      "2019년",
      "",
      ,
      "고졸성공 취업대박람회 동아리 경진대회 특별상 | 김현우 이정우 정민서 정찬효 표영우",
      "선린인터넷고등학교 해커톤 금상 | 정찬효",
      "대한민국 메이커히어로즈 학생 공모전 최우수상 | 송영범 이창민",
      "선린인터넷고등학교 천하제일 코딩대회 동상 | 정찬효",
      "선린인터넷고등학교 TED 프레젠테이션 경진대회 동상 | 김현우",
      "",
      "2022년",
      "",
      "제주 ICT이노베이션스퀘어 해커톤 대상 | 백시현",
      "메타버스 개발자 경진대회 대상 | 남현종",
      "선린인터넷고등학교 디지털 콘텐츠 경진대회 앱/웹 콘텐츠 부문 금상 | 백시현",
      "선린인터넷고등학교 영상공모전 광고 부문 대상 | 표한빈",
      "선린인터넷고등학교 그래픽디자인 공모전 UI/UX 부문 은상 | 표한빈 백시현 이하람",
      "선린인터넷고등학교 영상공모전 모션그래픽 부문 금상 | 표한빈",
      "제 20회 임베디드 소프트웨어 경진대회 틴 스타트업 부문 우수상 | 표한빈",
    ],
    info:
      "저희 EDCAN은 2015년부터 시작된 소프트웨어과 소속의 모바일 콘텐츠 개발 동아리로,\n" +
      "안드로이드 앱 개발과 앱을 디자인하는 UI/UX를 담당하고 있습니다. 협업을 중심으로 디양한 경험을 쌓을 수 있는 커리큘럼을 준비중입니다. 2022년 소프트웨어과 전공 동아리 중 가장 많은 수상 실적을 보유중입니다.",
    subColor: "#00A9CE",
    mainColor: "#425563",
    textColor: "#fff",
  },

  {
    id: 3,
    name: "IWOP",
    department: "소프트웨어과",
    desc: "웹 개발 동아리",
    logo: "/images/iwop.svg",
    field: "UI/UX 디자이너",
    member: 3,
    site: "https://iwop.kr/",
    sns: {
      instagram: "https://www.instagram.com/sunrin_iwop/",
      facebook: "https://www.facebook.com/iwop_sunrin",
    },
    awards: [
      "2019년",
      "",
      "모바일 콘텐츠 경진대회",
      "JustLance - 동상 (방진혁)",
      "",
      "디지털 콘텐츠 경진대회",
      "Circles - 대상 (박종훈)",
      "Gangle - 은상 (김재현)",
      "",
      "기타",
      "박정우 - 제9회 서강대학교 게임/애니/만화 아이디어 공모전 동상",
      "염태민 - 천하제일 코딩대회 동상",
      "",
      "2020년",
      "",
      "모바일 콘텐츠 경진대회",
      "스테일메이트 - 대상 (방진혁)",
      "",
      "디지털 콘텐츠 경진대회",
      "MBit - 금상 (염태민)",
      "",
      "기타",
      "염태민 - 교내 창의 아이디어 경진대회 금상",
      "이호준 - 교내 창의 아이디어 경진대회 금상",
      "최수환 - 교내 창의 아이디어 경진대회 은상",
      "",
      "2022년",
      "윤도현 - 디지털 콘텐츠 경진대회 동상",
    ],
    info:
      "IWOP은 2001년 개설된 선린 최초의 IT 계열 동아리이자, 우수한 수상실적을 보유하고 있는 \n" +
      "소프트웨어과 유일 웹 동아리입니다. IWOP에서는 UI/UX 교육을 통해 반응형 웹 사이트 \n" +
      "디자인, 어플리케이션 UI 디자인을 진행합니다.",
    mainColor: "#38BF54",
    subColor: "#57B7D5",
    textColor: "#fff",
  },
  {
    id: 4,
    name: "MIR",
    department: "콘텐츠디자인과",
    desc: "만화·일러스트레이션 동아리",
    logo: "/images/mir.svg",
    field: "만화 및 일러스트레이션",
    member: 8,
    site: "https://sunrinmir.github.io/",
    sns: {
      instagram: "https://instagram.com/mir.__.official",
      facebook:
        "https://www.facebook.com/profile.php?id=100066338873711&mibextid=ZbWKwL ",
    },
    awards: [
      "2019년",
      "",
      "선린인터넷고등학교 그래픽디자인 공모전 일러스트 부문 금상 | 염지원",
      "선린인터넷고등학교 그래픽디자인 공모전 일러스트 부문 동상 | 원창연",
      "선린인터넷고등학교 그래픽디자인 공모전 일러스트 부문 동상 | 강민지",
      "선린인터넷고등학교 그래픽디자인 공모전 일러스트 부문 동상 | 박다솜",
      "선린인터넷고등학교 그래픽디자인 공모전 포스터 부문 은상 | 김혜진",
      "선린인터넷고등학교 그래픽디자인 공모전 포스터 부문 동상 | 염지원",
      "선린인터넷고등학교 블로그 포트폴리오 공모전 금상 | 강민지",
      "선린인터넷고등학교 블로그 포트폴리오 공모전 동상 | 최가은",
      "선린인터넷고등학교 블로그 포트폴리오 공모전 동상 | 김혜진",
      "",
      "2022년",
      "",
      "선린인터넷고등학교 그래픽디자인 공모전 일러스트 부문 동상 | 유호빈",
      "대한민국 청소년 디자인 전람회 특선 | 김한비",
    ],
    info: "교내 유일 만화 일러스트레이션 전문동아리인 미르에서는 디지털 드로잉위주의 만화, 일러스트 수업을 진행하고있습니다. 여러가지의 활동과 그림 도구 지원, 선배들과의 교류등으로 다채로운 경험을 할 수 있는 동아리입니다.",
    subColor: "#d9acf2",
    mainColor: "#f0b7cd",
    textColor: "#ffffff",
  },
  {
    id: 5,
    name: "TATE",
    department: "콘텐츠디자인과",
    desc: "디자인 연구 동아리",
    logo: "/images/tate.svg",
    field: "그래픽 디자이너",
    member: 8,
    site: "-",
    sns: {
      instagram: "https://www.instagram.com/sunrin_iwop/",
      facebook: "https://www.facebook.com/iwop_sunrin",
    },
    awards: [],
    info: "선린인터넷고등학교 콘텐츠디자인과 전공동아리 TATE는 14년 동안 이어져 온 디자인 연구 동아리로 선배들과의 화목하고 자유로운 분위기 속에서 일러스트레이터, 포토샵, 3D MAX 등 다양한 프로그램을 배우고 자신의 생각을 펼칠 수 있는 동아리입니다. 또한 그래픽 디자인 수업을 들으며 자신의 전공 실력이 향상되고 다양한 분야의 디자인을 접할 수 있습니다.",
    subColor: "#224fac",
    mainColor: "#1e2b58",
    textColor: "#ffffff",
  },

  {
    id: 6,
    name: "zer0pen",
    department: "소프트웨어과",
    desc: "게임 개발 전문 동아리",
    logo: "/images/zer0pen.svg",
    field: "게임 디자이너",
    member: 3,
    site: "https://zer0pen.kr/",
    sns: {
      instagram: "https://www.instagram.com/zer0pen_/",
      facebook: "https://www.facebook.com/zer0pen",
    },
    awards: [
      "2021년",
      "",
      "선린인터넷고등학교 해커톤 은상 | 박민제",
      "선린인터넷고등학교 해커톤 은상 | 김윤빈",
      "선린인터넷고등학교 모바일 콘텐츠 경진대회 금상 | 김상엽",
      "선린인터넷고등학교 모바일 콘텐츠 경진대회 금상 | 심재용",
      "선린인터넷고등학교 모바일 콘텐츠 경진대회 은상 | 이원형",
      "선린인터넷고등학교 프로그래밍 경시대회 은상 | 이원형",
      "",
      "2022년",
      "",
      "선린인터넷고등학교 해커톤 은상 | 박민제",
      "선린인터넷고등학교 해커톤 은상 | 김윤빈",
      "선린인터넷고등학교 해커톤 은상 | 이원형",
      "선린인터넷고등학교 프로그래밍 경시대회 동상 | 김준호",
      "선린인터넷고등학교 그래픽디자인 공모전 포스터 부문 동상 | 차하람",
      "선린인터넷고등학교 그래픽디자인 공모전 캐릭터 부문 동상 | 박세현",
    ],
    info:
      "제로픈은 선린인터넷고등학교 게임 개발 전문 동아리로, 대중적인 게임 엔진인 Unity를 활용하여, (2D/3D)게임 제작 과정의 전반적인 과정을 배웁니다.\n" +
      "디자이너는 드로잉, 픽셀아트, 3D, FX 등 게임 그래픽 디자이너가 되기 위해 필요한 것들을 배우고, 선배, 동기들과 함께하는 팀 프로젝트를 자주 진행하여 실력을 쌓을 수 있습니다. \n" +
      " 또한, 화목하고 즐거운 분위기로, 타 동아리들과의 교류도 자유롭게 진행되는 동아리입니다. ",
    mainColor: "#0c1532",
    subColor: "#f2e341",
    textColor: "#ffffff",
  },
  {
    id: 7,
    name: "RG",
    department: "소프트웨어과",
    desc: "게임 개발 전문 동아리",
    logo: "/images/rg.svg",
    field: "게임 디자이너",
    member: 3,
    site: "https://sunrin-rg.github.io",
    sns: {
      instagram: "https://www.instagram.com/sunrin_rg/",
      facebook: "https://www.facebook.com/sunrintrg",
    },
    awards: [
      "2018년",
      "",
      "선린인터넷고등학교 디지털 콘텐츠 경진대회 응용 부문 대상 | 이OO",
      "제 4회 하이톤 : 아이스 최우수상 | 이OO",
      "",
      "2019년",
      "",
      "선린인터넷고등학교 해커톤 금상 | 김OO 이OO 조OO 홍OO",
      "",
      "2020년",
      "",
      "선린인터넷고등학교 모바일 콘텐츠 경진대회 동상 | 이OO",
      "청강문화산업대학교 실기대전 입상 | 김OO",
      "",
      "2021년",
      "",
      "선린인터넷고등학교 해커톤 은상 | 김OO",
      "",
      "2022년",
      "",
      "한국코드페어 고등부 SW공모전 본선 16등 | 정한용",
      "IT분야 직업계고 게임계발대회 장려상 | 김기현 박신홍 장운지 정지훈",
      "GIGDC 중고등부 동상 | 김준서",
      "선린인터넷고등학교 해커톤 게임부문 동상 | 김기현 박신홍 정지훈",
      "선린인터넷고등학교 해커톤 게임부문 동상 | 유현우 김범수 이지윤 이하은",
      "선린인터넷고등학교 그래픽디자인 공모전 캐릭터 부문 금상 | 장운지",
      "선린인터넷고등학교 그래픽디자인 공모전 일러스트레이션 부문 금상 | 이유진",
    ],
    info: "선린인터넷고등학교 소프트웨어과 전공동아리 RG는 게임 개발 전문 동아리로 Unity엔진을 활용하여 단계별로 2D/3D과정을 배워나가며, 디자이너는 드로잉, UI/UX, 3D 등을 배우게됩니다. 또한 화목하고 활발한 분위기 속에서 선배들, 동기들과 함께하는 팀프로젝트를 진행하여 자체 게임을 제작하는 동아리입니다.",
    subColor: "#717faa",
    mainColor: "#2a2b59",
    textColor: "#ffffff",
  },
  {
    id: 8,
    name: "App:ple Pi",
    department: "소프트웨어과",
    desc: "앱 개발·창업 동아리",
    logo: "/images/apple.pi.svg",
    field: "UI/UX 디자이너",
    member: 3,
    site: "https://appplepi.com/",
    sns: {
      instagram: "https://www.instagram.com/appple.pi.official/",
      facebook: "https://www.facebook.com/app.plepi",
    },
    info: `애플파이는 선린인터넷고등학교의 교내  최우수 앱 개발 창업 동아리로, 안드로이드 앱 개발과 UI/UX 디자인을 중점으로 꾸준한 실적을 내고있습니다.
          또한, 화목하고 즐거운 분위기와 체계적인 커리큘럼으로 인해 선후배간의 교류가 높은 편으로, 신입생이더라도 교내외에서 다양한 경험을 쌓을 수 있는 동아리입니다.`,
    awards: [
      "2019",
      "모바일 콘텐츠 개발대회 [생활디자인] 부분 금상",
      "STA-C 최우수상",
      "",
      "2020",
      "모바일 콘텐츠 개발대회 [게임에셋/생활디자인/비디자인] 부문 금상",
      "디지털 콘텐츠 개발대회 생활 부문 금상",
      "선린 해커톤 생활 부문 금상",
      "",
      "2021",
      "모바일 콘텐츠 개발대회 [생활디자인] 부문 금상",
      "디지털 콘텐츠 개발대회 생활 부문 금상",
      "선린 해커톤 생활 부문 은상",
      "",
      "2022",
      "디지털 콘텐츠 개발대회 생활 부문 은상",
      "선린 해커톤 생활 부문 금상",
      "국제정보올림피아드 금상",
      "KOSA-MIDAS YOUNG TALENT CHALLENGE 은상",
    ],
    subColor: "#F32F31",
    mainColor: "#B52426",
    textColor: "#FFFFFF",
  },
  {
    id: 9,
    name: "자의누리",
    department: "콘텐츠디자인과",
    desc: "모션그래픽 제작 전문 동아리",
    logo: "/images/junr.svg",
    field: "영상 편집, 그래픽 디자인",
    member: 8,
    site: "-",
    sns: {
      instagram: "https://www.instagram.com/sunrin_iwop/",
      facebook: "https://www.facebook.com/iwop_sunrin",
    },
    awards: [
      "2019년",
      "",
      "선린인터넷고등학교 영상공모전 영화 부문 금상 | 문은빈",
      "선린인터넷고등학교 그래픽디자인공모전 대상 | 이충혁",
      "선린인터넷고등학교 블로그 포트폴리오 공모전 금상 | 이충혁",
      "선린인터넷고등학교 그래픽디자인공모전 모션그래픽 부문 대상 | 한지선",
      "선린인터넷고등학교 영상공모전 광고부문 금상 | 박은후",
      "선린인터넷고등학교 그래픽디자인공모전 모션그래픽 부문 금상 | 김희서",
      "선린인터넷고등학교 그래픽디자인공모전 모션그래픽 부문 대상 | 김지원",
      "선린인터넷고등학교 그래픽디자인공모전 포스터 부문 금상 | 김지원",
      "선린인터넷고등학교 영상공모전 대상 | 김지원",
      "",
      "2021년",
      "",
      "선린인터넷고등학교 영상공모전 금상 | 전계승",
      "선린인터넷고등학교 영상공모전 금상 | 이성민",
      "",
      "2022년",
      "",
      "대한민국 청소년 디자인 전람회 특선 | 서정화",
    ],
    info: "선린인터넷고등학교 콘텐츠디자인과 전공동아리 자의누리는 모션그래픽 제작 전문 동아리로 After Effect를 통해 타이포그래피, 모션그래픽을 전문적으로 배울 수 있는 동아리입니다. 또한 자기주도적인 수업 분위기와, 상시 열려있는 질문 방과 1대 1 멘토링 형식의 수업방식을 통해 부원들을 교육하고 있습니다. 틀에 갇힌 작업물이 아닌 자유로운 작업물 제작을 추구하는 동아리입니다.",
    mainColor: "#5490A3",
    subColor: "#8CBCD0",
    textColor: "#FFFFFF",
  },
  {
    id: 10,
    name: "아우내",
    department: "콘텐츠디자인과",
    desc: "영상·영화 일반 동아리",
    logo: "/images/aun.svg",
    field: "영상 편집, 그래픽 디자인",
    member: 8,
    site: "-",
    sns: {
      instagram: "http://instagram.com/aun0fficial/",
      facebook: "https://www.facebook.com/LiveActionFilmSociety",
    },
    awards: [
      "2019년",
      "",
      "선린인터넷고등학교 영상공모전 광고 부문 동상",
      "",
      "2020년",
      "",
      "선린인터넷고등학교 영상공모전 단편영화 부문 금상",
      "",
      "2021년",
      "",
      "선린인터넷고등학교 영상공모전 단편영화 부문 대상",
      "선린인터넷고등학교 영상공모전 광고 부문 은상",
      "",
      "2022년",
      "",
      "선선린인터넷고등학교 영상공모전 단편영화 부문 은상",
    ],
    info: "선린인터넷고등학교의 실사 영상/영화 동아리 아우내는 '아름다운 우리의 내일을 위하여' 라는 뜻을 가지고 활동하는 동아리로 단편영화 자체제작 프로젝트를 통해 자신만의 영화를 제작할 수 있습니다.",
    subColor: "#b2b2b2",
    mainColor: "#000000",
    textColor: "#ffffff",
  },
];

const clubList: ClubList = clubInfo;

export default clubList;
