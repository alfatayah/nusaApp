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

export const renderInput = ({ input: { onChange, ...input }, ...rest}) => {
  return <TextInput  onChangeText={onChange} {...input} {...rest} />
};
// export const inputField = ({
//     input, 
//     name,
//     label,
//     meta: { touched, error },
//   }) => {
//     var hasError = false;
//     if (touched && error !== undefined) {
//       hasError = true;
//     }
//     return (
//         <>
//           <FormControl.Label style={{alignSelf: 'flex-start'}}>
//             {label}
//           </FormControl.Label>
//           <Input
//             {...input}
//             style={{backgroundColor: 'white'}}
//             editable={ true}
//             keyboardType = {'default'}
//             variant="outline"
//             maxLength={5}
//             placeholder="Email"
//           />
//             {hasError ? <Text style={{
//                    color: 'red',
//                    alignSelf: 'flex-end',
//                    fontFamily: fonts.primary.normal,
//                    fontSize:  RFValue(11),
//             }}>{error}</Text> : null}
//           <View style={{marginBottom: 10}} />

//       </>
//     );
//   };

