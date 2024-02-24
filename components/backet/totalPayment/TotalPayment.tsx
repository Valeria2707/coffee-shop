import { View, Text } from "react-native";

import { styles } from "./Style";
import { formatNumberToCurrency } from "../../../utils/number";

export default function TotalPayment({ newTotal }: { newTotal: number }) {
  return (
    <View style={styles.totalPaymentBox}>
      <Text style={styles.totalPaymentBox}>Total Payment</Text>
      <Text style={styles.totalPaymentPrice}>
        ${formatNumberToCurrency(newTotal)}
      </Text>
    </View>
  );
}
