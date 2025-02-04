// desserts.ts

export interface Dessert {
    item: string;
    description: string;
    calories: string;
    price: number;
  }
  
  export const desserts: Dessert[] = [
    {
      item: "Hot Fudge Cake Sundae",
      description:
        "A huge slice of chocolate fudge cake with vanilla bean ice cream, homemade hot fudge, whipped cream, chopped nuts, and a cherry on top.",
      calories: "2510 cal",
      price: 7.99,
    },
    {
      item: "Classic Cheesecake",
      description:
        "A slice of creamy cheesecake with a shortbread cookie crust, topped with our strawberry purée.",
      calories: "760 cal",
      price: 6.29,
    },
    {
      item: "Cheddar’s Legendary Monster Cookie",
      description:
        "House-made chocolate chip cookie, baked to order, with vanilla bean ice cream, homemade hot fudge, whipped cream, chopped nuts, and a cherry on top.",
      calories: "1390 cal",
      price: 7.29,
    },
    {
      item: "Carrot Cake",
      description:
        "A generous slice of carrot cake, layered with cream cheese icing and topped with caramel sauce, toasted coconut, and candied pecans.",
      calories: "1100 cal",
      price: 6.99,
    },
  ];
  