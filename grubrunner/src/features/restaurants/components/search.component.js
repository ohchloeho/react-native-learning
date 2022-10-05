import React, { useContext, useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  width: 100%;
`;

export const Search = ({ isFavouritesToggle, onToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword); // set default value of search bar

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouritesToggle ? "heart" : "heart-outline"}
        onIconPress={onToggle}
        placeholder="search"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
