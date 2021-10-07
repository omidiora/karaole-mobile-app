import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {WebView} from 'react-native-webview';
import StackRoutes from './src/routes';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout} from '@ui-kitten/components';

const App = () => {
  React.useEffect(() => {
    // Hide SplashScreen after 3secs or Make an async task
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 3000);
  }, []);

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <StackRoutes />
    </ApplicationProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  video: {
    marginTop: 20,
    maxHeight: '100%',
    width: 400,
    flex: 1,
  },
});
export default App;
