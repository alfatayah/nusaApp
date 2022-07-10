import { getScaleIos, RFValue } from '../../utils/utilization';

export const renderfieldSetting = (screen, customError, hasError, editable) => {
  switch (screen) {
    case 'fde':
      return {
        container: {
          width: '100%',
          marginTop: Platform.OS === 'ios' ? getScaleIos(13) : RFValue(13),
          alignSelf: 'center',
          right: null,
        },
        containerDate: {
            width: '100%' ,
            alignSelf: 'center',
            marginTop: 10,
            alignSelf: 'center',
            right:  0 ,
        },
        label: {
          color: customError || hasError ? 'red' : 'rgba(0, 47, 95, 0.5)',
        },
        itemRenderfield: {
          width: '101%', //karena pagernya kiri dan kanan ilang, panjang dari border bawah berkurang sekitar 1% dari panjang total
          left: Platform.OS === 'ios' ? getScaleIos(-3) : RFValue(-4), //perpanjangan ke kanan, sehingga kita geser ke kiri sedikit
          backgroundColor:  null,
          borderColor:
          customError || hasError ? 'red' : editable ? 'rgba(0, 47, 95, 1)' : '#DADADA',
        },
        input: {
            right: Platform.OS === 'android'? 10 : '18%' //check di tablet, android nexus s, redmi9
        },
        picker: {
          borderColor: customError || hasError ? 'red' : editable ? 'rgba(0, 47, 95, 1)' : '#DADADA',
        },
      };
    default:
      return null;
  }
};
