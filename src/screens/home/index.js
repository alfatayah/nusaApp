import React, {Component} from 'react';
// import { connect } from 'react-redux'
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
export class Home extends Component {
 constructor(props) {
  super()
  this.state = {
    selected: 0,
    tabState: 'home',

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
 }

  tabRender = () => {
    switch (this.state.tabState) {
      case 'home':
        return this.renderTabHome()
        break;

      case 'booking':
        return <Booking />

      case 'report':
        return <Report />
    
      default:
        break;
    }
  }

  showTabHome = ( ) => {
    this.setState({ tabState: 'home' });
  }
  showTabBooking = ( ) => {
    this.setState({ tabState: 'booking' });
  }
  showTabReport = ( ) => {
    this.setState({ tabState: 'report' });
  }

  renderTabHome = () => {

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
      {searchBar()}
      <View style={{flexDirection: 'row', marginTop: "3%"}}>
      <Filter
        filterCamera={() => console.log("im camera filter action ")}
        filterLensa={() => console.log("im lensa filter action ")}
        filterLightning={() => console.log("im lensa linghing action ")}
        filterAcc={() => console.log("im acc filter action ")}
      />
      </View>
      {Card(() =>this.props.navigation.navigate('ProductDetail'))}
      {Card()} 
    </ScrollView>
    )  
  } 

  
  render() {
    const{selected} = this.state;
    return (
      <>
      {this.tabRender()}
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

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(index)

export default Home;
