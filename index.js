import { AppRegistry, YellowBox } from 'react-native';
import App from 'index';
import 'config/Reactotronconfig';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
AppRegistry.registerComponent('MusicYour', () => App);
