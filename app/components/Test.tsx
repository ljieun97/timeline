'use client'

import { Chart } from "react-google-charts";

//에이펙스, 구글에 타임라인차트 존재...!
//간트 갖다버려

const columns = [
  { type: "string", id: "Position" },
  { type: "string", id: "Name" },
  { type: "string", role: "tooltip" },
  { type: "date", id: "Start" },
  { type: "date", id: "End" },
]

const startYear = 2000
// 최소년도 100 (두자리 이하는 1900로됨)
const rows = [
  [
    "몽키 D. 루피",
    "샹크스와 만남",
    `
    (10년전)
    <img src="https://i.namu.wiki/i/gads0-JDpkonNXeglmMWaDHFq0PPakCimHLEeyorOAi-dCHL0_1zirExEsIq54ChZb83u8SmTsgcvWLUQ_h-A68v5NYoTAcrpuwiv11MpqXCsMNlASoWi5M_2JdBKw3kqgqjzh73F6HWT7HhgIxIlw.webp" width="100" height="100"/>
    <div>상자에서 고무고무 열매를 꺼내 먹고 능력자가 됨 (1권)</div> 
    <div>샹크스에게서 밀짚모자를 받고 나중에 해적이되어 만나면 돌려주기로 약속함 (1권)</div>
    `,
    new Date(startYear - 10, 0), new Date(startYear - 9, 0)
  ],
  [
    "몽키 D. 루피",
    "이스트 블루",
    `
    쉘즈 타운
    <div>해군 대령 모건을 쓰러뜨리고 첫 번째 동료인 조로를 영입 (1권)</div>
    발라티에
    <div>지붕을 박살내 잡일꾼이 된 후, 클리크와의 대결에서 이겨 해방됨 (8권)</div>
    코코야시 마을
    <div>아론으로부터 마을을 해방시키고 해군대령 네즈미에 의해 현상금 3,000만 베리가 걸림 (11권)</div>
    로그 타운
    <div>버기에게 잡혀 처형대에서 죽을뻔하지만 번개가 내리쳐 도망침 (11권)</div>
    <div>스모커에게 체포될뻔하지만 드래곤이 나타나 도와줌 (12권)</div>
    `,
    new Date(startYear, 0), new Date(startYear, 5)
  ],
  [
    "몽키 D. 루피",
    "알라바스타",
    `
    <div>칠무해 크로커다일을 헤치워 현상금 1억 베리가 걸림 (23권)</div>
    `,
    new Date(startYear, 5), new Date(startYear, 6)
  ],
  [
    "몽키 D. 루피",
    "워터 세븐",
    `
    <li>로빈을 구하기 위해 170개국 이상을 가맹국으로 거느린 세계정부의 에니에스 로비에 쳐들어 옴 (40권)</li>
    <li>먼저 재판소 문 위로 올라와 CP9 블루노와 싸우던 중 아오키지에게 졌을 때 자신이 강해지지 않으면 동료를 지킬 수 없다고 생각했고, 강하지 않아도 함께 있고 싶은 동료가 있기 때문에 싸울 방법을 생각하여 기어 세컨드를 발동하고 육식의 체를 보고 익힘 (40권)</li>
    <li>CP9 스팬담의 입방정으로 세계정부 깃발을 불태우게해서 세계정부에 선전포고함</li>
    <li>정의의 문으로 가기위한 철문을 부수기 위해 기어 서드 발동</li>
    `,
    new Date(startYear, 7), new Date(startYear, 8),
  ],
  [
    "롤로노아 조로",
    "쿠이나와 약속",
    `
    (10년전?) 
    <div>쿠이나와 둘 중 하나가 세계 최고의 검객이 되자고 약속 (1권)</div>
    <div>다음날 쿠이나가 죽고 쿠이나의 검 '화도일문자'를 물려받아 대검객이 되겠다고 맹세 (1권)</div>
    `,
    new Date(startYear - 10, 0), new Date(startYear - 9, 0)
  ],
  [
    "롤로노아 조로",
    "이스트 블루",
    `
    쉘즈 타운
    <div>마을의 아이를 구하기 위해 헤르매포의 늑대를 죽여 해군에게 붙잡힘 (1권)</div>
    <div>루피의 제안으로 해적이 되기로 결정 (1권)</div>
    발라티에
    <div>만나고 싶었던 남자, 미호크와의 대결에서 패배하고 검 두자루를 잃음 (6권)</div>
    로그 타운
    <div>쿠이나와 닮은 타시기를 만나고 무기상점에서 3대 귀철 중 하나와 양검 유바시리를 받음 (11권)</div>
    `,
    new Date(startYear, 0), new Date(startYear, 5),
  ],
  [
    "롤로노아 조로",
    "알라바스타",
    `
    <div>다즈 보네즈(Mr.1)를 헤치워 현상금 6,000만 베리가 걸림 (23권)</div>
    `,
    new Date(startYear, 5), new Date(startYear, 6)
  ],
  [
    "나미",
    "아론 해적단",
    `
    (8년전) 코코야시 마을
    <div>아론이 마을에 칩임해 벨메일을 죽이고 해도를 그리는 나미를 측량사로 영입 (9권)</div>
    <div>1억 베리로 마을을 사기 위해 도둑질 시작 (9권)</div>
    오렌지 마을
    <div>루피와 손을 잡고 임시 동료가 됨 (3권)</div>
    발라티에
    <div>아론의 수배지를 발견한 후 배를 가지고 떠남 (6권)</div>
    `,
    new Date(startYear - 8, 0), new Date(startYear, 4),
  ],
  [
    "나미",
    "이스트 블루",
    `
    코코야시 마을
    <div>루피와 동료들의 도움으로 마을을 아론 일당으로부터 해방시킴 (11권)</div>
    <div>본인 때문에 문신을 했던 노지코를 위해 문신을 귤과 풍차로 변경하고 마을을 떠남 (11권)</div>
    `,
    //1또는 4부터
    new Date(startYear, 4), new Date(startYear, 5),
  ],
  [
    "나미",
    "워터 세븐",
    `
    <li>아이스버그에게 로빈이 동료들을 위해 죽으러 가는것을 듣고 동료들에게 전하여 로빈을 구하러 가기로 함 (38권)</li>
    `,
    new Date(startYear, 7), new Date(startYear, 8),
  ],
  [
    "우솝",
    "우솝 해적단",
    `
    시롭 마을
    <div>(5년전) 피망, , ,과 결성 (5권)</div>
    `,
    new Date(startYear - 5, 0), new Date(startYear, 2),
  ],
  [
    "우솝",
    "이스트 블루",
    `
    시롭 마을
    <div>루피와 함께 캡틴 크로를 몰아내고, 카야에게서 고잉 메리호를 받음 (5권)</div>
    `,
    new Date(startYear, 2), new Date(startYear, 5),
  ],
  [
    "우솝",
    "하늘섬",
    `
    <div>뱃사람들 사이에 전해 내려오는 전설 중 하나인 배의 화신 '크라바우터만'과 만남 (37권)</div>
    `,
    new Date(startYear, 6), new Date(startYear, 7),
  ],
  [
    "우솝",
    "저격왕",
    `
    <div>워터 세븐에서 해적단에서 나간 뒤 루피와의 결투에서 패배 (35권)</div>
    <div>배를 고치던 중 프랑키를 찾아온 CP9에 의해 메리호가 바다에 침수되고 프랑키와 함께 에니에스 로비로 연행됨 (38권)</div>
    <li>같이 열차를 타고있던 상디에게 로빈의 상황을 듣고 가면을 쓰고 나타남 (38권)</li>
    정부에게 속아 50년동안 에니에스 로비 문을 지킨 거인에게 엘바프의 전사들인 두목은 아직 싸우고 있다는 이야기를 알려주어 편으로 만듦 (40권)
    `,
    new Date(startYear, 7), new Date(startYear, 8),
  ],
  [
    "상디",
    "발라티에",
    `
    <div>(9년전) 붉은 발 제프에게 구원받고 해상레스토랑을 함께 만듦 (7권)</div>
    `,
    new Date(startYear - 9, 0), new Date(startYear, 3),
  ],
  [
    "상디",
    "이스트 블루",
    `
    발라티에
    <div>올 블루를 찾기 위해 루피와 합류 (8권)</div>
    `,
    new Date(startYear, 3), new Date(startYear, 5),
  ],
  [
    "상디",
    "워터 세븐",
    `
    <div>여자한테 발길질하면 안 된다는 소리를 들으며 자라서 CP9 칼리코에게 패함 (42권)</div>
    `,
    new Date(startYear, 7), new Date(startYear, 8),
  ],
  [
    "토니토니 쵸파",
    "드럼섬",
    `
    (6년전)
    <div>파란 코 사슴으로 태어나 사슴 무리에게 버림받음 (16권)</div>
    <div>사람사람 열매를 먹은 후 인간들로부터 총에 맞았지만 닥터 히루루크가 구해줌 (16권)</div>
    <div>1년 뒤, 닥터 히루루크가 죽고 쿠레하에게 의술을 배우기 시작 (16권)</div>
    <div>5년 간의 연구로 4개의 동물계 변형이 더 가능한 '럼블볼' 개발 (17권)</div>
    `,
    new Date(startYear - 6, 0), new Date(startYear, 5),
  ],
  [
    "토니토니 쵸파",
    "워터 세븐",
    `
    <li>CP9 싸움에서 럼블볼 2개째에는 원하는 변형을 하기 힘들어하고 3개째에는 몬스터로 변형됨 (42권)</li>
    `,
    new Date(startYear, 7), new Date(startYear, 8),
  ],
  [
    "니코 로빈",
    "오하라",
    `
    웨스트 블루
    (26년전) 2살
    로빈의 엄마 니코 올비아는 포네그리프를 탐색하기 위해 로빈을 두고 출항함 (41권)
    (20년전) 8살
    엄마나 오하라 연구소 사람들과 함께 포네그리프를 연구하고싶어서 박사 자격 시험 합격으로 포네그리프를 읽을 수 있는 고고학자가 됨 (41권)
    역사 탐사선의 올비아를 체포한 사우로 중장은 오하라의 이야기를 듣고 올비아가 오하라에 가도록 탈주를 도화줌 (41권)
    마침 사우로가 포류된 곳이 오하라였고 로빈이 도와주어 친구가 됨 (41권)
    정부는 공백의 100년을 추적하는 일에 대한 본보기로 오하라에 버스터콜 발동 (41권)
    올비아와 학자들은 문헌을 남기기위해 지키다 죽고 사우로는 로빈을 구하다가 죽음 (41권)
    피난선은 중장 사카즈키(아카이누)에 의해 폭파되고 쿠잔(아오키지)이 로빈을 풀어줌 (41권)
    `,
    new Date(startYear-28, 0), new Date(startYear-20, 0),
  ],
  [
    "니코 로빈",
    "과거",
    `
    오하라의 고고학자로서 7,900만 베리의 현상금이 걸린 후 배신당하고 배신하며 홀로 살아감 (41권)
    `,
    new Date(startYear-20, 0), new Date(startYear-4, 0),
  ],
  [
    "니코 로빈",
    "바로크 워크스",
    `
    (4년전)
    <div>크로커다일의 제안으로(41권) 리오 포네그리프의 정보를 얻기 위해 크로커다일과 손을 잡음 (23권)</div>
    `,
    new Date(startYear-4, 0), new Date(startYear, 5),
  ],
  [
    "니코 로빈",
    "알라바스타",
    `
    (4년전)
    <div>고대병기 플루톤의 정보가 새겨진 포네그리프를 읽고 삶의 목적이 사라진 자신을 살린 루피를 따라 메리호에 올라탐 (24권)</div>
    `,
    new Date(startYear, 5), new Date(startYear, 6),
  ],
  [
    "니코 로빈",
    "하늘 섬",
    `
    <div>고대병기 포세이돈의 정보가 새겨진 포네그리프와 골 D. 로저가 남긴 글귀를 발견 (32권)</div>
    `,
    new Date(startYear, 6), new Date(startYear, 7),
  ],
  [
    "니코 로빈",
    "워터 세븐",
    `
    <div>섬이 완전히 불타 흔적도 없이 소멸하게 만든 버스터콜에 대한 공포의 기억을 가지고 있음 (39권)</div>
    <div>아오키지에게 버스터콜을 발동할 수 있는 권한을 받은 CP9으로부터 밀짚모자 일당을 탈출시키기 위해 정부를 따르기로 함 (38권)</div>
    <div>'원래 그걸 가지고 있던 톰'의 마지막 제자 아이스버그를 죽이는 것이 임무 (36권)</div>
    <li></li>
    `,
    new Date(startYear, 7), new Date(startYear, 8),
  ],
  [
    "프랑키",
    "톰즈 워크스",
    `
    (24년전) 
    <li>배에서 부모에게 내던져지고 톰에게 키워달라고 함 (37권)</li>
    
    (22년전) 12세
    <li>톰은 골드 로저의 해석선 '오로 잭슨 호' 제조 사실로 연행당하지만 바다열차 계획으로 개발기간인 10년의 집행유예를 선고받음 (37권)</li>
    <li>개구리 요코즈나에게 자유형을 가르쳐줌 (37권)</li>
    <li>톰은 가라앉고 있는 섬을 위해 바다 열차를 만듦 (37권)</li>

    (12년전)
    <li>바다열차 '퍼핑 톰' 개통</li>

    (8년전)
    <li>4년에 걸쳐 남은 세 선로 완성</li>
    <li>톰은 아이스버그와 프람에게 설계도와 로빈의 이야기를 전함</li>
    <li>재판 전 설계도를 찾아온 CP5 스팬담이 프랑키의 전함으로 사법선 습격하여 톰을 죄인으로 만듦 </li>
    <li>바다열차를 만든 일로 습격죄를 사면받고 해적왕의 배 제조죄를 남김</li>
    <li>톰을 데려가는 바다열차에 뛰어들어 온 몸이 망진 후 고철로 개조함(38권) </li>
    <li>아이스버그는 도시를 바꾸겠다는 꿈을 이어받고 프람은 꿈의 배를 만들겠다고 다짐하게 됨</li>



    `,
    new Date(startYear-24, 0), new Date(startYear-4, 0),
  ],
  [
    "프랑키",
    "프랑키 패밀리",
    `
    (4년전)
    <li>시장이된 아이스버그와 만나 설계도를 건내받고 프랑키로 살게됨 (38권)</li>
    `,
    new Date(startYear-4, 0), new Date(startYear, 7),
  ],
  [
    "프랑키",
    "워터 세븐",
    `
    <div>아이스버그에게서 설계도를 전해받음 (37권)</div>
    <div>우솝에게서 훔친 2억베리로 쇼핑 후 돌아와 습격받은 프랑키 하우스를 확인하고 루피를 찾아감 (35권)</div> 
    <div>에니에스 로비로 향하는 바다열차에서 CP9 네로와 결투에서 승리</div>
    <li>고대병기의 저항세력을 위해 남긴 플로톤의 설계도를 대대로 후세에 물려받음(36권)</li>
    <li>로빈이 고대병기를 악용할 것이 아님을 알고 설계자의 바람을 헤아려 플루톤의 설계도를 불태움 (41권)</li>
    `,
    new Date(startYear, 7), new Date(startYear, 8),
  ],
  //동료
  [
    "네펠타리 D. 비비",
    "모래모래단",
    `
    (11년전)
    <div>왕궁에서 만난 코자와 싸우면서 친해지고 코자는 훗날 반란군의 리더가 됨 (18권)</div>
    `,
    new Date(startYear - 11, 0), new Date(startYear-10, 0),
  ],
  [
    "네펠타리 D. 비비",
    "바로크 워크스",
    `
    (2년전)
    <div>국민들의 폭동을 잠재우기 위해 조직에 잠입했고 보스의 정체를 알게됨 (3권)</div>
    `,
    new Date(startYear - 2, 0), new Date(startYear, 5),
  ],
  [
    "네펠타리 D. 비비",
    "알라바스타",
    `
    <div>반란을 막은 뒤 왕녀로써 여행은 떠나지 않기로 결정하고 루피와 헤어짐 (24권)</div>
    `,
    new Date(startYear, 5), new Date(startYear+2, 0),
  ],

  //해적
  // [
  //   //todo 날짜
  //   "버기",
  //   "로저 해적단",
  //   `
  //   <div>해적 견습생 시절 실수로 동강동강 열매를 먹고 능력자가 됨 (3권)</div>
  //   `,
  //   new Date(startYear - 10, 0), new Date(startYear - 9, 0),
  // ],

  //해군
  [
    "코비",
    "알비다 해적단",
    `
    <div>(2년전) 낚시하려다가 실수로 올라탄 알비다 해적선의 항해사겸 잡무담당이 됨 (1권)</div>
    `,
    new Date(startYear - 2, 0), new Date(startYear, 0),
  ],
  [
    "코비",
    "이스트 블루",
    `
    쉘즈 타운
    <div>해군 입대 (1권)</div>
    `,
    new Date(startYear, 0), new Date(startYear+2, 0),
  ],
  [
    "CP9",
    "워터 세븐",
    `
    <li>정의의 이름하에 정부에 비협조적인 시민의 살인 허가받음 (36권)</li>
    <li>정부는 병기를 되살려 그것을 대해적 시대에 종지부를 찍는 정의의 전력으로 삼기로 함 (36권) </li>
    <hr/>
    <li>철이 들 무렵부터 정부를 위해 목숨을 버릴 각오로 훈련받아 6개의 초인적인 인체 기술 '육식'을 익힘 (37권) </li>
    <li>5년간 아이스버그를 조사 (36권)</li>
    `,
    new Date(startYear-5, 0), new Date(startYear, 8),
  ],

]

const data = [columns, ...rows]

const options = {
  timeline: {
    // groupByRowLabel: true,
    // showRowLabels: false ,
    // colorByRowLabel: true,
    // rowLabelStyle: { fontName: 'Helvetica', fontSize: 24, color: '#603913' },
    // barLabelStyle: { fontName: 'Garamond', fontSize: 14 }
  },
  avoidOverlappingGridLines: false,
  // colors: ['#cbb69d', '#603913', '#c69c6e'],
};



export default function Test() {
  return (
    <>
      <Chart
        chartType="Timeline"
        data={data}
        options={options}
        // width="100%"
        height="800px"
      />
    </>
  );
}
