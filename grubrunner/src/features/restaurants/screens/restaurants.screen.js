// packages
import React, { useContext, useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components";

// components
import { Spacer } from "../../../components/spacer.component";
import { SafeArea } from "../../../components/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../favourites/favourites-bar.component";

// data
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 8, width: 375 },
})``;
const ListContainer = styled(View)`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export function RestaurantsScreen({ navigation }) {
  const restaurantContext = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggle, setIsToggle] = useState(false);
  return (
    <SafeArea>
      <Search
        isFavouritesToggle={isToggle}
        onToggle={() => {
          setIsToggle(!isToggle);
        }}
      />
      {isToggle && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
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
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("RestaurantsDetail", {
                      restaurant: item,
                    })
                  }
                >
                  <Spacer position="bottom" size="large">
                    <RestaurantInfoCard key={item.id} restaurant={item} />
                  </Spacer>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        )}
      </ListContainer>
    </SafeArea>
  );
}
