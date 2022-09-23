import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import { colors, sizes } from "grubrunner/src/themes.js";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  
`;

const Title = styled.Text`
  padding: 16px;
  color: ${(props) => props.theme.colors.text.primary};
`;

export function RestaurantInfoCard({ restuarant = {} }) {
  // destructure restaurant object defaults
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1479044769763-c28e05b5baa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1659647471781-3884244e8ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restuarant;

  return (
    <RestaurantCard>
      <RestaurantCardCover key={name} source={{ uri: photos[1] }} />
      <Card.Title title={name} subtitle={address} />
      <Title>a trendy cool beach bar</Title>
    </RestaurantCard>
  );
}
