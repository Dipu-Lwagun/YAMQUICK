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

const Cart = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.counter.Value);

  const cartItem = useSelector((state: RootState) => state.cart.cartItems);

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
                        <Container
                          style={{
                            flexDirection: 'row',
                            gap: 10,
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                          }}>
                          <TouchableOpacity
                            onPress={() => dispatch(decrement())}>
                            <Text style={styles.dec}>-</Text>
                          </TouchableOpacity>
                          <Text style={styles.count}>{item.quantity}</Text>
                          <TouchableOpacity
                            onPress={() => dispatch(increment())}>
                            <Text style={styles.inc}>+</Text>
                          </TouchableOpacity>
                        </Container>
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
                <Text style={styles.subtotalAmt}>$ 32.00</Text>
              </Container>
              <Container
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.subtotal}>Subtotal</Text>
                <Text style={styles.subtotalAmt}>$ 32.00</Text>
              </Container>
              <Container
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.subtotal}>Subtotal</Text>
                <Text style={styles.subtotalAmt}>$ 32.00</Text>
              </Container>
              <Container style={styles.dashline} />
              <Container
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.subtotal}>Subtotal</Text>
                <Text style={styles.subtotalAmt}>$ 32.00</Text>
              </Container>
            </Container>
          </Container>
        ) : (
          <Container flex={1}>
            <Text style={styles.title}>Your cart is empty</Text>
            <Image source={IcAddToCart} style={styles.addtocarticon} />
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
    backgroundColor: 'blue',
    height: 184,
    width: 184,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
