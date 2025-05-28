import React, {useState} from 'react';

import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {icon} from '../icon';
import {Colors} from '../colors';
import {Container} from '../components';
import SnacksTabView from './MealScreen/menu-tabs/SnacksTabView';

const MealTabView = () => {
  return (
    <Container>
      <Text style={{fontSize: 50}}>Meal Tab VIEW</Text>
    </Container>
  );
};
const VeganTabView = () => {
  return (
    <Container>
      <Text style={{fontSize: 50}}>Vegan Tab VIEW</Text>
    </Container>
  );
};
const DessertTabView = () => {
  return (
    <Container>
      <Text style={{fontSize: 50}}>Dessert Tab VIEW</Text>
    </Container>
  );
};
const DrinksTabView = () => {
  return (
    <Container>
      <Text style={{fontSize: 50}}>Drink Tab VIEW</Text>
    </Container>
  );
};

const tabData = [
  {
    id: 1,
    tab: <SnacksTabView />,
  },
  {
    id: 2,
    tab: <MealTabView />,
  },
  {
    id: 3,
    tab: <VeganTabView />,
  },
  {
    id: 4,
    tab: <DessertTabView />,
  },
  {
    id: 5,
    tab: <DrinksTabView />,
  },
];

const Menu = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Container flex={1} color={Colors.yellow}>
      <Container>
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
      </Container>

      <Container
        color={Colors.orange}
        marginTop={27}
        flex={1}
        style={{
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingTop: 16,
        }}>
        <Container
          style={{
            flexDirection: 'row',
            height: 110,
            justifyContent: 'center',
            marginBottom: 8,
          }}>
          {tabData.map((item, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => setSelectedTab(index)}
                style={{
                  borderRadius: 99,
                  paddingVertical: 12,
                  backgroundColor:
                    selectedTab === index ? Colors.whitebg : undefined,
                }}>
                <Container
                  style={{
                    width: 75,
                    height: 49,
                    alignItems: 'center',
                    gap: 4,
                  }}>
                  <Container
                    color={Colors.yellow2}
                    style={{width: 49, height: 62, borderRadius: 30}}
                  />
                  <Text>{item.id}</Text>
                </Container>
              </Pressable>
            );
          })}
        </Container>

        <Container
          color={Colors.whitebg}
          flex={1}
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingVertical: 16,
          }}>
          {tabData[selectedTab].tab}
        </Container>
      </Container>
    </Container>
  );
};

export default Menu;

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
