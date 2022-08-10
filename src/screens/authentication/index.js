import React, {Component} from 'react';
import {
  Text,
  BackHandler,
  View} from 'react-native';
import {
  Icon,
  Spinner} from 'native-base';
import {RFValue} from '../../utils/utilization';
import {fonts} from '../../utils/fonts';
import {BG_COLOR} from '../../utils/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    if (userToken) {
        setTimeout(() => {
            this.props.navigation.replace('Home');
     }, 500);
    } else {
      this.props.navigation.navigate('Login');
    }
  }

  componentDidUpdate = async prevProps => {
   
  };

  
  render() {
    return (
      <View style={{flex: 1,  backgroundColor: "white", justifyContent: 'center'}}>
         <View style={{height: hp(40)}}>
          <View style={{alignItems: 'center', marginTop: 35}}>
          <Icon
          size="6xl"
          color={BG_COLOR}
          as={<EvilIcons name="camera" />}
        />
            <Text
              style={{
                fontSize: RFValue(30),
                fontFamily: 'Roboto',
              }}>
              Nusa
              <Text style={{color: 'grey', fontFamily: fonts.primary.normal}}>
                Kamera
              </Text>
            </Text>
          </View>
          <View style={{marginTop: 15}}>
          <Spinner accessibilityLabel="Loading posts" size='lg' />
          </View>
        </View>
        

   
      </View>
    );
  }
}



export default Authentication;
