import { mockImages, mocks } from "./mock";
import camelize from "camelize"; //make data camel-case

//request to get restaurants
export const restuarantRequest = (location = "51.219448,4.402464") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {

    return {
      //adding new properties to current results array
      ...restaurant,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY", // boolean depending on businessstatus
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      images: mockImages[Math.ceil(Math.random() * mockImages.length - 1)],
    };
  });
  return camelize(mappedResults);
};
