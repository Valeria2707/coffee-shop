import { View, Text } from "react-native";

import { styles } from "./Styles";
import { Palette } from "../../../const/color";
import { Icon } from "../../../const/icon";

export default function RatingCoffee({ rating }: { rating: number }) {
  return (
    <View style={styles.box}>
      <Icon.star width={30} height={30} color={Palette.light[150]} />
      <Text style={styles.ratingText}>{rating}</Text>
    </View>
  );
}
