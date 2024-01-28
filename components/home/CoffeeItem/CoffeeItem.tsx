import { Image, Text, View, Pressable } from "react-native";

import { styles } from "./Style";
import { Palette } from "../../../const/color";
import { CoffeeCard } from "../../../type/HomePage";
import Rating from "../Rating/Rating";

export default function CoffeeItem(item: CoffeeCard) {
  const { img, type, rating, adding, price } = item;
  return (
    <View style={styles.cardBox}>
      <Image source={img} style={styles.img} alt="Cappucino" />
      <Rating rating={rating} />
      <View style={styles.infoBox}>
        <Text style={styles.titleCoffee}>{type}</Text>
        <Text style={styles.textAdd}>{adding}</Text>
        <View style={styles.priceBox}>
          <Text style={styles.priceText}>$ {price}</Text>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? Palette.dark[700]
                  : Palette.brown[100],
              },
              styles.buttonAdd,
            ]}
            onPress={() => {}}
          >
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
