import { View } from "react-native";

import { styles } from "./Style";
import { Backet } from "../../../type/BacketPage";
import DetailsCoffee from "../../shared/detailsCoffee/DetailsCoffee";
import Counter from "../counter/Counter";

export default function OrderItem(item: Backet) {
  return (
    <View style={styles.orderItemBox}>
      <DetailsCoffee item={item} />
      <Counter item={item} />
    </View>
  );
}
