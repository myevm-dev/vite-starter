export interface ChickenDish {
  item: string;
  description: string;
  calories: string;
  price: number;
  includesSides: boolean;
  img: string;
  addOns?: { name: string; price: number }[];
  wrongPrices?: number[];
  upsells?: any[];
  orderqs?: any[];
}

export const chickenDishes: ChickenDish[] = [
  {
      item: "Grilled Chicken Alfredo",
      description: "Penne pasta, broccoli, homemade alfredo with garlic bread.",
      calories: "1550 cal",
      price: 13.79,
      includesSides: false,
      img: "/public/chicken-alfredo/jpg",
      wrongPrices: [11.99, 12.49, 14.99],
      upsells: [],
      orderqs: []
  },
  {
      item: "Lemon Pepper Chicken",
      description: "Two grilled chicken breasts, seasoned and served over rice.",
      calories: "520 cal",
      price: 12.29,
      includesSides: true,
      img: "/public/091624_June_LemonPepperChicken_Hero.jpg",
      wrongPrices: [10.99, 11.49, 13.49],
      upsells: [],
      orderqs: []
  },
  {
      item: "Dijon Chicken & Mushrooms",
      description: "Two grilled chicken breasts with honey dijon and sautéed sliced mushrooms over seasoned rice.",
      calories: "1060 cal",
      price: 14.29,
      includesSides: true,
      img: "/public/Cheddars_Q124__DijonChickenAndMushrooms_590x3.jpg",
      wrongPrices: [12.99, 13.79, 15.49],
      upsells: [],
      orderqs: []
  },
  {
      item: "Key West Chicken & Shrimp",
      description: "Grilled chicken and shrimp topped with pineapple pico de gallo over rice.",
      calories: "550 cal",
      price: 13.99,
      includesSides: true,
      img: "/public/key-west-chicken-and-shrimp-590x365.jpg",
      wrongPrices: [12.49, 13.29, 15.29],
      upsells: [],
      orderqs: []
  },
  {
      item: "Chicken Tender Platter",
      description: "A meal fit for a champion, our hand-breaded chicken tenders are made to order. Choose from classic, Buffalo, or honey hot.",
      calories: "1050 - 1250 cal",
      price: 11.79,
      includesSides: true,
      img: "/public/Cheddars_ChickenTendersPlatter_590x365.jpg",
      wrongPrices: [9.99, 10.49, 12.29],
      upsells: [],
      orderqs: []
  },
];
