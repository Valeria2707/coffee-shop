import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, Text, View, Pressable } from "react-native";

import { styles } from "./Style";
import { Palette } from "../../../const/color";
import { CoffeeCard } from "../../../type/HomePage";
import FavouriteSign from "../../ui-kit/favouriteSign/FavouriteSign";
import Rating from "../Rating/Rating";

type RootStackParamList = {
  Tabs: undefined;
  DetailsCoffee: { item: CoffeeCard };
};

// Define Props type
type Props = NativeStackScreenProps<RootStackParamList, "DetailsCoffee">;

export default function CoffeeItem(item: CoffeeCard) {
  const { img, type, rating, adding, price, isFavourites } = item;

  const navigation = useNavigation<Props["navigation"]>();

  const hadlePress = () => {
    navigation.navigate("DetailsCoffee", { item });
  };
  return (
    <View style={styles.cardBox}>
      <Image source={img} style={styles.img} alt="Cappucino" />
      <Rating rating={rating} />
      {isFavourites && <FavouriteSign />}
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
            onPress={hadlePress}
          >
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
