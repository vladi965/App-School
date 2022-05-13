import React from 'react'
import { View, Text } from 'react-native'
import { Searchbar } from 'react-native-paper';
import { styles } from "../styles/GlobalStyles";

const Search = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
  
    const onChangeSearch = query => setSearchQuery(query);
  
    return (
      <Searchbar style={styles.searchBar}
        placeholder="Buscar..."
        placeholderTextColor="#7460F2"
        onChangeText={onChangeSearch}
        value={searchQuery}
        iconColor="#7460F2"
      />
    );
  };
  
  export default Search;