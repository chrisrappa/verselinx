import { Card, Grid } from "@material-ui/core";
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
    width: '35.75rem',
    maxWidth: '100%',
    height: '20rem',
    borderRadius: '0.5rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: '0.5rem',
    marginBottom: '1rem',
    minHeight: '20rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0.5rem',
    [theme.breakpoints.down('md')]: {
      width: '60rem',
      marginTop: '0rem',
      paddingBottom: '1.5rem',
      justifyContent: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '0rem',
      width: '30rem',
      marginBottom: '1rem'
    },
  }
}))(Card)

export { CategoryGrid, CategorySubGrid, HalfWidthCard, FullWidthCard }
