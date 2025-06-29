import React, {useEffect} from 'react';

import {
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {Container} from '../../../components';
import {Colors} from '../../../colors';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {getmealdata} from '../../../redux/features/ProductSlice';
import {useGetMealsQuery} from '../../../redux/services/mealApi';
import {setSelectedItem} from '../../../redux/features/SelectedItemSlice';
import {useNavigation} from '@react-navigation/native';
import IsCart from '../IsCart';

const MealTabView = () => {
  const dispatch = useDispatch();
  // const {mealData, isSuccess} = useSeledctor(state => state.meals);
  // console.log('mealdata', mealData);

  const {data, isLoading, isError} = useGetMealsQuery();

  console.log('[meals: ]', data);
  console.log('[isLoading: ]', isLoading);
  console.log('[isError: ]', isError);

  if (isLoading) {
    return (
      <Container style={styles.center}>
        <ActivityIndicator size="large" color={Colors.orange} />
        <Text>Loading drinks...</Text>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container style={styles.center}>
        <Text style={{color: 'red'}}>
          Failed to load drinks. Please try again.
        </Text>
      </Container>
    );
  }

  // useEffect(() => {
  //   // dispatch(getmealdata());
  // }, []);
  const navigation = useNavigation();

  return (
    <Container style={{paddingHorizontal: 20}}>
      <Text style={{fontSize: 20}}>Sort By</Text>

      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              dispatch(setSelectedItem(item));
              navigation.navigate('IsCart');
            }}>
            <Image
              source={{uri: item.image_url}}
              style={{width: 323, height: 174, borderRadius: 36}}
            />
            <Container style={styles.productcont}>
              <Text style={styles.productName}>{item.name}</Text>
              <View style={styles.dot} />
              <Text style={styles.ratingbox}>{item.rate}</Text>
              <Text style={styles.rate}>$ {item.price}</Text>
            </Container>
            <Text style={styles.productdetail}>{item.description}</Text>
            <Container style={styles.line} />
          </TouchableOpacity>
        )}
      />
    </Container>
  );
};

export default MealTabView;
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
