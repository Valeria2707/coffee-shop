import { StyleSheet } from "react-native";

import { Palette } from "../../../const/color";

export const styles = StyleSheet.create({
  buyingBox: {
    backgroundColor: Palette.light[100],
    flex: 0.15,
    borderColor: Palette.dark[30],
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleText: {
    color: Palette.dark[100],
    fontSize: 14,
    fontWeight: "400",
  },
  priceText: {
    fontSize: 18,
    fontWeight: "600",
    color: Palette.brown[100],
  },
  buttonBuy: {
    width: "50%",
    height: 50,
    borderRadius: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: Palette.basic[0],
    fontSize: 16,
    fontWeight: "600",
  },
});
