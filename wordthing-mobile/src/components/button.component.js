import { TouchableOpacity, Text } from "react-native";
import { colors } from "../themes/colors";

export const Btn = ({ size = 100, ...props }) => {
  return (
    <TouchableOpacity style={[styles(size).radius]} onPress={props.onPress}>
      <Text style={styles(size).text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) => ({
  radius: {
    borderRadius: size / 2,
    width: size * 2.5,
    height: size,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.text.secondary,
    borderWidth: 2,
  },
  text: {
    color: colors.text.primary,
    fontSize: size / 2.5,
  },
});
