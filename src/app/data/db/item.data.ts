import { Item } from "../item.model";

export class ItemData {
  private items: Item [] = [
    {
      itemId: 1,
      itemName: 'Poké Ball',
      fileLocation: './assets/items/ball1_poke.png',
    },
    {
      itemId: 2,
      itemName: 'Great Ball',
      fileLocation: './assets/items/ball2_great.png',
    },
    {
      itemId: 3,
      itemName: 'Ultra Ball',
      fileLocation: './assets/items/ball3_ultra.png',
    },
    {
      itemId: 4,
      itemName: 'Master Ball',
      fileLocation: './assets/items/ball4_master.png',
    },
    { itemId: 5,
      itemName: 'Run',
      fileLocation: './assets/items/run.png'
    },
  ];

  getItems() {
    return this.items;
  }
}