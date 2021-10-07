import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const Welcome = ({navigation}) => {
  const items = [
    {
      uri: require('../assets/image/oye.jpeg'),
      title: 'Governor , State of Osun',
      text: '',
      duration: 1000,
      fullWidth: true,
    },
    {
      uri: require('../assets/image/img2.jpeg'),
      title: 'Hon. Raimi Muhammed Opesina',
      text: 'Senior special assistant to the governor on Culture And Tourism',
      duration: 1000,
      fullWidth: true,
    },
    {
      uri: require('../assets/image/img3.jpeg'),
      text: 'Hon. Commissioner of  Osun State Ministry of Culture and Tourism',
      title: 'Hon. Adebisi Obawale Simeon',
      duration: 1000,
      fullWidth: true,
    },
  ];
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const sliderWidth = Dimensions.get('window').width;
  const CAROUSEL_VERTICAL_OUTPUT = 56;
  const itemWidth = 400;

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Image
          source={item.uri}
          style={{width: '100%', height: '80%', resizeMode: 'cover'}}
        />
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Inter-Black',
            fontSize: 20,
          }}>
          {item.title}
        </Text>
        <Text style={{textAlign: 'center', fontFamily: 'Inter-Medium'}}>
          {item.text}
        </Text>

        <View style={{left: 330, bottom: -100}}>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              bottom: 50,
              justifyContent: 'center',
              alignItems: 'center',

              borderRadius: 100,
              backgroundColor: '#ccc',
            }}
            onPress={() => navigation.navigate('MainPage')}
            z>
            <Text>{'Skip'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <>
      <Carousel
        data={items}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        autoplay={true}
      />
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
