import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {CURRENCY, hp, wp} from '../../constants';
import theme from '../../constants/theme';
import Typography from '../common/Typography';
const FundCarousel = ({data}) => {
  const colors = theme.colors;
  const carouselRef = React.useRef();

  return (
    <View>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={({item, index}) => {
          const isLastItem = index === data.length - 1;
          const isFirstItem = index === 0;

          return (
            <RenderItem
              item={item}
              key={index}
              bgColor={colors[index]}
              isLastItem={isLastItem}
              isFirstItem={isFirstItem}
            />
          );
        }}
        sliderWidth={wp('100%')}
        itemWidth={wp('80%')}
        activeSlideAlignment="start"
        inactiveSlideScale={1}
      />
    </View>
  );
};

export default FundCarousel;

const RenderItem = ({item, bgColor, isLastItem, isFirstItem}) => {
  const Icon = item.icon;
  const otherStyles = {
    ...(isFirstItem && {
      marginLeft: theme.spacing.m,
    }),
    marginRight: theme.spacing.m,
  };

  return (
    <View
      style={[
        styles.itemContainer,
        {backgroundColor: bgColor.light},
        otherStyles,
      ]}>
      <View style={styles.textContainer}>
        <View style={styles.topText}>
          <Typography variant="capital" color="#7e7e7e">
            Balance
          </Typography>
          <Typography variant="heading" color={bgColor.dark}>
            {item.fundName} {item.value}
          </Typography>
        </View>
        <View style={styles.bottomText}>
          <Typography>
            {CURRENCY} {item.amount}
          </Typography>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <Image source={item.icon} style={styles.icon} resizeMode="contain" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    height: hp('20%'),
    width: 'auto',
    backgroundColor: 'red',
    padding: theme.spacing.m,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'space-between',
  },
  textContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
  },
  iconContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: hp('8%'),
    width: hp('8%'),
  },
});
