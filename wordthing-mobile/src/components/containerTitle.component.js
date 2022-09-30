import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const TitleText = styled(Text)`
  color: ${props=>props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-weight: ${props=>props.theme.fontWeights.heavy};
  margin-bottom: ${props=>props.theme.marginSizes.sm};
`;

export const ContainerTitle = (props) => {
  return <TitleText>{props.dataType}</TitleText>;
};
