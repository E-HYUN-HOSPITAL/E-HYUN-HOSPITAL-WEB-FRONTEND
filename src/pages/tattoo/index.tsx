import { Header } from "../../components/common/headers/Header";
import { Footer } from "../../components/footer/Footer";
import { TreatmentTable } from "../../components/treatment/TreatmentTable";
import { TATTOO_DATA } from "../../data/treatment-data";
import { SubPageBanner } from "../../components/common/banner/SubpageBanner";

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
        bgImage="/public/banners/tattoo.png"
      />
      <TreatmentTable
        data={TATTOO_DATA}
        extraNotice="※ 흑백 문신만 제거 가능"
      />

      <Footer />
    </div>
  );
};

export default TattooPage;
