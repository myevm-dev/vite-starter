// sharableAppetizers.ts

export interface ShareableAppetizer {
    item: string;
    description: string;
    price: number;
  }
  
  export const shareableAppetizers: ShareableAppetizer[] = [
    {
      item: "Chips & Homemade Queso",
      description: "House-fried tortilla chips, queso and handmade salsa. 1030 cal",
      price: 6.79,
    },
    {
      item: "Buffalo Beer-Battered Shrimp",
      description:
        "Six large, crispy shrimp topped with homemade buffalo sauce. Served with signature ranch. 810 cal",
      price: 9.29,
    },
    {
      item: "Cheddar's Queso Fries",
      description:
        "Homemade queso with bacon. Served with our signature ranch. 2250 cal",
      price: 9.49,
    },
    {
      item: "Honey Butter Croissants",
      description:
        "Two flaky golden croissants brushed with signature honey butter. 440 cal",
      price: 1.99,
    },
    {
      item: "Cheddar's Trio Sampler",
      description:
        "Four hand-breaded chicken tenders, Santa Fe Spinach Dip, homemade queso, and house-fried tortilla chips. 2360 cal",
      price: 12.29,
    },
    {
      item: "Homemade Onion Rings",
      description:
        "Fresh-cut, hand-battered and made to order. Served with signature ranch and Cajun dipping sauce. 1140 cal",
      price: 7.99,
    },
    {
      item: "Wisconsin Cheese Bites",
      description:
        "Hand-battered, lightly fried cheese bites. Served with homemade ranch dressing. 1200 cal",
      price: 7.99,
    },
    {
      item: "Santa Fe Spinach Dip",
      description:
        "House-made spinach dip with a creamy three-cheese blend. Served with salsa and tortilla chips. 1300 cal",
      price: 8.49,
    },
  ];
  