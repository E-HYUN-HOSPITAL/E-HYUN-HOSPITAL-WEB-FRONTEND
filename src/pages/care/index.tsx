import { Header } from "../../components/common/headers/Header";
import { Footer } from "../../components/footer/Footer";
import { TreatmentTable } from "../../components/treatment/TreatmentTable";
import { SKIN_CARE_DATA } from "../../data/treatment-data";
import { SubPageBanner } from "../../components/common/banner/SubPageBanner";
import {
  EquipmentIntro,
  type EquipmentItem,
} from "../../components/treatment/EquipmentIntro";

const dummyRefs = {
  introduce: { current: null },
  doctor: { current: null },
  equipment: { current: null },
  hospital: { current: null },
  noncovered: { current: null },
  route: { current: null },
};

const SKIN_EQUIPMENT: EquipmentItem[] = [
  {
    name: "더마샤인프로",
    engName: "Derma Shine PRo",
    img: "/equipments/dermatology/017.png",
    tags: ["#물광주사", "#속건조해결", "#수분충전"],
    desc: "피부 진피층에 히알루론산 등 유효 성분을 균일하고 정확하게 주입합니다. 건조하고 메마른 피부에 즉각적인 수분감을 주어 촉촉하게 빛나는 물광 피부를 선사합니다.",
  },
  {
    name: "LDM",
    engName: "LDM",
    img: "/equipments/dermatology/LDM.webp",
    tags: ["#피부진정", "#장벽강화", "#트러블완화"],
    desc: "고밀도 초음파 에너지가 피부 속 수분을 진피 쪽으로 끌어올립니다. 무너진 피부 밸런스를 맞춰 트러블을 진정시키고, 예민한 피부 장벽을 건강하게 회복시킵니다.",
  },
];

const CarePage = () => {
  return (
    <div style={{ paddingTop: "8rem" }}>
      <Header
        sectionRefs={dummyRefs}
        activeSection=""
        handleScroll={() => {}}
      />
      <SubPageBanner
        title="메디컬 스킨케어"
        subTitle="Medical Skincare"
        bgImage="/public/banners/medi.png"
      />
      <EquipmentIntro data={SKIN_EQUIPMENT} />

      <TreatmentTable data={SKIN_CARE_DATA} />
      <Footer />
    </div>
  );
};

export default CarePage;
