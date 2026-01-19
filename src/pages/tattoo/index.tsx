import { Header } from "../../components/common/headers/Header";
import { Footer } from "../../components/footer/Footer";
import { TreatmentTable } from "../../components/treatment/TreatmentTable";
import { TATTOO_DATA } from "../../data/treatment-data";
import { SubPageBanner } from "../../components/common/banner/SubPageBanner";
import {
  EquipmentIntro,
  type EquipmentItem,
} from "../../components/treatment/EquipmentIntro";

const TATTOO_EQUIPMENT: EquipmentItem[] = [
  {
    name: "피코플러스",
    engName: "PicoPlus",
    img: "/equipments/dermatology/picoPlus.webp",
    tags: ["#나노초보다빠른", "#미세입자파괴", "#흉터최소화"],
    desc: "기존 레이저보다 1,000배 빠른 속도로 색소 입자를 잘게 부수어 배출합니다. 주변 피부 조직의 손상을 최소화하여 통증과 부작용 걱정 없이 문신을 깨끗하게 지웁니다.",
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

const TattooPage = () => {
  return (
    <div style={{ paddingTop: "8rem" }}>
      <Header
        sectionRefs={dummyRefs}
        activeSection=""
        handleScroll={() => {}}
      />
      <SubPageBanner
        title="문신제거"
        subTitle="Tattoo Removal"
        bgImage="/banners/tattoo.png"
      />

      <EquipmentIntro
        title="TATTOO REMOVAL SYSTEM"
        subTitle="지우고 싶은 흔적, 피부 손상 없이 깨끗하게 되돌립니다.
        (#흑백문신만 제거 가능)"
        data={TATTOO_EQUIPMENT}
      />

      <div style={{ height: "2rem" }}></div>

      <TreatmentTable data={TATTOO_DATA} />

      <Footer />
    </div>
  );
};

export default TattooPage;
