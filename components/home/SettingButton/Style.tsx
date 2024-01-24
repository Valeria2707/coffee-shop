import { StyleSheet } from "react-native";

import { Palette } from "../../../const/color";

export const styles = StyleSheet.create({
  settingButton: {
    backgroundColor: Palette.brown[100],
    borderRadius: 12,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "52%",
    left: "80%",
    zIndex: 99,
  },
});
