import { StyleSheet } from "react-native";

import { Palette } from "../../../const/color";

export const styles = StyleSheet.create({
  sizeText: {
    fontSize: 18,
    fontWeight: "600",
    color: Palette.dark[700],
  },
  box: { gap: 15 },
  buttonBox: { flexDirection: "row", justifyContent: "space-between" },
});
