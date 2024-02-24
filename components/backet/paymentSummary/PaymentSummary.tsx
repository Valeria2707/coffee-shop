import { View, Text, FlatList } from "react-native";

import { styles } from "./Style";
import { useAppSelector } from "../../../redux/store/store";
import { Backet } from "../../../type/BacketPage";
import { formatNumberToCurrency } from "../../../utils/number";
import Price from "../price/Price";

export default function PaymentSummary({
  deliveryPrice,
  deliveryType,
}: {
  deliveryPrice: number;
  deliveryType: string;
}) {
  const items = useAppSelector((state) => state.backet.backet);
  const renderItem = ({ item }: { item: Backet }) => <Price {...item} />;

  return (
    <View style={styles.space}>
      <Text style={styles.title}>Payment Summary</Text>
      <View style={styles.box}>
        <Text style={styles.text}>Price</Text>
        <View>
          <FlatList data={items} renderItem={renderItem} />
        </View>
      </View>
      {deliveryType === "delivery" && (
        <View style={styles.box}>
          <Text style={styles.text}>Delivery Fee</Text>
          <Text style={styles.deliveryPriceText}>
            ${formatNumberToCurrency(deliveryPrice)}
          </Text>
        </View>
      )}
    </View>
  );
}
