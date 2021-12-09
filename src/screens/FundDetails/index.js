import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import IconButton from '../../components/common/IconButton';
import ScreenContainer from '../../components/common/ScreenContainer';
import Typography from '../../components/common/Typography';
import {CURRENCY, hp, wp} from '../../constants';
import theme from '../../constants/theme';
import homeData from '../../data/home';
import TextInput from '../../components/common/Inputs/TextInput';
import Select from '../../components/common/Inputs/Select';
import CheckBox from '@react-native-community/checkbox';
import WideButton from '../../components/common/WideButton';
const currentFund = homeData.trendingFunds[0];

const options = [
  {
    key: 'Data',
    value: 'Data',
  },
  {
    key: 'Data',
    value: 'Data',
  },
  {
    key: 'Data',
    value: 'Data',
  },
];

const FundDetails = () => {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  return (
    <ScreenContainer title={currentFund.fundName}>
      <View style={styles.root}>
        <View style={styles.cardContainer}>
          <DetailCard title="Subscribed Users" value={currentFund.users} />
          <DetailCard title="Currency" value={currentFund.currency} />
          <DetailCard
            title="Monthly Amount"
            value={`${CURRENCY}  ${currentFund.amount}`}
          />
          <DetailCard title="Duration" value={`${currentFund.duration}`} />
        </View>
        <View style={styles.pledgeContainer}>
          <Typography variant="caption">Pledging collateral</Typography>
          <Select
            placeholder="Choose Pledging collateral"
            disabled
            options={options}
            onChange={val => {
              console.log('send val', val);
            }}
          />
        </View>

        <View style={styles.agreementContainer}>
          <View style={styles.checkContainer}>
            <CheckBox
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
          </View>

          <Typography variant="caption" style={styles.pledge}>
            I understand the fund details, and agree to join by pledging the
            required collateral.
          </Typography>
        </View>
        <View style={styles.bottomContainer}>
          <WideButton title="Join the Fund" />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default FundDetails;

const DetailCard = ({title, value, style}) => {
  return (
    <View style={[styles.detailCard, style]}>
      <Typography variant="caption">{title}</Typography>
      <Typography variant="h6">{value}</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 1,
    paddingHorizontal: theme.spacing.m,
  },
  topContainer: {
    flex: 1,
  },
  cardContainer: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  bottomContainer: {
    flex: 0.5,
  },
  detailCard: {
    height: hp('12%'),
    width: wp('42%'),
    padding: theme.spacing.m,
    backgroundColor: theme.background.primary,
    marginBottom: theme.spacing.m,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  pledgeContainer: {
    flex: 0.2,
    // backgroundColor: 'red',
  },
  agreementContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkContainer: {
    paddingHorizontal: theme.spacing.s,
  },
  pledge: {
    flex: 1,
  },
});
