import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const CategoryGrid = withStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}))(Grid);

const CategorySubGrid = withStyles(theme => ({
  root: {
    width: '100%',
    marginBottom: '0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  }
}))(Grid);

const HalfWidthCard = withStyles(theme => ({
  root: {
    zIndex: '5',
    position: 'relative',
    width: '35.75rem',
    maxWidth: '100%',
    height: '20rem',
    borderRadius: '0.5rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    [theme.breakpoints.up('md')]: {
      width: '49%',
      marginBottom: '1rem'
    }, 
    [theme.breakpoints.down('md')]: {
      width: '60rem',
      marginBottom: '1rem'
    }, 
    [theme.breakpoints.down('sm')]: {
      width: '30rem',
      marginBottom: '1rem'
    },
  }
}))(Card);

const FullWidthCard = withStyles (theme => ({
  root: {
    width: '100%',
    // zIndex: '5',
    position: 'relative',
    marginTop: '0.5rem',
    marginBottom: '1.5rem',
    maxHeight: '20rem',
    // minHeight: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0.5rem',
    [theme.breakpoints.down('md')]: {
      width: '60rem',
      marginTop: '0rem',
      justifyContent: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '0rem',
      width: '30rem',
      marginBottom: '1rem'
    },
  }
}))(Card);

const CategoryCardTitle = withStyles((theme) => ({
  root: {
    position: 'absolute', 
    zIndex: '10',
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'column',
    // backgroundColor: `${theme.palette.grays.mdFull}`, 
    background: 'none',
    width: '100%', 
    height: '100%', 
    padding: '0!important',
    '&:hover': {
      transition: 'all .22s ease-in-out',
      transform: 'scale(2)',
      opacity: '0',
    },
  }
}))(CardContent);

const CategoryTypography = withStyles((theme) => ({
  root: {
    zIndex: '5',
    position: 'absolute', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    color: `${theme.palette.whites.full}`,
    backgroundColor: `${theme.palette.grays.mdFull}`,
  }
}))(Typography);

const CategoryCardContent = withStyles((theme) => ({
  root: {
    zIndex: '5',
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'column',
    backgroundColor: 'transparent', 
    background: 'none',
    width: '100%', 
    height: '100%', 
    padding: '0!important',
    backgroundColor: `${theme.palette.grays.full}`,
    transition: 'all .22s ease-in-out'
  }
}))(CardContent);

export { CategoryGrid, CategorySubGrid, HalfWidthCard, FullWidthCard, CategoryCardTitle, CategoryCardContent, CategoryTypography }
