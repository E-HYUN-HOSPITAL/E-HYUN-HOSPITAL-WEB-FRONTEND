import { Header } from "../../components/common/headers/Header";
import { Footer } from "../../components/footer/Footer";
import { TreatmentTable } from "../../components/treatment/TreatmentTable";
import { ACNE_DATA, PIGMENT_DATA } from "../../data/treatment-data";
import { SubPageBanner } from "../../components/common/banner/SubPageBanner";

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
      <TreatmentTable data={ACNE_DATA} />
      <div style={{ height: "4rem" }}></div>
      <TreatmentTable data={PIGMENT_DATA} />
      <Footer />
    </div>
  );
};

export default AcnePage;
