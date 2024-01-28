import { StyleSheet } from "react-native";

import { Palette } from "../../../const/color";

export const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 160,
    position: "absolute",
    top: "-20%",
    left: "7%",
    paddingLeft: 24,
    paddingVertical: 10,
  },
  promoBox: {
    backgroundColor: Palette.red[100],
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 8,
    width: 60,
    marginBottom: 25,
  },
  promoText: {
    color: Palette.basic[0],
    fontSize: 14,
    fontWeight: "600",
  },
  offerBoxOne: {
    backgroundColor: Palette.basic[100],
    width: 200,
    marginBottom: 15,
    padding: 3,
  },
  offerText: {
    color: Palette.basic[0],
    fontSize: 32,
    fontWeight: "600",
    marginTop: -20,
  },
  offerBoxTwo: {
    backgroundColor: Palette.basic[100],
    width: 150,
    padding: 3,
  },
});
