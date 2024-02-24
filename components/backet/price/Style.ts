import { StyleSheet } from "react-native";

import { Palette } from "../../../const/color";

export const styles = StyleSheet.create({
  priceBox: {
    flexDirection: "row",
    gap: 10,
    alignSelf: "flex-end",
  },
  countText: {
    fontSize: 14,
    fontWeight: "400",
    color: Palette.dark[700],
  },
  priceText: {
    fontSize: 14,
    fontWeight: "600",
    color: Palette.dark[700],
    marginBottom: 3,
  },
});
