import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/Store';
import {Container} from '../../components';
import {Colors} from '../.././colors';
import {ICCart, IcLove, IcOfflove, IcStar} from '../../assets/image';
import {decrement, increment} from '../../redux/features/CounterSlice';
import {useNavigation} from '@react-navigation/native';
import {addToCart} from '../../redux/features/CartSlice';

const IsCart = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.counter.Value);

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    if (!liked) setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    if (!disliked) setLiked(false);
  };
  const SelectedItem = useSelector(
    (state: RootState) => state.selectedItem.selectedItem,
  );

  const [select, SetSelect] = useState();

  const handleAddToCart = () => {
    navigation.goBack();
    console.log('btnpress:');
    if (!SelectedItem) return;
    const selectedIngredient =
      select === 1
        ? 'Shrimp'
        : select === 2
        ? 'Crisp Onion'
        : select === 3
        ? 'Sweet Corn'
        : select === 4
        ? 'Pico de Gallo'
        : undefined;

    dispatch(
      addToCart({
        id: SelectedItem?.id,
        name: SelectedItem?.name,
        price: SelectedItem?.price,
        quantity: value,
        image_url: SelectedItem?.image_url,
        ingredient: selectedIngredient,
      }),
    );
  };
  return (
    <Container style={styles.mainscreen}>
      <Container
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 25,
          marginTop: 37,
        }}>
        <Container style={styles.title}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.arrow}>{' < '}</Text>
          </TouchableOpacity>
          <Text style={styles.itemname}>{SelectedItem?.name}</Text>
          <View style={styles.dot} />
        </Container>
        <Container>
          <TouchableOpacity onPress={handleLike}>
            <Image
              source={liked ? IcLove : IcOfflove}
              style={{height: 21, width: 21}}
            />
          </TouchableOpacity>
        </Container>
      </Container>
      <Container style={styles.rate}>
        <Text style={{fontSize: 12, color: Colors.fonts}}>
          {SelectedItem?.rate}
        </Text>
        <Image source={IcStar} style={styles.ratetext} />
      </Container>
      <Container style={styles.whitebox}>
        <Image source={{uri: SelectedItem?.image_url}} style={styles.img} />
        {/* price and item qty */}
        <Container
          marginTop={15}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.price}>{`$ ${SelectedItem?.price}`}</Text>
          <Container
            style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
            <TouchableOpacity onPress={() => dispatch(decrement())}>
              <Text style={styles.dec}>-</Text>
            </TouchableOpacity>
            <Text style={styles.count}>{value}</Text>
            <TouchableOpacity onPress={() => dispatch(increment())}>
              <Text style={styles.inc}>+</Text>
            </TouchableOpacity>
          </Container>
        </Container>

        <Container style={styles.line} />

        <Container marginTop={10}>
          <Text style={styles.des}>{SelectedItem?.description}</Text>
        </Container>

        <Container marginTop={29}>
          <Text style={styles.addingrtitle}>Add on ingredients</Text>

          <Container>
            <Container
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 17,
              }}>
              <Text style={styles.ingredients}>Shrimp</Text>
              <Container style={styles.dotline} />
              <Text style={styles.ingredients}>${'2.99'}</Text>
              <TouchableOpacity onPress={() => SetSelect(1)}>
                <Container style={styles.radio}>
                  {select == 1 ? (
                    <Container style={styles.onradio}></Container>
                  ) : (
                    <Container style={styles.offradio}></Container>
                  )}
                </Container>
              </TouchableOpacity>
            </Container>
            <Container
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 17,
              }}>
              <Text style={styles.ingredients}>Crisp Onion</Text>
              <Container style={styles.dotline} />
              <Text style={styles.ingredients}>${'2.99'}</Text>
              <TouchableOpacity onPress={() => SetSelect(2)}>
                <Container style={styles.radio}>
                  {select == 2 ? (
                    <Container style={styles.onradio}></Container>
                  ) : (
                    <Container style={styles.offradio}></Container>
                  )}
                </Container>
              </TouchableOpacity>
            </Container>
            <Container
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 17,
              }}>
              <Text style={styles.ingredients}>Sweet Corn</Text>
              <Container style={styles.dotline} />
              <Text style={styles.ingredients}>${'2.99'}</Text>
              <TouchableOpacity onPress={() => SetSelect(3)}>
                <Container style={styles.radio}>
                  {select == 3 ? (
                    <Container style={styles.onradio}></Container>
                  ) : (
                    <Container style={styles.offradio}></Container>
                  )}
                </Container>
              </TouchableOpacity>
            </Container>
            <Container
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 17,
              }}>
              <Text style={styles.ingredients}>Pico de Gallo</Text>
              <Container style={styles.dotline} />
              <Text style={styles.ingredients}>${'2.99'}</Text>
              <TouchableOpacity onPress={() => SetSelect(4)}>
                <Container style={styles.radio}>
                  {select == 4 ? (
                    <Container style={styles.onradio}></Container>
                  ) : (
                    <Container style={styles.offradio}></Container>
                  )}
                </Container>
              </TouchableOpacity>
            </Container>
          </Container>
          <TouchableOpacity onPress={handleAddToCart} style={styles.addToCart}>
            {/* <Image source={ICCart} style={styles.icon} /> */}
            <Text style={styles.addToCarttext}>Add to Cart</Text>
          </TouchableOpacity>
        </Container>
      </Container>
    </Container>
  );
};

export default IsCart;

const styles = StyleSheet.create({
  mainscreen: {
    flex: 1,
    backgroundColor: Colors.yellow,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  arrow: {
    color: Colors.orange,
    fontWeight: '500',
    fontSize: 20,
  },
  itemname: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.fonts,
  },
  dot: {
    height: 5,
    width: 5,
    borderRadius: 50,
    backgroundColor: Colors.orange,
  },
  rate: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.orange2,
    width: 40,
    gap: 4,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginLeft: 50,
  },
  ratetext: {
    height: 9,
    width: 9,
    backgroundColor: Colors.yellow2,
  },
  whitebox: {
    flex: 1,
    backgroundColor: Colors.whitebg,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 13,
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  img: {
    height: 214,
    width: 311,
    borderRadius: 20,
  },
  price: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.orange,
  },

  dec: {
    backgroundColor: Colors.orange,
    height: 26,
    width: 26,
    textAlign: 'center',
    color: Colors.whitefont,
    fontSize: 18,
    borderRadius: 13,
  },
  count: {
    textAlign: 'center',
    color: Colors.fonts,
    fontSize: 24,
    borderRadius: 13,
  },
  inc: {
    backgroundColor: Colors.orange,
    height: 26,
    width: 26,
    textAlign: 'center',
    color: Colors.whitefont,
    fontSize: 18,
    borderRadius: 13,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.orange2,
    marginTop: 6,
  },
  des: {
    color: Colors.fonts,
    fontWeight: 'light',
    fontSize: 12,
  },
  addingrtitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  dotline: {
    borderWidth: 1,
    borderStyle: 'dashed',
    width: 150,
    height: 1,
    borderColor: Colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  ingredients: {
    fontSize: 14,
    fontWeight: 'light',
    color: Colors.fonts,
  },
  radio: {
    height: 15,
    width: 15,
    borderColor: Colors.orange,
    borderWidth: 2,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  onradio: {
    height: 8,
    width: 8,
    backgroundColor: Colors.orange,
    borderRadius: 4,
  },
  offradio: {
    height: 8,
    width: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.orange,
  },
  addToCart: {
    backgroundColor: Colors.orange,
    marginHorizontal: 70,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 30,
  },
  addToCarttext: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.whitefont,
  },
});
