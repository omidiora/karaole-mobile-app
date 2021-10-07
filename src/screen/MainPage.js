import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {Button} from '@ui-kitten/components';

const MainPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/image/odua.jpeg')}
        resizeMode="cover"
        style={{flex: 1}}>
        <View style={{marginTop: 130}}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              color: 'white',
              fontSize: 20,
              fontFamily: 'Inter-ExtraBold',
              textTransform: 'uppercase',
            }}>
            Welcome To Kárélé Oòduà Láféfé.
          </Text>
          <View style={styles.buttonContainer}>
            <View></View>
            <View>
              <Button
                style={{marginBottom: 10}}
                onPress={() => {
                  navigation.navigate('Home');
                }}
                appearance="outline"
                status="control">
                Home
              </Button>
            </View>

            <View>
              <Button
                onPress={() => {
                  navigation.navigate('Login');
                }}
                style={{marginBottom: 10}}
                appearance="outline"
                status="control">
                Login
              </Button>
            </View>

            <View>
              <Button
                onPress={() => {
                  navigation.navigate('Register');
                }}
                style={styles.button}
                appearance="outline"
                status="control">
                Register
              </Button>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    height: 20,
    resizeMode: 'contain',
  },
  buttonContainer: {
    // backgroundColor: '#fb6049',
    width: '65%',
    left: 60,
    top: 300,
    fontSize: 24,
  },
});
