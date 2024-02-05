import { StyleSheet } from "react-native";

import { Palette } from "../../../const/color";

export const styles = StyleSheet.create({
  box: { flexDirection: "row", gap: 13, alignSelf: "flex-end" },
  iconBox: {
    backgroundColor: Palette.red[20],
    padding: 8,
    borderRadius: 10,
  },
});
