import { DefaultTheme, configureFonts } from "react-native-paper";

const fontConfig = {
  ios: {
    regular: {
      fontFamily: "OpenSans-Regular",
      fontWeight: "400",
    },
    medium: {
      fontFamily: "OpenSans-SemiBold",
      fontWeight: "500",
    },
    light: {
      fontFamily: "OpenSans-Light",
      fontWeight: "300",
    },
    thin: {
      fontFamily: "OpenSans-Light",
      fontWeight: "100",
    },
  },
  android: {
    regular: {
      fontFamily: "OpenSans-Regular",
      fontWeight: "400",
    },
    medium: {
      fontFamily: "OpenSans-SemiBold",
      fontWeight: "500",
    },
    light: {
      fontFamily: "OpenSans-Light",
      fontWeight: "300",
    },
    thin: {
      fontFamily: "OpenSans-Light",
      fontWeight: "100",
    },
  },
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    fade: (opacity) => `rgba(0,0,0,${opacity})`,
    fadeOut: (opacity) => `rgba(255,255,255,${opacity})`,
    primary: "#BD9354",
    accent: "#85603F",
    secondary: "#E3D18A",
    background: "#F7F4F4",
    black: "#000000",
    transparent: "transparent",
    white: {
      1: "#FFFFFF",
      2: "#fefefe",
      3: "#F5F5F5",
      4: "#F1F1F1",
    },
    yellow: {
      1: "#FFD400",
      2: "#FBD405",
      3: "#FAEA48",
      4: "#FEF9A7",
      5: "#FAC213",
      6: "#F7EC09",
    },
    grey: {
      1: "#969696",
      2: "#53555A",
      3: "#63666A",
      4: "#74777A",
      5: "#97999A",
      6: "#A7A7AA",
      7: "#BABBBB",
      8: "#D0D0CD",
    },
    orange: {
      1: "#F39100",
      2: "#FF9F29",
      3: "#FFB562",
      4: "#E7AB79",
      5: "#FFA500",
      6: "#FF5B00",
      7: "#FFA500",
    },
    red: {
      1: "#EB1D36",
      2: "#EB4747",
      3: "#EB4747",
      4: "#990000",
      5: "#F24C4C",
      6: "#EB5353",
      7: "#F32424",
    },
    blue: {
      1: "#06283D",
      2: "#1F4690",
      3: "#005487",
      4: "#3A5BA0",
      5: "#242F9B",
      6: "#646FD4",
      7: "#1363DF",
    },
    lightGreen: {
      1: "#004E58",
      2: "#007680",
      3: "#0097A9",
      4: "#6EC1B4",
      5: "#9DD3CE",
      6: "#DDEEE7",
    },
    darkGreen: {
      1: "#1A4D2E",
      2: "#1A4D2E",
      3: "#3EC70B",
      4: "#43B02A",
      5: "#86BB24",
      6: "#C4D600",
      7: "#00FFAB",
      8: "#14C38E",
      9: "rgb(242, 248, 233)",
    },
  },
};

export default theme;
