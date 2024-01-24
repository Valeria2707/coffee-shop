import { ImageBackground, View, Text } from "react-native";

import { styles } from "./Style";

export default function PromoBox() {
  return (
    <ImageBackground
      source={require("../../../img/promoImg.jpg")}
      style={styles.img}
      imageStyle={{ borderRadius: 16 }}
    >
      <View style={styles.promoBox}>
        <Text style={styles.promoText}>Promo</Text>
      </View>

      <View style={styles.offerBoxOne}>
        <Text style={styles.offerText}>Buy one get</Text>
      </View>
      <View style={styles.offerBoxTwo}>
        <Text style={styles.offerText}>one FREE</Text>
      </View>
    </ImageBackground>
  );
}
