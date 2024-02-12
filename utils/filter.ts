import { CoffeeCard } from "../type/HomePage";

export const filterCoffee = (
  arr: CoffeeCard[],
  val1: number | null,
  val2: number,
  setData: (val: CoffeeCard[]) => void,
) => {
  let filterData = [...arr];

  if (val1 !== null) {
    filterData = filterData.filter((coffee) => coffee.rating >= val1);
  }

  if (val2 !== 0) {
    filterData = filterData.filter((coffee) => coffee.price >= val2);
  }

  filterData.sort((a, b) =>
    b.rating !== a.rating ? b.rating - a.rating : a.price - b.price,
  );

  setData(filterData);
};
