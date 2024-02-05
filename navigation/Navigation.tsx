import { NavigationContainer } from "@react-navigation/native";

import NativeStack from "./narive-stack/NativeStack";

export default function Navigation() {
  return (
    <NavigationContainer>
      <NativeStack />
    </NavigationContainer>
  );
}
