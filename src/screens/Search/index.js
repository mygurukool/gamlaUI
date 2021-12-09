import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import IconButton from '../../components/common/IconButton';
import ScreenContainer from '../../components/common/ScreenContainer';
import Typography from '../../components/common/Typography';
import {hp} from '../../constants';
import theme from '../../constants/theme';
import TextField from '../../components/common/Inputs/TextInput';
import {FlatList} from 'react-native-gesture-handler';

import homeData from '../../data/home';
import FundItem from '../../components/FundItem';

const FundsHome = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const results = homeData.trendingFunds;

  const handleSearch = e => {};

  return (
    <ScreenContainer>
      <View style={styles.root}>
        <View style={styles.inputContainer}>
          <TextField
            placeholder="Search by amount, duration or currency"
            style={styles.input}
            leftIcon="search"
            onChangeText={handleSearch}
            autoFocus={true}
            returnKeyType="search"
          />
        </View>
        <View style={styles.contentContainer}>
          <FlatList
            data={results}
            keyExtractor={i => Math.random()}
            numColumns={2}
            renderItem={({item, index}) => {
              return <FundItem {...item} style={styles.fundItem} />;
            }}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default FundsHome;

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: theme.spacing.m,
  },
  inputContainer: {
    height: hp('10%'),
    width: '100%',
  },
  fundItem: {
    width: '50%',
    marginBottom: theme.spacing.m,
  },
});
