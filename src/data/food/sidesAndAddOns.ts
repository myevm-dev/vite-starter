export interface Side {
  item: string;
  calories: string;
  price?: number;
  containsPork?: boolean;
  img: string;
  orderqs?: any[];
}

export interface AddOn {
  item: string;
  calories: string;
  price: number;
  img: string;
  orderqs?: any[];
}

export const sides: Side[] = [
  { item: "Broccoli Cheese Casserole", calories: "220 cal", img: "/public/091624_June_BroccoliCheseCasserole_Side_Hero.jpg", orderqs: [] },
  { item: "Loaded Baked Potato", calories: "430 cal", img: "/public/Loaded Baked Potato.jpg", orderqs: [] },
  { item: "Idaho Mashed Potatoes", calories: "160 cal", img: "/public/menu-side-idaho-mashed-potatoes.jpg", orderqs: [] },
  { item: "French Fries", calories: "460 cal", img: "/public/menu-side-french-fries.jpg", orderqs: [] },
  { item: "Southern Green Beans", calories: "60 cal", containsPork: true, img: "/public/091624_June_GreenBeans.jpg", orderqs: [] },
  { item: "Fresh Steamed Broccoli", calories: "100 cal", img: "/public/side-broccoli.jpg", orderqs: [] },
  { item: "Red Beans & Rice", calories: "230 cal", containsPork: true, img: "/public/side-red-beans-and-rice.jpg", orderqs: [] },
  { item: "Sweet Baby Carrots", calories: "35 cal", img: "/public/Carrots_Side_Hero.jpg", orderqs: [] },
  { item: "Seasoned Rice", calories: "150 cal", img: "/public/menu-side-seasoned-rice.jpg", orderqs: [] },
  { item: "Freshly Made Coleslaw", calories: "170 cal", img: "/public/ColeSlaw_Side_Hero.jpg", orderqs: [] },
  { item: "Buttered Off-the-Cob Corn", calories: "110 cal", img: "/public/Corn_Side_Hero.jpg", orderqs: [] }
];

export const sideSubstitutes: Side[] = [
  { item: "House Salad", calories: "140 cal", price: 0.99, img: "/public/House_Salad-noegg_(1).jpg", orderqs: [] },
  { item: "Caesar Salad", calories: "290 cal", price: 0.99, img: "/public/caesar-salad.jpg", orderqs: [] }
];

export const addOnSides: AddOn[] = [
  { item: "Homemade Queso & Bacon French Fries", calories: "650 cal", price: 1.49, img: "/public/HomemadeQuesoBaconFries2_590x365.jpg", orderqs: [] },
  { item: "Cheese & Bacon Mashed Potatoes", calories: "350 cal", price: 1.49, img: "/public/cheese-bacon-mashed-potatoes.jpg", orderqs: [] },
  { item: "Loaded Baked Potato with Bacon", calories: "540 cal", price: 0.99, img: "/public/Loaded Baked Potato with Bacon.jpg", orderqs: [] }
];

export const sideAddPrice = 2.79;
