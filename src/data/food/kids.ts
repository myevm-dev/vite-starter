export interface KidsMeal {
  item: string;
  description: string;
  calories: string;
  price: number;
  includesSide: boolean;
  wrongPrices?: number[]; // ✅ Added wrong price options
}

export const kidsMeals: KidsMeal[] = [
  {
      item: "Chicken Tenders",
      description: "Hand-breaded tenders with our signature ranch.",
      calories: "630 cal",
      price: 6.49,
      includesSide: true,
      wrongPrices: [5.99, 6.99, 7.49] // ✅ Added wrong prices
  },
  {
      item: "Junior Burger",
      description: "A quarter-pound burger served plain or with American cheese.",
      calories: "450 / 520 cal",
      price: 6.49,
      includesSide: true,
      wrongPrices: [5.49, 6.99, 7.29] // ✅ Added wrong prices
  },
  {
      item: "Fried Shrimp",
      description: "Four crispy shrimp served with cocktail dipping sauce.",
      calories: "410 cal",
      price: 6.49,
      includesSide: true,
      wrongPrices: [5.79, 6.99, 7.49] // ✅ Added wrong prices
  },
  {
      item: "Grilled Cheese",
      description: "American cheese on Texas toast.",
      calories: "420 cal",
      price: 5.49,
      includesSide: true,
      wrongPrices: [4.99, 5.99, 6.49] // ✅ Added wrong prices
  },
  {
      item: "Penne Pasta",
      description: "With homemade alfredo or butter. Served with garlic bread.",
      calories: "700 / 490 cal",
      price: 5.49,
      includesSide: false,
      wrongPrices: [4.49, 5.99, 6.29] // ✅ Added wrong prices
  },
  {
      item: "Grilled Chicken",
      description: "Grilled or BBQ chicken over rice.",
      calories: "280 / 390 cal",
      price: 6.49,
      includesSide: true,
      wrongPrices: [5.99, 6.99, 7.49] // ✅ Added wrong prices
  },
];

export const kidsMealDrinks = [
  { name: "Milk", calories: "0 - 120 cal" },
  { name: "Apple Juice", calories: "Varies" },
  { name: "Soft Drinks", calories: "Varies" },
];
