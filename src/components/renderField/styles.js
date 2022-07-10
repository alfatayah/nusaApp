import { Platform, StyleSheet } from 'react-native';
import { BAF_COLOR_BLUE } from '../../utils/constant';
import { fonts, FSAlbert } from '../../utils/fonts';
import { getScaleIos, RFValue } from '../../utils/utilization';
export const styles = StyleSheet.create({
  viewRenderfieldRegister: (borderless) => ({
    width: borderless ? '107%' : '100%',
    marginTop: borderless
      ? Platform.OS === 'ios'
        ? getScaleIos(-2)
        : RFValue(-12)
      : Platform.OS === 'ios'
      ? getScaleIos(13)
      : RFValue(13),
    right: borderless ? 7 : 0,
    alignSelf: 'center',

  }),
  
  viewRenderfield: (borderless) => ({
    width:  '100%',
    marginTop: Platform.OS === 'ios'
      ? getScaleIos(13)
      : RFValue(13),
    alignSelf: 'center',
    // backgroundColor: 'red',
  }),

  containerDateRegister: {
    width: '107%' ,
    right:  7 ,
    alignSelf: 'center',
    marginTop: 10,
    alignSelf: 'center',
  },

  datePickerItem: (hasError) => ({
      height: Platform.OS === 'ios' ? getScaleIos(40) : RFValue(40),
      borderColor: hasError ? 'red' : '#666',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: Platform.OS === 'ios' ? getScaleIos(8) : RFValue(8),
  }),

  containerDate: {
    width: '100%' ,
    alignSelf: 'center',
    marginTop: 10,
    // backgroundColor: 'red',
    alignSelf: 'center',
  },

  label: (customError, hasError) => ({
    fontSize: Platform.OS === 'ios' ? getScaleIos(15) : RFValue(15),
    color: customError || hasError ? 'red' :  'black',
    alignSelf: 'flex-start',
    marginBottom: Platform.OS === 'ios' ? getScaleIos(4) : RFValue(4),
    fontFamily: fonts.primary.bold,
  }),
  labelSecond: (customError, hasError) => ({
    fontSize: Platform.OS === 'ios' ? getScaleIos(15) : RFValue(15),
    color: customError || hasError ? 'red' : 'rgba(0, 47, 95, 0.5)',
    alignSelf: 'flex-start',
    marginBottom: Platform.OS === 'ios' ? getScaleIos(4) : RFValue(4),
    fontFamily: fonts.primary.bold,
    // left: Platform.OS === 'ios' ? getScaleIos(3) : RFValue(3),
  }),
  itemRenderfield: (customError, hasError, editable, screen) => ({
    height: Platform.OS === 'ios' ? getScaleIos(40) : RFValue(40),
    borderColor:
      customError || hasError ? 'red' : !editable ? '#DADADA' : '#666',
    borderWidth: 1,
    borderRadius: Platform.OS === 'ios' ? getScaleIos(5) : RFValue(5),
    backgroundColor: !editable ? '#F4F4F4' : null,
    paddingHorizontal: Platform.OS === 'ios' ? getScaleIos(8) : RFValue(8),
  }),
  iconRenderfield: (hasError, iconCalender) => ({
    color: hasError ? 'red' : '#666',
    fontSize: Platform.OS === 'ios' ? getScaleIos(18) : RFValue(18),
    width: Platform.OS === 'ios' ? iconCalender ? getScaleIos(30) : getScaleIos(25) : iconCalender ? RFValue(40) : RFValue(27.5), 
  }),
  inputRenderfield: (editable) => ({
    fontSize: Platform.OS === 'ios' ? getScaleIos(15) : RFValue(15),
    fontFamily: fonts.primary.normal,
    justifyContent: 'center',
    color: editable ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)',
  }),
  errorText: {
    color: 'red',
    alignSelf: 'flex-end',
    fontFamily: fonts.primary.normal,
    fontSize: Platform.OS === 'ios' ? getScaleIos(11) : RFValue(11),
    marginLeft: RFValue(5),
    marginTop: RFValue(2),
  },
  viewPicker: (customError, hasError, pickerSelected, borderless) => ({
    height: Platform.OS === 'ios' ? getScaleIos(40) : RFValue(40),
    borderColor:
      customError || hasError
        ? 'red'
        : pickerSelected
        ? BAF_COLOR_BLUE
        : '#CFD2D8',
    borderWidth:  borderless? 0 : 1,
    borderBottomWidth: borderless? 1 : null,

    borderRadius: Platform.OS === 'ios' ? getScaleIos(5) : RFValue(5),
    paddingHorizontal: Platform.OS === 'ios' ? getScaleIos(8) : RFValue(8),
    fontFamily: fonts.primary.normal,
    fontSize: Platform.OS === 'ios' ? getScaleIos(15) : RFValue(15),
    justifyContent: 'center',
  }),
  picker: (enabled) => ({
    color: enabled ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)',
  }),
  textStylePicker: {
    fontSize: Platform.OS === 'ios' ? getScaleIos(15) : RFValue(15),
  },
  ErrorDesc: {
    color: 'red',
    fontFamily: FSAlbert,
    alignSelf: 'stretch',
    textAlign: 'right',
    fontSize: 10,
  },
});
