import { Pressable } from "react-native";

import { styles } from "./Style";
import { Palette } from "../../../const/color";
import { Icon } from "../../../const/icon";

export default function SettingButton({
  toggleModal,
}: {
  toggleModal: () => void;
}) {
  return (
    <Pressable style={styles.settingButton} onPress={toggleModal}>
      <Icon.setting color={Palette.basic[0]} width={20} height={20} />
    </Pressable>
  );
}
