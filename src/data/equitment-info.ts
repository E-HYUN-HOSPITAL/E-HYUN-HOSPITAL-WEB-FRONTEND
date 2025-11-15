export interface EquipmentItem {
  number: number;
  name: string;
  image: string;
}

export type EquipmentCategory =
  | "hanbang"
  | "yangbang"
  | "skincare"
  | "medilist"
  | "non-covered";

export const EQUIPMENT_DATA: Record<EquipmentCategory, EquipmentItem[]> = {
  hanbang: [
    {
      number: 1,
      name: "LowFrequency",
      image: "/equipments/oriental_medicine/기간섭형저주파극기.webp",
    },
    {
      number: 2,
      name: "Infrared",
      image: "/equipments/oriental_medicine/적외선조사기.webp",
    },
    {
      number: 3,
      name: "Acupunture",
      image: "/equipments/oriental_medicine/침전기자극기STN-220.webp",
    },
    {
      number: 4,
      name: "Ultrasound",
      image: "/equipments/oriental_medicine/초음파치료기.webp",
    },
    {
      number: 5,
      name: "Heated",
      image: "/equipments/oriental_medicine/온뜸.webp",
    },
  ],
  yangbang: [
    {
      number: 1,
      name: "C-arm",
      image: "/equipments/western_medicine/c-arm.webp",
    },
    { number: 2, name: "Xr", image: "/equipments/western_medicine/xr.webp" },
    {
      number: 3,
      name: "ExtracorporealShockWaves",
      image: "/equipments/western_medicine/체외충격파치료기.webp",
    },
    {
      number: 4,
      name: "RaphaelSaso",
      image: "/equipments/western_medicine/터보싸소_다이얼.webp",
    },
    {
      number: 5,
      name: "CPM",
      image: "/equipments/western_medicine/KneeCPM_1.webp",
    },
  ],
  skincare: [
    {
      number: 1,
      name: "Care5",
      image: "/equipments/dermatology/care5.webp",
    },
    {
      number: 2,
      name: "Clarity2",
      image: "/equipments/dermatology/clarity2.webp",
    },
    {
      number: 3,
      name: "Shurink Universe",
      image: "/equipments/dermatology/shrink_universe.webp",
    },
    {
      number: 4,
      name: "PicoPlus",
      image: "/equipments/dermatology/picoPlus.webp",
    },
    {
      number: 5,
      name: "Oligio",
      image: "/equipments/dermatology/올리지오.webp",
    },
  ],
  medilist: [
    {
      number: 1,
      name: "제모",
      image: "/equipments/medical_list/medi_list1.webp",
    },
    {
      number: 2,
      name: "색소 및 문신제거",
      image: "/equipments/medical_list/medi_list2.webp",
    },
    {
      number: 3,
      name: "홍조/여드름/모공 및 리프팅",
      image: "/equipments/medical_list/medi_list3.webp",
    },
    {
      number: 4,
      name: "피부관리",
      image: "/equipments/medical_list/medi_list4.webp",
    },
  ],
  "non-covered": [
    {
      number: 1,
      name: "비급여항목",
      image: "/equipments/non-covered/non_covered.webp",
    },
  ],
};
