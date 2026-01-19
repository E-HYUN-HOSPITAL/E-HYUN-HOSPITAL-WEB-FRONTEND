import { Header } from "../../components/common/headers/Header";
import { Footer } from "../../components/footer/Footer";
import { TreatmentTable } from "../../components/treatment/TreatmentTable";
import { HAIR_REMOVAL_DATA, LIFTING_DATA } from "../../data/treatment-data";
import { SubPageBanner } from "../../components/common/banner/SubPageBanner";
import {
  EquipmentIntro,
  type EquipmentItem,
} from "../../components/treatment/EquipmentIntro";

const HAIR_QEUIPMENT: EquipmentItem[] = [
  {
    name: "클라리티 2",
    engName: "Clarity II",
    img: "/equipments/dermatology/clarity2.webp",
    tags: ["#통증최소화", "#매끈한제모", "#모공축소"],
    desc: "지능형 냉각 쿨링 시스템으로 통증은 줄이고 효과는 높였습니다. 솜털부터 굵은 털까지 깔끔한 제모는 물론, 늘어난 모공과 피부 결까지 동시에 개선합니다.",
  },
  {
    name: "올리지오",
    engName: "Oligio",
    img: "/equipments/dermatology/올리지오.webp",
    tags: ["#한국형써마지", "#잔주름개선", "#콜라겐생성"],
    desc: "한국인의 피부 타입에 최적화된 고주파 리프팅입니다. 피부 속 깊은 곳부터 콜라겐을 채워주어, 얇고 처진 피부를 탄탄하고 쫀쫀하게 만들어줍니다.",
  },
  {
    name: "슈링크 유니버스",
    engName: "Shurink Universe",
    img: "/equipments/dermatology/shrink_universe.webp",
    tags: ["#브이라인", "#이중턱정리", "#즉각적리프팅"],
    desc: "더 빨라지고 강력해진 초음파 에너지가 근막층을 조여줍니다. 무너진 턱선과 이중턱을 정리하여 날렵한 브이라인과 탄력 있는 얼굴선을 완성합니다.",
  },
];

const dummyRefs = {
  introduce: { current: null },
  doctor: { current: null },
  equipment: { current: null },
  hospital: { current: null },
  noncovered: { current: null },
  route: { current: null },
};

const HairRemovalPage = () => {
  return (
    <div style={{ paddingTop: "8rem" }}>
      <Header
        sectionRefs={dummyRefs}
        activeSection=""
        handleScroll={() => {}}
      />
      <SubPageBanner
        title="제모 클리닉 & 리프팅"
        subTitle="Hair Removal & Lifting"
        bgImage="/public/banners/removal&lifting.png"
      />
      <EquipmentIntro data={HAIR_QEUIPMENT} />

      <TreatmentTable data={HAIR_REMOVAL_DATA} />
      <div style={{ height: "4rem" }}></div>
      <TreatmentTable data={LIFTING_DATA} />
      <Footer />
    </div>
  );
};

export default HairRemovalPage;
