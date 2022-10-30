import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  StatusBar,
  Pressable,
} from 'react-native';
import Naslov from '../Naslov';
import { sortiranjeNiza } from '../../store/actions/sortNiza';

var { width } = Dimensions.get('window');

const Home = () => {

  return (
    <View style={styles.glavni}>
      <View>
        <Naslov naslov={'DOBRODOŠLI!'} />
      </View>
      <View style={styles.slikaOkvir}>
        <Image
          style={styles.slika}
          source={require('../../assets/pocetna.png')}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slika: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  slikaOkvir: {
    marginTop: 50,
    marginHorizontal: 50,
    width: '80%',
    height: 250,
    borderRadius: 300,
    borderWidth: 10,
    borderColor: 'black',
    overflow: 'hidden',
  },
});

export default Home;
