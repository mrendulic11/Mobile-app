import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Lista from './prezentacijskeKomponente/Lista';
//props je el.item
const ProizvodPrikaz = (props) => {
  return (
    <Lista>
      <View style={{alignItems: 'center'}}>
        <Text>Proizvod: {props.naslov}</Text>
        <Text style={{ marginBottom: 5 }}>Kolicina: {props.kolicina}</Text>
      </View>
      <View style={{width: '100%', alignItems: 'center'}}>
      </View>
    </Lista>
  );
};

export default ProizvodPrikaz;
 