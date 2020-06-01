import { SearchBar } from "react-native-elements";
import React, { Component } from "react";

export default function SearchBarComp({ handleSearchResults, searchResults }) {
  return (
    <SearchBar
      round
      lightTheme
      placeholder="Type Here..."
      onChangeText={handleSearchResults}
      value={searchResults}
    />
  );
}
