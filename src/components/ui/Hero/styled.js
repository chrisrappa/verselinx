import { 
  Button,
  Card, 
  CardActionArea, 
  CardContent, 
  CardMedia, 
  Container, 
  Grid,
  Typography, 
} from '@material-ui/core';
import { withStyles } from "@material-ui/styles";



const StyledHeroContainer = withStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexGrow: 1,
    paddingTop: '1rem',
    paddingBotton: '1rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    background: 'white',
    borderRadius: '0.75rem',
    boxShadow: `${theme.boxShadows.inset.boxShadow}`,
    backgroundColor: `${theme.palette.secondary.veryLight}`,
    
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30rem',
      paddingBottom: '1.5rem',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '1.5rem'
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '60rem',
      paddingBottom: '0.5rem',
      justifyContent: 'center',
      alignItems: 'center'
    }, 
    [theme.breakpoints.up('lg')]: {
      maxWidth: '90rem',
      paddingBottom: '1.5rem'
    },
    minHeight: '45vh',
  },
}))(Container);

const StyledCard = withStyles((theme, props) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    width: '100%',
    height: '20rem',
    transition: 'all 0.2s ease-in-out',
    "&:hover": {
      // transition: 'all 0.5s ease-in-out',
      transform: 'scale(1.05)'
    }
  }
}))(Card);

const StyledCardContent = withStyles((theme) => ({
  root: {
    position: 'absolute', 
    zIndex: '5',
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'column',
    backgroundColor: `${theme.palette.grays.mdFull}`, 
    background: 'none',
    width: '100%', 
    height: '100%', 
    padding: '0!important',
    cursor: 'pointer',
  }
}))(CardContent);


const StyledCardMedia = withStyles(theme => ({
  root: {
    position: 'relative',
    zIndex: '0',
    height: '100%', 
    padding: '0',
  }
}))(CardMedia);

const StyledGridContainer = withStyles(theme => ({
  root: {
    width: '100%'
  }
}))(Grid);

const StyledCardActionArea = withStyles(theme => ({
  root: {
    height: '100%'
  }
}))(CardActionArea);

const StyledTypography = withStyles(theme => ({
  root: {
    ...theme.typography.primary,
    fontWeight: 400,
    paddingRight: '1rem',
    paddingLeft: '1rem'
  }
}))(Typography);

const StyledButton = withStyles(theme => ({
  root: {
    ...theme.buttons.primary,
    marginTop: '1rem'
  }
}))(Button);

export { StyledHeroContainer, StyledCard, StyledCardMedia, StyledGridContainer, StyledCardContent, StyledCardActionArea, StyledTypography, StyledButton };