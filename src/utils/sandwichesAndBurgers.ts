// sandwichesAndBurgers.ts

export interface SandwichBurger {
  item: string;
  description: string;
  calories: string;
  price: number;
  includesSides: boolean;
}

export const sandwichesAndBurgers: SandwichBurger[] = [
  {
    item: "Monte Cristo",
    description:
      "Smoked ham, smoked turkey, and cheese, battered and fried, with raspberry preserves and powdered sugar.",
    calories: "1460 cal",
    price: 11.49,
    includesSides: true,
  },
  {
    item: "Classic Cheeseburger*",
    description:
      "A half-pound burger served with cheddar cheese, lettuce, tomato, pickles, and onions.",
    calories: "830 cal",
    price: 9.49,
    includesSides: true,
  },
  {
    item: "Bacon Cheeseburger*",
    description:
      "A half-pound burger served with four slices of crispy bacon, cheddar cheese, lettuce, tomato, pickles, and onions.",
    calories: "1100 cal",
    price: 10.99,
    includesSides: true,
  },
  {
    item: "Smokehouse Burger*",
    description:
      "A half-pound burger served with crispy bacon, cheddar cheese, BBQ sauce, tomato, pickles, and caramelized onions.",
    calories: "1040 cal",
    price: 10.49,
    includesSides: true,
  },
  {
    item: "Buffalo Chicken Wrapper",
    description:
      "Hand-breaded tenders, cheddar cheese, cabbage, pickles, and our signature ranch, wrapped in a flour tortilla.",
    calories: "1830 cal",
    price: 11.49,
    includesSides: true,
  },
];

export const sandwichesAndBurgersAddOns = [
  { name: "Sautéed Mushrooms", calories: 100, price: 0.99 },
  { name: "House Salad", price: 3.99 },
  { name: "Caesar Salad", price: 3.99 },
];
