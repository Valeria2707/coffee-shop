import { Text, Pressable } from "react-native";

import { styles } from "./Styles";
import { Palette } from "../../../const/color";
import { CoffeeType } from "../../../type/HomePage";

type Props = {
  item: CoffeeType;
  index: number;
  selected: number | null;
  onSelect: (val: number) => void;
};
export default function CoffeeSlider({
  item,
  index,
  selected,
  onSelect,
}: Props) {
  const handlePress = () => {
    onSelect(index);
  };

  return (
    <Pressable
      style={[
        styles.buttonTypeOfCoffe,
        {
          backgroundColor:
            selected === index ? Palette.brown[100] : Palette.basic[0],
        },
      ]}
      onPress={handlePress}
    >
      <Text
        style={[
          styles.textTypeOfCoffee,
          { color: selected === index ? Palette.basic[0] : Palette.basic[100] },
        ]}
      >
        {item.type}
      </Text>
    </Pressable>
  );
}
