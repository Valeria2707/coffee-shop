import { View, Text } from "react-native";

import { styles } from "./Style";
import { Backet } from "../../../type/BacketPage";
import { formatNumberToCurrency } from "../../../utils/number";

export default function Price(item: Backet) {
  return (
    <View style={styles.priceBox}>
      <Text style={styles.countText}>x{item.count}</Text>
      <Text style={styles.priceText}>
        ${formatNumberToCurrency(item.price)}
      </Text>
    </View>
  );
}
