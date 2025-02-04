// combinations.ts

export interface CombinationDish {
    item: string;
    description: string;
    calories: string;
    price: number;
    includesSides: boolean;
    upgradeOptions?: { name: string; price: number; calories: number };
  }
  
  export const combinationDishes: CombinationDish[] = [
    {
      item: "Chicken Tenders & Shrimp",
      description:
        "Grilled or beer-battered shrimp with our hand-breaded tenders.",
      calories: "1120 / 1460 cal",
      price: 15.49,
      includesSides: true,
    },
    {
      item: "Ribs & Chicken Tenders",
      description:
        "Half rack of our slow-smoked baby back ribs and hand-breaded chicken tenders.",
      calories: "1540 cal",
      price: 19.49,
      includesSides: true,
    },
    {
      item: "Ribs & Shrimp",
      description:
        "Half rack of our slow-smoked baby back ribs with grilled or beer-battered shrimp.",
      calories: "1120 / 1230 cal",
      price: 19.49,
      includesSides: true,
    },
    {
      item: "Top Sirloin Steak* & Shrimp",
      description:
        "6 oz. center-cut top sirloin with grilled or beer-battered shrimp.",
      calories: "560 / 670 cal",
      price: 18.29,
      includesSides: true,
    },
    {
      item: "Top Sirloin Steak* & Ribs",
      description:
        "6 oz. center-cut top sirloin with a half rack of our slow-smoked baby back ribs.",
      calories: "1070 cal",
      price: 20.49,
      includesSides: true,
    },
    {
      item: "Top Sirloin Steak* & Chicken Tenders",
      description:
        "6 oz. center-cut top sirloin and hand-breaded chicken tenders.",
      calories: "980 cal",
      price: 18.29,
      includesSides: true,
    },
  ];
  
  export const combinationUpgrades = [
    { name: "Upgrade to 8 oz. Sirloin*", price: 2.00, calories: 80 },
  ];
  
  export const combinationAddOns = [
    { name: "House Salad", price: 3.99 },
    { name: "Caesar Salad", price: 3.99 },
  ];
  