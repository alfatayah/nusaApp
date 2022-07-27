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
  subHeader,
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

const imageSample =
  'https://www.pondoklensa.com/files/photo/web/product/md/25e6b113514b4fc386da48f362f5730e3.jpg';
export class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconEye: true,
    };
  }

  componentDidUpdate = async prevProps => {};

  render() {
    const {iconEye} = this.state;
    const {handleSubmit, loginLoading} = this.props;
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#F8FBFF'}}>
        {subHeader('')}
        <ImageSlider
          data={[{img: imageSample}, {img: imageSample}, {img: imageSample}]}
          autoPlay={false}
          // onItemChanged={item => console.log('item dari image slider di produk detail', item)}
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
              Fujifilm X-A5 Mirrorless{' '}
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
                fontSize: 12,
                fontFamily: fonts.rubik.regular,
              }}>
              X-A5 menawarkan beberapa fungsi dan filter yang bertujuan untuk
              mempermudah hidup Anda saat memotret. Fungsi 4K Burst memungkinkan
              Anda untuk menghasilkan gambar diam dengan cepat pada 15 fps,
              sehingga Anda dapat memilih bingkai terbaik, sementara Mode
              Peningkat Potret membantu memastikan bahwa warna kulit ditampilkan
              dengan cara yang menyenangkan. Mode Multi Fokus tersedia untuk
              penumpukan fokus, secara otomatis menggabungkan gambar 4K dan
              menyesuaikan kedalaman bidang yang diperlukan untuk hasil terbaik.
              Akhirnya, tujuh belas filter canggih dan sebelas filter simulasi
              film ditawarkan agar sesuai dengan berbagai situasi, termasuk
              penghapusan kabut dan fotografi HDR.{' '}
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
              marginRight: 20,
              marginTop: '7%',
              fontFamily: fonts.rubik.medium,
              fontSize: 20,
            }}>
            Rp.200.000/hari{' '}
          </Text>
          {buttonComponent(styles.buttonCustom, 'Select Item', () =>
            console.log('select item'),
          )}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({});

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ProductDetail,
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
