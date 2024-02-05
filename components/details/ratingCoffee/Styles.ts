import { StyleSheet } from "react-native";

import { Palette } from "../../../const/color";

export const styles = StyleSheet.create({
  box: { flexDirection: "row", alignItems: "center" },
  ratingText: {
    fontSize: 18,
    fontWeight: "600",
    color: Palette.dark[700],
  },
});
