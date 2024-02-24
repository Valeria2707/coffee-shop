import { StyleSheet } from "react-native";

import { Palette } from "../../../const/color";

export const styles = StyleSheet.create({
  mainBox: {
    backgroundColor: Palette.light[100],
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 25,
  },
  buttonOrder: {
    width: "100%",
    backgroundColor: Palette.brown[100],
    height: 50,
    borderRadius: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonOrderText: {
    color: Palette.basic[0],
    fontSize: 16,
    fontWeight: "600",
  },
});
