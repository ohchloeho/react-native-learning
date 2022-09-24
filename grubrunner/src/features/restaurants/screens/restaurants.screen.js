import React from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import { List, Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";
import { StatusBar } from "expo-status-bar";
import { Spacer } from "../../../components/spacer.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  width: 100%;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 8, width: 375 },
})``;

export function RestaurantsScreen() {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="search" />
      </SearchContainer>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
        ]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
