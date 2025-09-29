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
      name: "한방장비 1",
      image: "/equipments/dummy_equipment.png",
    },
    { number: 2, name: "한방장비 2", image: "/equipments/dummy_equipment.png" },
    { number: 3, name: "한방장비 3", image: "/equipments/dummy_equipment.png" },
    { number: 4, name: "한방장비 4", image: "/equipments/dummy_equipment.png" },
    { number: 5, name: "한방장비 5", image: "/equipments/dummy_equipment.png" },
  ],
  yangbang: [
    { number: 1, name: "양방장비 1", image: "/equipments/dummy_equipment.png" },
    { number: 2, name: "양방장비 2", image: "/equipments/dummy_equipment.png" },
    { number: 3, name: "양방장비 3", image: "/equipments/dummy_equipment.png" },
    { number: 4, name: "양방장비 4", image: "/equipments/dummy_equipment.png" },
    { number: 5, name: "양방장비 5", image: "/equipments/dummy_equipment.png" },
  ],
  skincare: [
    {
      number: 1,
      name: "Care5",
      image: "/equipments/care5.webp",
    },
    {
      number: 2,
      name: "Clarity2",
      image: "/equipments/clarity2.webp",
    },
    {
      number: 3,
      name: "LDM",
      image: "/equipments/LDM.webp",
    },
    {
      number: 4,
      name: "picoPlus",
      image: "/equipments/picoPlus.webp",
    },
    {
      number: 5,
      name: "Oligio",
      image: "/equipments/올리지오.webp",
    },
  ],
};
