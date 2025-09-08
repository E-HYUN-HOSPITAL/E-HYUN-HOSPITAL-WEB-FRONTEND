export interface DoctorType {
  major: string;
  imageUrl: string;
  position: string;
  specialty: string;
  education: string[];
  memberships: string[];
}

export const DOCTOR_DATA: { [key: string]: DoctorType } = {
  곽곽곽: {
    major: 'Internal Medicine',
    imageUrl: '/doctor-info/dummy_doc.png',
    position: '원장',
    specialty: '한의사',
    education: [
      '서울대학교 의과대학 졸업',
      '서울대학교병원 내과 전공의 수료',
      '00한방병원 내과 과장 역임',
      '현 00한방병원 원장',
    ],
    memberships: [
      '대한내과학회 정회원',
      '대한한방내과학회 이사',
      '국제 동양의학 학술대회 발표',
    ],
  },
  김김김: {
    major: 'Dermatology',
    imageUrl: '/doctor-info/dummy_doc.png',
    position: '부원장',
    specialty: '피부과 전문의',
    education: [
      '고려대학교 의과대학 졸업',
      '고려대학교병원 피부과 전공의 수료',
      '현 00한방병원 부원장',
    ],
    memberships: ['대한피부과학회 정회원', '대한미용성형외과학회 이사'],
  },
};
