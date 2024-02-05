import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable } from "react-native";

import DetailsCoffeeWidget from "../../components/details/detailsCoffeeWidget/DetailsCoffeeWidget";
import { Palette } from "../../const/color";
import { Icon } from "../../const/icon";
import { CoffeeCard } from "../../type/HomePage";
import Tabs from "../bottom-tabs/BottomTabs";

type RootStackParamList = {
  Tabs: undefined;
  DetailsCoffee: { item: CoffeeCard };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function NativeStack() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen
        name="DetailsCoffee"
        component={DetailsCoffeeWidget}
        options={{
          presentation: "card",
          headerTitle: "Detail",
          headerShown: true,
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Icon.arrowLeft
                color={Palette.dark[700]}
                width={30}
                height={30}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable onPress={() => {}}>
              <Icon.favourite color={Palette.red[100]} width={24} height={24} />
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
