import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import { styles } from "./Style";
import { FOOTER_ITEM } from "../../../_mock/Footer";
import { Palette } from "../../../const/color";
import FooterItem from "../FooterItem/FooterItem";

export default function Footer() {
  const [selectedCoffe, setSelectedCoffee] = useState<number | null>(0);

  const handleCoffeeTypeSelect = (index: number) => {
    if (index !== selectedCoffe) {
      setSelectedCoffee(index);
    }
  };

  return (
    <LinearGradient
      colors={[Palette.basic[0], Palette.light[100]]}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 2 }}
      style={styles.footerBox}
    >
      {FOOTER_ITEM.map((item, index) => (
        <FooterItem
          key={item.id}
          item={item}
          index={index}
          selected={selectedCoffe}
          onSelect={handleCoffeeTypeSelect}
        />
      ))}
    </LinearGradient>
  );
}
