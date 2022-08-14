import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Input } from 'native-base';

import { styles } from './styles';

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
    <View style={{ width: '100%', display: 'none' }}>
        <Input {...input} type={type} />
      {hasError ? <Text style={styles.ErrorDesc}>{error}</Text> : null}
    </View>
  );
};
