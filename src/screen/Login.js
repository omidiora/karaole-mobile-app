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

const Login = () => {
  React.useEffect(() => {
    // Hide SplashScreen after 3secs or Make an async task
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 9000);
  }, []);

  return (
    <View style={styles.container}>
      <WebView
        source={{uri: 'https://kareleoodualafefe.com/login'}}
        style={styles.link}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  link: {
    marginTop: 20,
    maxHeight: '100%',
    width: 400,
    flex: 1,
  },
});
export default Login;
