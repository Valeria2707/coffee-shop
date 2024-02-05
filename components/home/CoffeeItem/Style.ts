import { StyleSheet } from "react-native";

import { Palette } from "../../../const/color";

export const styles = StyleSheet.create({
  cardBox: {
    display: "flex",
    width: "45%",
    flexDirection: "column",
    backgroundColor: Palette.basic[0],
    position: "relative",
    borderRadius: 16,
    margin: 10,

    shadowColor: Palette.basic[100],
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  titleCoffee: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: Palette.dark[700],
  },
  infoBox: {
    padding: 12,
  },
  textAdd: {
    color: Palette.dark[100],
    fontSize: 12,
    fontWeight: "400",
  },
  priceBox: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  buttonAdd: {
    width: 30,
    height: 28,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: Palette.basic[0],
    fontSize: 16,
    fontWeight: "600",
  },
  priceText: {
    fontSize: 18,
    fontWeight: "600",
    color: Palette.dark[800],
  },
  img: {
    width: "100%",
    borderRadius: 16,
    height: 142,
  },
});
