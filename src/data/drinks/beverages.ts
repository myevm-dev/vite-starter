// beverages.ts

export interface Beverage {
    item: string;
    description: string;
    calories: string;
    unlimitedRefills: boolean;
  }
  
  export const beverages: Beverage[] = [
    {
      item: "Hand-Crafted Lemonades",
      description: "Enjoy traditional lemonade or add raspberry or strawberry for a fruity twist.",
      calories: "120 - 180 cal",
      unlimitedRefills: true,
    },
    {
      item: "Fresh-Brewed Iced Teas",
      description: "Choose classic iced tea or make it your own with peach, raspberry, strawberry, or mango flavor.",
      calories: "140 - 220 cal",
      unlimitedRefills: true,
    },
    {
      item: "Soft Drinks",
      description: "We proudly serve Coca-Cola products.",
      calories: "0 - 160 cal",
      unlimitedRefills: true,
    },
    {
      item: "Coffee",
      description: "100% Colombian coffee.",
      calories: "0 cal",
      unlimitedRefills: true,
    },
  ];
  
  export const softDrinksBrands = [
    "Coca-Cola",
    "Diet Coke",
    "Coke Zero",
    "Barq’s Root Beer",
    "Fanta Orange",
    "Sprite",
    "Dr Pepper",
  ];
  