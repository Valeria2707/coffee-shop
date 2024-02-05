import React from "react";
import { Pressable, View, Text } from "react-native";

import { styles } from "./Style";

type Props = {
  data: { value: number; label: string }[];
  userOption: number | null;
  setUserOption: (val: number | null) => void;
};

export default function RadioButton({
  data,
  setUserOption,
  userOption,
}: Props) {
  return (
    <>
      {data.map((item) => (
        <View key={item.value} style={styles.container}>
          <Pressable
            onPress={() => setUserOption(item.value)}
            style={styles.radioCircle}
          >
            {userOption === item.value && <View style={styles.selectedRb} />}
          </Pressable>
          <Text style={styles.radioText}>{item.label}</Text>
        </View>
      ))}
    </>
  );
}
