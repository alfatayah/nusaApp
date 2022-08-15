import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reduxForm, change, Field} from 'redux-form';
import {
  ScrollView,
  Text,
  View,
  BackHandler,
  Alert
} from 'react-native';
import {
  buttonComponent,
  renderInput,
  renderFieldDatePicker,
  renderFieldHidden,  
  subHeader,
  listItem
} from '../../components/index';
import {fonts} from '../../utils/fonts';
import {selectedProduct , booking} from '../../actions';
import styles from './style';
import moment from 'moment';
import { formatCurrency } from '../../utils/utilization';
import {FormValidation} from '../../utils/FormValidation';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
       visableDateOut: false,
       selectedDate: new Date(),
       tomorrow: new Date(),
       totalPrice: 0,
       productData : this.props.dataProduct?.arr ?? []
    };
  }

  componentDidMount = async () => {
    // BackHandler.addEventListener('hardwareBackPress', this.handleBacksButton);
  }
    componentDidUpdate = async (prevProps) => {
      const {dataProduct, bookingResult} = this.props;
      // loginResult !== null && prevProps.loginResult !== loginResult
      if (prevProps.dataProduct !== dataProduct) {
        this.setState({
          productData: dataProduct.arr
        });
      }

      if (bookingResult !== null && prevProps.bookingResult !== bookingResult) {
       this.props.selectedProduct(null, 2)
        setTimeout(() => {
          Alert.alert(
            "",
            bookingResult.message,
            [
              { text: "OK", onPress:  this.props.goHome },
            ]
          );
  
          Alert
        }, 500);
      
      }

    };

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

  calculateDate = () =>{
    const {DateIn, DateOut, productData} = this.state;
    const firstDate = moment(DateIn, 'DD-MM-YYYY');
    const secondDate = moment(DateOut, 'DD-MM-YYYY');
    const diff = secondDate.diff(firstDate,  'days');
    const price = productData.reduce((n, {price}) => n + price, 0)
    let totalPrice = diff * price;
    this.setState({totalPrice: totalPrice })
    this.props.updateField('formBooking', 'total', diff.toString() + " days");
    this.props.updateField('formBooking', 'totalValue', diff.toString());
  }

  onChangeDate = (newDate) => {
    const date = moment(newDate).format('DD-MM-YYYY');
    this.props.updateField('formBooking', 'dateIn', date);
    this.setState({ DateIn: date, selectedDate: newDate, visible: false });
    this.calculateDate();
  };

  onChangeDateSecond = (newDate) => {
    const date = moment(newDate).format('DD-MM-YYYY');
    this.props.updateField('formBooking', 'dateOut', date);
    this.setState({ DateOut: date, visibleSecond: false,  });
    this.calculateDate();
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

  onClose = (data) => {
    this.props.selectedProduct(data);
  }

  onSubmit = async (values) => {
    const {productData, totalPrice} = this.state;
    let arrayID = []; 
    if(productData.length <= 0){
      Alert.alert(
        "",
        "Please select product",
        [
          { text: "OK", onPress: () => {} },
        ]
      );
    } else {
      productData.forEach(element => {
        arrayID.push(element.id);
      });
      this.props.booking({
          dateIn: values.dateIn,
          dateOut : values.dateOut, 
          totalDays : values.totalValue,
          product_id: arrayID,
          totalBooking : totalPrice 
      })

    }    
  }



  render() {
    const {iconEye, totalPrice, productData} = this.state;
    const {handleSubmit, loginLoading, } = this.props;


    return (
      <View style={{flex: 1, backgroundColor: '#F8FBFF'}}>
      <ScrollView  style={{backgroundColor: '#F8FBFF'}}>
        {subHeader('Booking' )}

        <View style={{backgroundColor: '#F8FBFF'}}>
          <Text style={styles.title}>Pick Date</Text>
          <View style={{flexDirection: 'row', backgroundColor: '#F8FBFF'}}>
            <Field
              name="dateIn"
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
              name="dateOut"
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
              editable={false}
              customStyle={styles.customStyle}
              customInputStyle={styles.customInput}
            />
              <Field
              name={'totalValue'}
              component={renderFieldHidden}
            />
             <Field
              name={'listProduct'}
              component={renderFieldHidden}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row' , justifyContent: 'space-between' ,marginTop: 15,}}>
          
          <Text style={styles.title}>Your Options</Text>
          <Text style={styles.totalCount}>{'( '+ productData.length +' )'}</Text>
         
        </View>
   
        {productData.map((data) => listItem(data, () => this.onClose(data)))}




      
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
              marginRight: 70,
              marginTop: '5%',
              fontFamily: fonts.rubik.medium,
              fontSize: 20,
              color: "#143656"
            }}>
            {formatCurrency(totalPrice < 0 ? 0 : totalPrice   ) }
          </Text>
          {buttonComponent(styles.buttonCustom, 'Book Now',
           handleSubmit(this.onSubmit ), false, styles.text
          )}
        </View>

        </View>
    );
  }
}

const mapStateToProps = state => ({
  dataProduct: state.selectedProduct,
  bookingResult: state.booking.result,
  bookingLoading: state.booking.loading,
  bookingError: state.booking.error,
});

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
    booking,
     selectedProduct,
      updateField: (form, field, newValue) =>
        dispatch(change(form, field, newValue)),
      resetForm: form => dispatch(reset(form)),
    },
    dispatch,
  );
}

Booking = reduxForm({
  form: 'formBooking',
  destroyOnUnmount: true, // <------ preserve form data
  forceUnregisterOnUnmount: true,
  enableReinitialize: true,
  validate: FormValidation,
})(Booking);

export default connect(mapStateToProps, matchDispatchToProps)(Booking);
