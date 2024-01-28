import { useState } from "react";
import {
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//styles
import { styles } from "./Styles";
//mock
import { CAPPUCINO } from "../../../_mock/Cappucino";
//components
import CoffeeItem from "../../../components/home/CoffeeItem/CoffeeItem";
import GradientBox from "../../../components/home/GradientBox/GradientBox";
import PromoBox from "../../../components/home/PromoBox/PromoBox";
//type
import { CoffeeCard } from "../../../type/HomePage";

export default function HomePage() {
  const [filteredCappucino, setFilteredCappucino] = useState(CAPPUCINO);

  const renderItem = ({ item }: { item: CoffeeCard }) => (
    <CoffeeItem {...item} />
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <>
        <GradientBox setFilteredCappucino={setFilteredCappucino} />
        <SafeAreaView style={styles.container}>
          <PromoBox />
          {filteredCappucino.length > 0 ? (
            <FlatList
              numColumns={2}
              data={filteredCappucino}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <Text style={styles.noFoundText}>
              Oops, we didn't find such coffee.
            </Text>
          )}
        </SafeAreaView>
      </>
    </TouchableWithoutFeedback>
  );
}
