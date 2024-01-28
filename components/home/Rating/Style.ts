import { StyleSheet } from "react-native";

import { Palette } from "../../../const/color";

export const styles = StyleSheet.create({
  boxRating: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.16)",
    borderRadius: 16,
    paddingVertical: 3,
    paddingHorizontal: 8,
    top: "2%",
    left: "3%",
    display: "flex",
    flexDirection: "row",
    gap: 1,
    alignItems: "center",
  },
  textRating: {
    color: Palette.basic[0],
    fontSize: 10,
    fontWeight: "600",
  },
});
