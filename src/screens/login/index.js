import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, change, Field } from 'redux-form';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
// import { renderField } from '../../components/renderField';
import { Container , Input, Icon, FormControl} from 'native-base';
import { buttonComponent } from '../../components/button'; 
import {login} from '../../actions'
import ILcamera from '../../assets/camera.png'
import {RFValue} from '../../utils/utilization'
import {fonts} from  '../../utils/fonts'
export class Login extends Component {
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

  render() {
    return (
      <View style={{flex: 1}}>
       <View style={{backgroundColor: '#225D92', }}>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <Image source={ILcamera} />
          <Text
            style={{fontSize: RFValue(18), fontFamily: fonts.primary.bold}}>
            Nusa
            <Text style={{color: 'white'}}>Kamera</Text>
          </Text>
        </View>
      </View>
      <View style={{backgroundColor: 'white',alignItems: 'center'  }}>
        <Text>Welcome</Text>
        <Text>Yuk, login untuk cari keperluan camera disini! </Text>
        
        <FormControl.Label>Email</FormControl.Label>
        <Input
          style={{backgroundColor: 'white'}}
          variant="outline"
          placeholder="Email"
        />
        </View>
      </View>

   

      
      
    );
  }
}



const mapStateToProps = (state) => ({
    loginResult: state.login.result,
    loginError: state.login.error,
})

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      login,
      updateField: (form, field, newValue) =>
        dispatch(change(form, field, newValue)),
      resetForm: (form) => dispatch(reset(form)),
    },
    dispatch,
  );
}

Login = reduxForm({
  form: 'formLogin',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true,
  enableReinitialize: true,
    // validate: FormFdeSyanaValidate,
})(Login);

export default connect(mapStateToProps, matchDispatchToProps)(Login)
