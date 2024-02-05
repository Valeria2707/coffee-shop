import { Pressable, View, Text } from "react-native";

import { styles } from "./Style";
import { Palette } from "../../../const/color";

export default function BuyingBox({ price }: { price: number }) {
  return (
    <View style={styles.buyingBox}>
      <View style={{ gap: 5 }}>
        <Text style={styles.titleText}>Price:</Text>
        <Text style={styles.priceText}>$ {price}</Text>
      </View>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? Palette.dark[700] : Palette.brown[100],
          },
          styles.buttonBuy,
        ]}
      >
        <Text style={styles.buttonText}>Buy Now</Text>
      </Pressable>
    </View>
  );
}
