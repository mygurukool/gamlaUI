import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../../constants/theme';

const Typography = ({children, style, variant, color, ...props}) => {
  const textStyle = {
    ...(variant
      ? {
          ...theme.textVariants[variant],
        }
      : {
          ...theme.textVariants.body,
        }),
    color: color || theme.text.primary,
  };
  return (
    <Text style={[styles.text, textStyle, style]} {...props}>
      {children}
    </Text>
  );
};

export default Typography;

const styles = StyleSheet.create({
  text: {},
});
