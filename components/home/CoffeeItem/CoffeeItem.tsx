import { Image, Text, View, Pressable } from "react-native";

import { styles } from "./Style";
import Rating from "../Rating/Rating";

type Props = {
  id: string;
  img: any;
  rating: number;
  type: string;
  adding: string;
  price: number;
};

export default function CoffeeItem(item: Props) {
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
          <Pressable style={styles.buttonAdd} onPress={() => {}}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
