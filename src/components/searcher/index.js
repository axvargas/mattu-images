import React, { useState } from 'react';

import { Typography, Grid, Paper, TextField, Button, Container } from '@material-ui/core';

import useStyles from './style';
const Searcher = ({setSearch}) => {
    const classes = useStyles();

    // State
    const [text, setText] = useState('');
    const [error, setError] = useState(false);
    const [helper, setHelper] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
        setError(false);
        setHelper('');
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        //Validate
        let errors = 0;
        if (!text.trim()) {
            errors++;
        }
        if (errors > 0) {
            setError(true);
            setHelper('Write something')
        }

        //Send seacrh
        setSearch(text.trim());
    }
    return (
        <Paper elevation={3} className={classes.paper}>
            <Grid container direction="column" justify="center" alignItems="center">
                <Container>
                    <form onSubmit={handleSubmit}>
                        <Typography variant="h5" className={classes.typo}>Image Finder</Typography>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Search"
                            className={classes.textField}
                            onChange={handleChange}
                            value={text}
                            helperText={helper}
                            error={error}
                        />
                        <Button
                            className={classes.btn}
                            type="submit"
                            variant="contained"
                        >
                            <Typography variant="h6">Search</Typography>
                        </Button>
                    </form>
                </Container>
            </Grid>

        </Paper>
    );
}

export default Searcher;
