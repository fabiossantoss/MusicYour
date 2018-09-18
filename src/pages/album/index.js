import React from 'react';
import { View, StatusBar } from 'react-native';
import { colors } from 'styles';
import styles from './styles';

const Album = () => (
  <View style={styles.container}>
    <StatusBar backgroundColor={colors.secundary} />
  </View>
);

Album.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.album.title,
});
export default Album;
