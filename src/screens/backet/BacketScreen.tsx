import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text, Pressable, FlatList } from "react-native";

import { styles } from "./Style";
import Delivery from "../../../components/backet/delivery/Delivery";
import OrderItem from "../../../components/backet/orderItem/OrderItem";
import PaymentSummary from "../../../components/backet/paymentSummary/PaymentSummary";
import TotalPayment from "../../../components/backet/totalPayment/TotalPayment";
import NoFound from "../../../components/shared/noFound/NoFound";
import Divider from "../../../components/ui-kit/divider/Divider";
import { setBacket, setTotal } from "../../../redux/slice/backetSlice";
import { addOrder } from "../../../redux/slice/notificationSlice";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../../redux/store/store";
import { Backet } from "../../../type/BacketPage";
import { Order } from "../../../type/NotificationPage";

export default function BacketScreen() {
  const items = useAppSelector((state) => state.backet.backet);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<RootState>>();
  const [deliveryType, setDeliveryType] = useState("delivery");

  const deliveryPrice = 3;

  const newTotal =
    deliveryType === "delivery"
      ? items.reduce((acc, item) => acc + item.price * item.count, 0) +
        deliveryPrice
      : items.reduce((acc, item) => acc + item.price * item.count, 0);

  const handleOrder = () => {
    const order: Order = {
      coffee: items,
      totalPrice: newTotal,
      time: new Date().toISOString(),
    };

    dispatch(addOrder(order));
    dispatch(setBacket([]));
    dispatch(setTotal(0));
    navigation.navigate("Notifications" as never);
  };

  const renderItem = ({ item }: { item: Backet }) => <OrderItem {...item} />;

  useEffect(() => {
    dispatch(setTotal(newTotal));
  }, [items]);
  return (
    <View style={styles.mainBox}>
      {items.length > 0 ? (
        <View style={{ gap: 25 }}>
          <Delivery
            deliveryType={deliveryType}
            setDeliveryType={setDeliveryType}
          />
          <Divider />
          <FlatList data={items} renderItem={renderItem} />
          <Divider />
          <PaymentSummary
            deliveryPrice={deliveryPrice}
            deliveryType={deliveryType}
          />
          <Divider />
          <TotalPayment newTotal={newTotal} />
          <Divider />
          <Pressable style={styles.buttonOrder} onPress={handleOrder}>
            <Text style={styles.buttonOrderText}>Order</Text>
          </Pressable>
        </View>
      ) : (
        <NoFound text="Please add items." />
      )}
    </View>
  );
}
