import { StyleSheet } from "react-native";

import { palette } from "../../../const/color";

export const styles = StyleSheet.create({
  cardBox: {
    display: "flex",
    width: "45%",
    flexDirection: "column",
    backgroundColor: palette.basic[0],
    position: "relative",
    borderRadius: 16,
    marginLeft: 10,
    shadowColor: palette.basic[100],
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
    color: palette.dark[700],
  },
  infoBox: {
    padding: 12,
  },
  textAdd: {
    color: palette.dark[100],
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
    backgroundColor: palette.brown[100],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: palette.basic[0],
    fontSize: 16,
    fontWeight: "600",
  },
  priceText: {
    fontSize: 18,
    fontWeight: "600",
    color: palette.dark[800],
  },
  img: {
    width: "100%",
    borderRadius: 16,
  },
});
