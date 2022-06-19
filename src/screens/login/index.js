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
} from 'react-native';
import { renderField } from '../../components/renderField';
import { buttonComponent } from '../../components/button'; 
import {login} from '../../actions'
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
      <View>
        <Text>hello</Text>
        {buttonComponent(false, 'Login', () => this.userlogin())}
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

export default connect(mapStateToProps, matchDispatchToProps)(Login)
