import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import fonts from '../../assets/fonts';
import {colors} from '../../common/StyleConstants';

const SortItem = (props) => {
  const {title, orderKey, selectedkey, proceedSort} = props;
  const isSelected = orderKey === selectedkey;

  return (
    <TouchableOpacity
      onPress={() => {
        if (!isSelected) proceedSort(orderKey);
      }}
      style={{marginLeft: 10}}>
      <Text
        style={{
          fontFamily: isSelected ? fonts.NunitoSansBold : fonts.NunitoSansLight,
          color: isSelected ? colors.textLogo : colors.textDefault,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SortItem;
