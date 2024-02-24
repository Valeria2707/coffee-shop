import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Palette } from "../../const/color";
import { Icon } from "../../const/icon";
import BacketScreen from "../../src/screens/backet/BacketScreen";
import FavouriteScreen from "../../src/screens/favourite/FavouriteScreen";
import HomeScreen from "../../src/screens/home/HomeScreen";
import NotificationScreen from "../../src/screens/notification/NotificationScreen";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Palette.basic[0],
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        },
        tabBarActiveTintColor: Palette.brown[100],
        tabBarInactiveTintColor: Palette.dark[50],
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <Icon.home width={24} height={24} color={color} />
          ),
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <Icon.heart width={24} height={24} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Order"
        component={BacketScreen}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <Icon.bag width={24} height={24} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <Icon.bell width={24} height={24} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}
