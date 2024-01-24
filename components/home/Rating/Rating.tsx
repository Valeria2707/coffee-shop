import { Text, View } from "react-native";

import { styles } from "./Style";
import { palette } from "../../../const/color";
import { Icon } from "../../../const/icon";

export default function Rating({ rating }: { rating: number }) {
  return (
    <View style={styles.boxRating}>
      <Icon.star width={15} height={15} color={palette.light[150]} />
      <Text style={styles.textRating}>{rating}</Text>
    </View>
  );
}
