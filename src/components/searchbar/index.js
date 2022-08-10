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
  import {Text, View, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export const searchBar = (
  onChangeText,
  value,

) => {
  return (
    <View  style={{backgroundColor: "white", borderRadius: 50, marginTop: "5%"}} > 
      <Input
        onChangeText={onChangeText}
        placeholder="Mau sewa apa hari ini?"
        variant="outline"
        width="100%"
        borderRadius="10"
        py="3"
        px="3"
        fontSize={14}

        borderWidth="0"
        InputLeftElement={
          <Icon
            ml="6"
            size="6"
            color="gray.400"
            as={<Ionicons name="ios-search" />}
          />
        }
      />
    </View>
 
  );
};
