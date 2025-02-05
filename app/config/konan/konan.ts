export { storys, nodes, edges }
const storys = [
  {
    title: "제트코스터 살인사건 (1화)", book: 1, node: 2, desc: [
      "란과 트로피컬 랜드에 놀러갔다가 목격한 살인사건을 해결하고 용의자였던 수상한 남자를 미행한다.",
      "그들의 권총 밀수 현장을 엿보다가 뒤에서 얻어맞아 기절 당한 뒤 약을 먹히고 어린아이가 된다."
    ]
  },
  {
    title: "사장 영애 유괴사건 (2~5화)", book: 1, node: 1, desc: [
      "집으로 돌아가 아가사 박사에게 추리실력을 보여주며 신이치임을 증명한다.",
      "신이치를 찾으러 온 란에게 책장의 책이름을 조합하여 '에도가와 코난'이라고 소개한다.",
      "정보를 입수하기 위해 아가사 박사의 도움으로 란의 집에서 지내기로 한다.",
      "란이 코난에게 신이치를 좋아한다고 말한다."
    ]
  },
  // {
  //   title: "아이돌 밀실 살인사건 (6~9화)", book: 1, node: 1, desc: [
  //     "모리 탐정을 기절시켜 나비 넥타이형 음성 변조기로 사건을 대신 해결한다.",
  //   ]
  // },
  // {
  //   title: "적귀촌 화제 살인사건 (10~12화)", book: 2, node: 1, desc: [
  //     "범인의 자백을 녹음하고 초강력 킥 운동화로 기절시켜서 사건을 해결한다.",
  //   ]
  // },
  {
    title: "기묘한 사람 찾기 살인사건 (13~16화)", book: 2, node: 8, desc: [
      "은행에서 10억엔을 훔치고 그것을 독차지한 동료를 찾기위해 모리 탐정에게 아버지를 찾아달라고 거짓 의뢰한다.",
      "찾은 10억엔으로 동생과 조직에서 나가기 위해 거래했지만 약속을 어긴 장발의 남자가 쏜 총에의해 죽는다.",
      "범인 추적 안경으로 찾아온 코난은 총에 맞은 아케미에게 본인이 신이치라고 소개한다."
    ]
  },
  // {
  //   title: "유령저택 살인사건 (17~19화)", book: 2, node: 1, desc: [
  //     "신축 멜빵으로 지하 감옥문을 열고 범인에게 5년전 살인을 자백하게 하여 사건을 해결한다.",
  //   ]
  // },
  // {
  //   title: "호화 여객선 연속 살인사건 (20~25화)", book: 3, node: 1, desc: [
  //     "시계형 마취총으로 모리탐정을 잠재우고 사건을 대신 해결한다.",
  //   ]
  // },
  {
    title: "의문의 선물 협박 사건 (26~29화)", book: 3, node: 3, desc: [
      "코난의 추리와 행동 때문에 신이치라고 의심하지만 신이치 목소리를 내는 아기사 박사의 전화를 받고 넘어간다.",
    ]
  },
  // {
  //   title: "미술관 사장 살인사건 (30~32화)", book: 4, node: 1, desc: [
  //     "",
  //   ]
  // },
  {
    title: "신칸센 대폭파사건 (33~35화)", book: 4, node: 1, desc: [
      "기차안에서 검은 코트 사나이들의 대화를 엿들어 코드네임을 알게되고 폭탄을 찾아 날려버린다.",
    ]
  },
  // {
  //   title: "대도시 암호지도 사건 (36~39화)", book: 4, node: 1, desc: [
  //     "",
  //   ]
  // },
  {
    title: "산장 붕대남 살인사건 (40~44화)", book: 5, node: 9, desc: [
      "언니의 친구들과 별장에 놀러갔다가 코난에게 마취총을 맞고 사건을 해결한다.",
    ]
  },
  // {
  //   title: "노래방 살인사건 (45~48화)", book: 5, node: 1, desc: [
  //     "소노코 아빠의 연줄로 참석한 락그룹의 뒤풀이에서 사건이 일어난다.",
  //     "신이치의 목소리로 방송하여 사건을 해결한다.",
  //   ]
  // },
  {
    title: "에도가와 코난 유괴사건 (49~51화)", book: 5, node: 10, desc: [
      "일본으로 돌아와 아가사에게 신이치의 일을 듣고 위험한 상황임을 인지시키기 위해 코난을 유괴한다.",
      "코난은 해외로 가자는 제안을 거절한다."
    ]
  },
  // {
  //   title: "골동품 컬렉터 살인사건 (52~55화)", book: 6, node: 1, desc: [

  //   ]
  // },
  {
    title: "사라진 시체 살인사건 (56~58화)", book: 6, node: 1, desc: [
      "아이들에 의해 소년 탐정단이 결성되고 사건에 휘말린다."
    ]
  },
  // {
  //   title: "천하일야제 살인사건 (59~61화)", book: 6, node: 1, desc: [
  //     ""
  //   ]
  // },
  {
    title: "피아노 소나타 『월광』 살인사건 (62~67화)", book: 7, node: 1, desc: [
      "스스로 목숨을 끊으려는 범인을 막지 못한 것이 트라우마가 된다."
    ]
  },
  // {
  //   title: "프로 축구 선수 협박 사건 (68~71화)", book: 7, node: 1, desc: [
  //     "나이트바론 살인사건 (72~77화)",
  //     "6월 신부 살인사건 (78~80화)",
  //     "아유미 유괴사건 (81화~83화) 9권",
  //     "코고로의 동창회 살인사건 (84화~87화) 9권",
  //     "자산가 영애 살인사건 (88화~91화) 9권",
  //     "외교관 살인사건 (88화~91화) 10권",
  //   ]
  // },
  {
    title: "외교관 살인사건 (92화~96화)", book: 10, node: 14, desc: [
      "신이치에게 대결을 신청하러 왔다가 감기에 걸린 코난에게 술을 먹인다.",
      "본인은 사건의 헛다리를 짚고 파이칼을 먹고 잠깐 돌아온 신이치가 사건을 해결한다."
    ]
  },
  // {
  //   title: "도서관 살인사건 (96화~98화)", book: 10, node: 1, desc: [
  //     "설산 산장 살인사건 (99화~101화)",
  //     "방송국 살인사건 (102화~) 11권"
  //   ]
  // },
  {
    title: "커피숍 살인사건 (1화~)", book: 11, node: 15, desc: [
      "란과 만나기로 약속한 커피숍에서 사건이 일어나고 용의자로 지목된다."
    ]
  },
  // {
  //   title: "키리텐구 전설 살인사건 (108화~110화)", book: 11, node: 1, desc: [
  //     "달과 별과 태양의 비밀 (111화~113화) 12권",
  //     "게임 회사 살인사건 (114화~116화) 12권",
  //   ]
  // },
  {
    title: "홈즈 프리크 살인사건 (117화~121화)", book: 12, node: 14, desc: [
      "퀴즈대회에 참가했다가 마취총을 맞는데 중간에 깨어나 코난의 정체를 알게된다.",
    ]
  },
  // {
  //   title: "세쌍둥이 별장 살인사건 (122화~)", book: 13, node: 1, desc: [
  //     "일러스트레이터 살인사건 (~)",
  //     "대괴수 고메라 살인사건 (~)",
  //   ]
  // },
  {
    title: "궁지에 몰린 명탐정! 연속 2대 살인사건 (~)", book: 14, node: 15, desc: [
      "남편과 싸우고 혼자 돌아왔다. 코난을 의심하는 란에게 친척 사이라고 둘러댄다.",
    ]
  },
  // {
  //   title: "스키 로지 살인사건 (~)", book: 14, node: 1, desc: [
  //     "인기 아티스트 유괴사건 (~) 15",
  //     "금융회사 사장 살인사건 (~) 15",
  //     "명가 연속 변사사건 (~) 15",
  //     "테이탄 초등학교 7대 불가사의 사건 (~) 16",
  //   ]
  // },
  {
    title: "코난 vs 괴도 키드 (~)", book: 16, node: 16, desc: [
      "란으로 변장하여 스즈키 가문의 가보를 훔치지만 코난에게 저지 당한다.",
    ]
  },
  // {
  //   title: "명도예가 살인사건 (~)", book: 16, node: 1, desc: [
  //     "스쿠버 다이빙 살인사건 17",
  //     "강도 범인 입원사건 (166화) 17",
  //     "도적단 수수께끼의 양옥사건 (167~169화) 17",
  //     "시대극 배우 살인사건 17",
  //     "첫사랑의 사람 추억 사건 18"
  //   ]
  // },
  {
    title: "검은 조직에서 온 여자, 대학교수 살인사건 (~)", book: 18, node: 18, desc: [
      "소년 탐정단에 강제 가입되고 의뢰 중 위조지폐범에게 총을 빗겨쏴서 코난에게 의심을 받는다.",
      "언니가 조직원에게 살해당한뒤 연구 중단을 선언하여 처분을 기다리다가 약을 복용한 일을 직접 밝힌다.",
      "코난의 추리력을 보고 왜 언니를 구해주지 못했냐며 책망한다.",
      "코난은 본인의 죄책감과 그녀의 진실성을 보고 의심과 적개심을 거둔다."
    ]
  },
  // {
  //   title: "미스터리 작가 실종사건 (182~184화)", book: 19, node: 1, desc: [
  //   ]
  // },
  {
    title: "나니와의 연속 살인사건 (185~188화)", book: 19, node: 19, desc: [
      "헤이지가 신이치에 대한 얘기를 많이하는 바람에 오사카에 놀러온 란을 여자친구로 오해하고 이후 친구가 된다."
    ]
  },
  // {
  //   title: "경기장 무차별 협박사건 (189~191화)", book: 19, node: 1, desc: [
  //     "마술 애호가 살인사건 20",
  //     "욕실 밀실사건 20",
  //     "푸른 고성 탐색 사건 20",
  //     "하늘을 나는 밀실 쿠도 신이치 최초의 사건 21",
  //     "본청 형사의 사랑 이야기 21",
  //     "결혼 전야의 밀실사건 21",
  //     "의혹의 천체관측 22",
  //     "우에노발 북두성 3호 22",
  //   ]
  // },
  {
    title: "소노코의 위험한 여름 이야기", book: 22, node: 20, desc: [
      "민밥집 주인의 아들로 일을 돕다가 소노코에게 스토커로 의심받는다.",
      "카라테부 주장임을 란이 기억해낸다.",
      "사건 이후 외국으로 수련 유학을 간다."
    ]
  },
  // {
  //   title: "최후의 상영 살인사건", book: 23, node: 1, desc: [
  //     "20년째의 살의 심포니호 연속 살인사건 23",
  //     "본청의 형사 사랑 이야기 2 23",
  //     "어둠 속의 사각 24"
  //   ]
  // },
  {
    title: "검은 조직과의 재회", book: 24, node: 18, desc: [
      "진의 포르쉐에 도청기를 설치했다가 머리카락이 발견되어 피스코의 추가 사살대상이 된다.",
      "파이칼을 먹어 어른이 된 상태에서 진에게 발견되어 총으로 여러번 관통당한다.",
      "코난의 마취총으로 진에게서 도망치고 피스코는 실수를 저질러 진에게 처단된다."
    ]
  },
  //   {
  //   title: "다시 살아나는 죽음의 전언", book: 25, node: 1, desc: [
  //     "돗토리현 거미 저택의 저주 25"
  //   ]
  // },
  {
    title: "목숨을 건 부활", book: 25, node: 2, desc: [
      "코난이 신이치임을 확신한 란에게 털어놓으면 조직의 - "
    ]
  },
]

const nodes = [
  { id: 1, label: "에도가와 코난", group: "0", shape: "circularImage", image: "https://i.namu.wiki/i/1og_Gf2xZ-fGW2aeornSobsk_IgJnisiSrfGCD2pOdzu5uA_dSeSo74KDCB8Fr3hrxGv8SqQdcfbEpQzfkl5n4NXW4uSdJ4_lJfNoYd9o0xSdUiA8YHQ438VEpWc2h-_wb0yn1rVqjlc37qlsRrdYw.webp" },
  { id: 2, label: "쿠도 신이치", group: "0", shape: "circularImage", image: "https://i.namu.wiki/i/zX-H8Ql6e10mTod62XL4iZUQiQZ5FnkJlDG85Y353uyhPpNPHX3_8Qd0FZ7nl_CzUsVVGiaoJNa1wU5f_Fmfg1pE2NCiNzLcYoCC7oEk7VrDrDfGubZ5umHAIeE2Hi3kzk8JHHQUq9_QZqHqSj03IQ.webp" },

  { id: 3, label: "모리 란", group: "1", shape: "circularImage", image: "https://i.namu.wiki/i/vYZTmATOEipkMMwQbdhS60i7nVU905uVUPb8sknGEgEfVAZrCM0aMzecnCAvgcGy7XTvnHp6RcgcdnSDcDygXNE4R5s9W1NrPEJVRE1Ka9wj-2nBBJwLthyZy-7voGm_2h6vEgogB__e6c8w0mks_A.webp" },

  { id: 4, label: "진", group: "검은 조직", shape: "circularImage", image: "https://i.namu.wiki/i/_W7OrMVcXnje54Qsy0BVhqHa40FDJirzcSZwuQwNIvnsSxyXFNW40Hz3uieN3bDZ6bC4XWlAK7bqyiHGlL7ajg8ruVvrCDTmg--_dla0lP0Fn5G6LDhTgBaAi6lspsv_M19lghYFsQ7-Lij35r4cDQ.webp" },
  { id: 5, label: "워커", group: "검은 조직", shape: "circularImage", image: "https://i.namu.wiki/i/Xac3f6ahFeRMZU0KCPmlrW37VePS2QVSP5TgkATvbjHRWNFyqtIr1-j6RwnugbX8PP9LZNLGyb18G6eBlBNpuKgdsxHY3-m5uHUhE83tiWsqAS01R2aIdLx3J-D1FTnSzjba-p-JdeO9ikBDgTzDdA.webp" },

  { id: 6, label: "아가사 히로시", group: "0", shape: "circularImage", image: "https://i.namu.wiki/i/Up5B8b0KJVcOTVc4dmwNlXuBNhmsTYPZ-eRnlll3k624WNLKyQ8NxAu4T8OqkjTnK7vvjUnM3xyFRwYzy5Fpto6UOKrl7vSzzG1LYZYXA19cQ2zQ8BMsllWmR-uWH_tlcNzJm2AzeJEdrHxf9V3LKA.webp" },
  { id: 7, label: "모리 코고로", group: "1", shape: "circularImage", image: "https://i.namu.wiki/i/NYZ4gAj2p1LRAIifMqdt-PIVNjEvcczCWR7-MsBiAoSakwEBeDviz9SMTZphqXEA1Fgg58TMj_BLa4-S_XXODk29OJ8ckg2PmAlJALqh8__2FtAthR3Lze7FIN386QqQITQflsUxqHADPuBDW6ozag.webp" },

  { id: 8, label: "미야노 아케미", group: "검은 조직", shape: "circularImage", image: "https://i.namu.wiki/i/hzji6WRL0lqAsicsuESNS2zyIDo709HTxZfenNeff6ugJ28-ulg3UuT2e4NcdH5QP-DE1ql_vfp-tv5JBkqMUqm2xxya0l0rqyi_4VcZ3AxK3dRDYCsohbn6Okg1kOTLaXddx6UWz2QgjCXRCecq4g.webp" },

  { id: 9, label: "스즈키 소노코", group: "2", shape: "circularImage", image: "https://i.namu.wiki/i/gznTFwC3keIaa4AkL7p-ecatb9ly0-v2UzHrJdm4XF357vQjtQewvD3FTZdQuhd98Rc_vRJjpAxnH7CapjLlFwbCZJU47jIhqy-vD-F4otoAWBMeA4v-hIzRMgm9BORhQ0nsPCLouuYfcMB3dLo4AQ.webp" },

  { id: 10, label: "쿠도 유키코", group: "0", shape: "circularImage", image: "https://i.namu.wiki/i/sIwAdu8M3BQoDD3hDdOSuMcJE9p9ziQxipIbY9qBc5_N6I4GAZTvq3ujg3wO5OLQTBhV-RGkbNzn4sQkNJNhOBzphc4OArtVxLBNTuU4tatX3hClYbdYY7VAYoofMx5xNZnGfWNdnK_ylQvSmrg-sg.webp" },

  { id: 11, label: "요시다 아유미", group: "0", shape: "circularImage", image: "https://i.namu.wiki/i/QVlUV1LVFANjmNUTdBQthwwYUdoPt7xGMvxStHVWww-lBVUaTPxmzhsRFRnp0UlCJbwiP1SWT8iFBmZF2g77fYhWKzgByCs2L_P1iRVHF5O26_tWqMWZw-SXo2-gwfRj_1cTP9uIIcuexgaMmxzUGw.webp" },
  { id: 12, label: "츠부라야 미츠히코", group: "0", shape: "circularImage", image: "https://i.namu.wiki/i/Znr6OcfhYF3-rVwibzju53JgBsGjvGno8NRjn7Ctn0DXC-v496esvbIfstsu36OEctEjdOWA9BhxYiGd-NkY6KQ70ien8W64SvsEz73n1pX9an9LfifjArqNxElH4JuIWMtDqsqmK9xcYu28tyut5g.webp" },
  { id: 13, label: "코지마 겐타", group: "0", shape: "circularImage", image: "https://i.namu.wiki/i/ySvbchYniv1I0yl5AxG3Xogxd8aOA-PzW4Gzqm0IDHnOrfyUmNncoeWFYnHIRCs7iCTBM1cKChF5eu1t1e55JeaJq0Ed2ZpWuofDj3vT2IkKGeW_MsLJxei3SkCmXYiZo1Cmy7fva-zA2PPJpNJzOg.webp" },
  { id: 14, label: "핫토리 헤이지", group: "3", shape: "circularImage", image: "https://i.namu.wiki/i/Dt6GllkKxmbrDCENOQ7pB90HxAkB3dOX_GzGgtYY7iIwEEr7rqlzkkR7PzkZwqMvLFV4c9pe3AT94PWazNNQoUgDnAzN0lU4eZOI9eJhmHZrxcrmfZ6fkSyYyQJ9lzFQNHgFn0PLkHEIG14FsZx_qw.webp" },

  { id: 15, label: "키사키 에리", group: "1", shape: "circularImage", image: "https://i.namu.wiki/i/16KLADkdtph5vIivkxQKl0L2y4Ep7HwR4Sj4ckeWpNo4CRLg0lGB4HMbwgWJeXHhA6GJVVEdXGpNfharzSfLMNRA3__1w2GkVMSGZONnwyaKRs83DMnqTa-iAZvwv0AAKS_YzB4XKLSWwUxuQTZLaA.webp" },
  { id: 16, label: "괴도 키드", group: "0", shape: "circularImage", image: "https://i.namu.wiki/i/Mess-q_vNGkOvDxdzc6Za9ShJzPk0FT5QOZBARIUb5_LCkiFTarSO6wLxCvR3Kccm6tZ6xzEwJcnYKQpZr5H9AthIm_tLLdw_BFS_QC9NbdSWZAMs19ciPfwQHIURalDtr14PXFQJj0x7KnhYeI-0A.webp" },
  { id: 17, label: "쿠로바 카이토", group: "0", shape: "circularImage", image: "https://i.namu.wiki/i/B9sgMcCi_2A9L-x0ExqmdYIZg0vMA2M9bb8TBaToInaTsuul-VbvmRkKdWz9iX_Dx4zdhCSGO20SgcqWJz_E_co4p3uUg2HWNOEma8mjRrzUyjCMJ-Oo10A-0wiRfnWEbZaQ3mSfZhROgnyDFry28A.webp" },
  { id: 18, label: "하이바라 아이", group: "0", shape: "circularImage", image: "https://i.namu.wiki/i/4Ayjy0JzXc3Cgla_G57Opml2wYWwVrNZwDSFa8NVJP1jBFYQFLyZfCHAXm2UhCXilxeAoO8XkFa6QakmXqR3skjzcUtulrWHzyizua-b5bARLLTn2eHo2ccJRdNisGyWD739P-dLt9fACT6_De9UvQ.webp" },
  { id: 19, label: "토야마 카즈하", group: "3", shape: "circularImage", image: "https://i.namu.wiki/i/mWbMSFVrVhQ_xlpLiaMafdEJ8TpP7xzfB7aNox3I5EYXJTt-eX360WjEQhLcgNFasI656X7QdxLrXFN8cgH6AWYhOQnO_Sn1vViAasBxn1_GKy1ZyipFA1rS-q1gWwB5t7LyMZwgvDuKpAswFKFGnw.webp" },
  { id: 20, label: "쿄고쿠 마코토", group: "2", shape: "circularImage", image: "https://i.namu.wiki/i/jjmdXgmptQCG0jhoM_fABI7uMJOE-M_8AZdfCefA4cQjXSVim0MBUXMcdatiMqnR7SP_oOdofJqujQLrCsig60AErtP8bdpli2VUygr3ZDKjkafAK2ZFRDLCgyGzp3zp2gYV_RG3xEVEZY0OzZ-r8A.webp" },

]

const edges = [
  { id: 0, from: 1, to: 2, label: "동일인물" },
  { id: 1, from: 2, to: 3, dashes: true, label: "연인" },
  { id: 2, from: 4, to: 5 },
  { id: 3, from: 6, to: 18 },
  { id: 4, from: 3, to: 7 },
  { id: 5, from: 4, to: 8, dashes: true, arrows: "to", label: "살해" },
  { id: 6, from: 3, to: 9 },
  { id: 7, from: 10, to: 2 },
  { id: 8, from: 11, to: 12 },
  { id: 9, from: 12, to: 13 },
  { id: 10, from: 13, to: 6 },
  { id: 11, from: 1, to: 11 },
  { id: 12, from: 14, to: 2 },
  { id: 13, from: 15, to: 3 },
  { id: 14, from: 15, to: 7 },
  { id: 15, from: 16, to: 1, dashes: true, label: "라이벌" },
  { id: 16, from: 16, to: 17, label: "동일인물" },
  { id: 17, from: 18, to: 1 },
  { id: 18, from: 8, to: 18, label: "자매" },
  { id: 19, from: 14, to: 19, },
  { id: 20, from: 20, to: 9 },
  // { id: 21, from: 23, to: 22 },
  // { id: 22, from: 22, to: 13 },
  // { id: 23, from: 25, to: 24 },
  // { id: 24, from: 26, to: 25 },
  // { id: 25, from: 25, to: 7 },
  // { id: 26, from: 28, to: 27 },
  // { id: 27, from: 29, to: 28 },
  // { id: 28, from: 28, to: 0 },
  // {
  //   id: 29, from: 5, to: 4, dashes: [10], background: {
  //     enabled: true,
  //     color: "rgba(111,111,111,0.5)",
  //     size: 10,
  //     dashes: [10],
  //   },
  // },
]