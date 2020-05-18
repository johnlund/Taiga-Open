import { SearchBar } from 'react-native-elements';
import React from 'react';

export default class SearchBar extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        round
        lightTheme
        placeholder="Type Here..."
        placeholderTextColor='#eee'
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}