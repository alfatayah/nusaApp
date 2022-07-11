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


export const renderInput = ({
    input, 
    name,
    label,
    meta: { touched, error },
  }) => {
    var hasError = false;
    if (touched && error !== undefined) {
      hasError = true;
    }
    return (
        <View style={{width: 100}}>
          <FormControl.Label style={{alignSelf: 'flex-start'}}>
            {label}
          </FormControl.Label>
          <Input
           key={1}
            {...input}
            style={{backgroundColor: 'white'}}
            editable={ true}
            variant="outline"
            maxLength={10}
            placeholder="Email"
          />
            {hasError ? <Text style={{
                   color: 'red',
                   alignSelf: 'flex-end',
                   fontFamily: fonts.primary.normal,
                   fontSize:  RFValue(11),
            }}>{error}</Text> : null}
          <View style={{marginBottom: 10}} />

      </View>
    );
  };

