import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  StatusBar,
  Pressable,
  Alert,
  TextInput,
  Button,
  ScrollView, FlatList
} from 'react-native';
import Kartica from '../prezentacijskeKomponente/Kartica';
import { unosProizvoda } from '../../store/actions/sortNiza';
import ProizvodPrikaz from '../ProizvodPrikaz';

var { width } = Dimensions.get('window');

const EkranUnos = () => {
  const proizvodiPrikaz = useSelector((state) => state.proizvodi.proizvodi);
  const [unos, postaviUnos] = useState('');
  const [kol, postaviKol] = useState();

  const promjenaUnosa = (tekst) => {
    postaviUnos(tekst);
  };

  const promjenaKol = (text) => {
    let newText = '';
    let numbers = '0123456789';

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      } else {
        // your call back function
        alert('Unesite broj');
      }
    }
    postaviKol(newText);
  };

  const resetPoljeUnos = () => {
    postaviUnos('');
    postaviKol('');
  };

  const novi = proizvodiPrikaz.sort(function (a, b) {
    return a.cijena > b.cijena ? 1 : b.cijena > a.cijena ? -1 : 0;
  });

  const ime = (input) => {
    return Object.keys(novi)
      .filter((key) => {
        return novi[key].naziv.includes(input);
      })
      .map((foundKey) => ({ ...novi[foundKey], key: foundKey }));
  };

  const dispatch = useDispatch();
  const dodajNovi = () => {
    const broj = parseInt(kol);
    if (isNaN(broj) || unos.trim().length === 0 || `${ime(unos)}` == []) {
      Alert.alert('Neispravan unos!', 'Proizvod nije u bazi ili je unos neispravan!', [
        { text: 'U redu', style: 'default', onPress: resetPoljeUnos },
      ]);
      return;
    }

    const noviObjekt = {
      naziv: unos,
      kolicina: kol,
    };
    console.log(unos);
    console.log(kol);
    dispatch(unosProizvoda(noviObjekt));
    postaviUnos('');
    postaviKol('');
  };

  const uneseni = useSelector((state) => state.proizvodi.uneseniProizvodi);
  console.log('Asia', uneseni);

  return (
    <View>
      <Kartica>
        <TextInput
          style={stilovi.unos}
          placeholder="Unesi proizvod za kupovinu"
          value={unos}
          onChangeText={promjenaUnosa}
        />
        <TextInput
          style={stilovi.unos}
          placeholder="Kolicina (broj)"
          value={kol}
          onChangeText={promjenaKol}
        />
        <Pressable style={stilovi.button} onPress={dodajNovi}>
          <Text style={stilovi.text}>Unesi proizvod</Text>
        </Pressable>
      </Kartica>
      <View>
          <Text style={stilovi.title}>Popis proizvoda za kupovinu:</Text>
      </View>
      <View style={{ height: 300 }}>
        <ScrollView style={stilovi.scrollView}>
          <FlatList
            data={uneseni}
            renderItem={(el) => (
              <ProizvodPrikaz
                naslov={el.item.naziv}
                kolicina={el.item.kolicina}
              />
            )}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const stilovi = StyleSheet.create({
  unos: {
    width: width - 20,
    marginBottom: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    marginLeft: 10,
    marginRight: 10
  },
  scrollView: {
    backgroundColor: 'black',
    marginHorizontal: 20,
    marginTop: 20
  },
  title: {
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 18,
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

export default EkranUnos;
