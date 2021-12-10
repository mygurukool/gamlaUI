import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import IconButton from '../../components/common/IconButton';
import ScreenContainer from '../../components/common/ScreenContainer';
import Typography from '../../components/common/Typography';
import FundCarousel from '../../components/FundCarousel';
import HorizontalList from '../../components/HorizontalList';
import {hp} from '../../constants';
import theme from '../../constants/theme';
import homeData from '../../data/home';
import FundItem from '../../components/FundItem';
import useBlockChain from '../../hooks/useBlockChain';
const FundsHome = ({navigation}) => {
  const {getAccounts, createAccount, getBalace} = useBlockChain();

  const handleSearchClick = () => {
    createAccount();
  };

  const handleNavigate = () => {
    // navigation.navigate('FundDetail');
    getBalace();
  };

  const searchAction = () => (
    <IconButton name="search" onPress={handleSearchClick} />
  );

  return (
    <ScreenContainer title="Funds" hideBack endAction={searchAction}>
      <ScrollView contentContainerStyle={styles.ScrollView}>
        <View style={styles.carouselContainer}>
          <FundCarousel data={homeData.carousel} />
        </View>
        <View style={styles.contentContainer}>
          <HorizontalList
            title="Trending Funds"
            data={homeData.trendingFunds}
            Item={props => <FundItem {...props} />}
            onItemPress={() => {
              handleNavigate();
            }}
          />
          <HorizontalList
            title="All Funds"
            data={homeData.trendingFunds}
            Item={props => <FundItem {...props} />}
            onItemPress={() => {
              handleNavigate();
            }}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default FundsHome;

const styles = StyleSheet.create({
  ScrollView: {
    flex: 1,
  },
  carouselContainer: {
    width: '100%',
  },
  contentContainer: {
    flex: 2,
  },
});
