import React from 'react';
import {
 View,
  Platform,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import { fonts } from '../../utils/fonts';
import { getScaleIos, RFValue } from '../../utils/utilization';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
export const card = (
    label,
    picture,
    onPress,
    disabled,
    buttonStyle,
    textStyle,
  ) => {
    return (
     <View style={{ marginTop: "5%", alignSelf: "center", width: "95%", height:hp(42), borderRadius: 5, elevation: 3, backgroundColor: "grey"}}>
      <Image style={{width:"100%", height: hp(30),  alignSelf: 'center'}} source={{uri: 'https://www.pondoklensa.com/files/photo/web/product/md/25e6b113514b4fc386da48f362f5730e3.jpg'}}/>
      <View style={{ height: hp(11),borderTopLeftRadius:20, borderTopRightRadius: 20,   backgroundColor: 'yellow'}}>
      <Text style={{fontFamily: fonts.rubik.normal, fontSize: 20}}>Canon EOS R Full-Frame Mirrorless</Text>
      </View>

    
     </View>
    );
  };