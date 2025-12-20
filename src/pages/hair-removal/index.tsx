import { Header } from "../../components/common/headers/Header";
import { Footer } from "../../components/footer/Footer";
import { TreatmentTable } from "../../components/treatment/TreatmentTable";
import { HAIR_REMOVAL_DATA, LIFTING_DATA } from "../../data/treatment-data";
import { SubPageBanner } from "../../components/common/banner/SubPageBanner";

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
        bgImage="/banners/removal&lifting.png"
      />
      <TreatmentTable data={HAIR_REMOVAL_DATA} />
      <div style={{ height: "4rem" }}></div>
      <TreatmentTable data={LIFTING_DATA} />
      <Footer />
    </div>
  );
};

export default HairRemovalPage;
