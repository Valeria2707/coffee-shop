import { useCallback, useState } from "react";
import {
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
  RefreshControl,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//styles
import { styles } from "./Styles";
//mock
import {
  CAPPUCINO,
  MoreCappucino,
  NewAddCappucino,
} from "../../../_mock/Cappucino";
import { COFFEE } from "../../../_mock/Coffee";
//components
import Footer from "../../../components/footer/FooterWidget/Footer";
import CoffeeItem from "../../../components/home/CoffeeItem/CoffeeItem";
import CoffeeSlider from "../../../components/home/CoffeeSlider/CoffeeSlider";
import GradientBox from "../../../components/home/GradientBox/GradientBox";
import PromoBox from "../../../components/home/PromoBox/PromoBox";
//hook
import useRefresh from "../../../hooks/useRefresh";
//type
import { CoffeeCard, CoffeeType } from "../../../type/HomePage";

export default function HomePage() {
  const [cappuchino, setCappuchino] = useState(CAPPUCINO);
  const [filteredCappucino, setFilteredCappucino] = useState(cappuchino);
  const [firstUpdate, setFirstUpdate] = useState(true);
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(false);
  const [selectedCoffe, setSelectedCoffee] = useState<number | null>(0);

  const handleCoffeeTypeSelect = (index: number) => {
    if (index !== selectedCoffe) {
      setSelectedCoffee(index);
    }
  };

  const { refreshing, onRefresh } = useRefresh(async () => {
    setTimeout(() => {
      if (firstUpdate) {
        setCappuchino([...cappuchino, ...NewAddCappucino]);
        setFirstUpdate(false);
      }
    }, 1500);
  });

  const handleEndReached = useCallback(() => {
    if (!onEndReachedCalledDuringMomentum) {
      setCappuchino([...cappuchino, ...MoreCappucino]);
      setOnEndReachedCalledDuringMomentum(true);
    }
  }, []);

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
        <GradientBox
          setFilteredCappucino={setFilteredCappucino}
          cappuchino={cappuchino}
        />
        <SafeAreaView style={styles.container}>
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
              onMomentumScrollBegin={() => {
                setOnEndReachedCalledDuringMomentum(false);
              }}
              onEndReached={handleEndReached}
              onEndReachedThreshold={0.5}
            />
          ) : (
            <Text style={styles.noFoundText}>
              Oops, we didn't find such coffee.
            </Text>
          )}
          <Footer />
        </SafeAreaView>
      </>
    </TouchableWithoutFeedback>
  );
}
