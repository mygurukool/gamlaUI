import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import theme from '../../constants/theme';
import ScreenHeader from './ScreenHeader';
const ScreenContainer = ({
  children,
  style,
  title,
  hideBack,
  showHeader = true,
  endAction,
  headerStyle,
}) => {
  return (
    <View style={[styles.root, style]}>
      {showHeader && (
        <ScreenHeader
          title={title}
          endAction={endAction}
          hideBack={hideBack}
          style={headerStyle}
        />
      )}
      {children}
    </View>
  );
};

export default ScreenContainer;

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.background.main,
    height: '100%',
    width: '100%',
  },
});
