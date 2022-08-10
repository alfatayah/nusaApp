import React, {Component} from 'react';
import {
 View,
  Platform,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import { fonts } from '../../utils/fonts';
import { getScaleIos, RFValue } from '../../utils/utilization';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import Icamera from '../../assets/filter_camera.png';
  import ILensa from '../../assets/filter_lensa.png';
  import ILightning from '../../assets/filter_lightning.png';
  import Iacc from '../../assets/filter_acc.png';
  export default class Filter extends Component {

    actionFilter = (id) => {
      switch (id) {
        case 1:
           this.props.filterCamera();
          break;
        case 2:
          this.props.filterLensa();
            break;
        case 3:
          this.props.filterLighting();
            break;
        case 4:
          this.props.filterAcc()
          break;
        default:
          break;
      }

    }

    filterComponent = (data) => {
      return(
        <TouchableOpacity key={data.id}
        style={{width: wp(21), height: hp(11), borderRadius: 10, margin: 8, backgroundColor: "white", elevation:3,}}
          onPress={() =>this.actionFilter(data.id)}>
            <View style={{ alignItems: "center", justifyContent: 'center', marginTop: "10%", flexDirection: 'column'}}>
            <Image style={{width: wp(13.5), height: hp(5)}} source={data.img} /> 
          <Text style={{fontSize: 12, fontFamily: fonts.rubik.normal, marginTop: "10%"}}>
            {data.title}
          </Text>
            </View>
           
        </TouchableOpacity>
      )
  }

  render() {  
    // const { filterCamera , filterLensa, filterLightning, filterAcc} = this.props;
    const dataFilter = [
      {
        "id": 1,
        "title" : "CAMERA",
        "img" : Icamera,
      },
      {
        "id": 2,
        "title" : "LENSA",
        "img" : ILensa,
      },
      {
        "id": 3,
        "title" : "LIGHTING",
        "img" : ILightning,
      },
      {
        "id": 4,
        "title" : "ACCESORIES",
        "img" : Iacc,
      },
    ]
    return (
      
      <View style={{flexDirection: 'row'}}>
         {dataFilter.map((data) => this.filterComponent(data))}
      </View>
    );
  }

}
