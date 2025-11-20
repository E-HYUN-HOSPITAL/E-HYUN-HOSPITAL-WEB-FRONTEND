import { Header } from "../../components/common/headers/Header";
import { Footer } from "../../components/footer/Footer";
import { TreatmentTable } from "../../components/treatment/TreatmentTable";
import { TATTOO_DATA } from "../../data/treatment-data";

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
      <TreatmentTable data={TATTOO_DATA} />
      <span
        style={{
          margin: "0px 75px",
          padding: "0.5rem 1rem",
          color: "#e53935",
          fontWeight: 600,
          fontSize: "0.9rem",
        }}
      >
        ※ 흑백문신만 제거 가능합니다
      </span>
      <Footer />
    </div>
  );
};

export default TattooPage;
