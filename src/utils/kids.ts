// kids.ts

export interface KidsMeal {
    item: string;
    description: string;
    calories: string;
    price: number;
    includesSide: boolean;
  }
  
  export const kidsMeals: KidsMeal[] = [
    {
      item: "Chicken Tenders",
      description: "Hand-breaded tenders with our signature ranch.",
      calories: "630 cal",
      price: 6.49,
      includesSide: true,
    },
    {
      item: "Junior Burger",
      description: "A quarter-pound burger served plain or with American cheese.",
      calories: "450 / 520 cal",
      price: 6.49,
      includesSide: true,
    },
    {
      item: "Fried Shrimp",
      description: "Four crispy shrimp served with cocktail dipping sauce.",
      calories: "410 cal",
      price: 6.49,
      includesSide: true,
    },
    {
      item: "Grilled Cheese",
      description: "American cheese on Texas toast.",
      calories: "420 cal",
      price: 5.49,
      includesSide: true,
    },
    {
      item: "Penne Pasta",
      description: "With homemade alfredo or butter. Served with garlic bread.",
      calories: "700 / 490 cal",
      price: 5.49,
      includesSide: false,
    },
    {
      item: "Grilled Chicken",
      description: "Grilled or BBQ chicken over rice.",
      calories: "280 / 390 cal",
      price: 6.49,
      includesSide: true,
    },
  ];
  
  export const kidsMealDrinks = [
    { name: "Milk", calories: "0 - 120 cal" },
    { name: "Apple Juice", calories: "Varies" },
    { name: "Soft Drinks", calories: "Varies" },
  ];
  