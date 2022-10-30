import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';

const Lista = (props) => {
  return(
    <View style={{...stilovi.lista, ...props.stil}}>
     {props.children}
    </View>
  )
}

const stilovi = StyleSheet.create({
  lista: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 50,
  },
});

export default Lista; 