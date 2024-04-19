
const common = {
  fade: (opacity) => `rgba(0,0,0,${opacity})`,
  fadeOut: (opacity) => `rgba(255,255,255,${opacity})`,
}


export const coffeeTheme = {
  theme,
  fonts: {
    semiBold: FontFamily.SourceSansProSemiBold,
    regular: FontFamily.SourceSansProRegular,
    headline1: {
      fontFamily: FontFamily.SourceSansProSemiBold,
      fontSize: 20,
    },
    headline2: {
      fontFamily: FontFamily.SourceSansProSemiBold,
      fontSize: 20,
    },
    headline3: {
      fontFamily: FontFamily.SourceSansProSemiBold,
      fontSize: 18,
    },
    subtitle1: {
      fontFamily: FontFamily.SourceSansProRegular,
      fontSize: 16,
    },
    subtitle2: {
      fontFamily: FontFamily.SourceSansProRegular,
      fontSize: 13,
    },
    body1: {
      fontFamily: FontFamily.SourceSansProRegular,
      fontSize: 16,
    },
    body2: {
      fontFamily: FontFamily.SourceSansProRegular,
      fontSize: 13,
    },
    button: {
      fontFamily: FontFamily.SourceSansProSemiBold,
      fontSize: 16,
      textTransform: 'uppercase',
    },
    overline: {
      fontFamily: FontFamily.SourceSansProSemiBold,
      fontSize: 13,
      textTransform: 'uppercase',
    },
    caption: {
      fontFamily: FontFamily.SourceSansProRegular,
      fontSize: 13,
    },
  },
  colors: {
    default: COFFEEColors.DEFAULT,
    primary: COFFEEColors.PRIMARY,
    primaryLight: COFFEEColors.PRIMARY_LIGHT,
    primaryDark: COFFEEColors.PRIMARY_DARK,
    secondary: COFFEEColors.SECONDARY,
    secondaryLight: COFFEEColors.SECONDARY_LIGHT,
    secondaryDark: COFFEEColors.SECONDARY_DARK,
    info: COFFEEColors.INFO,
    infoLight: COFFEEColors.INFO_LIGHT,
    infoDark: COFFEEColors.INFO_DARK,
    error: COFFEEColors.ERROR,
    danger: COFFEEColors.DANGER,
    warning: COFFEEColors.WARNING,
    darkGrey: COFFEEColors.DARK_GREY,
    mediumGrey: COFFEEColors.MEDIUM_GREY,
    regularGrey: COFFEEColors.REGULAR_GREY,
    lightGrey: COFFEEColors.LIGHT_GREY,
    white: COFFEEColors.WHITE,
  },
  ...common,
}


export const newTheme = {
  theme: SupportedTheme.NEW,
  fonts: {
    semiBold: FontFamily.OpenSansSemiBold,
    regular: FontFamily.OpenSansRegular,
    headline1: {
      fontFamily: FontFamily.OpenSansSemiBold,
      fontSize: 18,
    },
    headline2: {
      fontFamily: FontFamily.OpenSansSemiBold,
      fontSize: 16,
    },
    headline3: {
      fontFamily: FontFamily.OpenSansSemiBold,
      fontSize: 14,
    },
    subtitle1: {
      fontFamily: FontFamily.OpenSansRegular,
      fontSize: 14,
    },
    subtitle2: {
      fontFamily: FontFamily.OpenSansRegular,
      fontSize: 12,
    },
    body1: {
      fontFamily: FontFamily.OpenSansRegular,
      fontSize: 14,
    },
    body2: {
      fontFamily: FontFamily.OpenSansRegular,
      fontSize: 12,
    },
    button: {
      fontFamily: FontFamily.OpenSansSemiBold,
      fontSize: 14,
      textTransform: 'uppercase',
    },
    overline: {
      fontFamily: FontFamily.OpenSansSemiBold,
      fontSize: 10,
      textTransform: 'uppercase',
    },
    caption: {
      fontFamily: FontFamily.OpenSansRegular,
      fontSize: 10,
    },
  },
  colors: {
    default: NEWColors.DEFAULT,
    primary: NEWColors.PRIMARY,
    primaryLight: NEWColors.PRIMARY_LIGHT,
    primaryDark: NEWColors.PRIMARY_DARK,
    secondary: NEWColors.SECONDARY,
    secondaryLight: NEWColors.SECONDARY_LIGHT,
    secondaryDark: NEWColors.SECONDARY_DARK,
    info: NEWColors.INFO,
    infoLight: NEWColors.INFO_LIGHT,
    infoDark: NEWColors.INFO_DARK,
    error: NEWColors.ERROR,
    danger: NEWColors.DANGER,
    warning: NEWColors.DANGER,
    darkGrey: NEWColors.DARK_GREY,
    mediumGrey: NEWColors.MEDIUM_GREY,
    regularGrey: NEWColors.REGULAR_GREY,
    lightGrey: NEWColors.LIGHT_GREY,
    white: NEWColors.WHITE,

  },
  ...common,
}
