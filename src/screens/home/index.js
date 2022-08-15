import React, {Component} from 'react';
import { connect ,} from 'react-redux'
import {bindActionCreators} from 'redux';
import {reduxForm, change, Field, Form} from 'redux-form';
import {Text, View, Image, BackHandler,ScrollView, TouchableOpacity} from 'react-native';
import {
  Container,
  Input,
  FormControl,
  Popover,
  Center,
  NativeBaseProvider,
  Button,
  VStack,
  Box,
  Heading,
  Divider,
  HStack,
  Pressable,
} from 'native-base';
import {buttonComponent, searchBar, Card} from '../../components/index';
import FooterAndroid from '../../components/Footer';
import {fonts} from '../../utils/fonts';
import ILacc from '../../assets/account.png';
import IChello from '../../assets/icon_hello.png';
import IClogout from '../../assets/icon_logout.png';
import Footer from '../../components/Footer';
import Filter from '../../components/Filter';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Booking from '../booking'
import Report from '../report';

import {getProduct} from "../../actions"
export class Home extends Component {
 constructor(props) {
  super()
  this.state = {
    selected: 0,
    tabState: 'home',
    arrProduct: [],
    query: '',
    filter: '',

  }
 }

 handleBackButton = () => {
  if (this.props.navigation.isFocused()) {
    this.props.navigation.goBack();
    // BackHandler.exitApp();
    // return true;
  }
};

onLogout =  async () => {
  await AsyncStorage.removeItem('UserToken');
  await AsyncStorage.removeItem('Name');
  this.props.navigation.replace('Login');
}


 componentDidMount = async () => {
  BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  const Name =  await AsyncStorage.getItem('Name');
  this.setState({name : Name})
  this.props.getProduct();
 }

 componentDidUpdate = async prevProps => {
  const {getProductError, getProductResult, goHome} = this.props;

  if (getProductResult !== null && prevProps.getProductResult !== getProductResult) {
    let product =  getProductResult?.product ?? [];
    this.setState({arrProduct : product})
  }

  if (getProductError !== null && prevProps.getProductError !== getProductError) {
   console.log("getProductError ", getProductError);
  }
  if (getProductError !== null && prevProps.getProductError !== getProductError) {
    console.log("getProductError ", getProductError);
   }
};

  tabRender = (arrProduct) => {
    switch (this.state.tabState) {
      case 'home':
        return this.renderTabHome(arrProduct)
        break;

      case 'booking':
        return <Booking 
        goHome={() => this.showTabHome()}
        />

      case 'report':
        return <Report />
    
      default:
        break;
    }
  }

  showTabHome = ( ) => {
    this.props.getProduct();
    this.setState({ tabState: 'home' });
  }
  showTabBooking = ( ) => {
    this.setState({ tabState: 'booking' });
  }
  showTabReport = ( ) => {
    this.setState({ tabState: 'report' });
  }
  renderCard = (arrProduct) => {
      return Card(
        arrProduct._id,
        arrProduct.product_name,
        arrProduct?.price ?? 0,
        arrProduct.status,
        arrProduct?.image[0],
        () =>
          this.props.navigation.navigate('ProductDetail', {data: arrProduct}),
        arrProduct.status === 'Available'  ? false : true,
      );
  }
  onFindProduct = (data, query) => {
    const item = [];
    const regex = new RegExp(`${query.trim()}`, 'i');
    if (query === '') {
      return data;
    } else if(query){
      for (const nama of data) {
        if (nama.product_name.search(regex) >= 0) {
          item.push(nama);
        }
      } 
    } 

    return item;
  }

  onFilterProduct = (data, filter) => {
    const item = [];
    if(filter === ''){
      return data;
    }else if(filter){
      for (const type of data) {
        if (type.typeId.name === filter) {
            item.push(type);
        }
      } 
    }
    return item;

  }

  onChangeSearch = (text) =>{
    this.setState({query : text})
  }

  renderTabHome = (arrProduct) => {
    const {query, filter} = this.state;
    let dataSearch = this.onFindProduct(arrProduct, query);
    let dataFilter = this.onFilterProduct(arrProduct, filter);
    return (
      <ScrollView style={{backgroundColor: '#F8FBFF'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '10%',
        }}>
        <Text
          style={{
            fontFamily: fonts.rubik.normal,
            fontSize: 20,
            marginLeft: '3%',
          }}>
             Hello, {''}
          <Text style={{fontFamily: fonts.rubik.medium, color: '#143656'}}>
            {this.state.name}
          </Text>
          <Image source={IChello} />
        </Text>
        <Popover
          trigger={triggerProps => {
            return (
              <Button
                style={{
                  height: 25,
                  width: 25,
                  backgroundColor: 'white',
                  marginRight: '3%',
                }}
                {...triggerProps}>
                <Image style={{height: 25, width: 25}} source={ILacc} />
              </Button>
            );
          }}>
          <Popover.Content >
            <View>
              <TouchableOpacity style={{flexDirection :'row' }} onPress={() => this.onLogout()}>
                <Image source={IClogout} />
                <Text> Logout </Text> 
              </TouchableOpacity>
            </View>
          </Popover.Content>
        </Popover>
      </View>
      {searchBar(text =>  this.onChangeSearch(text))}
      <View style={{flexDirection: 'row', marginTop: "3%"}}>
      <Filter
        filterCamera={() =>this.setState({filter : "Camera"})}
        filterLensa={() => this.setState({filter : "Lensa"})}
        filterLighting={() => this.setState({filter : "Lighting"})}
        filterAcc={() => this.setState({filter : "Accessories"})}
      />
      </View>
       { query !== '' ? (
          dataSearch.map((data) => this.renderCard(data))
       ) : (
          dataFilter.map((data) => this.renderCard(data))
       )}
   
    </ScrollView>
    )  
  } 

  
  render() {
    const{selected, arrProduct} = this.state;
    return (
      <>
      {this.tabRender(arrProduct)}
       <Footer
          tabHome={this.showTabHome}
          tabBooking={this.showTabBooking}
          tabReport={this.showTabReport}
          tabState={this.state.tabState}
    />
      </>
 
     

    );
  }
}
Home = reduxForm({
  form: 'formHome',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true,
  enableReinitialize: true,
  // validate: FormValidation,
})(Home);

const mapStateToProps = state => ({
  getProductResult: state.getProduct.result,
  getProductLoading: state.getProduct.loading,
  getProductError: state.getProduct.error,
});

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getProduct,
      updateField: (form, field, newValue) =>
        dispatch(change(form, field, newValue)),
      resetForm: form => dispatch(reset(form)),
    },
    dispatch,
  );
}


export default connect(mapStateToProps, matchDispatchToProps)(Home)

