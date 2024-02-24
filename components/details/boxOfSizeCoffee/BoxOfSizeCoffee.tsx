import { View, Text } from "react-native";

import { styles } from "./Style";
import { sizeCoffe } from "../../../_mock/Size";
import SizeCoffee from "../sizeCoffee/SizeCoffee";

type Props = {
  selectedSize: string;
  setSelectedSize: (val: string) => void;
  updatePrice: (val: string) => void;
};

export default function BoxOfSizeCoffee({
  selectedSize,
  setSelectedSize,
  updatePrice,
}: Props) {
  return (
    <View style={styles.box}>
      <Text style={styles.sizeText}>Size</Text>
      <View style={styles.buttonBox}>
        {Object.keys(sizeCoffe).map((size) => (
          <SizeCoffee
            key={size}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            size={size}
            updatePrice={updatePrice}
          />
        ))}
      </View>
    </View>
  );
}
