export interface EquipmentItem {
  number: number;
  name: string;
  image: string;
}

export type EquipmentCategory = 'hanbang' | 'yangbang' | 'skincare';

export const EQUIPMENT_DATA: Record<EquipmentCategory, EquipmentItem[]> = {
  hanbang: [
    {
      number: 1,
      name: '한방장비 1',
      image: '/equipments/dummy_equipment.png',
    },
    { number: 2, name: '한방장비 2', image: '/equipments/dummy_equipment.png' },
    { number: 3, name: '한방장비 3', image: '/equipments/dummy_equipment.png' },
    { number: 4, name: '한방장비 4', image: '/equipments/dummy_equipment.png' },
    { number: 5, name: '한방장비 5', image: '/equipments/dummy_equipment.png' },
  ],
  yangbang: [
    { number: 1, name: '양방장비 1', image: '/equipments/dummy_equipment.png' },
    { number: 2, name: '양방장비 2', image: '/equipments/dummy_equipment.png' },
    { number: 3, name: '양방장비 3', image: '/equipments/dummy_equipment.png' },
    { number: 4, name: '양방장비 4', image: '/equipments/dummy_equipment.png' },
    { number: 5, name: '양방장비 5', image: '/equipments/dummy_equipment.png' },
  ],
  skincare: [
    {
      number: 1,
      name: '피부과장비 1',
      image: '/equipments/dummy_equipment.png',
    },
    {
      number: 2,
      name: '피부과장비 2',
      image: '/equipments/dummy_equipment.png',
    },
    {
      number: 3,
      name: '피부과장비 3',
      image: '/equipments/dummy_equipment.png',
    },
    {
      number: 4,
      name: '피부과장비 4',
      image: '/equipments/dummy_equipment.png',
    },
    {
      number: 5,
      name: '피부과장비 5',
      image: '/equipments/dummy_equipment.png',
    },
  ],
};
