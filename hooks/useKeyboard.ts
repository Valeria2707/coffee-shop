import { useEffect, useState } from "react";
import { Keyboard, KeyboardEvent } from "react-native";

export default function useKeyboard() {
  const [keyboard, setKeyboard] = useState({
    isKeyboardOpen: false,
    keyboardHeight: 0,
    keyboardWidth: 0,
  });

  const { isKeyboardOpen, keyboardHeight, keyboardWidth } = keyboard;

  const onKeyboardDidShow = (event: KeyboardEvent) => {
    setKeyboard({
      isKeyboardOpen: true,
      keyboardHeight: event.endCoordinates.height,
      keyboardWidth: event.endCoordinates.width,
    });
  };

  const onKeyboardDidHide = () => {
    setKeyboard({
      isKeyboardOpen: false,
      keyboardHeight: 0,
      keyboardWidth: 0,
    });
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      onKeyboardDidShow,
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      onKeyboardDidHide,
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return { isKeyboardOpen, keyboardHeight, keyboardWidth };
}
