//This file is for styling the classes.

import { makeStyles } from '@material-ui/core/styles';


//We export the call to the function 'makestyles'
//It take back one parameter and that is another callback function with an instant return.
//An instant return => you wrap it in parenthesis

export default  makeStyles (() => ({
    root: {
        maxWidth: '100%'
    },
    media: {
        height: '0',
        paddingTop:'60%',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent:{
        display: 'flex',
        justifyContent: 'space-between',
        

    },

}));
