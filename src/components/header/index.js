import React from 'react';
import PropTypes from 'prop-types';

import { Typography, Grid, AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './style';
const Header = ({ title }) => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar id='back-to-top-anchor' variant="dense">
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Grid container justify="center" spacing={0} >
                    <Typography variant="h6" color="inherit" className={classes.typo}>
                        {title}
                    </Typography>
                </Grid>
            </Toolbar>
        </AppBar>


    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header;
