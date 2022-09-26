import React, { useContext, useState, useEffect } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  width: 100%;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword); // set default value of search bar

  useEffect(() => {
    search(searchKeyword);
  }, []);
  return (
    <SearchContainer>
      <Searchbar
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