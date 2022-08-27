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
import { connect ,} from 'react-redux'
import {bindActionCreators} from 'redux';
import styles from './style';
import {getReport} from "../../actions"
export class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrReport: [],
    };
  }

  componentDidMount = async () => {
    const member_id = await AsyncStorage.getItem('member_id');
    if(member_id){
      this.props.getReport({member_id : member_id});
    }
  };

  componentDidUpdate = async prevProps => {
    const {getReportError, getReportResult} = this.props;
    if (getReportResult !== null && prevProps.getReportResult !== getReportResult) {
      console.log("getReportResult ", getReportResult);
      let report =  getReportResult?.report ?? [];
      this.setState({arrReport : report})
    }

    if (getReportError !== null && prevProps.getReportError !== getReportError) {
    console.log("getReportError ", getReportError);
    }

  };

  renderDetail = (value, index) =>{
    return (
      <View
      key={index}
      style={{
        marginTop: 10,
        width: '90%',
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
      }}>
      <View style={{width: '45%'}}>
        <Text style={styles.textDetail}>Book ID: B{value._id.slice(0,4)}</Text>
        <Text style={styles.textDetail} >Item : {value.product_id}</Text>
      </View>

      <View style={{width: '45%'}}>
        <Text style={styles.textDetail}>Date Book: {value.dateBook}</Text>
        <Text style={styles.textDetail}>Date rent: {value.dateIn +"-"+ value.dateOut  }</Text>
        <Text style={styles.textDetail}>Status: {value.status}</Text>
        <Text style={styles.textDetail}>Description: {value.description}</Text>
      </View>
    </View>
    )
  }
  render() {
    const {arrReport} = this.state;
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#F8FBFF'}}>
        {subHeader('Report')}
        <Text style={styles.title}>Your Booking</Text>
        {arrReport.map((value, index) => this.renderDetail(value, index))}
      
      </ScrollView>
    );
  }
}

const mapStateToProps = (state , props)=> ({
  getReportResult: state.getReport.result,
  getReportLoading: state.getReport.loading,
  getReportError: state.getReport.error,
});

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getReport,
    },
    dispatch,
  );
}


export default connect(mapStateToProps, matchDispatchToProps)(Report);
