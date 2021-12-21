import { Container } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";



const StyledContainer = withStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      maxWidth: '90rem',
      paddingBottom: '1.5rem',
      height: '70vh'
    },
  }
}))(Container);

export { StyledContainer }
