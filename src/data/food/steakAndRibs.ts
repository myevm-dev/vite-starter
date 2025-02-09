export interface SteakRibsDish {
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
  
  export const steakAndRibsDishes: SteakRibsDish[] = [
    {
        item: "6 oz. Fire Grilled Sirloin Steak*",
        description: "Center-cut top 6oz sirloin, grilled over an open flame.",
        calories: "250 cal",
        price: 12.99,
        includesSides: true,
        img: "/public/chargrill-8oz-sirloin-590x365.jpg",
        wrongPrices: [11.49, 13.79, 14.29],
        upsells: [],
        orderqs: []
    },
    {
        item: "8 oz. Fire Grilled Sirloin Steak*",
        description: "Center-cut top 9oz sirloin, grilled over an open flame.",
        calories: "330 cal",
        price: 14.99,
        includesSides: true,
        img: "/public/chargrill-8oz-sirloin-590x365.jpg",
        wrongPrices: [13.49, 15.49, 16.79],
        upsells: [],
        orderqs: []
    },
    {
        item: "14 oz. Ribeye*",
        description: "Our most juicy and flavorful steak, grilled over an open flame.",
        calories: "890 cal",
        price: 20.99,
        includesSides: true,
        img: "/chargrill-14oz-ribeye-590x365.jpg",
        wrongPrices: [18.99, 21.49, 22.79],
        upsells: [],
        orderqs: []
    },
    {
        item: "7 oz. Filet* (Limited Time)",
        description:
            "Our most tender, melt-in-your-mouth cut. Grilled to perfection and topped with garlic butter.",
        calories: "480 cal",
        price: 20.99,
        includesSides: true,
        img: "/Cheddars_7Oz_Filet_590x365.jpg",
        wrongPrices: [19.29, 21.49, 22.99],
        upsells: [],
        orderqs: []
    },
    {
        item: "Fall-Off-The-Plate Baby Back Ribs",
        description:
            "Slow-smoked in-house with signature rub, grilled over an open flame with honey BBQ sauce.",
        calories: "1630 / 810 cal",
        price: 20.49,
        includesSides: true,
        img: "/chargrilled-ribs-full-rack-590x365.jpg",
        variations: {
            name: "Half Rack",
            price: 15.49,
        },
        wrongPrices: [18.79, 21.29, 22.49],
        upsells: [],
        orderqs: []
    }
  ];
  