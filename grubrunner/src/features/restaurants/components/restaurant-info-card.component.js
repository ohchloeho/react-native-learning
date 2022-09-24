import React from "react";
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
} from "./restaurant-info-card.styles";

export function RestaurantInfoCard({ restuarant = {} }) {
  // destructure restaurant object defaults for testing
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1479044769763-c28e05b5baa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1659647471781-3884244e8ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 3.5,
    isClosedTemporarily = false,
  } = restuarant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[1] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Stats>
          <Rating>
            {ratingArray.map((rating) => {
              return <SvgXml width={20} height={20} xml={star} />;
            })}
          </Rating>
          <Spacer position="left" size="large">
            {isClosedTemporarily && (
              <Text variant="error">closed temporarily</Text>
            )}
          </Spacer>
          {isOpenNow && <SvgXml width={40} height={40} xml={open} />}
        </Stats>
        <Text variant="caption">{address}</Text>
      </Info>
    </RestaurantCard>
  );
}
