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
      <Text style={styles.headertext}>Favorites</Text>
      <Container color={Colors.whitebg} flex={1} style={styles.whitebox}>
        <Text style={styles.texttop}>It's time to buy your favorite dish.</Text>
        <FlatList
          data={favData}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <Container style={{marginTop: 24, paddingHorizontal: 10}}>
              <Image style={styles.image} source={item.image} />
              <Container style={styles.heartbox}>
                <Image style={styles.heart} source={icon.Redheart} />
              </Container>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productDesc}>{item.description}</Text>
            </Container>
          )}
        />
      </Container>
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
  texttop: {
    textAlign: 'center',
    paddingTop: 34,
    fontSize: 20,
    fontWeight: '500',
    color: Colors.orange,
  },
  image: {
    height: 141,
    width: 158,
    borderRadius: 20,
  },

  productTitle: {
    fontSize: 16,
    fontWeight: '500',
    width: 158,
    textAlign: 'center',
    color: Colors.orange,
    paddingTop: 13,
  },
  productDesc: {
    fontSize: 12,
    fontWeight: '300',
    width: 158,
    textAlign: 'center',
    color: Colors.fonts,
    paddingHorizontal: 5,
  },
  heartbox: {
    height: 21,
    width: 21,
    borderRadius: 30,
    position: 'absolute',
    top: 10,
    right: 20,
    backgroundColor: Colors.whitebg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heart: {
    height: 10,
    width: 12,
  },
});
