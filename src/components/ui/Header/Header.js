// React Imports
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Material UI Core Imports
import { 
    useTheme,
    CssBaseline, 
    useMediaQuery, 
    Typography, 
    AppBar, 
    Toolbar,
    Button, 
    Tabs, 
    Tab, 
    Menu, 
    SwipeableDrawer,
    List,
    ListItemText
} from '@material-ui/core';

// Styled Imports
import { 
    useStyles, 
    ElevationScroll, 
    StyledMenuItem, 
    StyledIconButton, 
    StyledMenuIcon,
    StyledListItem
} from './styled';


// Accessibility Compliance
function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
}
  
function Header(props) {

    // Initialization
    const classes = useStyles();
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    // Hooks
    const [openMenuDrawer, setOpenMenuDrawer] = useState(false);
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Menu Items
    const menuOptions = [
        {id: 1, name: "All Templates", link: '/templates'},
        {id: 2, name: "NFT Store", link: '/nftstore'},
        {id: 3, name: "Web 3.0 Social App", link: '/web3social'},
        {id: 4, name: "Web 2.0 Social App", link: '/web2social'},
    ]

    // Click Functions
    const handleChange = (e, value) => {
        setValue(value);
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    }

    const handleClose = (e) => {
        setAnchorEl(null);
        setOpenMenu(false);
    }

    const handleMenuItemClick = (e, index) => {
        setAnchorEl(null);
        setOpenMenu(false);
        setSelectedIndex(index);
    }

    // Responsible for setting "selected" style based on pathname
    useEffect(() => {
        switch(window.location.pathname){
            case '/': 
                setValue(0)
                break;
            case '/templates':
                setValue(1)
                setSelectedIndex(0)
                break;
            case '/nftstore':
                setValue(1)
                setSelectedIndex(1)
                break;
            case '/web3social':
                setValue(1)
                setSelectedIndex(2)
                break;
            case '/web2social':
                setValue(1)
                setSelectedIndex(3)
                break;
            case '/support':
                setValue(2)
                break;
            default: return;
        }
    }, [value])

    // Menu Tabs
    const tabs = (
        <>
            <Tabs 
                value = {value} 
                onChange = {handleChange} 
                className = {classes.tabContainer}
                TabIndicatorProps={{ 
                    style: {
                        display: "none",
                    },
                    }}
            >
                <Tab 
                    className = {classes.tab} 
                    component = { Link } 
                    to = '/'
                    label = "Home" 
                    {...a11yProps(0)} 
                />
                <Tab 
                    aria-owns = {anchorEl ? 'templates-menu' : undefined}
                    aria-haspopup = {anchorEl ? true : undefined}
                    className = {classes.tab} 
                    component = { Link } 
                    to = '/templates'
                    label = "Templates" 
                    onMouseOver = {e => handleClick(e)}
                    {...a11yProps(1)} 
                />
                <Tab 
                    className = {classes.tab} 
                    component = { Link } 
                    to = 'support'
                    label = "Support" 
                    {...a11yProps(3)} 
                />
            </Tabs>

            {/* Dropdown Menu */}
            <Menu 
                id = 'templates-menu' 
                anchorEl = {anchorEl}
                open = {openMenu} 
                onClose = {handleClose}
                classes = {{list: classes.dropdown}}
                MenuListProps = {{onMouseLeave: handleClose}}
            >
                {/* Iterate through menuOptions array */}
                {
                    menuOptions.map((option, index)=> (
                        <StyledMenuItem
                            key = {option.id}
                            onClick = {(e) => {
                                handleMenuItemClick(e, index); 
                                setValue(1); 
                                handleClose();
                            }}
                            selected = {index === selectedIndex && value === 1 ? true : false}
                            component = {Link} 
                            to = {option.link}

                        >
                            {option.name}
                        </StyledMenuItem>
                    ))
                }
            </Menu>
        </>
    )

    // Mobile Menu Drawer
    const drawer = (
        <>
            <SwipeableDrawer 
                disableBackdropTransition={!iOS} 
                disableDiscovery={iOS} 
                open = {openMenuDrawer} 
                onClose = {() => setOpenMenuDrawer(false)} 
                onOpen = {() => setOpenMenuDrawer(true)} 
            >
            
            <List>
                {
                    menuOptions.map((option, index)=> (
                        <StyledListItem 
                            key = {option.id} 
                            component = {Link} 
                            to = {option.link}
                        >
                            <ListItemText disableTypography primary = {option.name} />
                        </StyledListItem>
                    ))
                }
            </List>

            </SwipeableDrawer>
            <StyledIconButton onClick = {() => setOpenMenuDrawer(!openMenuDrawer)} disableRipple>
                <StyledMenuIcon />
            </StyledIconButton>
        </>
    )

    return (
        <>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar className = {classes.root}>
                    <Toolbar>
                        <Button 
                            className = { classes.logoContainer } 
                            component = { Link } 
                            to = '/' 
                            onClick = {() => setValue(0)}
                            disableRipple
                        >
                            <Typography variant = "h6">
                                verseLinx
                            </Typography>   
                        </Button>

                        { matches ? tabs : drawer}
                        
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className = {classes.toolbarMargin} />
        </>
    )
}

export default Header;
