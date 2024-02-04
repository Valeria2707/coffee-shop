import { View } from "react-native";

import { styles } from "./Style";
import { Palette } from "../../../const/color";
import { Icon } from "../../../const/icon";

type Props = {
  coffee?: boolean;
  milk?: boolean;
};

export default function ContentMilkCoffee({ coffee, milk }: Props) {
  return (
    <View style={styles.box}>
      {coffee && (
        <View style={styles.iconBox}>
          <Icon.coffee color={Palette.brown[100]} width={24} height={24} />
        </View>
      )}
      {milk && (
        <View style={styles.iconBox}>
          <Icon.milk color={Palette.brown[100]} width={24} height={24} />
        </View>
      )}
    </View>
  );
}
