import { View, Text } from "react-native";

import { styles } from "./Style";

export default function NoFound({ text }: { text: string }) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
