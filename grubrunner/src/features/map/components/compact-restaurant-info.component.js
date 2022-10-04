import React from "react";
import { TouchableOpacity, Platform } from "react-native";
import styled from "styled-components/native";
import WebView from "react-native-webview";

// view for ios
const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 120px;
`;
//view for android
const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 120px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const ItemText = styled.Text`
    font-family: ${(props) => props.theme.fonts.body}
    font-size: ${(props) => props.theme.fontSizes.caption}
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant }) => {
    // checks what platform device is on
    const Image = isAndroid ? CompactWebview : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <ItemText>{restaurant.name}</ItemText>
    </Item>
  );
};
