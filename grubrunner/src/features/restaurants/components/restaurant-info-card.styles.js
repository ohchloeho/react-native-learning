import styled from "styled-components/native";
import { View } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  width: 100%;
  elevation: 5;
`;
export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const Info = styled(View)`
  padding: ${(props) => props.theme.sizes[1]};
`;
export const Stats = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]}
  padding-bottom: ${(props) => props.theme.space[1]}
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const Section = styled.View`
  flex-direction: row;
  justify-content:;
`
