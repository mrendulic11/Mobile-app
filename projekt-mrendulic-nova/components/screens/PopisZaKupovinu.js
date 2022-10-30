import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Pressable,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import ListaPrikaz from '../ListaPrikaz';
import { sortiranjeNiza } from '../../store/actions/sortNiza';
var { width } = Dimensions.get('window');

const PopisZaKupovinu = () => {
  const [listaVidljiv, postaviListaVidljiv] = useState(false);
  const [listaVidljivNova, postaviListaVidljivNova] = useState(false);
  const [chosenOption, setChosenOption] = useState('Lidl'); //will store our current user options
  const options = [
    { label: 'Lidl', value: 'Lidl' },
    { label: 'Konzum', value: 'Konzum' },
    { label: 'Plodine', value: 'Plodine' },
  ]; //create our options for radio group


  const sortPr = useSelector((state) => state.proizvodi.sortiraniProizvodi);
  const pomocnaFja = () => {
    if (sortPr.length == 0) {
      Alert.alert('Baza nije pripremljena!', 'Pripremite bazu proizvoda!', [
        { text: 'U redu', style: 'default' },
      ]);
    } else {
      postaviListaVidljiv(true);
    }
  };
  const pomocnaFja2 = () => {
    if (sortPr.length == 0) {
      Alert.alert('Baza nije pripremljena!', 'Pripremite bazu proizvoda!', [
        { text: 'U redu', style: 'default' },
      ]);
    } else {
      postaviListaVidljivNova(true);
    }
  };

  const uneseni = useSelector((state) => state.proizvodi.uneseniProizvodi);
  const proizvodiPrikaz = useSelector((state) => state.proizvodi.proizvodi);
  const dispatch = useDispatch();
  const akcijaSortiranje = () => {
    dispatch(sortiranjeNiza(proizvodiPrikaz));
  };
  return (
    <SafeAreaView style={stilovi.container}>
      <ScrollView>
        <Pressable style={stilovi.button} onPress={akcijaSortiranje}>
          <Text style={stilovi.text}>Pripremi bazu</Text>
        </Pressable>
        <View>
          <Text> {chosenOption}</Text>
          <RadioForm
            radio_props={options}
            initial={0} //initial value of this group
            onPress={(value) => {
              setChosenOption(value);
            }} //if the user changes options, set the new value
          />
        </View>
        <View>
          <ListaPrikaz
            nasl={'Najjeftinija pretraga'}
            vid={listaVidljiv}
            odus={() => postaviListaVidljiv(false)}
            data={uneseni}
            opcija={null}
          />
          <Pressable style={stilovi.button} onPress={pomocnaFja}>
            <Text style={stilovi.text}>Najjeftinija pretraga</Text>
          </Pressable>
        </View>
        <View>
          <ListaPrikaz
            nasl={'Najjeftinije - isti ducan'}
            vid={listaVidljivNova}
            odus={() => postaviListaVidljivNova(false)}
            data={uneseni}
            opcija={chosenOption}
          />
          <Pressable style={stilovi.button} onPress={pomocnaFja2}>
            <Text style={stilovi.text}>Najjeftinije - isti ducan</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const stilovi = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'black',
    marginTop: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  
});


export default PopisZaKupovinu;
