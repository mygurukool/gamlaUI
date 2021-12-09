import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CURRENCY, hp, wp} from '../../constants';
import theme from '../../constants/theme';
import Typography from '../common/Typography';

const FundItem = ({
  isLastItem,
  isFirstItem,
  fundName,
  currency,

  duration,
  amount,
  style,
}) => {
  const otherStyles = {
    ...(isFirstItem && {
      marginLeft: theme.spacing.m,
    }),
    ...(isLastItem && {
      marginRight: theme.spacing.m,
    }),
    ...style,
  };

  return (
    <View style={[styles.root, otherStyles]}>
      <Typography
        variant="capital"
        style={styles.currency}
        color={theme.primary.main}>
        {currency}
      </Typography>
      <View style={styles.center}>
        <Typography variant="heading">{fundName}</Typography>
        <Typography variant="caption">{duration}</Typography>
      </View>
      <Typography variant="h6">
        {CURRENCY} {amount}
      </Typography>
    </View>
  );
};

export default FundItem;

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.background.primary,
    height: hp('22%'),
    width: wp('38%'),
    padding: theme.spacing.m,
    marginRight: theme.spacing.m,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  currency: {
    backgroundColor: theme.primary.light,
    paddingHorizontal: theme.spacing.s,
    paddingVertical: theme.spacing.xs,
  },
});
