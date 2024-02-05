import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Image } from "react-native";

import { styles } from "./Style";
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
  const { img, rating, type, price, adding, description, milk, coffee } = item;

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
          {(coffee || milk) && (
            <ContentMilkCoffee coffee={coffee} milk={milk} />
          )}
        </View>
        <Divider />
        <DescriptionCoffee description={description} />
        <BoxOfSizeCoffee />
      </View>
      <BuyingBox price={price} />
    </>
  );
}
