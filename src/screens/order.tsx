import {StyleSheet, Text, Image, FlatList, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Container} from '../components';
import {Colors} from '../colors';
import {icon} from '../icon';

const ActiveTab = () => {
  return (
    <Container>
      <Text>Active tab </Text>
    </Container>
  );
};
const CompletedTab = () => {
  return (
    <Container>
      <Text>Completed tab </Text>
    </Container>
  );
};
const CancelledTab = () => {
  return (
    <Container>
      <Text>Cancelled tab </Text>
    </Container>
  );
};
const orderStatus = [
  {
    id: 1,
    title: 'Active',
    tab: <ActiveTab />,
  },
  {
    id: 2,
    title: 'Completed',
    tab: <CompletedTab />,
  },
  {
    id: 3,
    title: 'Cancelled',

    tab: <CancelledTab />,
  },
];
const Order = () => {
  const [selectstatus, setSelectStatu] = useState(0);

  return (
    <Container flex={1} color={Colors.yellow}>
      <Text style={styles.headertext}>My Orders</Text>
      <Container color={Colors.whitebg} flex={1} style={styles.whitebox}>
        <Container
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'space-around',
          }}>
          {orderStatus.map((item, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => setSelectStatu(index)}
                style={{
                  marginTop: 35,
                  width: 104,
                  height: 28,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                  backgroundColor:
                    selectstatus === index ? Colors.orange : Colors.orange2,
                }}>
                <Container>
                  <Text
                    style={{
                      color:
                        selectstatus === index
                          ? Colors.whitefont
                          : Colors.orange,
                    }}>
                    {item.title}
                  </Text>
                </Container>
              </Pressable>
            );
          })}
        </Container>

        <Container hPadding={25} marginTop={30}>
          {orderStatus[selectstatus].tab}
        </Container>
      </Container>
    </Container>
  );
};

export default Order;

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
