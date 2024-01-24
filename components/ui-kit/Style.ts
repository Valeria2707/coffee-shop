import { StyleSheet } from "react-native";

import { Palette } from "../../const/color";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    width: "50%",
    marginBottom: 7,
  },
  radioText: {
    fontSize: 16,
    color: Palette.dark[700],
    fontWeight: "400",
  },
  radioCircle: {
    height: 25,
    width: 25,
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: Palette.brown[100],
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRb: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: Palette.brown[100],
  },
});
