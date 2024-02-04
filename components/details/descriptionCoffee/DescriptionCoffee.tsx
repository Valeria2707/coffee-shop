import { View, Text } from "react-native";

import { styles } from "./Style";

export default function DescriptionCoffee({
  description,
}: {
  description: string;
}) {
  return (
    <View style={{ gap: 5 }}>
      <Text style={styles.titleText}>Description</Text>
      <Text style={styles.descriptionText}>{description}</Text>
    </View>
  );
}
