import { useState } from "react";
import { View, Text } from "react-native";

import { styles } from "./Style";
import { sizeCoffe } from "../../../_mock/Size";
import SizeCoffee from "../sizeCoffee/SizeCoffee";

export default function BoxOfSizeCoffee() {
  const [selectedSize, setSelectedSize] = useState("S");
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
          />
        ))}
      </View>
    </View>
  );
}
