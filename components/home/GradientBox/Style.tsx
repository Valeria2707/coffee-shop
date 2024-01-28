import { StyleSheet } from "react-native";

import { Palette } from "../../../const/color";

export const styles = StyleSheet.create({
  gradientLinear: { height: "35%", position: "relative" },
  iconSearch: {
    position: "absolute",
    bottom: "55%",
    left: "14%",
    zIndex: 99,
  },
  input: {
    position: "absolute",
    bottom: "50%",
    paddingVertical: 17,
    paddingLeft: 48,
    right: "10%",
    backgroundColor: Palette.dark[600],
    borderRadius: 16,
    height: 52,
    width: "80%",
    color: Palette.dark[200],
  },
});
