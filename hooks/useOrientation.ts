import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

export default function useOrientation() {
  const [orientation, setOrientation] = useState("PORTRAIT");

  const getOrientation = () => {
    const { width, height } = Dimensions.get("window");
    return width > height ? "landscape" : "portrait";
  };

  useEffect(() => {
    const updateOrientation = () => {
      setOrientation(getOrientation());
    };

    Dimensions.addEventListener("change", updateOrientation);
  }, []);

  return orientation;
}
