import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {Button} from '@ui-kitten/components';
import AppIntroSlider from 'react-native-app-intro-slider';
import Carousel from 'react-native-banner-carousel';

const Home = () => {
  const [pictures, setPicture] = useState([
    require('../assets/image/oye.jpeg'),
    require('../assets/image/img1.jpeg'),
    require('../assets/image/img2.jpeg'),
    require('../assets/image/img3.jpeg'),
  ]);

  const styles = StyleSheet.create({
    image: {
      width: '100%',
      height: 450,
    },
  });

  const slides = [
    {
      key: 'somethun',
      title: 'Title 1',
      text: 'Governor, State Of Osun',
      text2: '',
      image: require('../assets/image/oye.jpeg'),
      //   imageStyle: styles.image,
      backgroundColor: '#59b2ab',
    },
    {
      key: 'somethun-dos',
      title: 'Title 2',
      text: 'Hon. Adebisi Obawale Simeon',
      text2: 'Hon. Commissioner of  Osun State Ministry of Culture and Tourism',
      image: require('../assets/image/img3.jpeg'),
      imageStyle: styles.image,
      backgroundColor: '#febe29',
    },
    {
      key: 'somethun1',
      title: 'Rocket guy',
      text: 'Hon. Raimi Muhammed Opesina',
      text2: 'Senior special assistant to the governor on Culture And Tourism',
      image: require('../assets/image/img2.jpeg'),
      imageStyle: styles.image,
      backgroundColor: '#22bcb5',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <ScrollView>
        <Image source={item.image} style={styles.image} />
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 20,
            fontFamily: 'Inter-ExtraBold',
          }}>
          {item.text}
        </Text>
        <Text> {item.text2}</Text>
        <View
          style={{
            width: '80%',
            // justifyContent: 'center',
            // alignItems: 'center',
            left: 40,
          }}>
          <View style={{marginTop: 20}}>
            <Button appearance="outline">Home</Button>
          </View>
          <View style={{marginTop: 10}}>
            <Button appearance="outline">Login</Button>
          </View>
          <View style={{marginTop: 10, paddingBottom: 40}}>
            <Button appearance="outline">Register</Button>
          </View>
        </View>
      </ScrollView>
    );
  };
  return (
    <>
      <AppIntroSlider data={slides} renderItem={renderItem} />
    </>
  );
};

export default Home;
