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

export const renderInput = ({
    input, 
    type,
    show, 
    label,
    placeholder,
    onPressIcon,
    meta: { touched, error },
  }) => {
    var hasError = false;
    if (touched && error !== undefined) {
      hasError = true;
    }
    return (
        <View style={{width: "100%", height: "24%", marginBottom: 10}}>
          <FormControl.Label style={{alignSelf: 'flex-start'}}>
            {label}
          </FormControl.Label>
          <Input
            {...input}
            type={type}
            style={{backgroundColor: 'white'}}
            editable={ true}
            variant="outline"
            maxLength={10}
            placeholder={placeholder}
            InputRightElement={
              type == "text" ? null : <Icon
              as={<Ionicons name={show ? 'eye' : 'eye-off'} />}
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

