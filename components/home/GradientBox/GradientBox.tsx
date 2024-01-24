import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { TextInput, View } from "react-native";

import { styles } from "./Style";
import { CAPPUCINO } from "../../../_mock/Cappucino";
import { Palette } from "../../../const/color";
import { Icon } from "../../../const/icon";
import { CoffeeCard } from "../../../type/HomePage";
import SettingButton from "../SettingButton/SettingButton";
import SettingModal from "../SettingModal/SettingModal";

type Props = {
  setFilteredCappucino: (val: CoffeeCard[]) => void;
};

export default function GradientBox({ setFilteredCappucino }: Props) {
  const [text, setText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [userOption, setUserOption] = useState<number | null>(null);

  const handleText = (text: string) => setText(text);

  const handleSearch = () => {
    const filteredItems = CAPPUCINO.filter(
      (item) =>
        item.type.toLowerCase().includes(text.toLowerCase()) ||
        item.adding.toLowerCase().includes(text.toLowerCase()),
    );

    const filteredByRating =
      userOption !== null
        ? filteredItems.filter((coffee) => coffee.rating >= userOption)
        : filteredItems;

    const filteredByPrice =
      sliderValue !== 0
        ? filteredByRating.filter((coffee) => coffee.price >= sliderValue)
        : filteredByRating;

    setFilteredCappucino(filteredByPrice);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <LinearGradient
      colors={[Palette.dark[900], Palette.dark[600]]}
      start={{ x: 0, y: 0 }}
      end={{ x: 2, y: 2 }}
      style={styles.gradientLinear}
    >
      <View style={styles.iconSearch}>
        <Icon.search width={20} height={20} color={Palette.basic[0]} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Search coffee"
        placeholderTextColor={Palette.dark[200]}
        onChangeText={handleText}
        onSubmitEditing={handleSearch}
        value={text}
      />
      <SettingButton toggleModal={toggleModal} />
      <SettingModal
        modalVisible={modalVisible}
        toggleModal={toggleModal}
        setFilteredCappucino={setFilteredCappucino}
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
        userOption={userOption}
        setUserOption={setUserOption}
      />
    </LinearGradient>
  );
}
