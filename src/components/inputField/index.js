import React from 'react';
import {
  Platform,
  TouchableOpacity,
  Text,
  View,
  TextInput
} from 'react-native';
import { fonts } from '../../utils/fonts';
import { getScaleIos, RFValue } from '../../utils/utilization';
import { Container , Input, FormControl, Icon , WarningOutlineIcon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';

export const renderInput = ({
    input, 
    type,
    iconEye,
    label,
    placeholder,
    onPressIcon,
    keyboardType,
    customStyle,
    customInputStyle,
    meta: { touched, error },
  }) => {
    var hasError = false;
    if (touched && error !== undefined) {
      hasError = true;
    }
    return (
        <View style={[styles.defaultStyle, customStyle ]}>
         <Text style={{fontFamily: fonts.rubik.medium, color: '#13497B',}}>
            {label}
          </Text>
          <Input
            {...input}
            type={  iconEye ? 'password' : 'text'}
            style={[styles.inputStyle  , customInputStyle]}
            editable={ true}
            variant="outline"
            placeholder={placeholder}
            keyboardType={keyboardType}
            InputRightElement={
              type == "text" ? null : <Icon
              as={<Ionicons name={iconEye ? 'eye' : 'eye-off'} />}
              size={5}
              mr="2"
              color="muted.400"
              onPress={onPressIcon}
            />
             
            }
          />
            {hasError ? <Text style={{
                   color: 'red',
                   alignSelf: 'flex-end',
                   fontFamily: fonts.primary.normal,
                   fontSize:  RFValue(12),
            }}>{error}</Text> : null}
          <View style={{marginBottom: 10}} />

      </View>
    );
  };

