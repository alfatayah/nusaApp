import React, {Component} from 'react';
import {Text, BackHandler, View, ScrollView} from 'react-native';
import {Icon, Spinner} from 'native-base';
import {RFValue} from '../../utils/utilization';
import {fonts} from '../../utils/fonts';
import {BG_COLOR} from '../../utils/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {
  buttonComponent,
  Loading,
  renderInput,
  renderFieldDatePicker,
  subHeader,
  listItem,
} from '../../components/index';
import styles from './style';

export class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    // BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  };

  componentDidUpdate = async prevProps => {};

  renderDetail = () =>{
    return (
      <View
      style={{
        marginTop: 10,
        width: '90%',
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
      }}>
      <View style={{width: '45%'}}>
        <Text style={styles.textDetail}>Book ID: BFR120</Text>
        <Text style={styles.textDetail} >Item : asdasd</Text>
      </View>

      <View style={{width: '45%'}}>
        <Text style={styles.textDetail}>Date Book  :</Text>
        <Text style={styles.textDetail}>Date rent  :</Text>
        <Text style={styles.textDetail}>Status     :</Text>
        <Text style={styles.textDetail}>Description:</Text>
      </View>
    </View>
    )
  }
  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#F8FBFF'}}>
        {subHeader('Report')}
        <Text style={styles.title}>Your Booking</Text>
        {this.renderDetail()}
        {this.renderDetail()}
        {this.renderDetail()}
        {this.renderDetail()}
        {this.renderDetail()}
        {this.renderDetail()}
        {this.renderDetail()}
      
      </ScrollView>
    );
  }
}

export default Report;
