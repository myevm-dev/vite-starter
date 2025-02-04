export interface ComfortFood {
  item: string;
  description: string;
  calories: string;
  price: number;
  includesSides: boolean;
  variations?: { name: string; price: number };
  wrongPrices?: number[]; // ✅ Added wrong price options
}

export const comfortFoodDishes: ComfortFood[] = [
  {
      item: "Homestyle Meatloaf",
      description: "Two slices of our classic meatloaf with a heavy pour of our savory brown gravy.",
      calories: "620 cal",
      price: 12.99,
      includesSides: true,
      wrongPrices: [11.49, 13.49, 14.99] // ✅ Added wrong prices
  },
  {
      item: "Homemade Chicken Pot Pie",
      description: "Filled to the brim with roasted chicken, vegetables, and our homemade cream sauce with a light, flaky crust.",
      calories: "940 cal",
      price: 10.99,
      includesSides: false,
      wrongPrices: [9.49, 11.49, 12.79] // ✅ Added wrong prices
  },
  {
      item: "Country Fried Steak",
      description: "Hand-breaded on Texas toast with country gravy.",
      calories: "1030 cal",
      price: 13.29,
      includesSides: true,
      wrongPrices: [11.99, 12.49, 14.49] // ✅ Added wrong prices
  },
  {
      item: "Country Fried Chicken",
      description: "Hand-breaded on Texas toast with country gravy.",
      calories: "1030 / 610 cal",
      price: 12.99,
      includesSides: true,
      variations: {
          name: "Double Portion",
          price: 14.99
      },
      wrongPrices: [11.79, 13.49, 14.79] // ✅ Added wrong prices
  },
  {
      item: "Vegetable Plate",
      description: "House salad or bowl of Baked Potato Soup with four made-from-scratch sides.",
      calories: "560 - 1960 cal",
      price: 9.99,
      includesSides: false,
      wrongPrices: [8.49, 10.49, 11.29] // ✅ Added wrong prices
  },
  {
      item: "New Orleans Pasta",
      description: "Shrimp, chicken, smoked sausage, peppers, onions, and penne pasta in a spicy homemade Cajun alfredo sauce with garlic bread.",
      calories: "1540 cal",
      price: 14.49,
      includesSides: false,
      wrongPrices: [12.99, 13.79, 15.99] // ✅ Added wrong prices
  },
  {
      item: "Grilled Pork Chops",
      description: "Two boneless pork chops topped with caramelized onions and bourbon-glaze.",
      calories: "650 cal",
      price: 12.99,
      includesSides: true,
      wrongPrices: [11.49, 13.29, 14.49] // ✅ Added wrong prices
  }
];

export const comfortFoodAddOns = [
  { name: "House Salad", price: 3.99 },
  { name: "Caesar Salad", price: 3.99 }
];
