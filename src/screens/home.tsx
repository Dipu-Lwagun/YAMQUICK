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
import {BC1, IcLove, IcOfflove, IcStar} from '../assets/image';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import Cart from './Carts/Cart';
import {Container} from '../components';
import {useDispatch} from 'react-redux';
import {useGetDrinkQuery} from '../redux/services/drinkApi';

const catagore = [
  {
    id: 1,
    title: 'Snack',
    logo: icon.Snack,
  },
  {
    id: 2,
    title: 'Meal',
    logo: icon.Meals,
  },
  {
    id: 3,
    title: 'Vegan',
    logo: icon.Vagen,
  },
  {
    id: 4,
    title: 'Dessert',
    logo: icon.Desserts,
  },
];

const datas = [
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
  const [carouselIndex, setCarouselIndex] = useState(0);
  const dispatch = useDispatch();
  const {data, isLoading, isError} = useGetDrinkQuery();

  const [liked, setLiked] = useState<{[key: string]: boolean}>({});
  // const [disliked, setDisliked] = useState(false);

  const handleLike = (id: string | number) => {
    setLiked(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // const handleDislike = () => {
  //   setDisliked(!disliked);
  //   if (!disliked) setLiked(false);
  // };

  const navigation = useNavigation();

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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Cart');
              }}
              style={styles.boxcont}>
              <Image source={icon.Cart} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxcont}>
              <Image source={icon.Notification} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              style={styles.boxcont}>
              <Image source={icon.Profile} />
            </TouchableOpacity>
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
              {datas.map(item => {
                return (
                  <View key={item.id}>
                    <Image source={item.cover} />
                    <Text style={styles.itemsrate}>{item.rate}</Text>
                  </View>
                );
              })}
            </View>
          </View>
          {/* banner */}
          <Container
            marginTop={20}
            position="relative"
            style={{alignItems: 'center'}}>
            <Image
              source={{
                uri: tempImgData[carouselIndex],
              }}
              style={{
                width: 323,
                height: 128,
                borderRadius: 20,
              }}
            />
            <Pressable
              style={styles.bannerprev}
              onPress={() =>
                setCarouselIndex(prev => {
                  if (prev === 0) {
                    return 0;
                  }
                  return prev - 1;
                })
              }>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 30,
                  color: Colors.orange,
                  opacity: 0.5,
                }}>
                {'<'}
              </Text>
            </Pressable>
            <Pressable
              style={styles.bannernext}
              onPress={() =>
                setCarouselIndex(prev => {
                  if (prev === 4) {
                    return 4;
                  }

                  return prev + 1;
                })
              }>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 30,
                  color: Colors.orange,
                  opacity: 0.5,
                }}>
                {'>'}
              </Text>
            </Pressable>
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
            </View>
          </Container>

          {/* recommanded */}

          <View style={{paddingHorizontal: 34}}>
            <Text
              style={{fontSize: 20, fontWeight: '500', color: Colors.fonts}}>
              Recommend
            </Text>

            <View
              style={{
                gap: 7,
                marginTop: 10,
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              <FlatList
                data={data}
                numColumns={2}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                  <TouchableOpacity style={{margin: 5}}>
                    <Image
                      source={{uri: item.image_url}}
                      style={{
                        height: 120,
                        width: 140,
                        borderRadius: 20,
                        position: 'relative',
                      }}
                    />
                    <Container
                      position="absolute"
                      top={0}
                      left={15}
                      gap={5}
                      style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Container style={styles.rate}>
                        <Text style={{fontSize: 12, color: Colors.fonts}}>
                          {item.rate}
                        </Text>
                        <Image source={IcStar} style={styles.ratetext} />
                      </Container>
                      <TouchableOpacity onPress={() => handleLike(item.id)}>
                        <Image
                          source={liked[item.id] ? IcLove : IcOfflove}
                          style={{height: 14, width: 14}}
                        />
                      </TouchableOpacity>
                    </Container>
                    <Container
                      bottom={10}
                      right={0}
                      position="absolute"
                      width={45}
                      style={{
                        backgroundColor: Colors.orange,
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                      }}>
                      <Text
                        style={{
                          color: Colors.whitefont,
                          fontSize: 12,
                          paddingHorizontal: 5,
                        }}>
                        {`$ ${item.price}`}{' '}
                      </Text>
                    </Container>
                  </TouchableOpacity>
                )}
              />
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

  rate: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.orange2,
    width: 34,
    gap: 4,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  ratetext: {
    height: 8,
    width: 8,
    backgroundColor: Colors.yellow2,
  },
  bannernext: {
    position: 'absolute',
    backgroundColor: Colors.whitebg,
    opacity: 0.6,
    right: 20,
    top: 40,
    height: 50,
    width: 50,
    borderRadius: 30,
    borderColor: Colors.yellow,
    borderWidth: 1,
  },
  bannerprev: {
    position: 'absolute',
    backgroundColor: Colors.whitebg,
    opacity: 0.6,
    left: 20,
    top: 40,
    height: 50,
    width: 50,
    borderRadius: 30,
    borderColor: Colors.yellow,
    borderWidth: 1,
  },
});
