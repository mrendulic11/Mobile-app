import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Modal,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';

import { sortiranjeNiza } from '../store/actions/sortNiza';

var { width } = Dimensions.get('window'); 

const ListaPrikaz = (props) => {
  const sortPr = useSelector((state) => state.proizvodi.sortiraniProizvodi);

  const alo = (input) => {
    return Object.keys(sortPr)
      .filter((key) => {
        return sortPr[key].ducan.includes(input);
      })
      .map((foundKey) => ({ ...sortPr[foundKey], key: foundKey }));
  };

  if (props.opcija != null) {
    const noviNiz = alo(props.opcija);
    var search = (input) => {
      return Object.keys(noviNiz)
        .filter((key) => {
          return noviNiz[key].naziv.includes(input);
        })
        .map((foundKey) => ({ ...noviNiz[foundKey], key: foundKey }));
    };
  } else {
    search = (input) => {
      return Object.keys(sortPr)
        .filter((key) => {
          return sortPr[key].naziv.includes(input);
        })
        .map((foundKey) => ({ ...sortPr[foundKey], key: foundKey }));
    };
  }
 
  var suma = 0;
  //treba napravit provjeru ako je prazna lista da baci alert
  return (
    <Modal visible={props.vid}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.title}>{props.nasl}</Text>
          </View>
          <View>
            <Text style={styles.title}>Popis proizvoda:</Text>
            <ScrollView style={styles.scrollView}>
              <FlatList
                data={props.data}
                op={props.opcija}
                renderItem={(el) => (
                  <View style={styles.card}>
                    <Text style={styles.title}>{el.item.naziv}</Text>
                    <Text style={styles.tekst}>
                      Ducan: {`${search(el.item.naziv, this.op)[0].ducan}`}
                    </Text>
                    <Text style={styles.tekst}>
                      Kolicina: {el.item.kolicina} kom
                    </Text>
                    <Text style={styles.price}>
                      {`${search(el.item.naziv, this.op)[0].cijena}`} kn/kom
                    </Text>
                    <Text style={styles.tekst}>
                      {`${
                        search(el.item.naziv, this.op)[0].cijena *
                        el.item.kolicina
                      }`}{' '}
                      kn
                    </Text>
                  </View>
                )}
              />
            </ScrollView>
          </View>
          <View>
            <Button title="Odustani" color="red" onPress={props.odus} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  card: {
    width: width / 1.5,
    height: width / 2,
    padding: 10,
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: 'center',
    elevation: 8,
    backgroundColor: '#ddbb99',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  tekst: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 2,
    marginBottom: 5,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});

export default ListaPrikaz;
