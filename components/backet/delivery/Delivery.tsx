import { Pressable, View, Text } from "react-native";

import { styles } from "./Style";
import { Palette } from "../../../const/color";

type Props = {
  deliveryType: string;
  setDeliveryType: (val: string) => void;
};

export default function Delivery({ deliveryType, setDeliveryType }: Props) {
  return (
    <View style={styles.box}>
      <Pressable
        onPress={() => setDeliveryType("delivery")}
        style={[
          {
            backgroundColor:
              deliveryType === "delivery"
                ? Palette.brown[20]
                : Palette.basic[0],

            borderColor:
              deliveryType === "delivery"
                ? Palette.brown[100]
                : Palette.dark[70],
          },
          styles.button,
        ]}
      >
        <Text
          style={[
            {
              color:
                deliveryType === "delivery"
                  ? Palette.brown[100]
                  : Palette.dark[700],
            },
            styles.buttonText,
          ]}
        >
          Delivery
        </Text>
      </Pressable>

      <Pressable
        onPress={() => setDeliveryType("pickUp")}
        style={[
          {
            backgroundColor:
              deliveryType === "pickUp" ? Palette.brown[20] : Palette.basic[0],

            borderColor:
              deliveryType === "pickUp" ? Palette.brown[100] : Palette.dark[70],
          },
          styles.button,
        ]}
      >
        <Text
          style={[
            {
              color:
                deliveryType === "pickUp"
                  ? Palette.brown[100]
                  : Palette.dark[700],
            },
            styles.buttonText,
          ]}
        >
          Pick Up
        </Text>
      </Pressable>
    </View>
  );
}
