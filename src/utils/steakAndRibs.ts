// steakAndRibs.ts

export interface SteakRibsDish {
    item: string;
    description: string;
    calories: string;
    price: number;
    includesSides: boolean;
    variations?: { name: string; price: number };
  }
  
  export const steakAndRibsDishes: SteakRibsDish[] = [
    {
      item: "6 oz. Fire Grilled Sirloin Steak*",
      description: "Center-cut top sirloin, grilled over an open flame.",
      calories: "250 cal",
      price: 12.99,
      includesSides: true,
    },
    {
      item: "8 oz. Fire Grilled Sirloin Steak*",
      description: "Center-cut top sirloin, grilled over an open flame.",
      calories: "330 cal",
      price: 14.99,
      includesSides: true,
    },
    {
      item: "14 oz. Ribeye*",
      description: "Our most juicy and flavorful steak, grilled over an open flame.",
      calories: "890 cal",
      price: 20.99,
      includesSides: true,
    },
    {
      item: "7 oz. Filet* (Limited Time)",
      description:
        "Our most tender, melt-in-your-mouth cut. Grilled to perfection and topped with garlic butter.",
      calories: "480 cal",
      price: 20.99,
      includesSides: true,
    },
    {
      item: "Fall-Off-The-Plate Baby Back Ribs",
      description:
        "Slow-smoked in-house with signature rub, grilled over an open flame with honey BBQ sauce.",
      calories: "1630 / 810 cal",
      price: 20.49,
      includesSides: true,
      variations: {
        name: "Half Rack",
        price: 15.49,
      },
    },
  ];
  
  export const steakAndRibsAddOns = [
    { name: "House Salad", price: 3.99 },
    { name: "Caesar Salad", price: 3.99 },
    { name: "Sautéed Mushrooms", calories: 100, price: 0.99 },
  ];
  