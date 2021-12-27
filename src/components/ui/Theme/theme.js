import { unstable_createMuiStrictModeTheme as createMuiTheme} from '@material-ui/core/styles';
import { Container } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
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

// White & Grays

const gray100 = 'rgba(73,73,73, 0.1)';
const gray200 = 'rgba(73,73,73, 0.25)';
const gray300 = 'rgba(73,73,73, 0.5)';
const gray400 = 'rgba(73,73,73, 0.90)';
const gray500 = 'rgba(73,73,73, 1)';

const white100 = 'rgba(255, 255, 255, 0.1)';
const white200 = 'rgba(255, 255, 255, 0.25)';
const white300 = 'rgba(255, 255, 255, 0.5)';
const white400 = 'rgba(255, 255, 255, 0.75)';
const white500 = 'rgba(255, 255, 255, 1)';

// Buttons

const buttonPrimary = `${secondaryFull}`;

// Box Shadows
const primaryInsetBoxShadow = 'inset 0px 3.5px 10px rgba(56,56,55, 0.5)';

// Main App Background
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
    grays: {
      veryLight: `${gray100}`,
      light: `${gray200}`,
      md: `${gray300}`,
      mdFull: `${gray400}`,
      full: `${gray500}`,
    },
    whites: {
      veryLight: `${white100}`,
      light: `${white200}`,
      md: `${white300}`,
      mdFull: `${white400}`,
      full: `${white500}`,
    }
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

  boxShadows: {
    inset: {
      boxShadow: `${primaryInsetBoxShadow}`,
    }
  },
  buttons: {
    primary: {
      color: `${white500}`,
      transition: '0.4s ease-in-out',
      "&:hover": {
        background: `${buttonPrimary}`,
      }
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          background: `${mainBackground}`,
          minHeight: '100vh',
          marginTop: '5rem'
        },
      }
    },
    MuiGrid: {
      item: {
        // width: '100%!important',
        display: 'flex',
        flexGrow: '1!important',
        flexShrink: '2',
        maxWidth: '100%!important',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }
    }
    
  }
});


const StyledContainer = withStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      maxWidth: '90rem',
      paddingBottom: '1.5rem',
    },
  }
}))(Container);


export { theme, StyledContainer };