import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';

var { width } = Dimensions.get('window');

const Kartica = (props) => {
  return(
    <View style={{...stilovi.card, ...props.stil}}>
     {props.children}
    </View>
  )
}

const stilovi = StyleSheet.create({
  card: {
    width: width - 20,
    height: width / 2.2,
    padding: 10,
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 15,
    alignItems: 'center',
    elevation: 8,
    backgroundColor: '#daf0f7',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  
});

export default Kartica;