import { v4 as uuidv4 } from "uuid";

export const CAPPUCINO = [
  {
    id: uuidv4(),
    img: require("../img/cappuchino-1.jpg"),
    rating: 4.8,
    type: "Cappucino",
    adding: "with Chocolate",
    price: 4.53,
  },
  {
    id: uuidv4(),
    img: require("../img/cappuchino-2.jpg"),
    rating: 4.9,
    type: "Cappucino",
    adding: "with Oat Milk",
    price: 3.9,
  },
];
