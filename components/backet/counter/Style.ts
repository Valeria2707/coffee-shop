import { StyleSheet } from "react-native";

import { Palette } from "../../../const/color";

export const styles = StyleSheet.create({
  counterBox: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  counterButton: {
    borderRadius: 100,
    padding: 5,
    backgroundColor: Palette.basic[0],
    borderColor: Palette.dark[70],
    borderWidth: 1,
  },
  counterText: {
    fontSize: 18,
    fontWeight: "600",
    color: Palette.dark[700],
  },
});
