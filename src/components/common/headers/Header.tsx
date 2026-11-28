import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./header.module.scss";
import { HEADER_MENU, type SubMenuItem } from "../../../data/menu";

type Props = {
  sectionRefs: {
    [key: string]: React.RefObject<HTMLDivElement | null>;
    introduce: React.RefObject<HTMLDivElement | null>;
    doctor: React.RefObject<HTMLDivElement | null>;
    equipment: React.RefObject<HTMLDivElement | null>;
    hospital: React.RefObject<HTMLDivElement | null>;
    noncovered: React.RefObject<HTMLDivElement | null>;
    route: React.RefObject<HTMLDivElement | null>;
  };
  activeSection: string;
  handleScroll: (ref: React.RefObject<HTMLDivElement | null>) => void;
};

export const Header = ({ sectionRefs, activeSection, handleScroll }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // 모바일 메뉴가 열려 있는 동안 뒤 페이지 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = () => {
    window.location.href = "/";
  };

  const handleMenuClick = (e: React.MouseEvent, item: SubMenuItem) => {
    if (item.type === "scroll") {
      e.preventDefault();

      if (location.pathname === "/") {
        const targetRef = sectionRefs[item.key];
        if (targetRef && targetRef.current) {
          handleScroll(targetRef);
        } else {
          console.warn(`Ref not found for key: ${item.key}`);
        }
      } else {
        window.location.href = "/";
      }

      setIsHovered(false);
      setMobileOpen(false);
    } else if (item.type === "link") {
      e.preventDefault();
      navigate(item.key);
      setIsHovered(false);
      setMobileOpen(false);
    }
  };

  return (
    <div
      className={`${styles.container} ${isHovered ? styles.open : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.topBar}>
        <img
          src="/logo_ehyun.png"
          alt="메인 로고"
          className={styles.logo}
          onClick={goHome}
        />

        <ul className={styles.mainNav}>
          {HEADER_MENU.map((mainItem) => (
            <li
              key={mainItem.key}
              className={styles.navItem}
              onClick={() => {
                if (mainItem.key === "intro_main") {
                  goHome();
                }
              }}
            >
              <span>{mainItem.label}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`${styles.hamburger} ${mobileOpen ? styles.open : ""}`}
          aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* 모바일 전체 메뉴 */}
      <nav
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!mobileOpen}
      >
        {HEADER_MENU.map((mainItem) => (
          <section key={mainItem.key} className={styles.mobileSection}>
            <h3 className={styles.mobileSectionTitle}>{mainItem.label}</h3>
            <ul className={styles.mobileList}>
              {mainItem.children.map((subItem) => (
                <li key={subItem.label}>
                  <a
                    href={subItem.type === "link" ? subItem.key : "/"}
                    className={`${styles.mobileLink} ${
                      subItem.type === "link" &&
                      location.pathname.replace(/\/$/, "") ===
                        subItem.key.replace(/\/$/, "")
                        ? styles.mobileLinkActive
                        : ""
                    }`}
                    tabIndex={mobileOpen ? 0 : -1}
                    onClick={(e) => handleMenuClick(e, subItem)}
                  >
                    {subItem.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </nav>

      <div className={styles.dropdownContainer}>
        <div className={styles.dropdownContent}>
          {HEADER_MENU.map((mainItem) => (
            <ul key={mainItem.key} className={styles.subList}>
              {mainItem.children.map((subItem) => (
                <li key={subItem.label}>
                  <a
                    href={subItem.type === "link" ? subItem.key : "#"}
                    className={`${styles.subLink} ${
                      location.pathname === "/" &&
                      subItem.type === "scroll" &&
                      activeSection === subItem.key
                        ? styles.active
                        : ""
                    }`}
                    onClick={(e) => handleMenuClick(e, subItem)}
                  >
                    {subItem.label}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};
