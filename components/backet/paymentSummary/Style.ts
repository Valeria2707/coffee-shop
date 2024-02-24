import { StyleSheet } from "react-native";

import { Palette } from "../../../const/color";

export const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: Palette.dark[700],
  },
  space: { gap: 5 },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    color: Palette.dark[700],
  },
  deliveryPriceText: {
    fontSize: 14,
    fontWeight: "600",
    color: Palette.dark[700],
  },
});
