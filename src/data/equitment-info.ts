export interface EquipmentItem {
  number: number;
  name: string;
  image: string;
}

export type EquipmentCategory = "hanbang" | "yangbang" | "skincare";

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
    { number: 4, name: "한방장비 4", image: "/equipments/dummy_equipment.png" },
    { number: 5, name: "한방장비 5", image: "/equipments/dummy_equipment.png" },
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
    { number: 5, name: "양방장비 5", image: "/equipments/dummy_equipment.png" },
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
};
