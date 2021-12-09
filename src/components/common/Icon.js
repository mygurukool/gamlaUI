import React from 'react';
import {StyleSheet} from 'react-native';
import IconData from 'react-native-vector-icons/Ionicons';

const Icon = ({name, size, color, style}) => {
  return (
    <IconData
      name={name}
      size={size}
      color={color}
      style={[styles.icon, style]}
    />
  );
};

export default Icon;

const styles = StyleSheet.create({
  icon: {},
});
