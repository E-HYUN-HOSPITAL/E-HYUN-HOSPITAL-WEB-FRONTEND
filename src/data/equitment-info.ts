export interface EquipmentItem {
  number: number;
  name: string;
  image: string;
}

export type EquipmentCategory = "skincare" | "musculoskeletal_pain";

export const EQUIPMENT_DATA: Record<EquipmentCategory, EquipmentItem[]> = {
  skincare: [
    {
      number: 1,
      name: "Oligio",
      image: "/equipments/dermatology/015.png",
    },
    {
      number: 2,
      name: "Shurink Universe",
      image: "/equipments/dermatology/013.png",
    },
    {
      number: 3,
      name: "PicoPlus",
      image: "/equipments/dermatology/014.png",
    },
    {
      number: 4,
      name: "Hollywood Spectra",
      image: "/equipments/dermatology/016.png",
    },
    {
      number: 5,
      name: "Clarity2",
      image: "/equipments/dermatology/012.png",
    },
    {
      number: 6,
      name: "DermaShinePro",
      image: "/equipments/dermatology/017.png",
    },
    {
      number: 7,
      name: "LDM",
      image: "/equipments/dermatology/018.png",
    },
    {
      number: 8,
      name: "AquaPeel",
      image: "/equipments/dermatology/019.png",
    },
    {
      number: 9,
      name: "Care7",
      image: "/equipments/dermatology/020.png",
    },
  ],

  musculoskeletal_pain: [
    {
      number: 1,
      name: "C-arm",
      image: "/equipments/western_medicine/006.png",
    },
    {
      number: 2,
      name: "V7",
      image: "/equipments/western_medicine/021.png",
    },
    { number: 3, name: "Xr", image: "/equipments/western_medicine/007.png" },
    {
      number: 4,
      name: "ExtracorporealShockWaves",
      image: "/equipments/western_medicine/008.png",
    },
    {
      number: 5,
      name: "CryoMaster",
      image: "/equipments/western_medicine/022.png",
    },
    {
      number: 6, //간섭파치료기 ICT,영어이름을 한글로
      name: "InterferenceCurrentTherapy",
      image: "/equipments/oriental_medicine/001.png", //이미지 확인필요
    },
    {
      number: 7,
      name: "Acupunture",
      image: "/equipments/oriental_medicine/003.png",
    },
  ],
};
