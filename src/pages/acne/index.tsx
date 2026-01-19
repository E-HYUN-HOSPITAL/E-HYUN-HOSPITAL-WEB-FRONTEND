import { Header } from "../../components/common/headers/Header";
import { Footer } from "../../components/footer/Footer";
import { TreatmentTable } from "../../components/treatment/TreatmentTable";
import { ACNE_DATA, PIGMENT_DATA } from "../../data/treatment-data";
import { SubPageBanner } from "../../components/common/banner/SubPageBanner";

import {
  EquipmentIntro,
  type EquipmentItem,
} from "../../components/treatment/EquipmentIntro";

const ACNE_QEUIPMENT: EquipmentItem[] = [
  {
    name: "피코플러스",
    engName: "PicoPlus",
    img: "/equipments/dermatology/picoPlus.webp",
    tags: ["#난치성기미", "#주근깨", "#화이트닝"],
    desc: "칙칙한 기미와 잡티의 원인이 되는 멜라닌 색소만을 선택적으로 파괴합니다. 재발하기 쉬운 기미를 효과적으로 치료하여 본연의 맑은 피부 톤을 되찾아줍니다.",
  },
  {
    name: "헐리우드 스펙트라",
    engName: "Hollywood Spectra",
    img: "/equipments/dermatology/016.png",
    tags: ["#여드름자국", "#피부톤보정", "#광채피부"],
    desc: "균일한 레이저 빔이 피부 톤을 환하게 밝히고, 거친 피부 결을 부드럽게 정돈합니다. 여드름 붉은 자국 완화와 전체적인 안색 개선에 탁월합니다.",
  },
  {
    name: "클라리티 2",
    engName: "Clarity II",
    img: "/equipments/dermatology/clarity2.webp",
    tags: ["#안면홍조", "#혈관치료", "#색소침착"],
    desc: "홍조와 거뭇한 색소를 동시에 잡아줍니다. 예민해진 혈관을 진정시키고 색소 병변을 제거하여 깨끗하고 투명한 피부를 만듭니다",
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

const AcnePage = () => {
  return (
    <div style={{ paddingTop: "8rem" }}>
      <Header
        sectionRefs={dummyRefs}
        activeSection=""
        handleScroll={() => {}}
      />
      <SubPageBanner
        title="기미/홍조/여드름/모공"
        subTitle="Acne & Pigment"
        bgImage="/banners/acne.png"
      />
      <EquipmentIntro data={ACNE_QEUIPMENT} />

      <TreatmentTable data={ACNE_DATA} />
      <div style={{ height: "4rem" }}></div>
      <TreatmentTable data={PIGMENT_DATA} />
      <Footer />
    </div>
  );
};

export default AcnePage;
