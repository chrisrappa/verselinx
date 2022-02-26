import { Tab } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";


const StyledTab = withStyles(theme => ({
  root: {
    fontFamily: `${theme.typography.primary.fontFamily}`,
    fontSize: '1.25rem'
  }
}))(Tab);

export { StyledTab };