import { useEffect, useRef, useState } from "react";

import { DoctorInfoPage } from "../../components/doctor-info/page";
import { EquipmentInfo } from "../../components/equipment-info/page";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/common/headers/Header";
import { HospitalPicturePage } from "../../components/hospital-picture/page";
import { IntroducePage } from "../../components/introduce/page";
import { MainPageComponent } from "../../components/main/page";
import { PromisePage } from "../../components/promise/page";
import { NonCoveredPage } from "../../components/non-covered/page";
import { RouteToComePage } from "../../components/route-to-come/page";
import styles from "./mainpage.module.scss";
import { MainPopup } from "../../components/common/popup/MainPopup";

function MainPage() {
  const introduceRef = useRef<HTMLDivElement>(null);
  const doctorRef = useRef<HTMLDivElement>(null);
  const equipmentRef = useRef<HTMLDivElement>(null);
  const hospitalRef = useRef<HTMLDivElement>(null);
  const nonCoveredRef = useRef<HTMLDivElement>(null);
  const routeRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<string>("introduce");

  const sectionRefs = {
    introduce: introduceRef,
    doctor: doctorRef,
    equipment: equipmentRef,
    hospital: hospitalRef,
    noncovered: nonCoveredRef,
    route: routeRef,
  };

  useEffect(() => {
    const handleScroll = () => {
      const HEADER_HEIGHT = 8 * 16;
      const scrollPosition = window.scrollY + HEADER_HEIGHT;

      const sections = Object.entries(sectionRefs);

      for (const [key, ref] of sections) {
        if (
          ref.current &&
          ref.current.offsetTop <= scrollPosition &&
          ref.current.offsetTop + ref.current.offsetHeight > scrollPosition
        ) {
          setActiveSection(key);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const HEADER_HEIGHT = 8 * 16;
      const offset = ref.current.offsetTop - HEADER_HEIGHT;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.container}>
      <MainPopup />
      <Header
        sectionRefs={sectionRefs}
        activeSection={activeSection}
        handleScroll={handleScroll}
      />
      <MainPageComponent />
      <IntroducePage ref={introduceRef} />
      <PromisePage />
      <DoctorInfoPage ref={doctorRef} />
      <EquipmentInfo ref={equipmentRef} />
      <HospitalPicturePage ref={hospitalRef} />
      <NonCoveredPage ref={nonCoveredRef} />
      <RouteToComePage ref={routeRef} />
      <Footer />
    </div>
  );
}

export default MainPage;
