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
  Icon,
  Section,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  //destructure restaurant object defaults for testing
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    images = [
      "https://images.unsplash.com/photo-1479044769763-c28e05b5baa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1659647471781-3884244e8ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
      "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-oranges-ice-600x750.jpg",
      "https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg",
      "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg",
      "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-pancakes-600x750.jpg",
      "https://www.foodiesfeed.com/wp-content/uploads/2019/02/messy-pizza-on-a-black-table-600x400.jpg",
      "https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-ready-for-baking-600x400.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 3.5,
    isClosedTemporarily = false,
  } = restaurant;
  
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        source={{ uri: images[Math.ceil(Math.random() * images.length - 1)] }}
      />
      <Info>
        <Text variant="label">{name}</Text>
        <Stats>
          <Rating>
            {ratingArray.length &&
              ratingArray.map((rating) => {
                return <SvgXml width={20} height={20} xml={star} />;
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
