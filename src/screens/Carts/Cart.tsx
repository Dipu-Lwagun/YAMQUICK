import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Container} from '../../components';
import {IcAddToCart, ICCart} from '../../assets/image';
import {Colors} from '../../colors';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/Store';
import {decrement, increment} from '../../redux/features/CounterSlice';
import {FlatList} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Menu from '../menu';
import ConfirmOrder from './ConfirmOrder';
import {setOrderItems} from '../../redux/features/orderSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.counter.Value);

  const cartItem = useSelector((state: RootState) => state.cart.cartItems);
  const navigation = useNavigation();

  const subtotal = cartItem.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.1;
  const delivery = 3;
  const total = subtotal + tax + delivery;

  const handleCheckout = () => {
    dispatch(setOrderItems(cartItem));
    navigation.navigate('ConfirmOrder');
  };

  return (
    <Container style={styles.mainscreen}>
      <Container style={styles.head}>
        <Container style={styles.imagebox}>
          <Image source={ICCart} style={styles.carticon} />
        </Container>
        <Text style={styles.headtext}>Cart</Text>
      </Container>
      <Container style={styles.line} />
      <ScrollView>
        {cartItem.length > 0 ? (
          <Container>
            <Text style={styles.title}>
              You have{cartItem.length} items in the cart
            </Text>
            <FlatList
              data={cartItem}
              keyExtractor={item => item.id.toString}
              renderItem={({item}) => (
                <Container marginTop={26}>
                  <Container
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      source={{
                        uri: item.image_url,
                      }}
                      style={styles.image}
                    />
                    <Container
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '70%',
                        paddingLeft: 10,
                      }}>
                      <Container>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>{`$ ${item.price}`}</Text>
                      </Container>
                      <Container style={{}}>
                        <Text style={styles.time}>29/11/24</Text>
                        <Text style={styles.time}>15:00</Text>
                      </Container>
                    </Container>
                  </Container>
                  <Container style={styles.line2} />
                </Container>
              )}
            />
            <Container style={{gap: 26}}>
              <Container
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 58,
                }}>
                <Text style={styles.subtotal}>Subtotal</Text>
                <Text style={styles.subtotalAmt}>$ {subtotal.toFixed(2)}</Text>
              </Container>
              <Container
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.subtotal}>Tax and Fees</Text>
                <Text style={styles.subtotalAmt}>$ {tax.toFixed(2)}</Text>
              </Container>
              <Container
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.subtotal}>Delivery</Text>
                <Text style={styles.subtotalAmt}>$ {delivery.toFixed(2)}</Text>
              </Container>
              <Container style={styles.dashline} />
              <Container
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.subtotal}>Total</Text>
                <Text style={styles.subtotalAmt}>$ {total.toFixed(2)}</Text>
              </Container>
            </Container>
            <TouchableOpacity onPress={handleCheckout} style={styles.checkout}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '500',
                  color: Colors.orange,
                }}>
                Checkout
              </Text>
            </TouchableOpacity>
          </Container>
        ) : (
          // Empty card

          <Container>
            <Text style={styles.title}>Your cart is empty</Text>
            <Container
              style={{
                flex: 1,
                height: 500,
                // backgroundColor: 'blue',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Menu');
                }}>
                <Image source={IcAddToCart} style={styles.addtocarticon} />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  color: Colors.whitefont,
                  width: 158,
                  textAlign: 'center',
                }}>
                Want to add something?
              </Text>
            </Container>
          </Container>
        )}
      </ScrollView>
    </Container>
  );
};

export default Cart;

const styles = StyleSheet.create({
  carticon: {
    height: 26,
    width: 24,
  },
  mainscreen: {
    backgroundColor: Colors.orange,
    flex: 1,
    paddingHorizontal: 33,
  },
  imagebox: {
    backgroundColor: Colors.whitebg,
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    marginTop: 40,
  },
  headtext: {
    fontSize: 24,
    fontWeight: 800,
    color: Colors.whitefont,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.yellow,
    marginTop: 38,
  },
  line2: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.yellow,
    marginTop: 15,
  },
  title: {
    color: Colors.whitefont,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 18,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 20,
  },

  name: {
    fontSize: 15,
    fontWeight: '500',
    width: 81,
    color: Colors.whitefont,
  },
  time: {
    fontSize: 15,
    fontWeight: '500',
    width: 81,
    color: Colors.whitefont,
    textAlign: 'right',
  },
  price: {
    color: Colors.whitefont,
    fontSize: 14,
    fontWeight: 'light',
  },
  dec: {
    backgroundColor: Colors.whitebg,
    height: 14,
    width: 14,
    textAlign: 'center',
    color: Colors.orange,
    fontSize: 10,
    borderRadius: 13,
  },
  count: {
    textAlign: 'center',
    color: Colors.whitefont,
    fontSize: 13,
    borderRadius: 13,
  },
  inc: {
    backgroundColor: Colors.whitebg,
    height: 14,
    width: 14,
    textAlign: 'center',
    color: Colors.orange,
    fontSize: 10,
    borderRadius: 13,
  },
  dashline: {
    borderWidth: 1,
    borderColor: Colors.yellow2,
    borderStyle: 'dashed',
  },
  subtotal: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.whitefont,
  },
  subtotalAmt: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.whitefont,
    textAlign: 'right',
  },
  addtocarticon: {
    height: 184,
    width: 184,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkout: {
    backgroundColor: Colors.yellow,
    width: 131,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 100,
    marginTop: 82,
    borderRadius: 20,
  },
});
