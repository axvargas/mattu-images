import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '0px',

    },
    typo: {
        color: 'black',
        fontWeight: '700',
        marginBottom: '50px',
        marginTop: '80px',

    },
    paper: {
        textAlign: 'center',
        backgroundColor: '#0277bd',
        borderRadius: '0px',
        width: '100%',
        color: 'white',
        minHeight: '48px'
    },
    fab: {
        backgroundColor: '#ffa000',
    }
}));
export default useStyles;