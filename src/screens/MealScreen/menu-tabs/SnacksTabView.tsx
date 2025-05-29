import React from 'react';

import {Text, Image, StyleSheet, View} from 'react-native';

import {Container} from '../../../components';
import {Colors} from '../../../colors';
import {FlatList} from 'react-native-gesture-handler';

const snackData = [
  {
    id: 1,
    image: {
      uri: 'https://images.pexels.com/photos/32258175/pexels-photo-32258175/free-photo-of-delicious-strawberry-croissant-bakery-display.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    title: 'Mexican appetizer',
    description: 'Tortilla Chips With Toppins',
    rating: '5.0',
    rate: '$15.00',
  },
  {
    id: 2,
    image: {
      uri: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    title: 'Mexican appetizer',
    description: 'Tortilla Chips With Toppins',
    rating: '5.0',
    rate: '$15.00',
  },
  {
    id: 3,
    image: {
      uri: 'https://images.pexels.com/photos/32217805/pexels-photo-32217805/free-photo-of-close-up-of-traditional-argentine-pastries.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    title: 'Mexican appetizer',
    description: 'Tortilla Chips With Toppins',
    rating: '4.0',
    rate: '$15.00',
  },
];

const SnacksTabView = () => {
  return (
    <Container style={{paddingHorizontal: 20}}>
      <Text style={{fontSize: 20}}>Sort By</Text>

      <FlatList
        data={snackData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Container>
            <Image
              source={item.image}
              style={{width: 323, height: 174, borderRadius: 36}}
            />
            <Container style={styles.productcont}>
              <Text style={styles.productName}>{item.title}</Text>
              <View style={styles.dot} />
              <Text style={styles.ratingbox}>{item.rating}</Text>
              <Text style={styles.rate}>{item.rate}</Text>
            </Container>
            <Text style={styles.productdetail}>{item.description}</Text>
            <Container style={styles.line} />
          </Container>
        )}
      />
    </Container>
  );
};

export default SnacksTabView;
const styles = StyleSheet.create({
  productcont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
  },
  productdetail: {
    fontSize: 12,
    fontWeight: 300,
  },
  dot: {
    height: 5,
    width: 5,
    borderRadius: 50,
    backgroundColor: Colors.orange,
  },
  ratingbox: {
    backgroundColor: Colors.orange,
    paddingVertical: 3,
    width: 34,
    borderRadius: 30,
    color: Colors.whitefont,
    fontSize: 12,
  },
  rate: {
    fontSize: 18,
    color: Colors.orange,
  },
  line: {
    width: 323,
    height: 1,
    backgroundColor: Colors.orange,
    marginVertical: 25,
  },
});
