// sidesAndAddOns.ts

export interface Side {
    item: string;
    calories: string;
    price?: number;
    containsPork?: boolean;
  }
  
  export interface AddOn {
    item: string;
    calories: string;
    price: number;
  }
  
  export const sides: Side[] = [
    { item: "Broccoli Cheese Casserole", calories: "220 cal" },
    { item: "Loaded Baked Potato", calories: "430 cal" },
    { item: "Idaho Mashed Potatoes", calories: "160 cal" },
    { item: "French Fries", calories: "460 cal" },
    { item: "Southern Green Beans", calories: "60 cal", containsPork: true },
    { item: "Fresh Steamed Broccoli", calories: "100 cal" },
    { item: "Red Beans & Rice", calories: "230 cal", containsPork: true },
    { item: "Sweet Baby Carrots", calories: "35 cal" },
    { item: "Seasoned Rice", calories: "150 cal" },
    { item: "Freshly Made Coleslaw", calories: "170 cal" },
    { item: "Buttered Off-the-Cob Corn", calories: "110 cal" },
  ];
  
  export const sideSubstitutes: Side[] = [
    { item: "House Salad", calories: "140 cal", price: 0.99 },
    { item: "Caesar Salad", calories: "290 cal", price: 0.99 },
  ];
  
  export const addOnSides: AddOn[] = [
    { item: "Homemade Queso & Bacon French Fries", calories: "650 cal", price: 1.49 },
    { item: "Cheese & Bacon Mashed Potatoes", calories: "350 cal", price: 1.49 },
    { item: "Loaded Baked Potato with Bacon", calories: "540 cal", price: 0.99 },
  ];
  
  export const sideAddPrice = 2.79;
  