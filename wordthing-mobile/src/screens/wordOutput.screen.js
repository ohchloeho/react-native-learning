import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const OutputText = styled(Text)`
    color: ${props=>props.theme.colors.text.primary};
    font-size: ${props=>props.theme.fontSizes.h4};
    font-weight: ${props=>props.theme.fontWeights.heavy};
    margin-bottom: ${props=>props.theme.marginSizes.sm};
`

export const WordSearchOutput = (props) => {
  return <OutputText>{props.word}</OutputText>;
};
