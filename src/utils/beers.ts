// beers.ts

export interface Beer {
    item: string;
    calories: string;
    price: { pint?: number; pilsner?: number; bottle?: number };
    category: "Draft" | "Domestic" | "Imported & Premium";
    isNew?: boolean;
  }
  
  export const beers: Beer[] = [
    // Draft Beers
    {
      item: "Bud Light",
      calories: "140 / 200 cal",
      price: { pint: 3.99, pilsner: 4.99 },
      category: "Draft",
    },
    {
      item: "Blue Moon",
      calories: "200 / 290 cal",
      price: { pint: 4.79, pilsner: 5.79 },
      category: "Draft",
    },
    {
      item: "Stella Artois",
      calories: "200 / 290 cal",
      price: { pint: 4.79, pilsner: 5.79 },
      category: "Draft",
      isNew: true,
    },
  
    // Domestic Bottles/Cans
    {
      item: "Budweiser",
      calories: "150 cal",
      price: { bottle: 3.99 },
      category: "Domestic",
    },
    {
      item: "Miller Lite",
      calories: "100 cal",
      price: { bottle: 3.99 },
      category: "Domestic",
    },
    {
      item: "Michelob Ultra",
      calories: "100 cal",
      price: { bottle: 3.99 },
      category: "Domestic",
    },
  
    // Imported & Premium Bottles/Cans
    {
      item: "Corona Extra",
      calories: "150 cal",
      price: { bottle: 4.99 },
      category: "Imported & Premium",
    },
    {
      item: "Heineken",
      calories: "150 cal",
      price: { bottle: 4.99 },
      category: "Imported & Premium",
    },
    {
      item: "Modelo Especial",
      calories: "150 cal",
      price: { bottle: 4.99 },
      category: "Imported & Premium",
    },
    {
      item: "Voodoo Ranger IPA",
      calories: "200 cal",
      price: { bottle: 4.99 },
      category: "Imported & Premium",
      isNew: true,
    },
    {
      item: "Samuel Adams",
      calories: "150 cal",
      price: { bottle: 4.99 },
      category: "Imported & Premium",
    },
    {
      item: "Angry Orchard",
      calories: "200 cal",
      price: { bottle: 4.99 },
      category: "Imported & Premium",
    },
    {
      item: "White Claw Black Cherry",
      calories: "100 cal",
      price: { bottle: 4.99 },
      category: "Imported & Premium",
      isNew: true,
    },
  ];
  
  export const localCraftBeerNote =
    "Ask your server for local craft selections.";
  