export interface Salad {
  item: string;
  description: string;
  calories: string;
  price: number;
  img: string;
  dressings: string[];
  addOns?: { name: string; calories: number; price: number }[];
  wrongPrices?: number[];
  upsells?: any[];
  orderqs?: any[];
}

export interface Soup {
  item: string;
  description: string;
  calories: string;
  price: { bowl: number; cup: number };
  img: string;
  wrongPrices?: { bowl: number[]; cup: number[] };
  upsells?: any[];
  orderqs?: any[];
}

export interface Dressing {
  name: string;
  calories: number;
}

export const salads: Salad[] = [
  {
    item: "Grilled Chicken Pecan Salad",
    description:
      "Grilled chicken, tomatoes, carrots, cheddar jack cheese, and glazed pecans. Served over freshly chopped lettuce with honey mustard dressing.",
    calories: "620 cal",
    price: 11.99,
    img: "/Cheddars_May23_GrilledChicPecanSala_856x517.jpg",
    dressings: ["Honey Mustard"],
    addOns: [
      { name: "Grilled Shrimp", calories: 80, price: 2.99 },
      { name: "Grilled Salmon", calories: 260, price: 2.49 },
    ],
    wrongPrices: [10.49, 12.99, 13.49],
    upsells: [],
    orderqs: []
  },
  {
    item: "Crispy Chicken Tender Salad",
    description:
      "Hand-breaded tenders, cheddar jack cheese, tomatoes, and carrots. Served over freshly chopped lettuce with honey mustard dressing.",
    calories: "750 cal",
    price: 11.29,
    img: "/chicken-tender-salad-590x365.jpg",
    dressings: ["Honey Mustard"],
    wrongPrices: [9.99, 10.79, 12.49],
    upsells: [],
    orderqs: []
  },
  {
    item: "Caesar Pasta Salad",
    description:
      "Lemon pepper chicken or blackened salmon, penne pasta, freshly chopped romaine lettuce, and croutons.",
    calories: "860 / 940 cal",
    price: 11.49,
    img: "/chicken-caesar-pasta-salad.jpg",
    dressings: ["Caesar"],
    addOns: [
      { name: "Salmon", calories: 940, price: 13.98 },
    ],
    wrongPrices: [9.99, 10.99, 12.99],
    upsells: [],
    orderqs: []
  }
];

export const soups: Soup[] = [
  {
    item: "Baked Potato Soup",
    description:
      "A creamy, house-made soup with diced potatoes, celery, onions, cheddar cheese, and crispy bacon.",
    calories: "570 / 330 cal",
    price: { bowl: 4.79, cup: 3.79 },
    img: "/BakedPotatoSoup_Hero.jpg",
    wrongPrices: {
      bowl: [3.99, 5.29, 5.79],
      cup: [2.99, 3.29, 4.49],
    },
    upsells: [],
    orderqs: []
  }
];

export const dressings: Dressing[] = [
  { name: "Homemade Ranch", calories: 220 },
  { name: "Thousand Island", calories: 260 },
  { name: "Chunky Bleu Cheese", calories: 280 },
  { name: "Honey Mustard", calories: 210 },
  { name: "Balsamic Vinaigrette", calories: 110 },
  { name: "Honey Lime", calories: 260 }
];