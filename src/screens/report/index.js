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

export class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  componentDidMount = async () => {
    // BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
 
  }

  componentDidUpdate = async prevProps => {
   
  };

  
  render() {
    return (
      <View style={{flex: 1,  backgroundColor: "white", justifyContent: 'center'}}>
        <Text>IM screen Report</Text>
        

   
      </View>
    );
  }
}



export default Report;
