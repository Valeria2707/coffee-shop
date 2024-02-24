import { StyleSheet } from "react-native";

import { Palette } from "../../../const/color";

export const styles = StyleSheet.create({
  subTitle: {
    color: Palette.dark[100],
    fontSize: 12,
    fontWeight: "400",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: Palette.dark[700],
  },
  textSpace: { gap: 5 },
  image: { width: 80, height: 80, borderRadius: 16 },
  coffeeCardBox: {
    display: "flex",
    flexDirection: "row",
    gap: 25,
    alignItems: "center",
  },
});
