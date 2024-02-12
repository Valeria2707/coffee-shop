import { useMemo } from "react";
import { Text, FlatList, View } from "react-native";

import CoffeeItem from "../../../components/home/CoffeeItem/CoffeeItem";
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
    return (
      <View style={{ marginTop: 100 }}>
        <Text style={{ fontSize: 32, fontWeight: "700", alignSelf: "center" }}>
          Oops, you don't have any favourites.
        </Text>
      </View>
    );
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
