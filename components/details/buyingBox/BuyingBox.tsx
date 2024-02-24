import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Pressable, View, Text } from "react-native";

import { styles } from "./Style";
import { Palette } from "../../../const/color";
import { addItemToBacket } from "../../../redux/slice/backetSlice";
import { RootState, useAppDispatch } from "../../../redux/store/store";
import { CoffeeCard } from "../../../type/HomePage";
import { formatNumberToCurrency } from "../../../utils/number";

type Props = { item: CoffeeCard; selectedSize: string; currentPrice: number };

export default function BuyingBox({ item, selectedSize, currentPrice }: Props) {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<RootState>>();

  const handleBuying = () => {
    dispatch(
      addItemToBacket({
        ...item,
        size: selectedSize,
        count: 1,
        price: currentPrice,
      }),
    );
    navigation.navigate("Order" as never);
  };

  return (
    <View style={styles.buyingBox}>
      <View style={{ gap: 5 }}>
        <Text style={styles.titleText}>Price:</Text>
        <Text style={styles.priceText}>
          ${formatNumberToCurrency(currentPrice)}
        </Text>
      </View>
      <Pressable
        onPress={handleBuying}
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
