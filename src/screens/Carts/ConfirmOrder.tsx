import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Container} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/Store';
import {Colors} from '../../colors';
import {TextInput} from 'react-native-gesture-handler';
import {decrement, increment} from '../../redux/features/CounterSlice';
import {useNavigation} from '@react-navigation/native';

const ConfirmOrder = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.counter.Value);

  const orderItems = useSelector((state: RootState) => state.order.cartItems);

  const subtotal = orderItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.1;
  const delivery = 3;
  const total = subtotal + tax + delivery;

  const navigation = useNavigation();

  const handleCheckout = () => {
    // dispatch(setOrderItems(cartItem));
    navigation.goBack;
  };
  return (
    <ScrollView>
      <Container flex={1} style={{backgroundColor: Colors.yellow}}>
        <Container
          // flex={1}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            gap: 50,
            marginTop: 41,
          }}>
          <Text style={{fontSize: 20, color: Colors.orange}}>{'<'}</Text>
          <Text style={styles.head}>Confirm Order</Text>
        </Container>
        <Container flex={1} marginTop={33} style={styles.whitebox}>
          <Text style={styles.title}>Shipping Address</Text>
          {/* address */}
          <Container hPadding={25}>
            <TextInput
              style={styles.addressinput}
              placeholder="your address"
              placeholderTextColor={Colors.fonts}
            />
            <Container
              marginTop={50}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.subtitle}>Order Summary</Text>
              <Text style={styles.edit}>Edit</Text>
            </Container>
            <Container
              height={1}
              marginTop={19}
              style={{width: '100%', backgroundColor: Colors.orange2}}
            />
            <FlatList
              data={orderItems}
              keyExtractor={item => item.id.toString()}
              contentContainerStyle={{paddingBottom: 20}}
              renderItem={({item}) => (
                <Container marginTop={20}>
                  <Container
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Image
                      source={{uri: item.image_url}}
                      style={{height: 108, width: 72, borderRadius: 20}}
                    />
                    <Container
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Container
                        hPadding={10}
                        style={{
                          gap: 5,
                        }}>
                        <Text
                          numberOfLines={2}
                          ellipsizeMode="tail"
                          style={{fontSize: 20, fontWeight: 500, width: 100}}>
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: 'light',
                            color: Colors.fonts,
                          }}>
                          29 Nov, 15:20 pm
                        </Text>
                        <Text style={styles.cancelorder}>Cancel Order</Text>
                      </Container>
                      {/* rightside */}
                      <Container
                        style={{
                          paddingLeft: 25,
                          gap: 5,
                        }}>
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 500,
                            color: Colors.orange,
                            width: 150,
                          }}>
                          ${item.price}
                        </Text>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: 'light',
                            color: Colors.fonts,
                          }}>
                          {item.quantity} items
                        </Text>
                        <Container
                          style={{
                            flexDirection: 'row',
                            gap: 10,
                            alignItems: 'center',
                          }}>
                          <TouchableOpacity
                            onPress={() => {
                              console.log('press decrese', item.id);
                              dispatch(decrement(item.id));
                            }}>
                            <Text style={styles.dec}>-</Text>
                          </TouchableOpacity>
                          <Text style={styles.count}>{item.quantity}</Text>
                          <TouchableOpacity
                            onPress={() => {
                              console.log('press increse', item.id);
                              dispatch(increment(item.id));
                            }}>
                            <Text style={styles.inc}>+</Text>
                          </TouchableOpacity>
                        </Container>
                      </Container>
                    </Container>
                  </Container>
                </Container>
              )}
            />
            <Container style={{gap: 26}}>
              <Container
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 28,
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
                  // marginBottom: 50,
                }}>
                Checkout
              </Text>
            </TouchableOpacity>
          </Container>
        </Container>
      </Container>
    </ScrollView>
  );
};

export default ConfirmOrder;

const styles = StyleSheet.create({
  head: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.whitefont,
    textAlign: 'center',
  },
  whitebox: {
    backgroundColor: Colors.whitebg,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.fonts,
    paddingLeft: 46,
    marginTop: 30,
  },
  addressinput: {
    color: Colors.fonts,
    backgroundColor: Colors.yellow2,
    paddingHorizontal: 11,
    borderRadius: 20,
    fontSize: 16,
    marginTop: 25,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.fonts,
  },
  edit: {
    fontSize: 12,
    fontWeight: 'regular',
    color: Colors.orange,
    backgroundColor: Colors.orange2,
    width: 58,
    height: 14,
    textAlign: 'center',
    borderRadius: 20,
  },
  cancelorder: {
    fontSize: 15,
    fontWeight: 'regular',
    color: Colors.orange,
    backgroundColor: Colors.orange2,
    width: 116,
    height: 26,
    textAlign: 'center',
    borderRadius: 20,
  },
  dec: {
    backgroundColor: Colors.orange,
    height: 14,
    width: 14,
    textAlign: 'center',
    color: Colors.whitefont,
    fontSize: 10,
    borderRadius: 13,
  },
  count: {
    textAlign: 'center',
    color: Colors.fonts,
    fontSize: 13,
    borderRadius: 13,
  },
  inc: {
    backgroundColor: Colors.orange,
    height: 14,
    width: 14,
    textAlign: 'center',
    color: Colors.whitefont,
    fontSize: 10,
    borderRadius: 13,
  },
  subtotal: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.fonts,
  },
  subtotalAmt: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.fonts,
    textAlign: 'right',
  },
  dashline: {
    borderWidth: 1,
    borderColor: Colors.yellow2,
    borderStyle: 'dashed',
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
