import React from "react";
import { Collapse, IconButton, List, ListItem, makeStyles, MenuItem } from "@material-ui/core";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { withStyles } from "@material-ui/styles";
import MenuIcon from '@material-ui/icons/Menu';


const ElevationScroll = (props) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    backgroundColor: 'white' 
  });
}

const useStyles = makeStyles(theme => ({
  root: {
    background: 'transparent'
  },
  toolbarMargin: {
    ...theme.mixins.toolbar
  },
  tabContainer: {
    color: 'white',
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    fontWeight: '500',
    fontSize: '1rem',
  },
  logoContainer: {
    ...theme.typography.h5,
    padding: '0',
    '&:hover': {
      backgroundColor: 'transparent'
    }

  },

}));

const StyledMenuItem = withStyles(theme => ({
  root: {
    ...theme.typography.tabSecondary,
    "&$selected":{
      backgroundColor: `${theme.palette.secondary.main}`,
    }
  },
  selected: {
    color: `${theme.typography.primary.color}`,
  }
  
}))(MenuItem);

const StyledIconButton = withStyles(theme => ({
  root: {
    color: 'white',
    marginLeft: 'auto',
    "&:hover": {
      backgroundColor: 'transparent'
    }
  }
}))(IconButton);

const StyledMenuIcon = withStyles(theme => ({
  root: {
    height: '40px',
    width: '40px'
  }
}))(MenuIcon);

const StyledList = withStyles(theme => ({
  root: {
    minWidth: '15rem',
    '&:hover': {
      backgroundColor: 'white'
    }
  }
}))(List);

const StyledListItem = withStyles(theme => ({
  root: {
    ...theme.typography.tabSecondary,
    fontSize: '1.5rem',
    minWidth: '5rem',
  }
}))(ListItem);

const StyledCollapse = withStyles(theme => ({
  root: {
    ...theme.typography.tabSecondary,
    fontSize: '1.5rem',
    minWidth: '5rem'
  }
}))(Collapse)




export {useStyles, ElevationScroll, StyledMenuItem, StyledIconButton, StyledMenuIcon, StyledList, StyledListItem, StyledCollapse};