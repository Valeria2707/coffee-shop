import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";

import { styles } from "./Style";
import { Palette } from "../../../const/color";
import { Icon } from "../../../const/icon";
import { toggleFavourite } from "../../../redux/slice/coffeeSlice";
import { useAppDispatch } from "../../../redux/store/store";
import { CoffeeCard } from "../../../type/HomePage";
import Divider from "../../ui-kit/divider/Divider";
import BoxOfSizeCoffee from "../boxOfSizeCoffee/BoxOfSizeCoffee";
import BuyingBox from "../buyingBox/BuyingBox";
import ContentMilkCoffee from "../contentMilkCoffee/ContentMilkCoffee";
import DescriptionCoffee from "../descriptionCoffee/DescriptionCoffee";
import RatingCoffee from "../ratingCoffee/RatingCoffee";

type RootStackParamList = {
  Tabs: undefined;
  DetailsCoffee: { item: CoffeeCard };
};

type Props = NativeStackScreenProps<RootStackParamList, "DetailsCoffee">;

const calculatePrice = (currentPrice: number, selectedSize: string): number => {
  switch (selectedSize) {
    case "S":
      return currentPrice;
    case "M":
      return currentPrice + 2;
    case "L":
      return currentPrice + 3;
    default:
      return currentPrice;
  }
};

export default function DetailsCoffeeWidget({ route }: Props) {
  const { item } = route.params;
  const {
    img,
    rating,
    type,
    adding,
    description,
    milk,
    coffee,
    price,
    isFavourites,
  } = item;
  const [isFavourite, setIsFavourite] = useState(isFavourites);

  const [selectedSize, setSelectedSize] = useState("S");

  const [currentPrice, setCurrentPrice] = useState(item.price);

  const updatePrice = (selectedSize: string) => {
    if (selectedSize === "S") {
      setCurrentPrice(item.price);
    } else {
      setCurrentPrice(calculatePrice(price, selectedSize));
    }
    setSelectedSize(selectedSize);
  };

  const dispatch = useAppDispatch();

  const handleToggleFavourite = (cappuccino: CoffeeCard) => {
    setIsFavourite(!isFavourite);
    dispatch(toggleFavourite(cappuccino.id));
  };

  return (
    <>
      <View style={styles.box}>
        <Image source={img} alt="coffee" style={styles.image} />
        <View style={styles.boxWithDetails}>
          <View style={{ gap: 7 }}>
            <Text style={styles.textType}>{type}</Text>
            <Text style={styles.textAdding}>{adding}</Text>
            <RatingCoffee rating={rating} />
          </View>
          <View style={styles.heartBox}>
            <Pressable onPress={() => handleToggleFavourite(item)}>
              {isFavourite ? (
                <Icon.fillHeart
                  color={Palette.red[100]}
                  width={24}
                  height={24}
                />
              ) : (
                <Icon.favourite
                  color={Palette.red[100]}
                  width={24}
                  height={24}
                />
              )}
            </Pressable>
            {(coffee || milk) && (
              <ContentMilkCoffee coffee={coffee} milk={milk} />
            )}
          </View>
        </View>
        <Divider />
        <DescriptionCoffee description={description} />
        <BoxOfSizeCoffee
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          updatePrice={updatePrice}
        />
      </View>
      <BuyingBox
        currentPrice={currentPrice}
        item={item}
        selectedSize={selectedSize}
      />
    </>
  );
}
