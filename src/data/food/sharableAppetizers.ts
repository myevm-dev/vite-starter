// sharableAppetizers.ts

export interface ShareableAppetizer {
  item: string;
  description: string;
  price: number;
  img: string;
  upsells?: any[];
  orderqs?: any[];
}

export const shareableAppetizers: ShareableAppetizer[] = [
  {
    item: "Chips & Homemade Queso",
    description: "House-fried tortilla chips, queso and handmade salsa. 1030 cal",
    price: 6.79,
    img: "/public/Cheddars_Q124Mar_ChipsHomemadeQueso_590x365.jpg",
    upsells: [],
    orderqs: []
  },
  {
    item: "Buffalo Beer-Battered Shrimp",
    description:
      "Six large, crispy shrimp topped with homemade buffalo sauce. Served with signature ranch. 810 cal",
    price: 9.29,
    img: "/public/Shrimp_Appetizer_Hero590x365.jpg",
    upsells: [],
    orderqs: []
  },
  {
    item: "Cheddar's Queso Fries",
    description:
      "Homemade queso with bacon. Served with our signature ranch. 2250 cal",
    price: 9.49,
    img: "/public/Cheddars_Q224_May_CheeseFries_856x517.jpg",
    upsells: [],
    orderqs: []
  },
  {
    item: "Honey Butter Croissants",
    description:
      "Two flaky golden croissants brushed with signature honey butter. 440 cal",
    price: 1.99,
    img: "/public/honey-butter-croissants.jpg",
    upsells: [],
    orderqs: []
  },
  {
    item: "Cheddar's Trio Sampler",
    description:
      "Four hand-breaded chicken tenders, Santa Fe Spinach Dip, homemade queso, and house-fried tortilla chips. 2360 cal",
    price: 12.29,
    img: "/public/Cheddars_Q124Mar_TrioSampler_590x365.jpg",
    upsells: [],
    orderqs: []
  },
  {
    item: "Homemade Onion Rings",
    description:
      "Fresh-cut, hand-battered and made to order. Served with signature ranch and Cajun dipping sauce. 1140 cal",
    price: 7.99,
    img: "/public/Onion_Rings_071524.jpg",
    upsells: [],
    orderqs: []
  },
  {
    item: "Wisconsin Cheese Bites",
    description:
      "Hand-battered, lightly fried cheese bites. Served with homemade ranch dressing. 1200 cal",
    price: 7.99,
    img: "/public/CSK-Wisconsin-Cheese-Bites-with-Ranch.jpg",
    upsells: [],
    orderqs: []
  },
  {
    item: "Santa Fe Spinach Dip",
    description:
      "House-made spinach dip with a creamy three-cheese blend. Served with salsa and tortilla chips. 1300 cal",
    price: 8.49,
    img: "/public/Cheddars_Q224_June_SantaFeSpinachDip_Hero_590.jpg",
    upsells: [],
    orderqs: []
  }
];