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

export default function DetailsCoffeeWidget({ route }: Props) {
  const { item } = route.params;
  const {
    img,
    rating,
    type,
    price,
    adding,
    description,
    milk,
    coffee,
    isFavourites,
  } = item;
  const [isFavourite, setIsFavourite] = useState(isFavourites);

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
        <BoxOfSizeCoffee />
      </View>
      <BuyingBox price={price} />
    </>
  );
}
