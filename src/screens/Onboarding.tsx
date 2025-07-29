import {
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Container} from '../components';
import {IcOnboard1, IcOnboard2, IcOnboard3, icOrder1} from '../assets/image';
import {Colors} from '../colors';
import {useNavigation} from '@react-navigation/native';

const datas = [
  {
    id: 1,
    image: IcOnboard1,
    icon: icOrder1,
    title: 'Order for Food',
    description:
      'Lorem ipsum dolor sit amet, conse ctetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    id: 2,
    image: IcOnboard2,
    icon: icOrder1,
    title: 'Easy Payment',
    description:
      'Lorem ipsum dolor sit amet, conse ctetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    id: 3,
    image: IcOnboard3,
    icon: icOrder1,
    title: 'Fast Delivery',
    description:
      'Lorem ipsum dolor sit amet, conse ctetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
];

const Onboarding = () => {
  const navigation = useNavigation();
  const [currentItem, setCurrentItem] = useState(0);
  const handleNext = () => {
    if (currentItem < datas.length - 1) {
      setCurrentItem(currentItem + 1);
    } else {
      navigation.navigate('Login');
    }
  };
  const Skip = () => {
    setCurrentItem(datas.length - 1);
  };
  return (
    <Container>
      <StatusBar backgroundColor={Colors.yellow} />
      <Container>
        <Image
          source={datas[currentItem].image}
          style={{
            height: 728,
            width: 360,
            position: 'relative',
          }}
        />
        <TouchableOpacity
          onPress={Skip}
          style={{
            position: 'absolute',
            flex: 1,
            alignItems: 'center',
            top: 5,
            right: 5,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 500,

              color: Colors.orange,
            }}>
            {`Skip >`}{' '}
          </Text>
        </TouchableOpacity>
        <Container
          height={339}
          width={360}
          style={{
            backgroundColor: Colors.whitebg,
            borderRadius: 10,
            position: 'absolute',
            flex: 1,
            alignItems: 'center',
            bottom: 0,
          }}>
          <Image
            source={datas[currentItem].icon}
            style={{
              height: 36,
              width: 30,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 23,
            }}
          />
          <Text
            style={{
              fontSize: 24,
              fontWeight: '800',
              color: Colors.orange,
              textAlign: 'center',
              marginTop: 20,
            }}>
            {datas[currentItem].title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: Colors.fonts,
              textAlign: 'center',
              paddingHorizontal: 60,
              marginTop: 20,
            }}>
            {datas[currentItem].description}
          </Text>
          <Container style={{flexDirection: 'row', gap: 4}}>
            {[1, 2, 3].map((item, index) => {
              return (
                <Container
                  key={item}
                  height={5}
                  width={20}
                  style={{
                    backgroundColor:
                      index === currentItem ? Colors.orange : Colors.orange2,
                    marginTop: 30,
                    borderRadius: 10,
                    flexDirection: 'row',
                  }}></Container>
              );
            })}
          </Container>
          <TouchableOpacity
            onPress={handleNext}
            style={{
              backgroundColor: Colors.orange,
              borderRadius: 20,
              marginTop: 29,
            }}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '500',
                color: Colors.whitefont,
                textAlign: 'center',
                paddingHorizontal: 50,
                paddingVertical: 8,
              }}>
              {currentItem === datas.length - 1 ? 'Get Started' : 'Next'}
            </Text>
          </TouchableOpacity>
        </Container>
      </Container>
    </Container>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
