import React from "react";
import { Alert, Pressable, Share } from "react-native";

import { Palette } from "../../../const/color";
import { FooterData } from "../../../type/Footer";

type Props = {
  item: FooterData;
  index: number;
  selected: number | null;
  onSelect: (val: number) => void;
};

export default function FooterItem({ item, index, selected, onSelect }: Props) {
  const handlePress = async () => {
    onSelect(index);

    if (index === selected) {
      try {
        const result = await Share.share({
          message: "Share with your favoutite coffee",
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
          } else {
          }
        } else if (result.action === Share.dismissedAction) {
        }
      } catch (error: any) {
        Alert.alert(error.message);
      }
    }
  };
  return (
    <Pressable onPress={handlePress}>
      {React.cloneElement(item.icon, {
        color: selected === index ? Palette.brown[100] : Palette.dark[50],
      })}
    </Pressable>
  );
}
