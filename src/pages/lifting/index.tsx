import { Header } from "../../components/common/headers/Header";
import { Footer } from "../../components/footer/Footer";

const dummyRefs = {
  introduce: { current: null },
  doctor: { current: null },
  equipment: { current: null },
  hospital: { current: null },
  route: { current: null },
};

const LiftingPage = () => {
  return (
    <div style={{ paddingTop: "8rem" }}>
      <Header
        sectionRefs={dummyRefs}
        activeSection=""
        handleScroll={() => {}}
      />

      <main style={{ minHeight: "80vh", padding: "2rem" }}>
        <h1>리프팅 센터</h1>
        <p>리프팅 안내 프로그램입니다.</p>
        <div style={{ marginTop: "2rem", width: "100%", maxWidth: "800px" }}>
          <img
            src="/equipments/medical_list/medi_list3.webp"
            alt="리프팅 시술 안내"
            style={{ width: "100%", height: "auto", borderRadius: "10px" }} // 스타일은 취향껏 조절
          />
        </div>{" "}
      </main>

      <Footer />
    </div>
  );
};

export default LiftingPage;
