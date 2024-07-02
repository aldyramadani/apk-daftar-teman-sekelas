import React from 'react';
import { Button, Image, Text, View, StyleSheet } from 'react-native';

function FriendDetails({ route, navigation }) {
  const { friend } = route.params;
  return (
    <View style={styles.container}>
      <Image source={friend.image} style={styles.detailImage} />
      <Text style={styles.name}>{friend.name}</Text>
      <Text style={styles.description}>{friend.description}</Text>
      <Text style={styles.info}>{friend.info}</Text>
      <Button title="Kembali" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0c4de',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  detailImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
  info: {
    fontSize: 16,
    marginTop: 10,
    color: 'blue',
    textAlign: 'center',
  },
});

export default FriendDetails;
