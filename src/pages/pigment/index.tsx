import { Header } from "../../components/common/headers/Header";
import { Footer } from "../../components/footer/Footer";

const dummyRefs = {
  introduce: { current: null },
  doctor: { current: null },
  equipment: { current: null },
  hospital: { current: null },
  route: { current: null },
};

const PigmentPage = () => {
  return (
    <div style={{ paddingTop: "8rem" }}>
      <Header
        sectionRefs={dummyRefs}
        activeSection=""
        handleScroll={() => {}}
      />

      <main style={{ minHeight: "80vh", padding: "2rem" }}>
        <h1>색소 관리센터</h1>
        <p>색소 관리 안내 프로그램입니다.</p>
        <div style={{ marginTop: "2rem", width: "100%", maxWidth: "800px" }}>
          <img
            src="/equipments/medical_list/medi_list2.webp"
            alt="색소 시술 안내"
            style={{ width: "100%", height: "auto", borderRadius: "10px" }} // 스타일은 취향껏 조절
          />
        </div>{" "}
      </main>

      <Footer />
    </div>
  );
};

export default PigmentPage;
