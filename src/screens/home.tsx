import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../colors';
import {TextInput} from 'react-native-gesture-handler';
import {icon} from '../icon';
const catagore = [
  {
    id: 1,
    title: 'Snack',
    logo: icon.Snacks,
  },
  {
    id: 2,
    title: 'Meal',
    logo: icon.Meals,
  },
  {
    id: 3,
    title: 'Vegan',
    logo: icon.Vegan,
  },
  {
    id: 4,
    title: 'Dessert',
    logo: icon.Desserts,
  },
];

const Home = () => {
  return (
    <SafeAreaView style={styles.contaner}>
      <View style={styles.topcomp}>
        <TextInput
          style={styles.search}
          placeholder="search"
          placeholderTextColor={'#676767'}
        />

        <View style={styles.headiconcont}>
          <View style={styles.boxcont}>
            <Image source={icon.cart} />
          </View>
          <View style={styles.boxcont}>
            <Image source={icon.notification} />
          </View>
          <View style={styles.boxcont}>
            <Image source={icon.profile} />
          </View>
        </View>
      </View>
      <Text style={styles.headtext}>Good Morning</Text>
      <Text style={styles.desctext}>Rise and shine! It's breakfast time</Text>
      <View style={styles.whitebox}>
        <View style={{height: 'auto'}}>
          <FlatList
            data={catagore}
            horizontal
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.itemcont}>
                <View style={styles.itemlist}>
                  <Image source={item.logo} />
                </View>
                <Text style={styles.manutext}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.pagecont}>
          <Text style={styles.itemhead}>Best Seller </Text>

          <View style={styles.bestitem}>
            <View style={{position: 'relative', width: 71}}>
              <Image source={require('../assets/image/logo/bc1.png')} />
              <Text style={styles.itemsrate}>$130.0</Text>
            </View>
            <View style={{position: 'relative', width: 71}}>
              <Image source={require('../assets/image/logo/bc2.png')} />
              <Text style={styles.itemsrate}>$50.0</Text>
            </View>
            <View style={{position: 'relative', width: 71}}>
              <Image source={require('../assets/image/logo/bc3.png')} />
              <Text style={styles.itemsrate}>$12.99</Text>
            </View>
            <View style={{position: 'relative', width: 71}}>
              <Image source={require('../assets/image/logo/bc4.png')} />
              <Text style={styles.itemsrate}>$8.20</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    backgroundColor: Colors.yellow,
  },
  topcomp: {
    marginTop: 30,
    paddingHorizontal: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 29,
  },
  search: {
    backgroundColor: '#ffffff',
    width: 200,
    borderRadius: 30,
    color: Colors.fonts,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  headiconcont: {
    flexDirection: 'row',
    gap: 7,
  },
  boxcont: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: Colors.whitebg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headtext: {
    fontSize: 30,
    fontWeight: '700',
    color: Colors.whitefont,
    paddingHorizontal: 34,
    marginTop: 16,
  },
  desctext: {
    fontSize: 13,
    fontWeight: '500',
    color: Colors.orange,
    paddingHorizontal: 34,
  },
  whitebox: {
    flex: 1,
    backgroundColor: Colors.whitebg,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 17,
  },
  itemcont: {
    paddingHorizontal: 19,
    paddingTop: 31,
    alignItems: 'center',
  },
  itemlist: {
    backgroundColor: Colors.yellow2,
    height: 75,
    width: 49,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  manutext: {
    color: Colors.fonts,
    fontSize: 12,
  },
  pagecont: {
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  itemhead: {
    fontWeight: '700',
    fontSize: 20,
  },
  itemsrate: {
    position: 'absolute',
    backgroundColor: Colors.orange,
    right: 0,
    bottom: 12,
    color: Colors.whitefont,
    paddingLeft: 3,
    paddingHorizontal: 1,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  bestitem: {
    flexDirection: 'row',
    gap: 10,
  },
});
