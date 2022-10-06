import React, { useContext, useState } from "react";
import { Text } from "../../../components/text.component";
import { Spacer } from "../../../components/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  EmailInput,
  PasswordInput,
  AuthButton,
} from "../components/account.styles";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <EmailInput value={email} onChangeText={(u) => setEmail(u)} />
        <Spacer position="top" size="medium">
          <PasswordInput
            value={password}
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        {error && (
          <Spacer position="top" size="small">
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
        <Spacer position="top" size="large">
          <AuthButton
            onPress={() => {
                
              onLogin(email, password);
            }}
          >
            Login
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
