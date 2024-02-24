import { Pressable, View, Text } from "react-native";

import { styles } from "./Style";
import { Palette } from "../../../const/color";
import { Icon } from "../../../const/icon";
import {
  decreaseItemCount,
  increaseItemCount,
} from "../../../redux/slice/backetSlice";
import { useAppDispatch } from "../../../redux/store/store";
import { Backet } from "../../../type/BacketPage";

export default function Counter({ item }: { item: Backet }) {
  const dispatch = useAppDispatch();

  const handleIncreaseItemCount = (itemId: string) => {
    dispatch(increaseItemCount(itemId));
  };

  const handleDecreaseItemCount = (itemId: string) => {
    dispatch(decreaseItemCount(itemId));
  };
  return (
    <View style={styles.counterBox}>
      <Pressable
        style={styles.counterButton}
        onPress={() => handleDecreaseItemCount(item.id)}
      >
        <Icon.minus width={20} height={20} color={Palette.dark[700]} />
      </Pressable>
      <Text style={styles.counterText}>{item.count}</Text>
      <Pressable
        style={styles.counterButton}
        onPress={() => handleIncreaseItemCount(item.id)}
      >
        <Icon.plus width={20} height={20} color={Palette.dark[700]} />
      </Pressable>
    </View>
  );
}
