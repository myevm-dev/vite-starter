export interface ChickenDish {
  item: string;
  description: string;
  calories: string;
  price: number;
  includesSides: boolean;
  addOns?: { name: string; price: number }[];
  wrongPrices?: number[]; // ✅ Added wrong price options
}

export const chickenDishes: ChickenDish[] = [
  {
      item: "Grilled Chicken Alfredo",
      description: "Penne pasta, broccoli, homemade alfredo with garlic bread.",
      calories: "1550 cal",
      price: 13.79,
      includesSides: false,
      wrongPrices: [11.99, 12.49, 14.99] // ✅ Added wrong prices
  },
  {
      item: "Lemon Pepper Chicken",
      description: "Two grilled chicken breasts, served over rice.",
      calories: "520 cal",
      price: 12.29,
      includesSides: true,
      wrongPrices: [10.99, 11.49, 13.49] // ✅ Added wrong prices
  },
  {
      item: "Dijon Chicken & Mushrooms",
      description: "Two grilled chicken breasts with honey dijon and sautéed sliced mushrooms over seasoned rice.",
      calories: "1060 cal",
      price: 14.29,
      includesSides: true,
      wrongPrices: [12.99, 13.79, 15.49] // ✅ Added wrong prices
  },
  {
      item: "Key West Chicken & Shrimp",
      description: "Grilled chicken and shrimp topped with pineapple pico de gallo over rice.",
      calories: "550 cal",
      price: 13.99,
      includesSides: true,
      wrongPrices: [12.49, 13.29, 15.29] // ✅ Added wrong prices
  },
  {
      item: "Chicken Tender Platter",
      description: "A meal fit for a champion, our hand-breaded chicken tenders are made to order. Choose from classic, Buffalo, or honey hot.",
      calories: "1050 - 1250 cal",
      price: 11.79,
      includesSides: true,
      wrongPrices: [9.99, 10.49, 12.29] // ✅ Added wrong prices
  },
];

export const chickenAddOns = [
  { name: "House Salad", price: 3.99 },
  { name: "Caesar Salad", price: 3.99 },
];
