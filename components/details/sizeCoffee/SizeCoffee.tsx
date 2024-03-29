import { Pressable, Text } from "react-native";

import { styles } from "./Style";
import { Palette } from "../../../const/color";

type Props = {
  size: string;
  selectedSize: string;
  setSelectedSize: (val: string) => void;
  updatePrice: (val: string) => void;
};

export default function SizeCoffee({
  size,
  selectedSize,
  setSelectedSize,
  updatePrice,
}: Props) {
  const handleChooseSize = () => {
    updatePrice(size);
    setSelectedSize(size);
  };
  return (
    <Pressable
      style={[
        {
          backgroundColor:
            selectedSize === size ? Palette.brown[20] : Palette.basic[0],

          borderColor:
            selectedSize === size ? Palette.brown[100] : Palette.dark[70],
        },
        styles.button,
      ]}
      onPress={handleChooseSize}
    >
      <Text
        style={[
          {
            color:
              selectedSize === size ? Palette.brown[100] : Palette.dark[700],
          },
          styles.text,
        ]}
      >
        {size}
      </Text>
    </Pressable>
  );
}
