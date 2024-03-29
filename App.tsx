import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import Navigation from "./navigation/Navigation";
import { store } from "./redux/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
}
