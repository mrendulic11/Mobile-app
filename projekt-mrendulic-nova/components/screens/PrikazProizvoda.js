import React from 'react';
import { useSelector } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';
var { width } = Dimensions.get('window');

const PrikazProizvoda = () => {
  const proizvodiPrikaz = useSelector((state) => state.proizvodi.proizvodi);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={proizvodiPrikaz}
          renderItem={(el) => (
            <View style={styles.card}>
              <Text style={styles.title}>{el.item.naziv}</Text>
              <Text style={styles.price}>{el.item.cijena}kn</Text>
              <Text style={styles.tekst}>{el.item.proizvodac}</Text>
              <Text style={styles.tekst}>{el.item.ducan}</Text>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
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

export default PrikazProizvoda;
