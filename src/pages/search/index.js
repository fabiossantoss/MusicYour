import React, { Component } from 'react';
import { debounce } from 'lodash';

import {
  View,
  StatusBar,
  FlatList,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as SearchActions } from 'store/ducks/search';


import { colors } from 'styles';

import SongList from 'components/SongList';

import styles from './styles';

class Search extends Component {

  static navigationOptions = {
    title: 'buscar',
  }

  static propTypes = {
    SearchRequest: PropTypes.func.isRequired,
    search: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
      })),
      loading: PropTypes.bool,
    }).isRequired,
  }

  constructor(props) {
    super(props);

    this.searchInput = debounce(this.props.SearchRequest, 800);
  }

  state = {
    searchInput: '',
  }

  search = (searchInput) => {
    this.setState({ searchInput });

    this.searchInput(searchInput);
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
            onChangeText={this.search}
          />
        </View>

        {this.props.search.loading &&
          <ActivityIndicator size="small" color="#999" style={styles.loading} />}

        <SongList data={this.props.search.data} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = dispatch => bindActionCreators(SearchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
