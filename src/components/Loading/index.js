import React from 'react';
import {
  Platform,
  TouchableOpacity,
  View, 
  ActivityIndicator,
  Text,
} from 'react-native';
import { fonts } from '../../utils/fonts';
import { getScaleIos, RFValue } from '../../utils/utilization';
import { Spinner, HStack, Heading, Center, NativeBaseProvider } from "native-base";
import styles from './style';

export const Loading = (
  ) => {
    return (
   <View style={styles.loadingStyle}>
         <ActivityIndicator animating={true} size="large" />
   </View>
    )
  }