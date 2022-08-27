import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reduxForm, change} from 'redux-form';
import {
  ScrollView,
  Text,
  View,
  Alert,
} from 'react-native';
import {
  buttonComponent,
  subHeader,
} from '../../components/index';
import {selectedProduct} from '../../actions';
import {formatCurrency} from '../../utils/utilization';
import {URL} from '../../utils/constant';
import {fonts} from '../../utils/fonts';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {FormValidation} from '../../utils/FormValidation';
import {ImageSlider} from 'react-native-image-slider-banner';
import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './style';
const imageSample =
  'https://www.pondoklensa.com/files/photo/web/product/md/25e6b113514b4fc386da48f362f5730e3.jpg';
export class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconEye: true,
    };
  }

  checkData = async (productSaved) => {
    let status  = 0
    this.props.dataProduct.arr.forEach(result => {
      if (result.id === productSaved.id) {
         status = 1;
      }
      });
      return status;
  }


  onSelected = async () => {
    try {
      const product = this.props.route.params.data;
      const productSaved = {
        id: product._id,
        image: URL+product.images[0],
        nameProduct: product.product_name,
        price: product.price,
      };
      let dataProduct = await this.checkData(productSaved);
      if (dataProduct != 1) {
        Alert.alert('', 'Produk terpilih', [{text: 'OK', onPress: () => this.props.navigation.goBack()}]);
        Alert;
        this.props.selectedProduct(productSaved, 1);
      } else {
        Alert.alert('', 'Produk sudah terpilih', [{text: 'OK' , onPress: () => this.props.navigation.goBack()}]);
        Alert;
      }
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount = async () => {
    
  }

  componentDidUpdate = async prevProps => {};

  render() {
    const {iconEye} = this.state;
    const {handleSubmit, loginLoading} = this.props;
    const product = this.props.route.params.data;
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#F8FBFF'}}>
        {subHeader('', true, () => this.props.navigation.goBack())}
        <ImageSlider
          data={[
            {img: URL+product.images[0]},
            {img: URL+product.images[2]},
            {img: URL+ product.images[1]},
          ]}
          autoPlay={false}
          closeIconColor="#fff"
        />
        <View style={{backgroundColor: '#F8FBFF'}}>
          <View
            style={{
              height: hp(8),
              marginTop: '0%',
              backgroundColor: '#F8FBFF',
              borderBottomWidth: 3,
              borderColor: 'rgba(20, 54, 86, 0.05)',
            }}>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 10,
                fontSize: 20,
                fontFamily: fonts.rubik.regular,
                color: '#143656',
              }}>
              {product.product_name}
            </Text>
          </View>
          <View style={{backgroundColor: '#F8FBFF'}}>
            <Text
              style={{
                marginTop: 15,
                marginLeft: '4%',
                fontSize: 20,
                fontFamily: fonts.rubik.medium,
                color: '#143656',
              }}>
              Description
            </Text>
            <Text
              style={{
                marginTop: 15,
                marginLeft: '4%',
                marginRight: '4%',
                fontSize: 13,

                fontFamily: fonts.rubik.regular,
              }}>
              {product.description}
            </Text>
          </View>
        </View>
        <View
          style={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: 'white',
            marginTop: 10,
            elevation: 100,
            shadowColor: 'black',
          }}>
          <Text
            style={{
              marginRight: 50,
              marginTop: '7%',
              fontFamily: fonts.rubik.medium,
              fontSize: 20,
              color: '#143656',
            }}>
            {formatCurrency(product.price)}
          </Text>
          {buttonComponent(styles.buttonCustom, 'Select Item', () =>
            this.onSelected(),
          )}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state , props)=> ({
  dataProduct: state.selectedProduct,
});

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ProductDetail,
      selectedProduct,
      updateField: (form, field, newValue) =>
        dispatch(change(form, field, newValue)),
      resetForm: form => dispatch(reset(form)),
    },
    dispatch,
  );
}

ProductDetail = reduxForm({
  form: '',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true,
  enableReinitialize: true,
  validate: FormValidation,
})(ProductDetail);

export default connect(mapStateToProps, matchDispatchToProps)(ProductDetail);
