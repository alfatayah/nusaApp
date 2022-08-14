import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reduxForm, change, Field} from 'redux-form';
import {
  ScrollView,
  Text,
  View,
  BackHandler
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
import {selectedProduct} from '../../actions';
import styles from './style';
import moment from 'moment';
import { formatCurrency } from '../../utils/utilization';
import {FormValidation} from '../../utils/FormValidation';

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
       productData : this.props.dataProduct?.arr ?? []
    };
  }

  componentDidMount = async () => {
    // BackHandler.addEventListener('hardwareBackPress', this.handleBacksButton);
  }
    componentDidUpdate = async (prevProps) => {
      const {dataProduct} = this.props;
      // loginResult !== null && prevProps.loginResult !== loginResult
      if (prevProps.dataProduct !== dataProduct) {
        this.setState({
          productData: dataProduct.arr
        });
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
    const {DateIn, DateOut} = this.state;
    const firstDate = moment(DateIn, 'DD-MM-YYYY');
    const secondDate = moment(DateOut, 'DD-MM-YYYY');
    const diff = secondDate.diff(firstDate,  'days');
    this.props.updateField('formBooking', 'total', diff.toString() + " days");
  }

  onChangeDate = (newDate) => {
    const date = moment(newDate).format('DD-MM-YYYY');
    // const tomorrow = moment(newDate).add(1, 'days').format('DD-MM-YYYY');
    // console.log("tomorrow",tomorrow);

    this.props.updateField('formBooking', 'DateIn', date);
    this.setState({ DateIn: date, selectedDate: newDate, visible: false });
  };

  onChangeDateSecond = (newDate) => {
    const date = moment(newDate).format('DD-MM-YYYY');
    this.props.updateField('formBooking', 'DateOut', date);
    this.calculateDate();
    this.setState({ DateOut: date, visibleSecond: false,  });

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
    console.log("values " , values);
  }



  render() {
    const {iconEye, productData} = this.state;
    const {handleSubmit, loginLoading, } = this.props;


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
              editable={false}
              customStyle={styles.customStyle}
              customInputStyle={styles.customInput}
            />
              <Field
              name={'totalValue'}
              component={renderFieldHidden}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row' , justifyContent: 'space-between' ,marginTop: 15,}}>
          <Text style={styles.title}>Your Options</Text>
          <Text style={styles.totalCount}>{'( '+productData.length +' )'}</Text>
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
            {formatCurrency(productData.reduce((n, {price}) => n + price, 0)) }
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
});

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
     Booking,
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
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true,
  enableReinitialize: true,
  validate: FormValidation,
})(Booking);

export default connect(mapStateToProps, matchDispatchToProps)(Booking);
