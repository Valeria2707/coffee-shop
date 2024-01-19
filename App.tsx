import { SafeAreaProvider } from "react-native-safe-area-context";

import HomePage from "./src/screens/home/HomeScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <HomePage />
    </SafeAreaProvider>
  );
}
