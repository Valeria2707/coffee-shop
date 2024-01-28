import { StyleSheet } from "react-native";

import { Palette } from "../../../const/color";

export const styles = StyleSheet.create({
  modalBox: {
    backgroundColor: Palette.basic[0],
    padding: 35,
    borderRadius: 16,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: 25,
  },
  closeButton: { position: "absolute", right: "3%", top: "3%" },
  filterText: {
    fontSize: 24,
    fontWeight: "600",
    alignSelf: "center",
    color: Palette.dark[700],
  },
  text: { fontSize: 16, fontWeight: "500" },
  radioBox: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  slider: { width: "100%", height: 40 },
  textPrice: {
    fontSize: 16,
    color: Palette.dark[700],
    fontWeight: "400",
  },
  button: {
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    width: "40%",
  },
  buttonText: { fontSize: 16, color: Palette.basic[0], fontWeight: "500" },
});
