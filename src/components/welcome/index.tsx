import { styles } from "./styles";
import { Image, Text, View } from "react-native";

export const Welcome = () => {
  return (
    <View>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Bem-vindo ao Nearby!</Text>
      <Text style={styles.subtitle}>Tenha cupons de vantagem para usar em seus estabelecimentos favoritos.</Text>
    </View>
  );
};
