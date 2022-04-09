import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {

    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  
  },
  root: {
    flexGrow: 1,
  },
   
  toolbar:{
    paddingTop:'150px',
  },

  header:{
    padding:'5px',
    textAlign:'center',
    padding:'20px',
   
  },

  indexImage:{
    textAlign:'center',
  
  },

   textContainer:{

     justifyContent:'center',
     padding:'20px',
     textAlign:'center',
     margin:'50px',
     borderBottom:'1px solid #000',

   },


}));