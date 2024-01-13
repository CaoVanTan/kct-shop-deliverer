import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import COLORS from './Colors';

const Theme = {
  Light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      black: COLORS.black,
      white: COLORS.white,
      curve: COLORS.primary,
      selected: COLORS.primary,
      fontWhite: COLORS.white,
      primary: COLORS.primary,
      iconColor: COLORS.darkGrey,
      iconColorPrimary: COLORS.primary,
      cardContainer: COLORS.white,
      rippleColor: COLORS.black02,
      background: COLORS.white,
      lightBackground: COLORS.lightBlueShadeGrey,
      headerbackground: COLORS.primary,
      headerbackground2: COLORS.offWhite,
      headerTextColor: COLORS.primaryBlack,
      fontMainColor: COLORS.primaryBlack,
      fontSecondColor: COLORS.lightGrey,
      placeHolderColor: COLORS.lightGrey,
      buttonBackground: COLORS.primary,
      buttonBackgroundLight: COLORS.mediumBlueShadeGrey,
      buttonBackgroundBlue: COLORS.primaryLightBlue,
      active: COLORS.primaryLightBlue,
      buttonText: COLORS.white,
      horizontalLine: COLORS.lineGrey,
      shadowColor: COLORS.black06,
      drawerBackground: COLORS.primary,
      spinnerColor: COLORS.primary,
      errorColor: COLORS.redishOrange,
      radioColor: COLORS.white,
      radioOuterColor: COLORS.primary,
      blueColor: COLORS.blueColor,
      chatBubblePrimary: COLORS.yellowishOrange,
    },
  },
  Dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      white: COLORS.white,
      black: COLORS.black,
      curve: COLORS.primary,
      selected: COLORS.primary,
      fontWhite: COLORS.white,
      primary: COLORS.primary,
      rippleColor: COLORS.black02,
      background: COLORS.lightBlack,
      lightBackground: COLORS.lightBlueShadeGrey,
      cardContainer: COLORS.darkGrey,
      iconColor: COLORS.lightWhite,
      iconColorPrimary: COLORS.primary,
      headerbackground: COLORS.black,
      headerbackground2: COLORS.black,
      headerTextColor: COLORS.primaryBlack,
      fontMainColor: COLORS.lightWhite,
      fontSecondColor: COLORS.whitishGrey,
      placeHolderColor: COLORS.lightGrey,
      buttonBackground: COLORS.primary,
      buttonBackgroundLight: COLORS.dkmediumBlueShadeGrey,
      buttonBackgroundBlue: COLORS.primaryLightBlue,
      active: COLORS.primaryLightBlue,
      buttonText: COLORS.white,
      horizontalLine: COLORS.lineGrey,
      shadowColor: COLORS.white06,
      drawerBackground: COLORS.primary,
      spinnerColor: COLORS.primary,
      errorColor: COLORS.redishOrange,
      radioColor: COLORS.white,
      radioOuterColor: COLORS.primary,
      blueColor: COLORS.blueColor,
      chatBubblePrimary: COLORS.yellowishOrange,
    },
  },
};

export default Theme;
