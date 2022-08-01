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
  BackHandler
} from 'react-native';
import {
  Container,
  Input,
  FormControl,
  Icon,
  Center,
  NativeBaseProvider,
} from 'native-base';
import {
  buttonComponent,
  Loading,
  renderInput,
  renderFieldDatePicker,
  subHeader,
  listItem
} from '../../components/index';
import {login} from '../../actions';
import ILcamera from '../../assets/camera.png';
import {RFValue} from '../../utils/utilization';
import {fonts} from '../../utils/fonts';
import {BG_COLOR} from '../../utils/constant';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FormValidation} from '../../utils/FormValidation';
import {ImageSlider} from 'react-native-image-slider-banner';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './style';
import moment from 'moment';

const imageSample =
  'https://www.pondoklensa.com/files/photo/web/product/md/25e6b113514b4fc386da48f362f5730e3.jpg';
export class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconEye: true,
       DateIn: new Date(),
       visible: false,
       DateOut: new Date(),
       visibleSecond: false,
       selectedDate: new Date()
    };
  }

  openDatePicker = () => {
    this.setState({ visible: true });
  };
  toggleModal = () => {
    this.setState({ visible: false });
  };
  hideDatePicker = () => {
    this.setState({ visible: false });
  };

  openDatePickerSecond= () => {
      this.setState({ visibleSecond: true });
  };

  toggleModalSecond = () => {
    this.setState({ visibleSecond: false });
  };
  hideDatePickerSecond = () => {
    this.setState({ visibleSecond: false });
  };

  onChangeDate = (newDate) => {
    const date = moment(newDate).format('DD-MM-YYYY');
    this.setState({ DateIn: date, selectedDate: newDate,visible: false });
    this.props.updateField('formBooking', 'DateIn', date);
  };

  onChangeDateSecond = (newDate) => {
    const {DateIn, selectedDate} = this.state;
    const date = moment(newDate).format('DD-MM-YYYY');
    // const testDate = moment(newDate).format([YYYY,MM,DD ]);


    this.setState({ DateOut: date, visibleSecond: false });
    this.props.updateField('formBooking', 'DateOut', date);
   
    // const days  = selectedDate - newDate / 365
    // console.log("days : ", testDate);
  };

  handleBackButton = () => {
    if (this.props.navigation.isFocused()) {
      BackHandler.exitApp();
      return true;
    }
  };

  goBack = async () => {
    this.props.navigation.goBack();
  };

componentDidMount = async () => {
  // BackHandler.addEventListener('hardwareBackPress', this.handleBacksButton);
}
  componentDidUpdate = async prevProps => {};

  render() {
    const {iconEye} = this.state;
    const {handleSubmit, loginLoading} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: '#F8FBFF'}}>
      <ScrollView  style={{backgroundColor: '#F8FBFF'}}>
        {subHeader('Booking' )}

        <View style={{backgroundColor: '#F8FBFF'}}>
          <Text style={styles.title}>Pick Date</Text>
          <View style={{flexDirection: 'row', backgroundColor: '#F8FBFF'}}>
            <Field
              name="DateIn"
              type="text"
              date={this.state.DateIn}
              visible={this.state.visible}
              component={renderFieldDatePicker}
              openModal={this.openDatePicker}
              closeModal={this.toggleModal}
              placeholder="Date In"
              onChangeDate={this.onChangeDate}
              hideDatePicker={this.hideDatePicker}
              formatDate="DD-MM-YYYY"
              modeDate="date"
              defaultDate={new Date()}
              minimumDate={new Date()}
            />

            <Field
              name="DateOut"
              type="text"
              date={this.state.DateOut}
              visible={this.state.visibleSecond}
              component={renderFieldDatePicker}
              openModal={this.openDatePickerSecond}
              closeModal={this.toggleModalSecond}
              placeholder="Date Out"
              onChangeDate={this.onChangeDateSecond}
              hideDatePicker={this.hideDatePickerSecond}
              formatDate="DD-MM-YYYY"
              modeDate="date"
              defaultDate={this.state.selectedDate}
              minimumDate={this.state.selectedDate}
            />

            <Field
              name={'total'}
              type={'text'}
              label={''}
              placeholder={''}
              component={renderInput}
              customStyle={styles.customStyle}
              customInputStyle={styles.customInput}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row' , justifyContent: 'space-between' ,marginTop: 15,}}>
          <Text style={styles.title}>Your Options</Text>
          <Text style={styles.totalCount}>[]</Text>
        </View>

        {listItem()}
        {listItem()}
        {listItem()}

        {listItem()}
        {listItem()}
        {listItem()}



      
      </ScrollView>
        <View
          style={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: 'white',
            elevation: 100,
            shadowColor: 'black',
          }}>
          <Text
            style={{
              marginRight: 20,
              marginTop: '5%',
              fontFamily: fonts.rubik.medium,
              fontSize: 20,
              color: "#143656"
            }}>
            Rp.200.000/hari{' '}
          </Text>
          {buttonComponent(styles.buttonCustom, 'Book Now', () =>
            console.log('select item'), false, styles.text
          )}
        </View>

        </View>
    );
  }
}

const mapStateToProps = state => ({});

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
     Booking,
      updateField: (form, field, newValue) =>
        dispatch(change(form, field, newValue)),
      resetForm: form => dispatch(reset(form)),
    },
    dispatch,
  );
}

Booking = reduxForm({
  form: 'formBooking',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true,
  enableReinitialize: true,
  validate: FormValidation,
})(Booking);

export default connect(mapStateToProps, matchDispatchToProps)(Booking);
