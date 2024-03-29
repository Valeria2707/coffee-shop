import { useState } from "react";
import {
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
  RefreshControl,
  View,
} from "react-native";

//styles
import { styles } from "./Styles";
import { NewAddCappucino } from "../../../_mock/Cappucino";
//components
import { COFFEE } from "../../../_mock/Coffee";
import CoffeeItem from "../../../components/home/CoffeeItem/CoffeeItem";
import CoffeeSlider from "../../../components/home/CoffeeSlider/CoffeeSlider";
import GradientBox from "../../../components/home/GradientBox/GradientBox";
import PromoBox from "../../../components/home/PromoBox/PromoBox";
//hook
import useRefresh from "../../../hooks/useRefresh";
//type
import { setCappuchino } from "../../../redux/slice/coffeeSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store/store";
import { CoffeeCard, CoffeeType } from "../../../type/HomePage";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const cappuchino = useAppSelector((state) => state.cappuccino.cappuchino);
  const [filteredCappucino, setFilteredCappucino] = useState(cappuchino);
  const [firstUpdate, setFirstUpdate] = useState(true);
  const [selectedCoffe, setSelectedCoffee] = useState<number | null>(0);

  const handleCoffeeTypeSelect = (index: number) => {
    if (index !== selectedCoffe) {
      setSelectedCoffee(index);
    }
  };

  const { refreshing, onRefresh } = useRefresh(async () => {
    setTimeout(() => {
      if (firstUpdate) {
        dispatch(setCappuchino([...cappuchino, ...NewAddCappucino]));
        setFirstUpdate(false);
      }
    }, 1500);
  });

  const renderItem = ({ item }: { item: CoffeeCard }) => (
    <CoffeeItem {...item} />
  );

  const renderItemTyppeOfCoffee = ({
    item,
    index,
  }: {
    item: CoffeeType;
    index: number;
  }) => (
    <CoffeeSlider
      item={item}
      index={index}
      selected={selectedCoffe}
      onSelect={handleCoffeeTypeSelect}
    />
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <>
        <GradientBox setFilteredCappucino={setFilteredCappucino} />
        <View style={styles.container}>
          <PromoBox />
          <FlatList
            data={COFFEE}
            renderItem={renderItemTyppeOfCoffee}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 15, paddingBottom: 15 }}
          />
          {filteredCappucino.length > 0 ? (
            <FlatList
              numColumns={2}
              data={filteredCappucino}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              style={{ marginHorizontal: 15 }}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            />
          ) : (
            <Text style={styles.noFoundText}>
              Oops, we didn't find such coffee.
            </Text>
          )}
        </View>
      </>
    </TouchableWithoutFeedback>
  );
}
