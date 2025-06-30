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
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Colors} from '../../colors';
import {
  IcCall,
  IcLocation,
  IcLogout,
  IcMassage,
  IcMyorder,
  IcPayment,
  IcProfile,
  IcSetting,
} from '../../assets/image';
import Profile from '../../screens/Profile/Profile';
import Order from '../../screens/order';
import {useNavigation} from '@react-navigation/native';

const drawerdata = [
  {label: 'My Orders', image: IcMyorder, screenName: 'order'},
  {label: 'My Profile', image: IcProfile, screenName: 'profile'},
  {label: 'Delivery Address', image: IcLocation},
  {label: 'Payment Methods', image: IcPayment},
  {label: 'Contact Us', image: IcCall},
  {label: 'Help & FAQs', image: IcMassage},
  {label: 'Settings', image: IcSetting},
  {label: 'Log Out', image: IcLogout},
];
const CustomeDrawer = (props: any) => {
  const navigation = useNavigation();
  return (
    <Container
      flex={1}
      style={{
        backgroundColor: Colors.orange,
        borderTopRightRadius: 40,
        paddingTop: 71,
        paddingLeft: 25,
      }}>
      <Container
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 31}}>
        <Image
          source={{
            uri: 'https://imgs.search.brave.com/MNFj5cR8y59aYCT_y7QaddZF8BCZv3ojO-MC7Xgkp1E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGluZHVzdGFu/dGltZXMuY29tL2lt/Zy8yMDIxLzEwLzI4/LzE2MDB4OTAwL3Bh/cmVzaF9yYXdhbF9i/YWJ1cmFvXzE2MzUz/ODk2Mzc4ODBfMTYz/NTM4OTY0NDQ1MC5q/cGc',
          }}
          style={styles.profileImage}
        />
        <Container hPadding={15}>
          <Text style={styles.name}>John Smith</Text>
          <Text style={styles.email}>loremipsum@email.com</Text>
        </Container>
      </Container>

      <ScrollView>
        {drawerdata.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => {
              if (item.screenName) navigation.navigate(item.screenName);
            }}>
            <Container style={{flexDirection: 'row', gap: 15}}>
              <Container
                height={41}
                width={41}
                style={{
                  backgroundColor: Colors.whitebg,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={item.image}
                  style={{
                    height: 25,
                    width: 23,
                  }}
                />
              </Container>
              <Text style={styles.menuText}>{item.label}</Text>
            </Container>
            <Container
              width={250}
              height={1}
              style={{backgroundColor: Colors.orange2}}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Container>
  );
};

export default CustomeDrawer;

const styles = StyleSheet.create({
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,

    // marginBottom: 10,
  },
  name: {
    color: Colors.whitefont,
    fontSize: 33,
    fontWeight: '500',
  },
  email: {
    color: Colors.yellow2,
    fontSize: 16,
  },
  menuItem: {
    marginVertical: 12,
    gap: 15,
  },
  menuText: {
    color: Colors.yellow2,
    fontSize: 24,
    fontWeight: '500',
  },
});
