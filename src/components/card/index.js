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
export const Card = (
   onPress
  ) => {
    return (
     <TouchableOpacity onPress={onPress}  style={{ marginTop: "5%", alignSelf: "center", width: "95%", height:hp(42), elevation: 3, backgroundColor: "white", borderRadius: 5 }}>
      <Image style={{width:"99%", height: hp(30),  alignSelf: 'center'}} source={{uri: 'https://www.pondoklensa.com/files/photo/web/product/md/25e6b113514b4fc386da48f362f5730e3.jpg'}}/>
      <View style={{ marginTop: -10,height: hp(14),borderTopLeftRadius:20, borderTopRightRadius: 20, backgroundColor: 'white', borderRadius: 5, elevation: 3}}>
        {/* wrap TEXT */}
        <View style={{marginLeft: 10, marginTop: "2%"}}>
        <Text style={{fontFamily: fonts.rubik.regular, fontSize: 20, color: "#143656"}}>Canon EOS R Full-Frame Mirrorless</Text>
        <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: "1.5%"}}>
        <Text> 1 day Rp 200.000</Text>
        <View style={{width: wp(25), height: hp(5),borderRadius: 50 ,marginRight: 10,backgroundColor: "#6CC775",}}>
          <Text style={{marginTop: 5,fontFamily: fonts.rubik.regular, fontSize: 14,color: "white", alignSelf: 'center'}}>Available</Text>
        </View>
        </View>
        
        </View>

      </View>

    
     </TouchableOpacity>
    );
  };