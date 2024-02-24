import { View, Text, FlatList } from "react-native";

import DetailsCoffee from "../../../components/shared/detailsCoffee/DetailsCoffee";
import NoFound from "../../../components/shared/noFound/NoFound";
import Divider from "../../../components/ui-kit/divider/Divider";
import { Palette } from "../../../const/color";
import { useAppSelector } from "../../../redux/store/store";
import { Backet } from "../../../type/BacketPage";
import { Order } from "../../../type/NotificationPage";
import { formatNumberToCurrency } from "../../../utils/number";
import { formatDate } from "../../../utils/time";

export default function NotificationScreen() {
  const items = useAppSelector((state) => state.notification.order);

  const renderOrder = ({ item }: { item: Backet }) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      <DetailsCoffee item={item} />
      <Text
        style={{ fontSize: 18, fontWeight: "600", color: Palette.dark[700] }}
      >
        x{item.count}
      </Text>
    </View>
  );

  const renderItem = ({ item }: { item: Order }) => (
    <View style={{ marginBottom: 20, gap: 10 }}>
      <FlatList data={item.coffee} renderItem={renderOrder} />
      <View style={{ gap: 5, marginBottom: 10 }}>
        <Text
          style={{ fontSize: 14, fontWeight: "600", color: Palette.dark[700] }}
        >
          Price: ${formatNumberToCurrency(item.totalPrice)}
        </Text>
        <Text
          style={{
            color: Palette.dark[700],
            fontSize: 14,
            fontWeight: "600",
          }}
        >
          {formatDate(item.time)}
        </Text>
      </View>
      <Divider />
    </View>
  );
  return (
    <View
      style={{
        backgroundColor: Palette.light[100],
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 25,
      }}
    >
      {items.length > 0 ? (
        <FlatList data={items} renderItem={renderItem} />
      ) : (
        <NoFound text="You have nothing ordered." />
      )}
    </View>
  );
}
