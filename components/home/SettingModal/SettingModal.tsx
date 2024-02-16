import Slider from "@react-native-community/slider";
import { useEffect } from "react";
import { Pressable, View, Text } from "react-native";
import Modal from "react-native-modal";

import { styles } from "./Style";
import { Palette } from "../../../const/color";
import { Icon } from "../../../const/icon";
import { useAppSelector } from "../../../redux/store/store";
import { CoffeeCard } from "../../../type/HomePage";
import { filterCoffee } from "../../../utils/filter";
import RadioButton from "../../ui-kit/radioButton/RadioButton";

type Props = {
  modalVisible: boolean;
  toggleModal: () => void;
  setFilteredCappucino: (val: CoffeeCard[]) => void;
  sliderValue: number;
  setSliderValue: (val: number) => void;
  userOption: number | null;
  setUserOption: (val: number | null) => void;
};

const options = [
  { value: 1, label: "from 1" },
  { value: 2, label: "from 2" },
  { value: 3, label: "from 3" },
  { value: 4, label: "from 4" },
];

export default function SettingModal({
  modalVisible,
  toggleModal,
  setFilteredCappucino,
  setUserOption,
  userOption,
  setSliderValue,
  sliderValue,
}: Props) {
  const cappuchino = useAppSelector((state) => state.cappuccino.cappuchino);
  const handleSliderChange = (value: number) => {
    const roundedValue = parseFloat(value.toFixed(1));
    setSliderValue(roundedValue);
  };

  const handleReset = () => {
    setUserOption(null);
    setSliderValue(0);
  };

  useEffect(() => {
    const filterData = async () => {
      await filterCoffee(
        cappuchino,
        userOption,
        sliderValue,
        setFilteredCappucino,
      );
    };
    filterData();
  }, [cappuchino]);
  return (
    <Modal
      isVisible={modalVisible}
      backdropOpacity={0.8}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onBackdropPress={toggleModal}
    >
      <Text>Re</Text>
      <View style={styles.modalBox}>
        <Pressable style={styles.closeButton} onPress={toggleModal}>
          <Icon.close width={25} height={25} color={Palette.dark[700]} />
        </Pressable>
        <Text style={styles.filterText}>Filter</Text>
        <View>
          <Text style={[styles.text, { marginBottom: 10 }]}>
            Filter by rating:
          </Text>
          <View style={styles.radioBox}>
            <RadioButton
              data={options}
              userOption={userOption}
              setUserOption={setUserOption}
            />
          </View>
        </View>
        <View>
          <Text style={[styles.text, { marginBottom: 5 }]}>
            Filter by price:
          </Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={10}
            minimumTrackTintColor={Palette.brown[100]}
            maximumTrackTintColor={Palette.dark[700]}
            value={sliderValue}
            onValueChange={handleSliderChange}
          />
          {sliderValue > 0 && (
            <Text style={styles.textPrice}>from {sliderValue}</Text>
          )}
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Pressable
            android_ripple={{ color: "black", borderless: true }}
            onPress={() => {
              filterCoffee(
                cappuchino,
                userOption,
                sliderValue,
                setFilteredCappucino,
              );
              toggleModal();
            }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? Palette.dark[700]
                  : Palette.brown[100],
              },
              styles.button,
            ]}
          >
            <Text style={styles.buttonText}>Save</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? Palette.dark[700]
                  : Palette.brown[100],
              },
              styles.button,
            ]}
            onPress={handleReset}
          >
            <Text style={styles.buttonText}> Reset</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
