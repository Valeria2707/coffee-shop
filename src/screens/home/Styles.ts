import { StyleSheet } from "react-native";

import { Palette } from "../../../const/color";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Palette.light[100],
    flex: 1,
    paddingTop: 50,
    zIndex: 0,
  },
  noFoundText: {
    fontSize: 32,
    fontWeight: "700",
    alignSelf: "center",
  },
});
