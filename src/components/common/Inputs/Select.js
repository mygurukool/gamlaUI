import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput as TextField,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {hp, wp} from '../../../constants';
import theme from '../../../constants/theme';
import IconButton from '../IconButton';
import Typography from '../Typography';
const Select = props => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const {options = [], placeholder} = props;

  const onSelect = opt => {
    props.onChange(opt);
    setModalVisible(false);
  };

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
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <View style={styles.modalHeaderContainer}>
            <Typography color={'white'}>{placeholder}</Typography>
            <IconButton
              name="close"
              color={'white'}
              onPress={() => setModalVisible(false)}
            />
          </View>

          <View style={styles.centerView}>
            {options.map((j, i) => (
              <Option onPress={() => onSelect(j)} key={j.key} {...j} />
            ))}
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.root}
        onPress={() => setModalVisible(!modalVisible)}>
        <View style={[styles.container, props.containerStyle]}>
          {props?.leftIcon ? (
            <LeftIcon />
          ) : (
            <View style={styles.leftIconSpacing} />
          )}
          <Typography variant="caption" style={[styles.textInput]}>
            {props.placeholder}
          </Typography>

          {props?.rightIcon ? (
            <RightIcon />
          ) : (
            <View style={styles.rightIconSpacing} />
          )}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Select;

const Option = ({key, value, onPress}) => {
  return (
    <TouchableOpacity style={styles.opt} onPress={() => onPress()}>
      <Typography>{value}</Typography>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: theme.spacing.m,

    marginBottom: theme.spacing.m,
    paddingHorizontal: theme.spacing.m,
    // marginBottom: theme.spacing.s,
    // backgroundColor: theme.colors.background.default,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('6%'),
    borderColor: theme.text.gray,
    borderWidth: 1,
  },
  textInput: {
    flex: 1,
    // height: hp('5.5%'),

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
  modalView: {
    height: '100%',
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  centerView: {
    width: '90%',
    height: 'auto',
    backgroundColor: theme.background.primary,
  },
  modalHeaderContainer: {
    width: '90%',
    backgroundColor: theme.primary.main,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.s,

    borderBottomColor: theme.text.gray,
    borderBottomWidth: 1,
  },

  opt: {
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.s,
    borderBottomColor: theme.text.gray,
    borderBottomWidth: 1,
  },
});
