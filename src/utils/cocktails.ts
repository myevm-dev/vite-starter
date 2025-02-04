// cocktails.ts

export interface Cocktail {
    item: string;
    description: string;
    calories: string;
    price: number;
    limitPerGuest?: boolean;
  }
  
  export const signatureMargaritas: Cocktail[] = [
    {
      item: "Texas Margarita",
      description:
        "Made with gold tequila and fine liqueurs, served on-the-rocks or frozen.",
      calories: "340 / 400 cal",
      price: 5.99,
    },
    {
      item: "Texas Frozen Swirl",
      description:
        "Texas Margarita swirled with your choice of flavor: Strawberry, mango, peach, raspberry or sangria.",
      calories: "410 cal",
      price: 6.29,
    },
    {
      item: "Grande Top Shelf Margarita",
      description:
        "Sauza Hacienda Gold tequila, Grand Marnier, on-the-rocks or frozen, also in strawberry or sangria swirl.",
      calories: "450 - 540 cal",
      price: 8.99,
    },
    {
      item: "El Patrón Margarita",
      description:
        "Patrón Silver tequila, Patrón Citrónge, sweet & sour, on-the-rocks.",
      calories: "230 cal",
      price: 9.99,
    },
    {
      item: "Maui Margarita",
      description:
        "Half strawberry, half mango, frozen margarita accented with kiwi and a shot of DeKuyper cactus juice.",
      calories: "470 cal",
      price: 6.99,
    },
  ];
  
  export const handCraftedCocktails: Cocktail[] = [
    {
      item: "Island Tiki",
      description:
        "Captain Morgan and Malibu rums, tropical mango purée, pineapple juice, sweet & sour and blue curaçao.",
      calories: "230 cal",
      price: 7.99,
    },
    {
      item: "Presidente Sangria",
      description:
        "Beso Del Sol sangria, Presidente brandy and sweet & sour shaken with strawberries, fresh lemons, limes and oranges.",
      calories: "170 cal",
      price: 6.99,
    },
    {
      item: "Cheddar’s Long Island Iced Tea",
      description: "House liquors, sweet & sour and a splash of Coca-Cola®.",
      calories: "230 cal",
      price: 5.99,
    },
    {
      item: "Texas Sweet Tea",
      description: "Firefly Sweet Tea vodka, amaretto, lemonade and more vodka.",
      calories: "230 cal",
      price: 5.99,
    },
    {
      item: "Classic Mule",
      description: "Tito’s Handmade Vodka, lime juice and ginger beer.",
      calories: "130 cal",
      price: 6.99,
    },
    {
      item: "Coconut Pineapple Mule",
      description:
        "A mule with a tropical twist. Malibu coconut rum, pineapple juice, ginger beer and a toasted coconut rim.",
      calories: "160 cal",
      price: 6.99,
    },
    {
      item: "Cheddar’s Painkiller",
      description:
        "Pusser’s rum, cream of coconut, pineapple juice, orange juice, toasted coconut rim, topped with nutmeg.",
      calories: "350 cal",
      price: 7.99,
      limitPerGuest: true,
    },
  ];
  
  export const cocktailLimit = {
    item: "Limit Two per Guest",
    appliesTo: ["Cheddar’s Painkiller"],
  };
  