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
    ListItemText,
} from '@material-ui/core';

import {
    ExpandLess,
    ExpandMore,
} from '@material-ui/icons';

// Styled Imports
import { 
    useStyles, 
    ElevationScroll, 
    StyledMenuItem, 
    StyledIconButton, 
    StyledMenuIcon,
    StyledListItem,
    StyledList,
    StyledCollapse
} from './styled';

import {
    templateMenuOptions,
    mobileMenuOptions
} from './menuOptions';


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

    const [mobileDropdown, setMobileDropdown] = useState(false);

    // const readCookie = (name) => {
    //     let i;
    //     var c = document.cookie.split('; ');
    //     cookies = {}, i, c;

    //     for (i = c.length - 1; i >= 0; i--) {
    //         C = c[i].split('=');
    //         cookies[C[0]] = C[1];
    //      }
    
    //      return cookies[name]; 
    // }

    // const getCookie = (cname) => {
    //     let name = cname + "=";
    //     let decodedCookie = decodeURIComponent(document.cookie);
    //     let ca = decodedCookie.split(';');
    //     for(let i = 0; i <ca.length; i++) {
    //         let c = ca[i];
    //         while (c.charAt(0) === ' ') {
    //         c = c.substring(1);
    //         }
    //         if (c.indexOf(name) === 0) {
    //         return c.substring(name.length, c.length);
    //         }
    //     }
     
    //     return "";
    // }

    // var googleTransCookie = getCookie('googtrans');

    // const setCookie = (cname) => {
    //     document.cookie = cname;
        
    // }
    // Finds out if select dropdown was changed and set googleTransCookie
    // const seeChange = document.getElementsByClassName('goog-te-combo')[0];
    
    // if(document.getElementById('google_translate_element')){
    //     seeChange.onchange = () => {
    //         var currentLang = getCookie('googtrans');
    //         googleTransCookie = currentLang;
    //         console.log(googleTransCookie);
    //     }
    // }



    // = function() {
    //     var index = this.selectedIndex;
    //     var inputText = this.children[index].innerHTML.trim();
    //     // const cookie = getCookie('googtrans');
    //     // console.log('getCookie', cookie);
    //     console.log(inputText);
    // }

    
    

    // console.log(getCookie('googtrans'))


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

    const handleMobileDropdown = () => {
        setMobileDropdown(!mobileDropdown);
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
            case '/templates/nftstore':
                setValue(1)
                setSelectedIndex(1)
                break;
            case '/templates/web3social':
                setValue(1)
                setSelectedIndex(2)
                break;
            case '/templates/web2social':
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
                    to = '/templates/:id'
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
                
                {/* Google Translate */}
                {/* <div id="google_translate_element" /> */}

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
                {/* Iterate through templateMenuOptions array */}
                {
                    templateMenuOptions.map((option, index)=> (
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
            
            <StyledList>
                {
                    mobileMenuOptions.map((option, index)=> (
                        <StyledListItem 
                            key = {option.id} 
                            component = {Link} 
                            to = {option.link}
                            divider
                            button
                            onClick = {() => {setOpenMenuDrawer(false); setValue(option.id)}}
                        >
                            <ListItemText disableTypography primary = {option.name} />
                        </StyledListItem>
                    ))
                }
                <StyledListItem button onClick = {handleMobileDropdown}>
                    <ListItemText disableTypography primary = "Templates" />
                    {mobileDropdown ? <ExpandLess /> : <ExpandMore />}
                </StyledListItem>
                <StyledCollapse in={mobileDropdown} timeout="auto" unmountOnExit>
                    <StyledList>
                        {   
                            templateMenuOptions.map((option, index) => (
                                <StyledListItem
                                    key = {option.id}
                                    onClick = {(e) => {
                                        handleMenuItemClick(e, index); 
                                        setValue(1); 
                                        handleMobileDropdown();
                                        setOpenMenuDrawer(false);

                                    }}
                                    selected = {index === selectedIndex && value === 1 ? true : false}
                                    component = {Link} 
                                    to = {option.link}
                                    className = {classes.nested}
                                >
                                    {option.name}
                                </StyledListItem>
                            ))
                            
                        }

                    </StyledList>
                </StyledCollapse>
            </StyledList>

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
                <AppBar className = {classes.root} >
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
