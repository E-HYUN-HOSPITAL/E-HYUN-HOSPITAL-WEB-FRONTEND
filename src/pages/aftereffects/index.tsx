import { Header } from "../../components/common/headers/Header";
import { Footer } from "../../components/footer/Footer";

const dummyRefs = {
  introduce: { current: null },
  doctor: { current: null },
  equipment: { current: null },
  hospital: { current: null },
  noncovered: { current: null },
  route: { current: null },
};

const AfterEffectsPage = () => {
  return (
    <div style={{ paddingTop: "8rem" }}>
      <Header
        sectionRefs={dummyRefs}
        activeSection=""
        handleScroll={() => {}}
      />
      <p style={{ textAlign: "center" }}>
        <img src="/banners/affterEffects_dummy.jpg" alt="임시 이미지" />
      </p>
      <Footer />
    </div>
  );
};

export default AfterEffectsPage;
