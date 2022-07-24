import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {Icon} from "native-base"
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class Footer extends Component {

  renderFooterSection = (data,tabState) => {
    return(
        <TouchableOpacity key={data.id} style={{flex:1}} onPress={data.nav} dtActionName={`Navbar ${data.title}`}>
                <View style={styles.topContent}>
                    <Icon
                    as={Ionicons}
                    name={tabState === data.tab ? data.iconActive : data.iconInActive}
                    size={8}
                    // color={'amber.200'}
                    />
                </View>
        </TouchableOpacity>
    )
}

  render() {
    const {
      tabHome,
      tabPromo,
      tabPesan,
      tabProduk,
      tabAkun,
      tabState,
    } = this.props;

    const DataFooter = [
      {
          "id":1,
          "tab" : "home",
          "iconActive": "md-home",
          "iconInActive": "md-home-outline",
          "nav" : tabHome
      },
      {
        "id":2,
        "tab" : "booking",
        "iconActive": "cart",
        "iconInActive": "cart-outline",
        "nav" : tabHome
    },
    {
      "id":3,
      "tab" : "report",
      "iconActive": "reader",
      "iconInActive": "reader-outline",
      "nav" : tabHome
  },
  ]
    return (
      <View style={styles.container}>
         {DataFooter.map((data) => this.renderFooterSection( data,tabState))}
      </View>
    );
  }
}
