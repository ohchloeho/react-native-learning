import React from "react";
import styled from "styled-components/native";
import { theme } from "../themes/index";

export const HeadLogo = styled.Text`
  font-size: ${theme.fontSizes.h1};
  color: ${theme.colors.text.primary};
`;

export const Footer = styled.Text`
  margin-top: auto;
  color: ${theme.colors.text.primary};
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontWeights.heavy};
  flex: 0.05;
`;

export const DisplayContainer = styled.View`
  flex: 1;
  width: 350px;
  border: 2px solid ${theme.colors.text.primary};
  margin-bottom: ${theme.marginSizes.sm};
  border-radius: 10px;
  overflow: hidden;
`;

export const ScreenTitle = styled.Text`
  font-size: ${theme.fontSizes.h4};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.marginSizes.md};
`;
