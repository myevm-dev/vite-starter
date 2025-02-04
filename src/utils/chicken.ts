// chicken.ts

export interface ChickenDish {
    item: string;
    description: string;
    calories: string;
    price: number;
    includesSides: boolean;
    addOns?: { name: string; price: number }[];
  }
  
  export const chickenDishes: ChickenDish[] = [
    {
      item: "Grilled Chicken Alfredo",
      description:
        "Penne pasta, broccoli, homemade alfredo with garlic bread.",
      calories: "1550 cal",
      price: 13.79,
      includesSides: false,
    },
    {
      item: "Lemon Pepper Chicken",
      description:
        "Two grilled chicken breasts, served over rice.",
      calories: "520 cal",
      price: 12.29,
      includesSides: true,
    },
    {
      item: "Dijon Chicken & Mushrooms",
      description:
        "Two grilled chicken breasts with honey dijon and sautéed sliced mushrooms over seasoned rice.",
      calories: "1060 cal",
      price: 14.29,
      includesSides: true,
    },
    {
      item: "Key West Chicken & Shrimp",
      description:
        "Grilled chicken and shrimp topped with pineapple pico de gallo over rice.",
      calories: "550 cal",
      price: 13.99,
      includesSides: true,
    },
    {
      item: "Chicken Tender Platter",
      description:
        "A meal fit for a champion, our hand-breaded chicken tenders are made to order. Choose from classic, Buffalo, or honey hot.",
      calories: "1050 - 1250 cal",
      price: 11.79,
      includesSides: true,
    },
  ];
  
  export const chickenAddOns = [
    { name: "House Salad", price: 3.99 },
    { name: "Caesar Salad", price: 3.99 },
  ];
  