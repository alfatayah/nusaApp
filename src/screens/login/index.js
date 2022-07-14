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
// import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FormValidation} from '../../utils/FormValidation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ContentLoader, {
  FacebookLoader,
  InstagramLoader,
  Bullets
} from "react-native-easy-content-loader";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      loading: true,
    };
  }

  componentDidUpdate = async prevProps => {
    const {loginResult, loginError} = this.props;

    if (loginResult !== null && prevProps.loginResult !== loginResult) {
      console.log('berhasil cuy ', loginResult);
    }

    if (loginError !== null && prevProps.loginError !== loginError) {
      console.log('loginError cuy ', loginError);
    }
  };

  userlogin = () => {
    this.props.login({
      email: 'fadhil.alfatayah@gmail.com',
      password: 'rahasia',
    });
  };

  submitLogin = data => {
    console.log('submit login', data);
  };

  render() {
    const {show} = this.state;
    const {handleSubmit} = this.props;
    return (
      <ScrollView style={{flex: 1 , backgroundColor: BG_COLOR}}>
        <View style={{height: hp(40)}}>
          <View style={{alignItems: 'center', marginTop: 35}}>
            <Image source={ILcamera} />
            <Text
              style={{
                fontSize: RFValue(30),
                fontFamily: fonts.primary.extra_bold,
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
          <ContentLoader active   title={false} pRows={4} pWidth={["100%", 200, "25%", 45]} paragraphStyles={{alignSelf: 'center'}}  loading={false}>
            <View style={{width: '85%', }}>
              <Field
                name={'email'}
                type={'text'}
                label={'Email'}
                placeholder={'Email'}
                component={renderInput}
              />
              <Field
                name={'password'}
                type={"password"}
                label={'Password'}
                placeholder={'Password'}
                show={this.state.show}
                onPressIcon={() => this.setState({show: !show})}
                component={renderInput}
              />
              {buttonComponent(null, 'LOGIN', handleSubmit(this.submitLogin))}
              <Text
                style={{
                  color: '#13497B',
                  fontFamily: fonts.primary.bold,
                  fontSize: RFValue(14),
                  alignSelf: 'flex-end',
                }}>
                create new account
              </Text>
            </View>
          </ContentLoader>

        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  loginResult: state.login.result,
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
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true,
  enableReinitialize: true,
  validate: FormValidation,
})(Login);

export default connect(mapStateToProps, matchDispatchToProps)(Login);
