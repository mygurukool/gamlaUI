import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ScreenContainer from '../../components/common/ScreenContainer';
import Typography from '../../components/common/Typography';
import WideButton from '../../components/common/WideButton';
import theme from '../../constants/theme';

import SplashImage from '../../../assets/images/splash.png';

const Splash = ({navigation}) => {
  const handleNavigate = () => {
    navigation.navigate('Home');
  };

  return (
    <ScreenContainer style={styles.root} showHeader={false}>
      <View style={styles.imgContainer}>
        <Image
          source={SplashImage}
          style={[styles.ring, styles.ring1]}
          resizeMode="contain"
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Typography variant="h1">Gamla Fund</Typography>

          <Typography variant="body" style={styles.center}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum purus
            eget sagittis,
          </Typography>
        </View>

        <View style={styles.btnContainer}>
          <WideButton title="Connect Wallet" onPress={() => handleNavigate()} />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Splash;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: theme.spacing.m,
  },
  imgContainer: {
    flex: 1.2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    flex: 0.5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    textAlign: 'center',
  },
  ring: {
    height: '100%',
    width: '100%',
  },
});
