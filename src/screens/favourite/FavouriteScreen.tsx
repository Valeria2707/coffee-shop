import { useMemo } from "react";
import { FlatList, View } from "react-native";

import CoffeeItem from "../../../components/home/CoffeeItem/CoffeeItem";
import NoFound from "../../../components/shared/noFound/NoFound";
import { Palette } from "../../../const/color";
import { useAppSelector } from "../../../redux/store/store";
import { CoffeeCard } from "../../../type/HomePage";

export default function FavouriteScreen() {
  const cappuchino = useAppSelector((state) => state.cappuccino.cappuchino);

  const favourite = useMemo(
    () => cappuchino.filter((item) => item.isFavourites === true),
    [cappuchino],
  );

  const renderItem = ({ item }: { item: CoffeeCard }) => (
    <CoffeeItem {...item} />
  );

  if (favourite.length <= 0) {
    return <NoFound text="Oops, you don't have any favourites." />;
  }

  return (
    <View
      style={{ backgroundColor: Palette.light[100], flex: 1, paddingTop: 25 }}
    >
      <FlatList
        numColumns={2}
        data={favourite}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: 15 }}
      />
    </View>
  );
}
