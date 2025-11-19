export type SubMenuItem = {
  label: string;
  key: string;
  type: "scroll" | "link";
};

export type MainMenuItem = {
  label: string;
  key: string;
  children: SubMenuItem[];
};

export const HEADER_MENU: MainMenuItem[] = [
  {
    label: "병원소개",
    key: "intro_main",
    children: [
      { label: "병원 소개", key: "introduce", type: "scroll" },
      { label: "의료진 소개", key: "doctor", type: "scroll" },
      { label: "장비안내", key: "equipment", type: "scroll" },
      { label: "병원내부 사진", key: "hospital", type: "scroll" },
      { label: "비급여 항목 안내", key: "noncovered", type: "scroll" },
      { label: "오시는 길", key: "route", type: "scroll" },
    ],
  },
  {
    label: "제모 센터",
    key: "hair_removal",
    children: [
      { label: "남성 제모", key: "/hair-removal/men", type: "link" },
      { label: "여성 제모", key: "/hair-removal/women", type: "link" },
    ],
  },
  {
    label: "색소 센터",
    key: "pigment",
    children: [{ label: "기미/잡티", key: "/pigment/freckle", type: "link" }],
  },
  {
    label: "문신제거",
    key: "tattoo",
    children: [
      { label: "500원 동전 사이즈", key: "/tattoo/500coin", type: "link" },
      { label: "1x5 이하", key: "/tattoo/1x5", type: "link" },
      { label: "1x10 이하", key: "/tattoo/1x10", type: "link" },
      { label: "명함 사이즈(9x5)", key: "/tattoo/9x5", type: "link" },
    ],
  },
  {
    label: "홍조/여드름/모공",
    key: "acne",
    children: [
      { label: "클라리티 레이저", key: "/acne/clarity", type: "link" },
      {
        label: "골드PPT(압출+스케일링 포함)",
        key: "/acne/goldPPT",
        type: "link",
      },
      { label: "피코프락셀(MLA)", key: "/acne/pico", type: "link" },
    ],
  },
  {
    label: "리프팅",
    key: "lifting",
    children: [
      { label: "슈링크 유니버스", key: "/lifting/shurink", type: "link" },
      { label: "올리지오", key: "/lifting/oligio", type: "link" },
    ],
  },
  {
    label: "피부관리프로그램",
    key: "care",
    children: [
      { label: "스케일링 관리", key: "/care/scaling", type: "link" },
      { label: "아쿠아필", key: "/care/aquapeel", type: "link" },
      { label: "라라필", key: "/care/lalapeel", type: "link" },
      { label: "LDM 재생", key: "/care/ldm", type: "link" },
      { label: "내맘대로 피부관리", key: "/care/self", type: "link" },
    ],
  },
];
