import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {hp} from '../../constants';
import theme from '../../constants/theme';
import IconButton from '../common/IconButton';
import Typography from './Typography';

const ScreenHeader = ({style, title, hideBack, endAction: EndAction}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.root, style, {height: title ? hp('12%') : hp('8%')}]}>
      {!hideBack && (
        <View style={styles.backContainer}>
          <IconButton name="arrow-back" onPress={() => navigation.goBack()} />
        </View>
      )}
      {title && (
        <View style={styles.titleContainer}>
          <Typography variant="h2">{title}</Typography>
          {EndAction ? <EndAction /> : <View />}
        </View>
      )}
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: theme.spacing.m,
    height: hp('12%'),
    paddingHorizontal: theme.spacing.m,
  },
  backContainer: {
    width: '100%',
    justifyContent: 'flex-start',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
});
