import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const profil1 = require('../assets/Poto.jpeg');
const profil2 = require('../assets/Poto2.jpg');
const profil3 = require('../assets/Poto3.jpeg');
const profil4 = require('../assets/Poto4.jpeg');
const profil5 = require('../assets/Poto5.jpeg');

const friends = [
  { id: '1', name: 'Agung Prayoga', description: 'Teman Sekelas', image: profil1, info: 'Surade' },
  { id: '2', name: 'Haikal Lukman', description: 'Teman Sekelas', image: profil2, info: 'Sukalarang' },
  { id: '3', name: 'Ghina Nuragysa', description: 'Teman Sekelas', image: profil3, info: 'Sukaraja' },
  { id: '4', name: 'Ziyah Sakinah ', description: 'Teman Sekelas', image: profil4, info: 'Cikondang' },
  { id: '5', name: 'Muhammad Agan', description: 'Teman Sekelas', image: profil5, info: 'Cimangkok' },
];

function FriendList({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.friendItem} onPress={() => navigation.navigate('Details', { friend: item })}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0c4de',
    padding: 10,
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#c8c8c8',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'blue',
  },
});

export default FriendList;
