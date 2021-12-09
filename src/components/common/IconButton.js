import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import theme from '../../constants/theme';
import Icon from './Icon';

const IconButton = ({style, name, onPress, color, size}) => {
  return (
    <TouchableOpacity style={[styles.root, style]} onPress={() => onPress()}>
      <Icon
        name={name}
        size={size || RFPercentage(3.5)}
        color={color || theme.text.secondary}
      />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
