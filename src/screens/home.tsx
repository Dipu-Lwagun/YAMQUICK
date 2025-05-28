import React, {useState} from 'react';

import {TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Pressable,
  ScrollView,
} from 'react-native';

import {icon} from '../icon';
import {Colors} from '../colors';
import {BC1} from '../assets/image';
import {useNavigation} from '@react-navigation/native';

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

const data = [
  {
    id: 1,
    cover: BC1,
    rate: '$130.0',
  },
  {
    id: 2,
    cover: require('../assets/image/logo/bc2.png'),
    rate: '$130.0',
  },
  {
    id: 3,
    cover: require('../assets/image/logo/bc3.png'),
    rate: '$130.0',
  },
  {
    id: 4,
    cover: require('../assets/image/logo/bc4.png'),
    rate: '$130.0',
  },
];

const tempImgData = [
  'https://plus.unsplash.com/premium_photo-1748152778956-c4accfc55249?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://imgs.search.brave.com/ICxzUrOId1_U6TZSnh-vM8xuBcpPcYpm6O2iNUIjwrQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20veHBncEc1/RUN6OE1fQTdZSVZB/QUVpN180UVA5dmhR/TS1GOEFIRVk3Mzl6/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkw/ZDI5cy9iM1psYzNO/MGRXUnBieTVqL2Iy/MHZkM0F0WTI5dWRH/VnUvZEM5MWNHeHZZ/V1J6THpJdy9Nakl2/TURFdlQxSkpSVTVV/L1FWUkpUMDR0TlMx/RmMzTmwvYm5ScFlX/d3RRMjl0Y0c5ei9h/WFJwYjI0dFZHbHdj/eTFHL2IzSXRSbTl2/WkMxUWFHOTAvYjJk/eVlYQm9lUzFJWVhw/bC9iRzUxZEMxTWFX/NTZaWEl0L1EyOXZh/MmxsY3pBd05UWXQv/UldScGRDMDNNalo0/TkRVMC9MbXB3Wnc',
  'https://imgs.search.brave.com/_VxzhHakI26pX3d_U-tFcfokaqpaNu2BxIBBgh2K8LY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vWVhVbjhS/RlZ3Tkx1dEw2bW1G/S2ZaMlFSOFc0Ty13/QTRDcHBUZzdXZlND/TS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/TUM1My9jQzVqYjIw/dlpHbG5hWFJoL2JD/MXdhRzkwYjJkeVlY/Qm8vZVMxelkyaHZi/Mnd1WTI5dC9MM2R3/TFdOdmJuUmxiblF2/L2RYQnNiMkZrY3k4/eU1ERTIvTHpBekww/dEVMVEl3TVRVdC9N/aTVxY0djX2NtVnph/WHBsL1BUYzFNQ3cx/TURBbWMzTnMvUFRF',
];

const Home = () => {
  const navigation = useNavigation();

  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <SafeAreaView style={styles.contaner}>
      <StatusBar backgroundColor={Colors.yellow} />

      <ScrollView>
        <View style={styles.topcomp}>
          <TextInput
            style={styles.search}
            placeholder="Search"
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
              {data.map(item => {
                return (
                  <View key={item.id}>
                    <Image source={item.cover} />
                    <Text style={styles.itemsrate}>{item.rate}</Text>
                  </View>
                );
              })}
            </View>
          </View>

          <View>
            <Image
              source={{
                uri: tempImgData[carouselIndex],
              }}
              style={{
                width: 323,
                height: 128,
                backgroundColor: 'red',
              }}
            />
            <View style={{flexDirection: 'row', gap: 4, marginTop: 5}}>
              {[1, 2, 3, 4, 5].map((i, index) => {
                return (
                  <View
                    key={i}
                    style={{
                      width: 20,
                      height: 4,
                      backgroundColor: Colors.yellow2,
                      borderRadius: 12,
                    }}>
                    {carouselIndex === index && (
                      <View
                        style={{
                          width: 20,
                          height: 4,
                          backgroundColor: Colors.orange,
                          borderRadius: 12,
                        }}
                      />
                    )}
                  </View>
                );
              })}

              <Pressable
                onPress={() =>
                  setCarouselIndex(prev => {
                    if (prev === 0) {
                      return 0;
                    }
                    return prev - 1;
                  })
                }>
                <Text>Previous</Text>
              </Pressable>
              <Pressable
                onPress={() =>
                  setCarouselIndex(prev => {
                    if (prev === 4) {
                      return 4;
                    }

                    return prev + 1;
                  })
                }>
                <Text>Next</Text>
              </Pressable>
            </View>
          </View>

          <View style={{paddingHorizontal: 34}}>
            <Text style={{fontSize: 20}}>Recommend</Text>

            <View
              style={{
                gap: 7,
                marginTop: 10,
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              {tempImgData.map((item, index) => {
                return (
                  <Pressable
                    key={index}
                    onPress={() => navigation.navigate('Recommend')}>
                    <View>
                      <Image
                        source={{uri: item}}
                        style={{width: 159, height: 140, borderRadius: 20}}
                      />
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
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
