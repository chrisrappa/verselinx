import { unstable_createMuiStrictModeTheme as createMuiTheme} from '@material-ui/core/styles';

// Colors

// Mains - Opacity
const primary100 = 'rgba(165,127,187, 0.15)';
const primary200 = 'rgba(165,127,187, 0.25)';
const primary300 = 'rgba(165,127,187, 0.5)';
const primary400 = 'rgba(165,127,187, 0.75)';
const primaryFull = 'rgb(165,127,187, 1)';

// Secondaries - Opacity
const secondary100 = 'rgba(177, 194, 250, 0.15)'
const secondary200 = 'rgba(177, 194, 250, 0.25)'
const secondary300 = 'rgba(177, 194, 250, 0.5)'
const secondary400 = 'rgba(177, 194, 250, 0.75)'
const secondaryFull = 'rgba(177, 194, 250, 1)';


const mainBackground = `linear-gradient(-10deg, ${secondaryFull} 50%, ${primaryFull} 95%)`;

// Fonts
const primaryFontColor = 'white';
const secondaryFontColor = 'black';
const tabPrimaryFontColor = 'white';
const tabSecondaryFontColor = 'black';

const primaryFont = "'Baloo Bhaijaan 2', cursive";
const secondaryFont = "'Baloo Bhaijaan 2', cursive";
const tabFont = "'Baloo Bhaijaan 2', cursive";


const theme = createMuiTheme({

  palette: {
    common: {
      purple: `${primaryFull}`,
      blue: `${secondaryFull}`
    },
    primary : {
      veryLight: `${primary100}`,
      light: `${primary200}`,
      md: `${primary300}`,
      mdFull: `${primary400}`,
      main: `${primaryFull}`,
    },
    secondary: {
      veryLight: `${secondary100}`,
      light: `${secondary200}`,
      md: `${secondary300}`,
      mdFull: `${secondary400}`,
      main: `${secondaryFull}`
    },
  },

  typography: {
    h6: {
      fontFamily: `${primaryFont}`,
      fontWeight: 400,
      color: `${primaryFontColor}`
    },
    primary: {
      fontFamily: `${primaryFont}`,
      color: `${primaryFontColor}`
    },
    secondary: {
      fontFamily: `${secondaryFont}`,
      color: `${secondaryFontColor}`
    },
    tab: {
      fontFamily: `${tabFont}`,
      color: `${tabPrimaryFontColor}`
    },
    tabSecondary: {
      fontFamily: `${tabFont}`,
      color: `${tabSecondaryFontColor}`,
      opacity: '0.7',
      "&:hover": {
        backgroundColor: `${secondary200}`,
        opacity: '1'
      },
    }
  },

  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          background: `${mainBackground}`,
          minHeight: '100vh'
        },
      }
    }
  }
});

export default theme;