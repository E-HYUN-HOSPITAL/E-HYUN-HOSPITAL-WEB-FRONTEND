export interface DoctorType {
  major: string;
  imageUrl: string;
  position: string;
  specialty: string;
  education: string[];
  memberships: string[];
}

export const DOCTOR_DATA: { [key: string]: DoctorType } = {
  이연진: {
    major: "Hospital Director",
    imageUrl: "/doctor-info/hospital_director.webp",
    position: "병원장",
    specialty: "한의사",
    education: [
      "대구한의대학교 한의학과 졸업",
      "드림요양병원 한의과장",
      "신괴정요양병원 한의과장",
      "창원 후한의원 진료원장",
    ],
    memberships: [
      "대한내과학회 정회원",
      "대한한방내과학회 이사",
      "국제 동양의학 학술대회 발표",
      "전 이안한방병원 진료원장",
    ],
  },
  박건호: {
    major: "Head Director",
    imageUrl: "/doctor-info/hospital_head_director.webp",
    position: "대표원장",
    specialty: "한의사",
    education: [
      "미국진단초음파협회(ARDMS)",
      "국제근골격계초음파 진단 자격자(RMSK)",
      "생활스포츠지도사 2급보디빌딩",
      "대전대학교 한방병원 수련의",
      "비만치료 전문가 과정",
    ],
    memberships: [
      "시리악스 정형의학연구회 정회원",
      "척추신경추나의학회 정회원",
      "한방비만학회 정회원",
      "전 이안한방병원 진료원장",
    ],
  },
  유동곤: {
    major: "Clinic Director",
    imageUrl: "/doctor-info/clinic_director.webp",
    position: "진료원장",
    specialty: "한의사",
    education: ["준비 중입니다"],
    memberships: ["준비 중입니다"],
  },
  김철규: {
    major: "Surgical Specialist",
    imageUrl: "/doctor-info/Doctor-Example.webp",
    position: "외과전문의",
    specialty: "한의사",
    education: ["준비 중입니다"],
    memberships: ["준비 중입니다"],
  },
};
