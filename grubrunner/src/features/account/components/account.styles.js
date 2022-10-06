import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/background.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.05);
`;

export const AccountContainer = styled.View`
  position: absolute;
  width: 350px;
  height: 200px;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
`;

// AccountScreen
export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
  icon: "lock-open-outline",
  mode: "contained",
})`
  width: 250px;
  padding: ${(props) => props.theme.space[1]};
`;
export const RegisterButton = styled(Button).attrs({
  color: colors.brand.primary,
  icon: "email",
  mode: "contained",
})`
  width: 250px;
  padding: ${(props) => props.theme.space[1]};
`;

// LoginScreen
export const EmailInput = styled(TextInput).attrs({
  label: "E-mail",
  autoCapitalize: "none"
})`
  height: 50px;
  width: 300px;
`;
export const PasswordInput = styled(TextInput).attrs({
  label: "Password",
  textContentType: "password",
  secureTextEntry: true,
  autoCapitalize: "none"
})`
  height: 50px;
  width: 300px;
`;
