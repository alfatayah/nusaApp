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
export const filter = (
    label,
    picture,
    onPress,
    disabled,
    buttonStyle,
    textStyle,
  ) => {
    return (
        <TouchableOpacity
        style={{width: wp(21), height: hp(11), borderRadius: 10, margin: 8, backgroundColor: "white", elevation:3,}}
          onPress={onPress}>
            <View style={{ alignItems: "center", justifyContent: 'center', marginTop: "10%", flexDirection: 'column'}}>
            <Image style={{width: wp(13.5), height: hp(5)}} source={picture} /> 
          <Text style={{fontFamily: fonts.rubik.normal, marginTop: "10%"}}>
            {label}
          </Text>
            </View>
           
        </TouchableOpacity>
    );
  };