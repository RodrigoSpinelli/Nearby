import { Text, View } from "react-native";
import { styles } from "./styles";
import { IconProps } from "@tabler/icons-react-native";
import { colors } from "@/styles/theme";

export interface StepProps {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
}

export const Step = ({ title, description, icon: Icon }: StepProps) => {
  return (
    <View style={styles.container}>
      <Icon size={32} color={colors.red.base} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};
