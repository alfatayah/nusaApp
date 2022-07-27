import React from 'react';
import {
  Container,
  Input,
  FormControl,
  Popover,
  Center,
  NativeBaseProvider,
  Button,
  VStack,
  Box,
  Heading,
  Icon,
} from 'native-base';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {fonts} from '../../utils/fonts';
export const subHeader = (
  title,
) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '',
        justifyContent: 'space-evenly',
        marginTop: '5%',
      }}>
      <TouchableOpacity
      onPress={() => console.log("go back")}
      style={{marginLeft: "5%", backgroundColor: "", flex: 1}}>
        <Icon
          size="6"
          color="black"
          as={<MaterialIcons name="arrow-back-ios" />}
        />
      </TouchableOpacity>
      <View style={{marginLeft: "-20%", flex: 1, backgroundColor: ""}}>
        <Text
          style={{
            fontFamily: fonts.rubik.normal,
            color: 'black',
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          {title}
        </Text>
      </View>
    </View>
  );
};
