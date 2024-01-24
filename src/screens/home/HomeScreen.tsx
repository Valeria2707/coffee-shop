import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./Styles";
import { CAPPUCINO } from "../../../_mock/Cappucino";
import CoffeeItem from "../../../components/home/CoffeeItem/CoffeeItem";

export default function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        data={CAPPUCINO}
        renderItem={({ item }) => <CoffeeItem {...item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
