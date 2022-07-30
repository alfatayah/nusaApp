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
import {register} from '../../actions';
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
    const {registerError, registerResult} = this.props;

    if (registerResult !== null && prevProps.registerResult !== registerResult) {
      console.log('registerResult ', registerResult);
      setTimeout(() => {
        this.setState({ loadingSpinner: false });
        Alert.alert(
          "",
          registerResult.message,
          [
            { text: "OK", onPress: () => this.props.navigation.navigate("Login") }
          ]
        );

        Alert
      }, 500);
     
    }

    if (registerError !== null && prevProps.registerError !== registerError) {
      setTimeout(() => {
        this.setState({ loadingSpinner: false });
        Alert.alert(
          "",
          registerError.message,
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );

        Alert
      }, 500);
    }
    

  };

  userRegist = (data) => {
    this.setState({ loadingSpinner: true });
    this.props.register({
      name : data.nama,
      nik : data.nik,
      email : data.emailRegist,
      no_hp: data.telpon,
      password: data.passRegist,
      address: data.address,
      status: ""
    });
  };

  submitRegister = data => {
     this.userRegist(data)
  };

  render() {
    const {iconEye} = this.state;
    const {handleSubmit, registerLoading} = this.props;
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
              fontSize: RFValue(15),
              marginTop: 8,
            }}>
            Belum punya akun?, yuk registrasi dulu
          </Text>
          <ScrollView style={{width: '85%' , marginTop: 10}}>
            <Field
              name={'nama'}
              type={'text'}
              label={'Nama'}
              placeholder={''}
              component={renderInput}
              keyboardType={"default"}
            />

            <Field
              name={'nik'}
              type={'text'}
              label={'NIK'}
              placeholder={''}
              component={renderInput}
              keyboardType={"numeric"}
            />

            <Field
              name={'emailRegist'}
              type={'text'}
              label={'Email'}
              placeholder={''}
              component={renderInput}
              keyboardType={"default"}
            />

            <Field
              name={'telpon'}
              type={'text'}
              label={'Telpon'}
              placeholder={''}
              component={renderInput}
              keyboardType={"numeric"}
            />

            <Field
              name={'passRegist'}
              type={'password'}
              label={'Password'}
              placeholder={''}
              iconEye={iconEye}
              onPressIcon={() => this.setState({iconEye: !iconEye})}
              component={renderInput}
              keyboardType={"default"}
            />


           <Field
              name={'address'}
              type={'text'}
              label={'Alamat'}
              placeholder={''}
              component={renderInput}
              keyboardType={"default"}
            />
      
            {registerLoading ? (
              <>
                <View style={{marginTop: 30}}></View>
                <Loading />
              </>
            ) : (
              <>
                {buttonComponent(null, 'REGISTER', handleSubmit(this.submitRegister))}
              </>
            )}
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  registerResult: state.register.result,
  registerLoading: state.register.loading,
  registerError: state.register.error,
});

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      register,
      updateField: (form, field, newValue) =>
        dispatch(change(form, field, newValue)),
      resetForm: form => dispatch(reset(form)),
    },
    dispatch,
  );
}

Register = reduxForm({
  form: 'formRegister',
  destroyOnUnmount: true, // <------ preserve form data
  forceUnregisterOnUnmount: true,
  enableReinitialize: true,
  validate: FormValidation,
})(Register);

export default connect(mapStateToProps, matchDispatchToProps)(Register);
