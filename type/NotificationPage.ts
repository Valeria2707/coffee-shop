import { Backet } from "./BacketPage";

export type Order = {
  coffee: Backet[];
  totalPrice: number;
  time: string;
};
