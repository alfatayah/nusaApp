import React from 'react';
import { Platform, View, Text, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import { Label, Input, Item, Icon,  Right,
  Header,
  Picker,
  Left, Button,
  Body,
  Title } from 'native-base';

import { fonts } from '../../utils/fonts';
import { BAF_COLOR_BLUE } from '../../utils/constant';
import { getScaleIos, RFValue } from '../../utils/utilization';
const height = Dimensions.get('window').height;
import DateTimePickerModal from "react-native-modal-datetime-picker";
// import Modal from 'react-native-modal';
// import DatePickerIos from 'react-native-date-picker';
// import { Picker as PickerAndroid } from '@react-native-picker/picker';
import { styles } from './styles';
import { renderfieldSetting } from './setting';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const renderField = ({
  borderless,
  input,
  label,
  icon,
  iconright,
  placeholder,
  editable,
  keyboardType,
  maxLength,
  secureTextEntry,
  customError,
  onPressIcon,
  iconCalender,
  labelStyle,
  inputStyle,
  itemStyle,
  format,
  screen,
  normalize,
  meta: { touched, error, warning, active },
}) => {
  var hasError = false;

  if (touched && error || touched && customError !== undefined) {
    hasError = true;
  }

  return (
    //karena register punya kondisi spesial (width 107%) dibikin flagging untuk memisahkan stylenya
    <View style={ [styles.viewRenderfieldRegister(borderless), renderfieldSetting(screen)?.container]}>
      <Label style={[styles.label(customError, hasError, screen), renderfieldSetting(screen, customError, hasError)?.label, labelStyle]}>{label}</Label>
      <Item
        regular={borderless ? false : true}
        style={[styles.itemRenderfield(customError, hasError, editable, screen), renderfieldSetting(screen, customError, hasError, editable)?.itemRenderfield, itemStyle]}>
        {icon ? (
          <Icon
            active
            type="FontAwesome"
            name={icon}
            style={styles.iconRenderfield(hasError, iconCalender)}
          />
        ) : null}
        <Input
          {...input}
          editable={editable}
          placeholder={placeholder}
          keyboardType={keyboardType}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={'rgba(0, 0, 0, 0.4)'}
          //geser sedikit ke kiri supaya hasil inputnya ke kirian
          style={[styles.inputRenderfield(editable), renderfieldSetting(screen)?.input, inputStyle, ]}
          
          format={format}
          normalize={normalize}
        />
        {iconright ? (
          <Icon
            active
            name={iconright}
            onPress={onPressIcon}
            style={styles.iconRenderfield(hasError, iconCalender)}
          />
        ) : null}
      </Item>

      {hasError || customError ? <Text style={styles.errorText}>{error || customError }</Text> : null}
    </View>
  );
};

export const renderFieldHidden = ({
  input,
  type,
  meta: { touched, error },
}) => {
  var hasError = false;

  if (touched && error !== undefined) {
    hasError = true;
  }
  return (
    <View style={{ width: '100%' }}>
      <Item style={{ display: 'none' }}>
        <Input {...input} type={type} />
      </Item>
      {hasError ? <Text style={styles.ErrorDesc}>{error}</Text> : null}
    </View>
  );
};

// export const renderFieldPicker = ({
//   borderless,
//   input,
//   label,
//   pickerSelected,
//   onValueChange,
//   customError,
//   enabled,
//   data,
//   labelStyle,
//   pickerStyle,
//   screen,
//   meta: { touched, error, warning },
// }) => {
//   var hasError = false;

//   if (touched && error || customError && touched !== undefined) {
//     hasError = true;
//   }

//   return (
//     <SafeAreaView style={[styles.viewRenderfieldRegister(borderless), renderfieldSetting(screen)?.container]}>
//       <Label style={[styles.label(customError, hasError), renderfieldSetting(screen, customError, hasError)?.label, labelStyle]}>
//         {label}
//       </Label>
//       <View style={[styles.viewPicker(customError, hasError, pickerSelected, borderless), renderfieldSetting(screen, customError, hasError, enabled)?.picker, pickerStyle]}>

//         <Picker
//           {...input}
//           note={enabled ? false : true}
//           mode="dropdown"
//           style={[styles.picker(enabled),  {width: borderless? '105%' : '100%', right: !borderless? 0 : Platform.OS === 'android'? 14 : '18%'}]} //check di redmi 9, tablet, galaxy nexus s
//           enabled={enabled}
//           selectedValue={pickerSelected}
//           textStyle={[styles.textStylePicker, {right: screen == 'fde'? getScaleIos(11): 0}]}
//           placeholder="Silahkan Pilih"
//           onValueChange={onValueChange}>
//           {data}
//         </Picker>

//       </View>
//       {hasError || customError ? <Text style={styles.errorText}>{error || customError}</Text> : null}
//     </SafeAreaView>
//   );
// };

{/* <Picker
          {...input}
          note={enabled ? false : true}
          mode="dropdown"
          style={styles.picker(enabled)}
          enabled={enabled}
          selectedValue={pickerSelected}
          textStyle={[styles.textStylePicker, {right: screen == 'fde'? getScaleIos(11): 0}]}
          placeholder="Silahkan Pilih"
          onValueChange={onValueChange}>
          {data}
        </Picker> */}


// Fadhil : ini nanti gk kepake cuman nanti aja di hapus mau ngetest get city soalnya api nya lagi error

export const renderFieldDatePicker = ({
  input,
  type,
  placeholder,
  keyboardType,
  maxLength,
  secureTextEntry,
  customError,
  editable,
  onChangeDate,
  openModal,
  styleType,
  icon,
  visible,
  hideDatePicker,
  show,
  right,
  label,
  title,
  labelStyle,
  screen,
  dateTime,
  meta: { touched, error },
}) => {
  var hasError = false;

  if (touched && error !== undefined) {
    hasError = true;
  }
  return (
    <View style={[ styles.containerDateRegister, renderfieldSetting(screen)?.containerDate]}>
      {/* //added new props title cause of the register screen using label without utilizing the props, to lazy to change it */}
      {title && <Label style={[styles.labelSecond(customError, hasError), renderfieldSetting(screen, customError, hasError)?.label, labelStyle]}>{title}</Label>}
      <Item
        onPress={() => (show = true)}
        style={[styles.datePickerItem(hasError), renderfieldSetting(screen, customError, hasError, editable)?.itemRenderfield]}>
        {!right && <Icon
          active
          type="FontAwesome"
          name={icon}
          style={{ 
          width: Platform.OS === 'ios' ? getScaleIos(25) : RFValue(27.5),
          color: hasError ? 'red' : '#666',
          fontSize: Platform.OS === 'ios' ? getScaleIos(18) : RFValue(18),}}
        />}

        <DateTimePickerModal
          isVisible={visible}
          mode= {dateTime ? "datetime" : "date"}
          testID="dateTimePicker"
          value={new Date()}
          defaultDate={new Date()}
          minimumDate={new Date(1940, 1, 1)}
          maximumDate={new Date()}
          onConfirm={onChangeDate}
          onCancel={hideDatePicker}
          display={Platform.OS == 'android' ? 'default' : 'inline'}
        />

        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => openModal()}
            disabled={editable}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              marginTop: 6,
              alignItems: 'flex-end',
            }}></TouchableOpacity>



          <Input
            {...input}
            type={type}
            disabled={true}
            placeholder={placeholder}
            placeholderTextColor={'rgba(0, 0, 0, 0.4)'}
            keyboardType={keyboardType}
            maxLength={maxLength}
            secureTextEntry={secureTextEntry}
            style={[{
              fontSize: Platform.OS === 'ios' ? getScaleIos(15) : RFValue(15),
              fontFamily: fonts.primary.normal,
              zIndex: -100,              
            }, renderfieldSetting(screen)?.input]}
            
          />

         
        </View>
        {right && <Icon
          active
          type="FontAwesome"
          name={icon}
          style={{ 
          width: Platform.OS === 'ios' ? getScaleIos(25) : RFValue(27.5),
          color: hasError ? 'red' : '#666',
          right: Platform.OS === 'ios' ? getScaleIos(15) : RFValue(20),
          fontSize: Platform.OS === 'ios' ? getScaleIos(18) : RFValue(18),}}
        />}
      </Item>
      {hasError || customError ? (
        <Text
          style={{
            color: 'red',
            alignSelf: 'stretch',
            textAlign: 'right',
            fontSize: Platform.OS === 'ios' ? getScaleIos(11) : RFValue(11),
            fontFamily: fonts.primary.normal,
            marginBottom: -12,
          }}>
          {error || customError}
        </Text>
      ) : null}
    </View>
  );
};


