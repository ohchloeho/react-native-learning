import React from "react";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  RegisterButton
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer.component";

export const AccountScreen = ({navigation}) => {

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthButton onPress={() => navigation.navigate("Login")}>Login</AuthButton>
        <Spacer position="top" size="medium">
          <RegisterButton onPress={() => navigation.navigate("Register")}>
            Register
          </RegisterButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
