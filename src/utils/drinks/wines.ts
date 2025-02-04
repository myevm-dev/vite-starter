// wines.ts

export interface Wine {
    item: string;
    description: string;
    calories: string;
    price: { glass: number; cheddarPour: number };
    category: "White" | "Red";
    isNew?: boolean;
  }
  
  export const wines: Wine[] = [
    // White Wines
    {
      item: "Cavit",
      description: "Moscato, Italy",
      calories: "150 / 220 cal",
      price: { glass: 5.99, cheddarPour: 7.99 },
      category: "White",
    },
    {
      item: "Cupcake",
      description: "Peach Moscato, Italy",
      calories: "150 / 220 cal",
      price: { glass: 5.99, cheddarPour: 7.99 },
      category: "White",
      isNew: true,
    },
    {
      item: "Ecco Domani",
      description: "Pinot Grigio, Italy",
      calories: "150 / 220 cal",
      price: { glass: 6.49, cheddarPour: 8.49 },
      category: "White",
    },
    {
      item: "Yellow Tail",
      description: "Chardonnay, Australia",
      calories: "150 / 220 cal",
      price: { glass: 5.49, cheddarPour: 7.49 },
      category: "White",
    },
    {
      item: "Kendall-Jackson",
      description: "Vintner’s Reserve, Chardonnay, CA",
      calories: "150 / 220 cal",
      price: { glass: 7.99, cheddarPour: 9.99 },
      category: "White",
    },
  
    // Red Wines
    {
      item: "Meiomi",
      description: "Pinot Noir, CA",
      calories: "160 / 230 cal",
      price: { glass: 8.49, cheddarPour: 10.49 },
      category: "Red",
      isNew: true,
    },
    {
      item: "Apothic",
      description: "Red Blend, CA",
      calories: "160 / 230 cal",
      price: { glass: 7.49, cheddarPour: 9.49 },
      category: "Red",
    },
    {
      item: "Robert Mondavi",
      description: "Private Selection, Cabernet Sauvignon, CA",
      calories: "160 / 230 cal",
      price: { glass: 6.49, cheddarPour: 8.49 },
      category: "Red",
      isNew: true,
    },
    {
      item: "Bonanza by Caymus",
      description: "Cabernet Sauvignon, CA",
      calories: "160 / 230 cal",
      price: { glass: 7.99, cheddarPour: 9.99 },
      category: "Red",
      isNew: true,
    },
  ];
  
  export const cheddarPourNote = "Cheddar’s Pour (9 oz) is available for just $2 more.";
  