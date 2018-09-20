import React, { Component } from 'react';
import {
  View,
  StatusBar,
  FlatList,
  TextInput,
} from 'react-native';

import { connect } from 'react-redux';
import { brindActionCreators, bindActionCreators } from 'redux';
import { Creators as SearchActions } from 'store/ducks/search';


import { colors } from 'styles';

import SongItem from 'components/SongItem';
import styles from './styles';

class Search extends Component {

  static navigationOptions = {
    title: 'buscar',
  }

  state = {
    searchInput: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.secundary} />
        <View style={styles.form}>
          <TextInput
            style={styles.searchInput}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Buscar por músicas..."
            placeholderTextColor="#666"
            underlineColorAndroid="transparent"
            value={this.state.searchInput}
          />
        </View>
        <FlatList
          data={songs}
          keyExtractor={song => String(song.id)}
          renderItem={({ item }) => <SongItem song={item} />}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = dispatch => bindActionCreators(SearchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
