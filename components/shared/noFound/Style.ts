import { StyleSheet } from "react-native";

import { Palette } from "../../../const/color";

export const styles = StyleSheet.create({
  box: {
    paddingTop: 100,
    backgroundColor: Palette.light[100],
    flex: 1,
    paddingHorizontal: 25,
  },
  text: {
    fontSize: 32,
    fontWeight: "700",
    alignSelf: "center",
    textAlign: "center",
  },
});
