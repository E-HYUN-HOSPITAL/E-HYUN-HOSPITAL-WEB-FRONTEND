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
      image: "/equipments/oriental_medicine/001.png",
    },
    {
      number: 2,
      name: "Infrared",
      image: "/equipments/oriental_medicine/002.png",
    },
    {
      number: 3,
      name: "Acupunture",
      image: "/equipments/oriental_medicine/003.png",
    },
    {
      number: 4,
      name: "Ultrasound",
      image: "/equipments/oriental_medicine/004.png",
    },
    {
      number: 5,
      name: "Heated",
      image: "/equipments/oriental_medicine/005.png",
    },
  ],
  yangbang: [
    {
      number: 1,
      name: "C-arm",
      image: "/equipments/western_medicine/006.png",
    },
    { number: 2, name: "Xr", image: "/equipments/western_medicine/007.png" },
    {
      number: 3,
      name: "ExtracorporealShockWaves",
      image: "/equipments/western_medicine/008.png",
    },
    {
      number: 4,
      name: "RaphaelSaso",
      image: "/equipments/western_medicine/009.png",
    },
    {
      number: 5,
      name: "CPM",
      image: "/equipments/western_medicine/010.png",
    },
  ],
  skincare: [
    {
      number: 1,
      name: "Care5",
      image: "/equipments/dermatology/011.png",
    },
    {
      number: 2,
      name: "Clarity2",
      image: "/equipments/dermatology/012.png",
    },
    {
      number: 3,
      name: "Shurink Universe",
      image: "/equipments/dermatology/013.png",
    },
    {
      number: 4,
      name: "PicoPlus",
      image: "/equipments/dermatology/014.png",
    },
    {
      number: 5,
      name: "Oligio",
      image: "/equipments/dermatology/015.png",
    },
  ],
};
