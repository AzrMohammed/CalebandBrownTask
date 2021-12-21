import React from 'react';
import {Image, Text, View} from 'react-native';
import fonts from '../../assets/fonts';
import {colors} from '../../common/StyleConstants';

const TabFooterItem = (props) => {
  const {name, icon, focused} = props;

  return (
    <View
      style={{
        width: 'auto',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <Image
        style={{
          alignSelf: 'center',
          width: 17,
          height: 17,
          tintColor: focused ? colors.tabSelected : colors.tabDeselected,
        }}
        source={icon}
      />
      <Text
        style={{
          color: focused ? colors.tabSelected : colors.tabDeselected,
          fontFamily: focused ? fonts.NunitoSansBold : fonts.NunitoSansLight,
        }}>
        {name}
      </Text>
    </View>
  );
};

export default TabFooterItem;
