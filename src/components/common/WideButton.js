import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {hp} from '../../constants';
import theme from '../../constants/theme';
import Typography from './Typography';

const WideButton = ({title, style, onPress}) => {
  return (
    <TouchableOpacity style={[styles.root, style]} onPress={() => onPress()}>
      <Typography color={'white'}>{title}</Typography>
    </TouchableOpacity>
  );
};

export default WideButton;

const styles = StyleSheet.create({
  root: {
    height: hp('6%'),
    width: '100%',
    backgroundColor: theme.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
