// import moment from 'moment';
// import AsyncStorage from '@react-native-community/async-storage';
import { Dimensions, PixelRatio } from 'react-native';
// import RNQRGenerator from 'rn-qr-generator';
import {
  Linking,
  Platform,
  PermissionsAndroid,
  ToastAndroid,
  StatusBar,
  Alert,
} from 'react-native';
// import Geolocation from 'react-native-geolocation-service';
// import SimpleToast from 'react-native-simple-toast';
// import JailMonkey from 'jail-monkey';
// import { CURRENT_POSITION } from './constant';

const scale = Dimensions.get('window').width * PixelRatio.get();

export function RFValue(fontSize, standardScreenHeight = 680) {
  const { height, width } = Dimensions.get('window');
  const standardLength = width > height ? width : height;
  const offset =
    width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait

  const deviceHeight =
    Platform.OS === 'android' ? standardLength - offset : standardLength;

  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}


export const getScaleImageWidthIos = (val) => {
  if (scale <= 750) {
    return val - 5;
  } else if (scale <= 1284 && scale > 750) {
    return val;
  } else if (scale <= 1536 && scale > 1284) {
    return val * 2 - 2;
  } else if (scale > 1536) {
    return val * 2;
  }
};

export const getScaleImageHeightIos = (val) => {
  if (scale <= 750) {
    return val - 5;
  } else if (scale <= 1284 && scale > 750) {
    return val;
  } else if (scale <= 1536 && scale > 1284) {
    return val * 2 - 2;
  } else if (scale > 1536) {
    return val * 2;
  }
};

export const getScaleIos = (value) => {
  const scale = Dimensions.get('window').width * PixelRatio.get();
  if (scale <= 750) {
    return value - 2;
  } else if (scale <= 1284 && scale > 750) {
    return value;
  } else if (scale <= 1536 && scale > 1284) {
    return value * 1.5 - 2;
  } else if (scale > 1536) {
    return value * 1.5;
  }
};

export const regexEmail = (newValue) => {
  var output = !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
    newValue,
  );
  return output;
};

// export const hasLocationPermissionIOS = async () => {
//   const openSetting = () => {
//     Linking.openSettings().catch(() => {
//       SimpleToast.show('Unable to open settings', SimpleToast.SHORT);
//     });
//   };
//   const status = await Geolocation.requestAuthorization('whenInUse');

//   if (status === 'granted') {
//     return true;
//   }

//   if (status === 'denied') {
//     SimpleToast.show('Location permission denied', SimpleToast.LONG);
//   }

//   if (status === 'disabled') {
//     Alert.alert(
//       `Aktifkan Fitur Lokasi untuk memungkinkan BAF Mobile menentukan lokasi Anda.`,
//       '',
//       [
//         { text: 'Go to Settings', onPress: openSetting },
//         { text: "Don't Use Location", onPress: () => {} },
//       ],
//     );
//   }
// };

// export const hasLocationPermission = async () => {
//   if (Platform.OS === 'ios') {
//     const hasPermission = await hasLocationPermissionIOS();
//     return hasPermission;
//   }

//   if (Platform.OS === 'android' && Platform.Version < 23) {
//     return true;
//   }

//   if (Platform.OS === 'android') {
//     const hasPermission = await PermissionsAndroid.check(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//     );

//     if (hasPermission) {
//       return true;
//     }

//     const status = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//     );

//     if (status === PermissionsAndroid.RESULTS.GRANTED) {
//       return true;
//     }

//     if (status === PermissionsAndroid.RESULTS.DENIED) {
//       ToastAndroid.show(
//         'Location permission denied by user.',
//         ToastAndroid.LONG,
//       );
//     } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
//       ToastAndroid.show(
//         'Location permission revoked by user.',
//         ToastAndroid.LONG,
//       );
//     }
//   }

//   return false;
// };

// export const JailMonkeyUtils = () => {
//   if (CURRENT_POSITION == 'DEBUGGING') {
//     return false;
//   } else {
//     if (JailMonkey.isJailBroken()) {
//       // is this device JailBroken on iOS/Android?
//       return true;
//     } else if (JailMonkey.hookDetected()) {
//       // (ANDROID ONLY) Check if the phone has some malicious apps installed
//       return true;
//     } else {
//       return false;
//     }
//   }
// };

// export const replaceRP = (newValue) =>{
//   var output = newValue?.replace('Rp', '').replace(/\./g, '').replace(/\s/g, "")
//   return output;
// } 

// export const substringColone = (newValue) => {
//   var output = newValue.split(':');
//   var result = output[0] + output[1];
//   return result;
// };

// export const substringStrip = (newValue) => {
//   var output = newValue.split('-');
//   return output[1];
// };

// export const substringNisbah = (newValue) => {
//   var output = newValue.split(':');
//   return output[0];
// };
// export const substringSecondNisbah = (newValue) => {
//   var output = newValue.split(':');
//   return output[1];
// };

// export const substringCircum = (newValue) => {
//   var output = newValue.split('^');
//   return output[0];
// };

// export const substringDot = (newValue) => {
//   var output = newValue.split('.');
//   return output[0];
// };

// export const substringUrl = (newValue) => {
//   var output = newValue.split('/');
//   return output;
// };

// export const splitDot = (newValue) => {
//   var output = newValue.split('.').join('');
//   return output;
// };

// export const handleRefreshToken = async (data) => {
//   await AsyncStorage.removeItem('userToken');
//   await AsyncStorage.setItem('userToken', data);
// };

// export const jsonParse = async (data) => {
//   try {
//     const dataParse = JSON.parse(data);
//     return dataParse;
//   } catch (e) {
//     return false;
//   }
// };

// export const substringSecondCircum = (newValue) => {
//   var output = newValue.split('^');
//   return output[1];
// };

// export const substringThirdCircum = (newValue) => {
//   var output = newValue.split('^');
//   return output[2];
// };

// export const substringFourthCircum = (newValue) => {
//   var output = newValue.split('^');
//   return output[3];
// };

// export const sliceFirstEightLastSix = (newValue) => {
//   let firstAttempt = newValue.slice(8);
//   // let lastIndex = firstAttempt.length - 1;
//   let secondAttempt = firstAttempt.slice(0, -6);
//   return secondAttempt;
// };

// export const trimLineBreak = (value) => {
//   const newValue = value.replace(/\\n/g, '');
//   return newValue;
// };

// export const substringFifthCircum = (newValue) => {
//   var output = newValue.split('^');
//   return output[4];
// };

// export const substringSixCircum = (newValue) => {
//   var output = newValue.split('^');
//   return output[5];
// };

// export const substringSevenCircum = (newValue) => {
//   var output = newValue.split('^');
//   return output[6];
// };

// export const substringEightCircum = (newValue) => {
//   var output = newValue.split('^');
//   return output[7];
// };
// export const substringNineCircum = (newValue) => {
//   var output = newValue.split('^');
//   return output[8];
// };

// export const substringTenCircum = (newValue) => {
//   var output = newValue.split('^');
//   return output[9];
// };

// export const substringNoHpFirstCircum = (newValue) => {
//   var output = newValue.slice(0, 3); //0812888565* --> 0812
//   return output;
// };

// export const substringNoHpSecondCircum = (newValue) => {
//   var output = newValue.slice(3); //0812888565* --> 888565*
//   return output;
// };

// export const substringTilde = (newValue) => {
//   var output = newValue.split('~');
//   return output[0];
// };

// export const substringSecondTilde = (newValue) => {
//   var output = newValue.split('~');
//   return output[1];
// };

// export const mergeValuesData = (newValue) => {
//   var output = newValue
//     .replace(/","/g, '|')
//     .replace(/\["/g, '')
//     .replace(/\"]/g, '');
//   return output;
// };

// export const regexJsonEscape = (newValue) => {
//   var output = /["'|^~\\\\\n\\\t\\\f\\\r\\\n\\]/g.test(newValue);
//   return output;
// };

// export const regexHTML = (newValue) => {
//   var regex = /(&nbsp;|<([^>]+)>)/gi,
//     body = newValue,
//     result = body.replace(regex, '');

//   return result;
// };

// export const regexBackslash = (newValue) => {
//   const body = newValue;
//   const result = body.replace(/\"/g, '');
//   return result;
// };

// export const regexSymbol = (newValue) => {
//   var output = /[*+=_?^${/}<>&%(),.:;'^~!@#`\\\\|"[\]\\\n\\\t\\\f\\\r\\\n\\\-\\]/g.test(
//     newValue,
//   );
//   return output;
// };

// export const regexSymbolNum = (newValue) => {
//   var output = /[*+=_?^${/}<>&%(),.:;'^~!@#`\\\\|"[\]\\\n\\\t\\\f\\\r\\\n\\\-\\0-9]/g.test(
//     newValue,
//   );
//   return output;
// };

// export const regexNameEmergency = (newValue) => {
//   var output = /[*+=_?^${/}<>&%():;'^~!@#`\\\\|"[\]\\\n\\\t\\\f\\\r\\\n\\\-\\_☺\\0-9]/g.test(
//     newValue,
//   );
//   return output;
// };

// export const regexSymbolNumSpace = (newValue) => {
//   var output = /[ *+=_.,?^${/}<>&%():;'^~!@#`\\\\|"[\]\\\n\\\t\\\f\\\r\\\n\\\-\\0-9]/g.test(
//     newValue,
//   );
//   return output;
// };

// export const regexSymbolExceptDot = (newValue) => {
//   var output = /[*+=_?^${/}<>&%():;'^~!@#`\\\\|"[\]\\\n\\\t\\\f\\\r\\\n\\\-\\]/g.test(
//     newValue,
//   );
//   return output;
// };



// export const regexNumOnly = (newValue) => {
//   var output = /[A-Za-z *+=_.,?^${/}<>&%():;'^~!@#`\\\\|"[\]\\\n\\\t\\\f\\\r\\\n\\\-\\]/g.test(
//     newValue,
//   );
//   return output;
// };

// export const regexAZ = /[^a-zA-Z ]/g;
// export const regexAlfabetNumber = /[^a-zA-Z0-9., ]/g;
// export const regexCertainCharacter = /[^a-zA-Z., ]/g;
// export const regexNumber = /[^0-9]/g;

// export const resJsonParser = (newValue) => {
//   var output = JSON.parse(
//     newValue.replace(/([\[\]])/gm, '').replace(/(['])/gm, '"'),
//   );
//   return output;
// };

// export function romanize(num) {
//   if (isNaN(num)) return NaN;
//   var digits = String(+num).split(''),
//     key = [
//       '',
//       'C',
//       'CC',
//       'CCC',
//       'CD',
//       'D',
//       'DC',
//       'DCC',
//       'DCCC',
//       'CM',
//       '',
//       'X',
//       'XX',
//       'XXX',
//       'XL',
//       'L',
//       'LX',
//       'LXX',
//       'LXXX',
//       'XC',
//       '',
//       'I',
//       'II',
//       'III',
//       'IV',
//       'V',
//       'VI',
//       'VII',
//       'VIII',
//       'IX',
//     ],
//     roman = '',
//     i = 3;
//   while (i--) roman = (key[+digits.pop() + i * 10] || '') + roman;
//   return Array(+digits.join('') + 1).join('M') + roman;
// }

// export const formatCurrency = (value) => {
//   if (!value) {
//     return value;
//   }
//   return value.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
// };

// export const fdeFormatCurrency = (value) => {
//   if (!value) {
//     return value;
//   }
//   return 'Rp. ' + value.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
// };

// export const fdeFormatCurrency2 = (value) => {
//   let pattern = /^\d+$/;
//   let result = true;

//   if (value != null && value.length > 1) {
//     result = value.match(pattern);
//   }

//   if (!value) {
//     return value;
//   } else if (!result) {
//     return value;
//   }
//   return 'Rp. ' + value.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
// };

// export const normalizeCurrency = (value) => {
//   if (!value) {
//     return value;
//   }
//   const onlyNums = value.replace(/[^\d]/g, '');
//   return onlyNums;
// };

// export const validSearchDaysRange = (startDate, endDate) => {
//   if (moment(endDate).diff(moment(startDate), 'days') > 7) {
//     return false;
//   } else {
//     return true;
//   }
// };

// export const dateYearValidate = (newValue) => {
//   var output = newValue.split('-');
//   if (Number(output[0]) < 999 || Number(output[0].length > 4)) {
//     return false;
//   } else {
//     return true;
//   }
// };

// export const nextMonth = (newValue) => {
//   var nextMonth = moment(newValue).add(1, 'M').format('YYYY-MM-DD');
//   return nextMonth;
// };

// export const normalizeAlpaNumericOnly = (value) => {
//   if (!value) {
//     return value;
//   }

//   return value.replace(/[^a-z0-9]/gi, '');
// };

// // buat masking status code di alert component, kalo ada status code, status codenya dihapus
// export const maskingStatusCode = (alertMsgText) => {
//   let splitStatusCode = alertMsgText?.split(':');

//   if(splitStatusCode?.length > 1) {
//     splitStatusCode.shift();
//     return splitStatusCode?.toString().trim();
//   }
//   return alertMsgText;
// }
