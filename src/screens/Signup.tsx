import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Container} from '../components';
import {Colors} from '../colors';
import {IcFacebook, IcFingerprint, IcGoogle} from '../assets/image';
import DatePicker from 'react-native-date-picker';
import {Formik} from 'formik';
import * as Yup from 'yup';

const signupscheme = Yup.object().shape({
  fullname: Yup.string().required('full name is required'),
  password: Yup.string()
    .min(5, 'minimum5 characters')
    .required('password is required'),
  email: Yup.string().email('invalidemail').required('Emailis required'),
  phone: Yup.number()
    .min(10, 'minimum number 10')
    .required('phone is required'),
});
const Signup = () => {
  return (
    <Formik
      initialValues={{
        fullname: '',
        password: '',
        email: '',
        phone: '',
        dob: '',
      }}
      validationSchema={signupscheme}
      onSubmit={values => {
        console.log('Form submitted:', values);
        // You can call API here
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <Container style={{backgroundColor: Colors.yellow, flex: 1}}>
          <Text
            style={{
              marginTop: 10,
              fontSize: 28,
              fontWeight: 800,
              color: Colors.whitefont,
              textAlign: 'center',
            }}>
            New Account
          </Text>
          <ScrollView>
            <Container
              style={{
                flex: 1,
                backgroundColor: Colors.whitebg,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                marginTop: 59,
              }}>
              <Container style={{paddingHorizontal: 35, paddingTop: 35}}>
                <Container gap={8}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '500',
                      color: Colors.fonts,
                    }}>
                    Full Name
                  </Text>
                  <TextInput
                    style={{
                      backgroundColor: Colors.yellow2,
                      paddingHorizontal: 15,
                      borderRadius: 13,
                      color: Colors.fonts,
                    }}
                    placeholder="Chabilal Lwagun"
                    placeholderTextColor={Colors.fonts}
                    onChangeText={handleChange('fullname')}
                    onBlur={handleBlur('fullname')}
                    value={values.fullname}
                  />
                  {touched.fullname && errors.fullname && (
                    <Text style={{fontSize: 12, color: Colors.orange}}>
                      {errors.fullname}
                    </Text>
                  )}
                </Container>
                <Container gap={8}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '500',
                      color: Colors.fonts,
                    }}>
                    PassWord
                  </Text>
                  <TextInput
                    style={{
                      backgroundColor: Colors.yellow2,
                      paddingHorizontal: 15,
                      borderRadius: 13,
                      color: Colors.fonts,
                    }}
                    secureTextEntry
                    placeholder="***********"
                    placeholderTextColor={Colors.fonts}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  {touched.password && errors.password && (
                    <Text style={{fontSize: 12, color: Colors.orange}}>
                      {errors.password}
                    </Text>
                  )}
                </Container>
                <Container gap={8}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '500',
                      color: Colors.fonts,
                    }}>
                    Email
                  </Text>
                  <TextInput
                    style={{
                      backgroundColor: Colors.yellow2,
                      paddingHorizontal: 15,
                      borderRadius: 13,
                      color: Colors.fonts,
                    }}
                    placeholder="example@example.com"
                    placeholderTextColor={Colors.fonts}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                  />
                  {touched.email && errors.email && (
                    <Text style={{fontSize: 12, color: Colors.orange}}>
                      {errors.email}
                    </Text>
                  )}
                </Container>
                <Container gap={8}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '500',
                      color: Colors.fonts,
                    }}>
                    Phone
                  </Text>
                  <TextInput
                    style={{
                      backgroundColor: Colors.yellow2,
                      paddingHorizontal: 15,
                      borderRadius: 13,
                      color: Colors.fonts,
                    }}
                    placeholder=" + 123 456 789"
                    placeholderTextColor={Colors.fonts}
                    onBlur={handleBlur('phone')}
                    value={values.phone}
                    keyboardType="phone-pad"
                  />
                  {touched.phone && errors.phone && (
                    <Text style={{fontSize: 12, color: Colors.orange}}>
                      {errors.phone}
                    </Text>
                  )}
                </Container>
                <Container gap={8}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '500',
                      color: Colors.fonts,
                    }}>
                    Date Of Birth
                  </Text>

                  <TextInput
                    style={{
                      backgroundColor: Colors.yellow2,
                      paddingHorizontal: 15,
                      borderRadius: 13,
                      color: Colors.fonts,
                    }}
                    placeholder="DD / MM /YYY"
                    placeholderTextColor={Colors.fonts}
                    keyboardType="number-pad"
                    onChangeText={handleChange('dob')}
                    onBlur={handleBlur('dob')}
                    value={values.dob}
                  />
                  {touched.dob && errors.dob && (
                    <Text style={{fontSize: 12, color: Colors.orange}}>
                      {errors.dob}
                    </Text>
                  )}
                </Container>
              </Container>
              <Container
                style={{
                  marginTop: 30,

                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 78,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    color: Colors.fonts,
                    fontWeight: 400,
                    textAlign: 'center',
                  }}>
                  By continuing, you agree to Terms of Use and Privacy Policy.{' '}
                </Text>
              </Container>

              <Container marginTop={20}>
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={{
                    backgroundColor: Colors.orange,
                    marginHorizontal: 70,
                    padding: 10,
                    borderRadius: 20,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: Colors.whitefont,
                      fontWeight: 500,
                      fontSize: 18,
                    }}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </Container>
              <Text style={{textAlign: 'center', marginTop: 10}}>
                or sign up with
              </Text>
              <Container
                style={{
                  flexDirection: 'row',
                  gap: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 7,
                }}>
                <TouchableOpacity>
                  <Image source={IcGoogle} style={{height: 34, width: 34}} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={IcFacebook} style={{height: 34, width: 34}} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={IcFingerprint}
                    style={{height: 34, width: 34}}
                  />
                </TouchableOpacity>
              </Container>
              <Container
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{fontSize: 14, color: Colors.fonts, fontWeight: 400}}>
                  Don’t have an account?
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 14,
                      color: Colors.orange,
                      fontWeight: 400,
                    }}>
                    {' '}
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </Container>
            </Container>
          </ScrollView>
        </Container>
      )}
    </Formik>
  );
};

export default Signup;

const styles = StyleSheet.create({});
