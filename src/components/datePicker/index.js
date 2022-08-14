
import React from 'react';
import { Platform, View, Text, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import { Label, Input, Icon, } from 'native-base';
import { getScaleIos, RFValue } from '../../utils/utilization';
const height = Dimensions.get('window').height;
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { fonts } from '../../utils/fonts';



export const renderFieldDatePicker = ({
    input,
    type,
    placeholder,
    keyboardType,
    maxLength,
    customError,
    onChangeDate,
    openModal,
    visible,
    hideDatePicker,
    defaultDate,
    minimumDate,
    meta: { touched, error },
  }) => {
    var hasError = false;
    if (touched && error !== undefined) {
      hasError = true;
    }
    return (
     <View style={{marginLeft: 15,marginTop: 10 , width: wp(30), }}>
       <DateTimePickerModal
        isVisible={visible}
        mode="date"
        onConfirm={onChangeDate}
        onCancel={hideDatePicker}
        defaultDate={defaultDate}
        minimumDate={minimumDate}
      />
      <TouchableOpacity onPress={openModal}>
      <Input
            {...input}
            type={type}
            editable={false}
            placeholder={placeholder}
            keyboardType={keyboardType}
            maxLength={maxLength}
            style={{
              fontSize: Platform.OS === 'ios' ? getScaleIos(15) : RFValue(15),
              fontFamily: fonts.primary.normal,
              backgroundColor: "white",
              borderColor: 'white',
            }}
          />

      </TouchableOpacity>

    </View>
    );
  };
  