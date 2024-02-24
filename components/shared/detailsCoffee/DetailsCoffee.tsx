import { View, Image, Text } from "react-native";

import { styles } from "./Style";
import { Backet } from "../../../type/BacketPage";

export default function DetailsCoffee({ item }: { item: Backet }) {
  return (
    <View style={styles.coffeeCardBox}>
      <Image source={item.img} style={styles.image} />
      <View style={styles.textSpace}>
        <Text style={styles.title}>{item.type}</Text>
        <Text style={styles.subTitle}>{item.adding}</Text>
        <Text style={styles.subTitle}>Size: {item.size}</Text>
      </View>
    </View>
  );
}
