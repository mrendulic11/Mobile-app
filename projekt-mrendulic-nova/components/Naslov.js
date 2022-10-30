import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
var { width } = Dimensions.get('window');

const Naslov = (props) => {
  return (
    <View style={stil.zaglavlje}>
      <Text style={stil.naslov}>{props.naslov}</Text>
    </View>
  );
};

const stil = StyleSheet.create({
  zaglavlje: {
    width: width,
    height: 90,
    paddingTop: 36,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  naslov: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Naslov;
