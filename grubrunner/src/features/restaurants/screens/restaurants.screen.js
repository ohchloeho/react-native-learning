import React from "react";
import { View, SafeAreaView} from "react-native";
import { List, Searchbar } from "react-native-paper";
import { colors, sizes } from "grubrunner/src/themes.js";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";
import { StatusBar } from "expo-status-bar";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${props=>props.theme.colors.bg.primary};
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const SearchContainer = styled(View)`
  padding: ${props=>props.theme.space[3]};
  width: 100%;
`;

const ListContainer = styled(View)`
  flex: 1;
  padding: ${props=>props.theme.space[3]};
  width: 100%;
`;

export function RestaurantsScreen() {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="search" />
      </SearchContainer>
      <ListContainer>
        <RestaurantInfoCard />
      </ListContainer>
    </SafeArea>
  );
}
