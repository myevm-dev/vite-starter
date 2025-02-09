export interface SeafoodDish {
    item: string;
    description: string;
    calories: string;
    price: number;
    includesSides: boolean;
    img: string;
    variations?: { name: string; price: number };
    wrongPrices?: number[];
    upsells?: any[];
    orderqs?: any[];
  }
  
  export const seafoodDishes: SeafoodDish[] = [
    {
        item: "Grilled Shrimp Alfredo",
        description:
            "Penne pasta, broccoli, homemade alfredo with garlic bread.",
        calories: "1610 cal",
        price: 14.99,
        includesSides: false,
        img: "/public/ShrimpPasta_Hero_(1)856x517.jpg",
        wrongPrices: [13.49, 15.49, 16.29],
        upsells: [],
        orderqs: []
    },
    {
        item: "Cornmeal White Fish Platter",
        description:
            "Hand-breaded, lightly fried, with tartar sauce.",
        calories: "1080 cal",
        price: 13.29,
        includesSides: true,
        img: "/public/cornmeal-whitefish.jpg",
        wrongPrices: [11.99, 13.79, 14.49],
        upsells: [],
        orderqs: []
    },
    {
        item: "Grilled White Fish",
        description:
            "Two white fish fillets grilled with lemon pepper seasoning or blackened over rice.",
        calories: "490 / 510 cal",
        price: 13.29,
        includesSides: true,
        img: "/public/091624_GrilledWhiteFish_Dinner_Hero.jpg",
        wrongPrices: [12.49, 13.99, 14.79],
        upsells: [],
        orderqs: []
    },
    {
        item: "Beer-Battered Shrimp Platter",
        description:
            "Eight large, crispy beer-battered shrimp served with cocktail sauce.",
        calories: "790 cal",
        price: 14.79,
        includesSides: true,
        img: "/public/Shrimp_Platter_Hero590x365.jpg",
        wrongPrices: [13.49, 15.29, 16.49],
        upsells: [],
        orderqs: []
    },
    {
        item: "Creamy Garlic Tilapia & Shrimp",
        description:
            "Blackened tilapia and shrimp topped with our homemade alfredo sauce over rice.",
        calories: "600 cal",
        price: 14.29,
        includesSides: true,
        img: "/public/091624_June_CreamyGarlicTilapiaShrimp_Hero.jpg",
        wrongPrices: [13.29, 14.99, 15.79],
        upsells: [],
        orderqs: []
    },
    {
        item: "Grilled Salmon",
        description:
            "Grilled, blackened or bourbon-glazed over rice.",
        calories: "440 - 750 cal",
        price: 14.29,
        includesSides: true,
        img: "/public/Grilled_Salmon_0715.jpg",
        variations: {
            name: "8 oz Portion",
            price: 16.29,
        },
        wrongPrices: [13.49, 14.99, 15.79],
        upsells: [],
        orderqs: []
    }
  ];
  
  export const seafoodAddOns = [
    { name: "House Salad", price: 3.99 },
    { name: "Caesar Salad", price: 3.99 },
  ];
  