import React from 'react';
import {StyleSheet, Text, View, TextInput as TextField} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {hp, wp} from '../../../constants';
import theme from '../../../constants/theme';
const TextInput = props => {
  const styles = StyleSheet.create({
    container: {
      marginBottom: theme.spacing.m,
      // marginBottom: theme.spacing.s,
      // backgroundColor: theme.colors.background.default,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: hp('6%'),
      borderBottomColor: theme.text.gray,
      borderBottomWidth: 1,
    },
    textInput: {
      flex: 1,
      // height: hp('5.5%'),
      height: hp('7%'),

      color: theme.text.secondary,
      fontSize: RFPercentage(2),
    },
    leftIcon: {
      width: '10%',
    },
    leftIconSpacing: {
      // width: wp('2%'),
    },
    rightIcon: {
      // width: '10%',
    },
    rightIconSpacing: {
      // width: wp('2%'),
    },
    disabled: {
      // backgroundColor: 'red',
    },
  });

  const LeftIcon = () => {
    return (
      <View style={styles.leftIcon}>
        <Icon
          name={props.leftIcon}
          size={RFPercentage(3)}
          color={theme.text.gray}
        />
      </View>
    );
  };
  const RightIcon = () => {
    return (
      <View style={[styles.rightIcon, props.rightIconStyle]}>
        <Icon
          name={props.rightIcon}
          size={RFPercentage(3)}
          color={theme.text.secondary}
        />
      </View>
    );
  };
  return (
    <View style={styles.root}>
      <View style={[styles.container, props.containerStyle]}>
        {props?.leftIcon ? (
          <LeftIcon />
        ) : (
          <View style={styles.leftIconSpacing} />
        )}
        <TextField
          {...props}
          selectionColor={theme.primary.main}
          placeholderTextColor={theme.text.secondary}
          style={[
            styles.textInput,
            !props?.editable ? styles.disabled : undefined,
          ]}
        />
        {props?.rightIcon ? (
          <RightIcon />
        ) : (
          <View style={styles.rightIconSpacing} />
        )}
      </View>
    </View>
  );
};

export default TextInput;
