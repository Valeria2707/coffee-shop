import { StyleSheet } from "react-native";

import { Palette } from "../../../const/color";

export const styles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: "600",
    color: Palette.dark[700],
  },
  descriptionText: {
    color: Palette.dark[100],
    letterSpacing: 0.2,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 22,
  },
});
