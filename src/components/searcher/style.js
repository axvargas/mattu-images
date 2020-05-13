import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: '2.5rem',
        textAlign: 'center',
        borderRadius: '4px',
        width: '100%',
        color: 'black',
        backgroundColor: '#ebebeb',
    },
    typo: {
        marginTop: '2.5rem',
        marginBottom: '2.5rem',
        textAlign: 'center'
    },
    textField: {
        '& label.Mui-focused': {
            color: 'black',
        },
        '& label': {
            color: 'grey',

        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'black',
        },
        '& .MuiInput-underline': {
            borderBottomColor: 'grey',
        },
        '& .MuiInput-input:focus': {
            color: 'black',

        },
        '& .MuiInput-input': {
            color: 'white',
        },
        '& label..MuiInputLabel-outlined': {
            fontSize: 50
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'grey',
            },
            // '&:hover fieldset': {
            //     borderColor: '#828282',
            // },
            '&.Mui-focused fieldset': {
                borderColor: 'black',
            },
            color: 'black',


        },
        width: '100%',
        marginBottom: '2.5rem'

    },
    btn: {
        marginBottom: '2.5rem',
        width: '100%',
        backgroundColor: '#ffa000',
        color: 'white',
        borderRadius: '0px',
        "& .MuiButton-label": {
            paddingTop: '5px',
            paddingBottom: '5px'
        },
        '&:hover': {

            backgroundColor: '#ff8f00',
        },
    }
}));
export default useStyles;