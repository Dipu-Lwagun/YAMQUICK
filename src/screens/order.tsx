import {StyleSheet, Text, Image, FlatList} from 'react-native';
import React from 'react';
import {Container} from '../components';
import {Colors} from '../colors';
import {icon} from '../icon';

const favData = [
  {
    id: 1,
    image: {
      uri: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHwwfDB8fHww',
    },
    title: 'chicken curry',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    id: 2,
    image: {
      uri: 'https://media.istockphoto.com/id/617781022/photo/baskets-of-onion-rings-curly-fries-and-cheese-sticks.webp?a=1&b=1&s=612x612&w=0&k=20&c=k_eTPGLThcifq-ltM0T-Nv-BkaniaA_9ZE4ONqZauqA=',
    },
    title: 'Rotee',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    id: 3,
    image: {
      uri: 'https://media.istockphoto.com/id/617781022/photo/baskets-of-onion-rings-curly-fries-and-cheese-sticks.webp?a=1&b=1&s=612x612&w=0&k=20&c=k_eTPGLThcifq-ltM0T-Nv-BkaniaA_9ZE4ONqZauqA=',
    },
    title: 'Rotee',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    id: 4,
    image: {
      uri: 'https://media.istockphoto.com/id/617781022/photo/baskets-of-onion-rings-curly-fries-and-cheese-sticks.webp?a=1&b=1&s=612x612&w=0&k=20&c=k_eTPGLThcifq-ltM0T-Nv-BkaniaA_9ZE4ONqZauqA=',
    },
    title: 'Rotee',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    id: 5,
    image: {
      uri: 'https://media.istockphoto.com/id/617781022/photo/baskets-of-onion-rings-curly-fries-and-cheese-sticks.webp?a=1&b=1&s=612x612&w=0&k=20&c=k_eTPGLThcifq-ltM0T-Nv-BkaniaA_9ZE4ONqZauqA=',
    },
    title: 'Rotee',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    id: 6,
    image: {
      uri: 'https://media.istockphoto.com/id/617781022/photo/baskets-of-onion-rings-curly-fries-and-cheese-sticks.webp?a=1&b=1&s=612x612&w=0&k=20&c=k_eTPGLThcifq-ltM0T-Nv-BkaniaA_9ZE4ONqZauqA=',
    },
    title: 'Rotee',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    id: 7,
    image: {
      uri: 'https://media.istockphoto.com/id/617781022/photo/baskets-of-onion-rings-curly-fries-and-cheese-sticks.webp?a=1&b=1&s=612x612&w=0&k=20&c=k_eTPGLThcifq-ltM0T-Nv-BkaniaA_9ZE4ONqZauqA=',
    },
    title: 'Rotee',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    id: 8,
    image: {
      uri: 'https://media.istockphoto.com/id/617781022/photo/baskets-of-onion-rings-curly-fries-and-cheese-sticks.webp?a=1&b=1&s=612x612&w=0&k=20&c=k_eTPGLThcifq-ltM0T-Nv-BkaniaA_9ZE4ONqZauqA=',
    },
    title: 'Rotee',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    id: 9,
    image: {
      uri: 'https://media.istockphoto.com/id/617781022/photo/baskets-of-onion-rings-curly-fries-and-cheese-sticks.webp?a=1&b=1&s=612x612&w=0&k=20&c=k_eTPGLThcifq-ltM0T-Nv-BkaniaA_9ZE4ONqZauqA=',
    },
    title: 'Rotee',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];
const favorites = () => {
  return (
    <Container flex={1} color={Colors.yellow}>
      <Text style={styles.headertext}>My Orders</Text>
      <Container
        color={Colors.whitebg}
        flex={1}
        style={styles.whitebox}></Container>
    </Container>
  );
};

export default favorites;

const styles = StyleSheet.create({
  headertext: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.whitefont,
    paddingTop: 46,
  },
  whitebox: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 25,
  },
});
