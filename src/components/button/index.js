import React from 'react';
import {
  Platform,
  TouchableOpacity,
  Text,
} from 'react-native';
import { fonts } from '../../utils/fonts';
import { getScaleIos, RFValue } from '../../utils/utilization';
import styles from './style';
export const buttonComponent = (
    data,
    label,
    onPress,
    disabled,
    buttonStyle,
    textStyle,
  ) => {
    return (
      <>
        <TouchableOpacity
          disabled={disabled}
          onPress={onPress}
          style={[styles.buttonDefault(data), buttonStyle]}>
          <Text
            style={[styles.text, textStyle]}>
            {label}
          </Text>
        </TouchableOpacity>
      </>
    );
  };