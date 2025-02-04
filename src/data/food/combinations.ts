export interface CombinationDish {
  item: string;
  description: string;
  calories: string;
  price: number;
  includesSides: boolean;
  upgradeOptions?: { name: string; price: number; calories: number };
  wrongPrices?: number[]; // ✅ Added wrong price options
}

export const combinationDishes: CombinationDish[] = [
  {
      item: "Chicken Tenders & Shrimp",
      description: "Grilled or beer-battered shrimp with our hand-breaded tenders.",
      calories: "1120 / 1460 cal",
      price: 15.49,
      includesSides: true,
      wrongPrices: [13.99, 14.29, 16.99] // ✅ Added wrong prices
  },
  {
      item: "Ribs & Chicken Tenders",
      description: "Half rack of our slow-smoked baby back ribs and hand-breaded chicken tenders.",
      calories: "1540 cal",
      price: 19.49,
      includesSides: true,
      wrongPrices: [17.99, 18.29, 20.99] // ✅ Added wrong prices
  },
  {
      item: "Ribs & Shrimp",
      description: "Half rack of our slow-smoked baby back ribs with grilled or beer-battered shrimp.",
      calories: "1120 / 1230 cal",
      price: 19.49,
      includesSides: true,
      wrongPrices: [17.79, 18.49, 21.49] // ✅ Added wrong prices
  },
  {
      item: "Top Sirloin Steak* & Shrimp",
      description: "6 oz. center-cut top sirloin with grilled or beer-battered shrimp.",
      calories: "560 / 670 cal",
      price: 18.29,
      includesSides: true,
      wrongPrices: [16.49, 17.29, 19.99] // ✅ Added wrong prices
  },
  {
      item: "Top Sirloin Steak* & Ribs",
      description: "6 oz. center-cut top sirloin with a half rack of our slow-smoked baby back ribs.",
      calories: "1070 cal",
      price: 20.49,
      includesSides: true,
      wrongPrices: [18.99, 19.29, 21.99] // ✅ Added wrong prices
  },
  {
      item: "Top Sirloin Steak* & Chicken Tenders",
      description: "6 oz. center-cut top sirloin and hand-breaded chicken tenders.",
      calories: "980 cal",
      price: 18.29,
      includesSides: true,
      wrongPrices: [16.49, 17.79, 19.49] // ✅ Added wrong prices
  },
];

export const combinationUpgrades = [
  { name: "Upgrade to 8 oz. Sirloin*", price: 2.00, calories: 80 },
];

export const combinationAddOns = [
  { name: "House Salad", price: 3.99 },
  { name: "Caesar Salad", price: 3.99 },
];
