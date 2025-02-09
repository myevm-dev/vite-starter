export interface KidsMeal {
  item: string;
  description: string;
  calories: string;
  price: number;
  includesSide: boolean;
  img: string;
  wrongPrices?: number[];
  upsells?: any[];
  orderqs?: any[];
}

export const kidsMeals: KidsMeal[] = [
  {
      item: "Chicken Tenders",
      description: "Hand-breaded tenders with our signature ranch.",
      calories: "630 cal",
      price: 6.49,
      includesSide: true,
      img: "/public/menu-kids-chicken-tenders.jpg",
      wrongPrices: [5.99, 6.99, 7.49],
      upsells: [],
      orderqs: []
  },
  {
      item: "Junior Burger",
      description: "A quarter-pound burger served plain or with American cheese.",
      calories: "450 / 520 cal",
      price: 6.49,
      includesSide: true,
      img: "/public/menu-kids-hamburger.jpg",
      wrongPrices: [5.49, 6.99, 7.29],
      upsells: [],
      orderqs: []
  },
  {
    item: "Grilled Chicken Alfredo",
    description: "Penne pasta and chicken with homemade alfredo sauce. Served with garlic bread..",
    calories: "870 cal",
    price: 6.49,
    includesSide: true,
    img: "/public/KidsGrilledChicAlfredo_856x517.jpg",
    wrongPrices: [5.49, 6.99, 7.29],
    upsells: [],
    orderqs: []
  },
  {
      item: "Fried Shrimp",
      description: "Four crispy shrimp served with cocktail dipping sauce.",
      calories: "410 cal",
      price: 6.49,
      includesSide: true,
      img: "/public/Shrimp_KidsMeal_Hero590x365.jpg",
      wrongPrices: [5.79, 6.99, 7.49],
      upsells: [],
      orderqs: []
  },
  {
      item: "Grilled Cheese",
      description: "American cheese on Texas toast.",
      calories: "420 cal",
      price: 5.49,
      includesSide: true,
      img: "/public/menu-kids-grilled-cheese.jpg",
      wrongPrices: [4.99, 5.99, 6.49],
      upsells: [],
      orderqs: []
  },
  {
      item: "Penne Pasta",
      description: "With homemade alfredo or butter. Served with garlic bread.",
      calories: "700 / 490 cal",
      price: 5.49,
      includesSide: false,
      img: "/public/Cheddars_May23_KidsPennePasta_856x517.jpg",
      wrongPrices: [4.49, 5.99, 6.29],
      upsells: [],
      orderqs: []
  },
  {
      item: "Grilled Chicken",
      description: "Grilled or BBQ chicken over rice.",
      calories: "280 / 390 cal",
      price: 6.49,
      includesSide: true,
      img: "/public/menu-kids-grilled-chicken.jpg",
      wrongPrices: [5.99, 6.99, 7.49],
      upsells: [],
      orderqs: []
  }
];
