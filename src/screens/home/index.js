import {Icon, ScrollView} from 'native-base';
import React, {Component} from 'react';
// import { connect } from 'react-redux'
import {Text, View, Image} from 'react-native';
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
  Divider
} from 'native-base';
import {buttonComponent, Searchbar, filter, card} from '../../components/index';
import {fonts} from '../../utils/fonts';
import ILacc from '../../assets/account.png';
import IChello from '../../assets/icon_hello.png';
import IClogout from '../../assets/icon_logout.png';
import Icamera from '../../assets/filter_camera.png';
import ILensa from '../../assets/filter_lensa.png';
import ILightning from '../../assets/filter_lightning.png';
import Iacc from '../../assets/filter_acc.png';
export class Home extends Component {
  render() {
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
            Hello,{' '}
            <Text style={{fontFamily: fonts.rubik.medium, color: '#143656'}}>
              Fadhil{' '}
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
            <Popover.Content>
              <View>
                <Text onPress={() => console.log('IM logout')}>
                  {' '}
                  <Image source={IClogout} /> Logout{' '}
                </Text>
              </View>
            </Popover.Content>
          </Popover>
        </View>
        {Searchbar()}
        {/* {buttonComponent(false, 'Home', () => {
          console.log('Home');
        })} */}
        <View style={{flexDirection: 'row'}}>
        {filter('CAMERA', 
        Icamera,
        () => {
          console.log('Home');
        })}
        {filter('LENSA', 
        ILensa,
        () => {
          console.log('Home');
        })}
        {filter('LIGHTING', 
        ILightning,
        () => {
          console.log('Home');
        })}
        {filter('ACCESORIES', 
        Iacc,
        () => {
          console.log('Home');
        })}
        </View>
        {card()}
        {card()}

 




          
   
      </ScrollView>
    );
  }
}

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(index)

export default Home;
