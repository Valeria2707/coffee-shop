import { View } from "react-native";

import { Palette } from "../../../const/color";

export default function Divider() {
  return (
    <>
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: Palette.dark[30],
        }}
      />
    </>
  );
}
