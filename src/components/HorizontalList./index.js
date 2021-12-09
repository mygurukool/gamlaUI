import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import {hp} from '../../constants';
import theme from '../../constants/theme';
import Typography from '../common/Typography';

const HorizontalList = ({
  title,
  style,
  onEndPress = () => {},
  endTitle = 'View All',
  renderItem,
  onItemPress = () => {},
  data,
  Item,
}) => {
  return (
    <View style={[styles.root, style]}>
      <View style={styles.titleContaier}>
        <Typography variant="h4" color={theme.text.primary}>
          {title}
        </Typography>

        {/* <TouchableOpacity onPress={() => onEndPress()}>
          <Typography variant="h4" color={theme.text.secondary}>
            {endTitle}
          </Typography>
        </TouchableOpacity> */}
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => Math.random()}
          renderItem={({item, index}) => {
            const isLastItem = index === data.length - 1;
            const isFirstItem = index === 0;
            return (
              <TouchableOpacity onPress={() => onItemPress(item)}>
                <Item
                  isLastItem={isLastItem}
                  isFirstItem={isFirstItem}
                  {...item}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default HorizontalList;

const styles = StyleSheet.create({
  root: {
    // marginBottom: theme.spacing.m,
  },
  titleContaier: {
    paddingHorizontal: theme.spacing.m,
    height: hp('8%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listContainer: {
    width: '100%',
  },
  FlatList: {
    width: '100%',
  },
});
