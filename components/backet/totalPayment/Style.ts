import { StyleSheet } from "react-native";

import { Palette } from "../../../const/color";

export const styles = StyleSheet.create({
  totalPaymentBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalPeymentText: {
    fontSize: 14,
    fontWeight: "400",
    color: Palette.dark[700],
  },
  totalPaymentPrice: {
    fontSize: 14,
    fontWeight: "600",
    color: Palette.dark[700],
  },
});
