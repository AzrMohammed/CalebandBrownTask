import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const NetworkFailure = (props) => {
  const {retry} = props;

  return (
    <View
      style={styles.container}>
      <Text style={styles.errorText}>
        {'Network failure. Please check your internet connection'}
      </Text>
      <TouchableOpacity
        onPress={() => {
          retry();
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>{'RETRY'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NetworkFailure;
