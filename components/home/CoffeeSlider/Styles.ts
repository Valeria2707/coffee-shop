import { StyleSheet } from "react-native";

import { Palette } from "../../../const/color";

export const styles = StyleSheet.create({
  buttonTypeOfCoffe: {
    margin: 10,
    paddingHorizontal: 16,
    height: 38,
    borderRadius: 12,
    shadowColor: Palette.basic[100],

    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  textTypeOfCoffee: {
    fontSize: 14,
    fontWeight: "600",
  },
});
