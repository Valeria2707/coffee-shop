import { StyleSheet } from "react-native";

import { Palette } from "../../../const/color";

export const styles = StyleSheet.create({
  box: {
    backgroundColor: Palette.light[100],
    padding: 30,
    flex: 0.85,
    gap: 25,
  },
  image: {
    width: "100%",
    height: 226,
    alignSelf: "center",
    borderRadius: 16,
  },
  boxWithDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textType: {
    fontSize: 22,
    fontWeight: "600",
    color: Palette.dark[700],
  },
  textAdding: {
    color: Palette.dark[100],
    fontSize: 12,
    fontWeight: "400",
  },
  heartBox: { gap: 10, alignItems: "flex-end" },
});
