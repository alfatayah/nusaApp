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
  Alert
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
import ILregister from '../../assets/icon_register.png';
import {RFValue} from '../../utils/utilization';
import {fonts} from '../../utils/fonts';
import {BG_COLOR} from '../../utils/constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FormValidation} from '../../utils/FormValidation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconEye: true,
    };
  }

  componentDidUpdate = async prevProps => {
    const {loginResult, loginError} = this.props;

    if (loginResult !== null && prevProps.loginResult !== loginResult) {
      console.log('loginResult ', loginResult);
      setTimeout(() => {
        this.setState({ loadingSpinner: false });
        Alert.alert(
          "",
          loginResult.message,
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
            <Image source={ILregister} />
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
            // height: hp(60),
            backgroundColor: 'white',
            alignItems: 'center',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
          }}>
          <Text
            style={{
              fontFamily: fonts.rubik.medium,
              fontSize: RFValue(30),
              color: '#12497A',
              marginTop: 20,
            }}>
            Register
          </Text>
          <Text
            style={{
              color: 'grey',
              fontFamily: fonts.primary.normal,
              fontSize: RFValue(14),
              marginTop: 8,
            }}>
            Belum punya akun?, yuk registrasi dulu
          </Text>
          <ScrollView style={{width: '85%'}}>
            <Field
              name={'nama'}
              type={'text'}
              label={'Nama'}
              placeholder={''}
              component={renderInput}
            />

            <Field
              name={'nik'}
              type={'text'}
              label={'NIK'}
              placeholder={''}
              component={renderInput}
            />

            <Field
              name={'emailRegist'}
              type={'text'}
              label={'Email'}
              placeholder={''}
              component={renderInput}
            />

            <Field
              name={'emailRegist'}
              type={'text'}
              label={'Email'}
              placeholder={''}
              component={renderInput}
            />

            <Field
              name={'password'}
              type={'password'}
              label={'Password'}
              placeholder={''}
              iconEye={iconEye}
              onPressIcon={() => this.setState({iconEye: !iconEye})}
              component={renderInput}
            />
      
            {loginLoading ? (
              <>
                <View style={{marginTop: 30}}></View>
                <Loading />
              </>
            ) : (
              <>
                {buttonComponent(null, 'REGISTER', handleSubmit(this.submitLogin))}
              </>
            )}
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
//   loginResult: state.login.result,
//   loginLoading: state.login.loading,
//   loginError: state.login.error,
});

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
    //   login,
      updateField: (form, field, newValue) =>
        dispatch(change(form, field, newValue)),
      resetForm: form => dispatch(reset(form)),
    },
    dispatch,
  );
}

Register = reduxForm({
  form: 'formRegister',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true,
  enableReinitialize: true,
  validate: FormValidation,
})(Register);

export default connect(mapStateToProps, matchDispatchToProps)(Register);
