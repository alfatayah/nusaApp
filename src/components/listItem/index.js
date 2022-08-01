import React from 'react';
import {
  Platform,
  TouchableOpacity,
  View, 
  ActivityIndicator,
  Image,
  Text,
} from 'react-native';
import { fonts } from '../../utils/fonts';
import { getScaleIos, RFValue } from '../../utils/utilization';
import { Spinner, HStack, Heading, Center, NativeBaseProvider, Icon } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
export const listItem = (
  ) => {
    return (
   <View style={{width: "95%",height: hp(12) ,backgroundColor: 'white' , flexDirection: 'row', marginTop: 15, borderRadius: 10, alignSelf: 'center', elevation: 5}}>
        <Image style={{width:"30%", height: hp(10)}} source={{uri: 'https://www.pondoklensa.com/files/photo/web/product/md/25e6b113514b4fc386da48f362f5730e3.jpg'}}/>
        <View style={{marginLeft: 20,flexDirection: 'column'}}>
        <TouchableOpacity style={{marginLeft: "74%" , marginTop: 3, backgroundColor: '', width: 20}}>
        <Icon
          size="lg"
          color="#FF6666"
          as={<Ionicons name="close-circle-outline" />}
        />
        </TouchableOpacity>
        
        <Text style={{fontFamily: fonts.rubik.regular, fontSize: 18,color: '#143656', marginTop: -10}}>Fujifilm X-A5 Mirrorless </Text>
        <Text style={{fontFamily: fonts.rubik.medium, color: '#143656', marginTop: 5}}>Rp.200.000/day</Text>
        </View>
   </View>
    )
  }