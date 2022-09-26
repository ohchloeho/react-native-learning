// packages
import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import { ActivityIndicator, Searchbar, Colors } from "react-native-paper";
import styled from "styled-components";

// components
import { Spacer } from "../../../components/spacer.component";
import { SafeArea } from "../../../components/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Search } from "../components/search.component";

// data
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

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
  return (
    <SafeArea>
      <Search/>
      <ListContainer>
        {restaurantContext.isLoading && (
          <ActivityIndicator
            animating={true}
            size="large"
            color={Colors.blue300}
          />
        )}
        {!restaurantContext.isLoading && (
          <RestaurantList
            data={restaurantContext.restaurants}
            renderItem={({ item }) => {
              return (
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard key={item.id} restaurant={item} />
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
