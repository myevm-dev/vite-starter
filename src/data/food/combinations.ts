export interface CombinationDish {
  item: string;
  description: string;
  calories: string;
  price: number;
  includesSides: boolean;
  img: string;
  upgradeOptions?: { name: string; price: number; calories: number };
  wrongPrices?: number[];
  upsells?: any[];
  orderqs?: any[];
}

export const combinationDishes: CombinationDish[] = [
  {
      item: "Chicken Tenders & Shrimp",
      description: "Grilled or beer-battered shrimp with our hand-breaded tenders.",
      calories: "1120 / 1460 cal",
      price: 15.49,
      includesSides: true,
      img: "/public/Shrimp_Tenders_Combo_Hero590x365.jpg",
      wrongPrices: [13.99, 14.29, 16.99],
      upsells: [],
      orderqs: []
  },
  {
      item: "Ribs & Chicken Tenders",
      description: "Half rack of our slow-smoked baby back ribs and hand-breaded chicken tenders.",
      calories: "1540 cal",
      price: 19.49,
      includesSides: true,
      img: "/public/Cheddars_RibsTendersCombo_0522.jpg",
      wrongPrices: [17.99, 18.29, 20.99],
      upsells: [],
      orderqs: []
  },
  {
      item: "Ribs & Shrimp",
      description: "Half rack of our slow-smoked baby back ribs with grilled or beer-battered shrimp.",
      calories: "1120 / 1230 cal",
      price: 19.49,
      includesSides: true,
      img: "/public/Ribs_Shrimp_Combo_Hero590x365.jpg",
      wrongPrices: [17.79, 18.49, 21.49],
      upsells: [],
      orderqs: []
  },
  {
      item: "Top Sirloin Steak* & Shrimp",
      description: "6 oz. center-cut top sirloin with grilled or beer-battered shrimp.",
      calories: "560 / 670 cal",
      price: 18.29,
      includesSides: true,
      img: "/public/ShrimpSteak_Hero_Updated_(1)856x517.jpg",
      wrongPrices: [16.49, 17.29, 19.99],
      upsells: [],
      orderqs: []
  },
  {
      item: "Top Sirloin Steak* & Ribs",
      description: "6 oz. center-cut top sirloin with a half rack of our slow-smoked baby back ribs.",
      calories: "1070 cal",
      price: 20.49,
      includesSides: true,
      img: "/public/Steak_and_Ribs_Combo_WEB.jpg",
      wrongPrices: [18.99, 19.29, 21.99],
      upsells: [],
      orderqs: []
  },
  {
      item: "Top Sirloin Steak* & Chicken Tenders",
      description: "6 oz. center-cut top sirloin and hand-breaded chicken tenders.",
      calories: "980 cal",
      price: 18.29,
      includesSides: true,
      img: "/public/Cheddars_Q224_May_SorloinSteakNTenders_856x51.jpg",
      wrongPrices: [16.49, 17.79, 19.49],
      upsells: [],
      orderqs: []
  },
];
