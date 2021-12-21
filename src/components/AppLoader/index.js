import React from 'react';
import {ActivityIndicator} from 'react-native';
import {colors} from '../../common/StyleConstants';

const AppLoader = ({size = 'large'}) => {
  return <ActivityIndicator color={colors.textLogo} size={size} />;
};

export default AppLoader;
