import { StackNavigator } from 'react-navigation';
import { colors } from 'styles';

import Main from 'pages/main';
import Album from 'pages/album';
import Search from 'pages/search';

const Routes = StackNavigator({
  Main: { screen: Main },
  Album: { screen: Album },
  Search: { screen: Search },
},
  {
    navigationOptions: {
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
      },
      headerStyle: {
        backgroundColor: colors.secundary,
      },
      headerTintColor: colors.white,
      headerBackTitle: null,
    },
  });

export default Routes;
