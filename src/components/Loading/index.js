import React from 'react';
import {
  Platform,
  TouchableOpacity,
  View, 
  Text,
} from 'react-native';
import { fonts } from '../../utils/fonts';
import { getScaleIos, RFValue } from '../../utils/utilization';
import { Spinner, HStack, Heading, Center, NativeBaseProvider } from "native-base";

export const Loading = (

  ) => {
    return (
   <View style={{justifyContent: 'center', flexDirection: 'row'}}>
        <Spinner style={{marginRight: 5}} size="lg"  accessibilityLabel="Loading posts" />
        <Heading color="primary.500" fontSize="md">
        Loading
      </Heading>
      
   </View>
    )
  }