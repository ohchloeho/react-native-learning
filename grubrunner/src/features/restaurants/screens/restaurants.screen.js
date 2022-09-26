import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import styled from "styled-components";

import { Spacer } from "../../../components/spacer.component";
import { SafeArea } from "../../../components/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  width: 100%;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 8, width: 375 },
})``;
const ListContainer = styled(View)`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export function RestaurantsScreen() {
  const restaurantContext = useContext(RestaurantsContext);
  console.log(restaurantContext.isLoading);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="search" />
      </SearchContainer>
      <ListContainer>
        {restaurantContext.isLoading && (
          <ActivityIndicator animating={true} size="large" />
        )}
        {!restaurantContext.isLoading && (
          <RestaurantList
            data={restaurantContext.restaurants.results}
            renderItem={({ item }) => {
              return (
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        )}
      </ListContainer>
    </SafeArea>
  );
}
