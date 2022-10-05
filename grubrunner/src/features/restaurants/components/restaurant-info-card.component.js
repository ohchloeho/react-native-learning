import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer.component";
import { Text } from "../../../components/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Stats,
  Rating,
  Icon,
  Section,
} from "./restaurant-info-card.styles";
import { Favourite } from "../../favourites/favourite.component";

export const RestaurantInfoCard = ({ restaurant }) => {
  //destructure restaurant object defaults for testing
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [],
    address = "100 some random street",
    isOpenNow = false,
    rating = 3.5,
    isClosedTemporarily = false,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard key={name} elevation={5}>
      <View>
        <Favourite restaurant={restaurant} />
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      </View>
      <Info>
        <Text variant="label">{name}</Text>
        <Stats>
          <Rating>
            {ratingArray.length &&
              ratingArray.map((rating, id) => {
                return (
                  <SvgXml
                    key={`star-${placeId}-${id}`}
                    width={20}
                    height={20}
                    xml={star}
                  />
                );
              })}
          </Rating>
          <Section>
            <Spacer position="left" size="large">
              {isClosedTemporarily && (
                <Text variant="error">closed temporarily</Text>
              )}
            </Spacer>
            {isOpenNow && <SvgXml width={25} height={25} xml={open} />}
            <Spacer position="right" size="large" />
            <Icon source={{ uri: icon }} />
          </Section>
        </Stats>
        <Text variant="caption">{address}</Text>
      </Info>
    </RestaurantCard>
  );
};
