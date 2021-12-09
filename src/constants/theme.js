import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {hp} from '.';
import {Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

// const fonts = {
//   LIGHT: 'Teko-Light',
//   MEDIUM: 'Teko-Medium',
//   REGULAR: 'Teko-Regular',
//   SEMIBOLD: 'Teko-SemiBold',
//   BOLD: 'Teko-Bold',
// };

const fonts = {
  LIGHT: 'Poppis-Light',
  MEDIUM: 'Poppis-Medium',
  REGULAR: 'Poppis-Regular',
  SEMIBOLD: 'Poppis-SemiBold',
  BOLD: 'Poppis-Bold',
};

const theme = {
  primary: {
    main: '#4254FB',
    light: '#E4E7FF',
    dark: '',
  },
  secondary: {
    main: '',
    light: '',
    dark: '',
  },
  text: {
    primary: '#3F3F46',
    secondary: '#868686',
    gray: '#D4D4D4',
  },
  textVariants: {
    h1: {
      fontFamily: fonts.BOLD,
      fontWeight: '900',
      fontSize: RFValue(40, height),
    },
    h2: {
      fontFamily: fonts.BOLD,
      fontWeight: '700',
      fontSize: RFValue(30, height),
    },
    h4: {
      fontFamily: fonts.MEDIUM,
      fontWeight: '700',
      fontSize: RFValue(20, height),
    },
    h6: {
      fontFamily: fonts.MEDIUM,
      fontWeight: '700',
      fontSize: RFValue(18, height),
    },
    body: {
      fontFamily: fonts.REGULAR,
      fontSize: RFValue(18, height),
    },
    capital: {
      fontFamily: fonts.REGULAR,
      fontSize: RFValue(15, height),
      textTransform: 'uppercase',
      color: '#7E7E7E',
    },
    caption: {
      fontFamily: fonts.REGULAR,
      fontSize: RFValue(15, height),
      color: '#868686',
    },

    heading: {
      fontFamily: fonts.SEMIBOLD,
      fontWeight: '700',
      fontSize: RFValue(23, height),
    },
    subheading: {},
  },

  background: {
    main: '#F9F9F9',
    light: '',
    primary: '#FFFFFF',
    secondary: '#4254FB',
  },
  spacing: {
    xs: hp('0.5%'),

    s: hp('1%'),
    m: hp('2.5%'),
    l: hp('5%'),
  },
  colors: [
    {light: '#FFF3EC', dark: '#F28300'},
    {light: '#E8EBF5', dark: '#454A75'},
  ],
  // '#DEEDF0', '#FFEEDB', '#E4CFA9'
};
export default theme;

// import {RFPercentage} from 'react-native-responsive-fontsize';
// import {hp} from '.';
// import {Dimensions} from 'react-native';

// const height = Dimensions.get('window').height;
// const width = Dimensions.get('window').width;

// // const fonts = {
// //   LIGHT: 'Teko-Light',
// //   MEDIUM: 'Teko-Medium',
// //   REGULAR: 'Teko-Regular',
// //   SEMIBOLD: 'Teko-SemiBold',
// //   BOLD: 'Teko-Bold',
// // };

// const fonts = {
//   LIGHT: 'Poppis-Light',
//   MEDIUM: 'Poppis-Medium',
//   REGULAR: 'Poppis-Regular',
//   SEMIBOLD: 'Poppis-SemiBold',
//   BOLD: 'Poppis-Bold',
// };

// const theme = {
//   primary: {
//     main: '#4254FB',
//     light: '#E4E7FF',
//     dark: '',
//   },
//   secondary: {
//     main: '',
//     light: '',
//     dark: '',
//   },
//   text: {
//     primary: '#3F3F46',
//     secondary: '#868686',
//     gray: '#D4D4D4',
//   },
//   textVariants: {
//     h1: {
//       fontFamily: fonts.BOLD,
//       fontSize: RFPercentage(8),
//     },
//     h2: {
//       fontFamily: fonts.BOLD,
//       fontWeight: '700',
//       fontSize: RFPercentage(4.5),
//     },
//     h4: {
//       fontFamily: fonts.MEDIUM,
//       fontWeight: '700',
//       fontSize: RFPercentage(2.5),
//     },
//     h6: {
//       fontFamily: fonts.MEDIUM,
//       fontWeight: '700',
//       fontSize: RFPercentage(2.5),
//     },
//     body: {
//       fontFamily: fonts.REGULAR,
//       fontSize: RFPercentage(2.5),
//     },
//     capital: {
//       fontFamily: fonts.REGULAR,
//       fontSize: RFPercentage(2),
//       textTransform: 'uppercase',
//       color: '#7E7E7E',
//     },
//     caption: {
//       fontFamily: fonts.REGULAR,
//       fontSize: RFPercentage(2),
//       color: '#868686',
//     },

//     heading: {
//       fontFamily: fonts.SEMIBOLD,
//       fontWeight: '700',
//       fontSize: RFPercentage(3.5),
//     },
//     subheading: {},
//   },

//   background: {
//     main: '#F9F9F9',
//     light: '',
//     primary: '#FFFFFF',
//     secondary: '#4254FB',
//   },
//   spacing: {
//     xs: hp('0.5%'),

//     s: hp('1%'),
//     m: hp('2.5%'),
//     l: hp('5%'),
//   },
//   colors: [
//     {light: '#FFF3EC', dark: '#F28300'},
//     {light: '#E8EBF5', dark: '#454A75'},
//   ],
//   // '#DEEDF0', '#FFEEDB', '#E4CFA9'
// };
// export default theme;
