import { View } from "react-native";

import { styles } from "./Styles";
import { Palette } from "../../../const/color";
import { Icon } from "../../../const/icon";

export default function FavouriteSign() {
  return (
    <View style={styles.boxFavourite}>
      <Icon.fillHeart width={15} height={15} color={Palette.red[100]} />
    </View>
  );
}
