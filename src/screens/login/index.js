import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reduxForm, change, Field, Form} from 'redux-form';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {
  Container,
  Input,
  FormControl,
  Icon,
  Center,
  NativeBaseProvider,
} from 'native-base';
import {buttonComponent, Loading, renderInput} from '../../components/index';
import {login} from '../../actions';
import ILcamera from '../../assets/camera.png';
import {RFValue} from '../../utils/utilization';
import {fonts} from '../../utils/fonts';
import {BG_COLOR} from '../../utils/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FormValidation} from '../../utils/FormValidation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconEye: true,
    };
  }

  handleBackButton = () => {
    if (this.props.navigation.isFocused()) {
      BackHandler.exitApp();
      return true;
    }
  };

  componentDidMount = async () => {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    const userToken = await AsyncStorage.getItem('UserToken');
  }

  componentDidUpdate = async prevProps => {
    const {loginResult, loginError} = this.props;

    if (loginResult !== null && prevProps.loginResult !== loginResult) {
      console.log
      await AsyncStorage.setItem('UserToken', loginResult.userToken);
      await AsyncStorage.setItem('Name', loginResult.name);
      await AsyncStorage.setItem('member_id', loginResult.member_id);  
      setTimeout(() => {
        this.setState({ loadingSpinner: false });
        Alert.alert(
          "",
          loginResult.message,
          [
            { text: "OK", onPress: () => this.props.navigation.navigate("Home") },
          ]
        );

        Alert
      }, 500);
    
     
    }

    if (loginError !== null && prevProps.loginError !== loginError) {
      setTimeout(() => {
        this.setState({ loadingSpinner: false });
        Alert.alert(
          "",
          loginError.message,
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );

        Alert
      }, 500);
      
  
    }
  };

  userlogin = (data) => {
    this.setState({ loadingSpinner: true });
    this.props.login({
      email: data.email,
      password: data.password
    });
  };

  submitLogin = data => {
     this.userlogin(data)
  };

  render() {
    const {iconEye} = this.state;
    const {handleSubmit, loginLoading} = this.props;
    return (
      <ScrollView style={{flex: 1, backgroundColor: BG_COLOR}}>
        <View style={{height: hp(40)}}>
          <View style={{alignItems: 'center', marginTop: 35}}>
            <Image source={ILcamera} />
            <Text
              style={{
                fontSize: RFValue(30),
                fontFamily: 'Roboto',
              }}>
              Nusa
              <Text style={{color: 'white', fontFamily: fonts.primary.normal}}>
                Kamera
              </Text>
            </Text>
          </View>
        </View>

        <View
          style={{
            height: hp(60),
            backgroundColor: 'white',
            alignItems: 'center',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
          }}>
          <Text
            style={{
              fontFamily: fonts.primary.bold,
              fontSize: RFValue(30),
              color: '#12497A',
              marginTop: 20,
            }}>
            Welcome
          </Text>
          <Text
            style={{
              color: 'grey',
              fontFamily: fonts.primary.normal,
              fontSize: RFValue(14),
              marginTop: 8,
            }}>
            Yuk, login untuk cari keperluan camera disini!{' '}
          </Text>
          <View style={{width: '85%'}}>
            <View style={{marginTop: 10}}></View>
            <Field
              name={'email'}
              type={'text'}
              label={'Email'}
              placeholder={'Email'}
              component={renderInput}
              keyboardType={'default'}
            />
            <Field
              name={'password'}
              type={'password'}
              label={'Password'}
              placeholder={'Password'}
              iconEye={iconEye}
              onPressIcon={() => this.setState({iconEye: !iconEye})}
              component={renderInput}
              keyboardType={'default'}
            />
            {loginLoading ? (
              <>
                <View style={{marginTop: 30}}></View>
                <Loading />
              </>
            ) : (
              <>
                {buttonComponent(null, 'LOGIN', handleSubmit(this.submitLogin))}
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Register')}>
                  <Text
                    style={{
                      color: '#13497B',
                      fontFamily: fonts.primary.bold,
                      fontSize: RFValue(14),
                      alignSelf: 'flex-end',
                    }}>
                    {' '}
                    create new account{' '}
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  loginResult: state.login.result,
  loginLoading: state.login.loading,
  loginError: state.login.error,
});

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      login,
      updateField: (form, field, newValue) =>
        dispatch(change(form, field, newValue)),
      resetForm: form => dispatch(reset(form)),
    },
    dispatch,
  );
}

Login = reduxForm({
  form: 'formLogin',
  destroyOnUnmount: true, // <------ preserve form data
  forceUnregisterOnUnmount: true,
  enableReinitialize: true,
  validate: FormValidation,
})(Login);

export default connect(mapStateToProps, matchDispatchToProps)(Login);
