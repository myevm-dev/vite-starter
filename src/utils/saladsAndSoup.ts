// saladsAndSoup.ts

export interface Salad {
    item: string;
    description: string;
    calories: string;
    price: number;
    dressings: string[];
    addOns?: { name: string; calories: number; price: number }[];
  }
  
  export interface Soup {
    item: string;
    description: string;
    calories: string;
    price: { bowl: number; cup: number };
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
      dressings: ["Honey Mustard"],
      addOns: [
        { name: "Grilled Shrimp", calories: 80, price: 2.99 },
        { name: "Grilled Salmon", calories: 260, price: 2.49 },
      ],
    },
    {
      item: "Crispy Chicken Tender Salad",
      description:
        "Hand-breaded tenders, cheddar jack cheese, tomatoes, and carrots. Served over freshly chopped lettuce with honey mustard dressing.",
      calories: "750 cal",
      price: 11.29,
      dressings: ["Honey Mustard"],
    },
    {
      item: "Caesar Pasta Salad",
      description:
        "Lemon pepper chicken or blackened salmon, penne pasta, freshly chopped romaine lettuce, and croutons.",
      calories: "860 / 940 cal",
      price: 11.49,
      dressings: ["Caesar"],
      addOns: [
        { name: "Salmon", calories: 940, price: 13.98 },
      ],
    },
  ];
  
  export const soups: Soup[] = [
    {
      item: "Baked Potato Soup",
      description:
        "A creamy, house-made soup with diced potatoes, celery, onions, cheddar cheese, and crispy bacon.",
      calories: "570 / 330 cal",
      price: { bowl: 4.79, cup: 3.79 },
    },
  ];
  
  export const dressings: Dressing[] = [
    { name: "Homemade Ranch", calories: 220 },
    { name: "Thousand Island", calories: 260 },
    { name: "Chunky Bleu Cheese", calories: 280 },
    { name: "Honey Mustard", calories: 210 },
    { name: "Balsamic Vinaigrette", calories: 110 },
    { name: "Honey Lime", calories: 260 },
  ];
  