import { View, Text } from "react-native";
import { styles } from "./styles";
import { Step, StepProps } from "../step";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";

export const Steps = () => {
  const steps: StepProps[] = [
    {
      icon: IconMapPin,
      title: "Encontre estabelecimentos",
      description: "Veja locais perto de você que são parceiros Nearby",

    },
    {
      icon: IconQrcode,
      title: "Ative o cupom com QR Code",
      description: "Escaneie o código QR no estabelecimento para usar o benefício",
    },
    {
      icon: IconTicket,
      title: "Garanta vantagens perto de você",
      description: "Ative cupons onde estiver, em diferentes tipos de estabelecimentos",
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veja como funciona</Text>
      {steps.map((step) => (
        <Step key={step.title} {...step} />
      ))}
    </View>
  );
};
