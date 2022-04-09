import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';
import image from './assets/index.jpg';
import pic from './assets/welcome.svg';
import courses from './assets/courses.svg';
import deco from './assets/flower.svg';




const Products = ( {items, onAddToCart} ) =>{
    const classes = useStyles();
    
    
    return(
     <main classes={classes.content}>
       
     <div className={classes.toolbar}/>

     <div className={classes.header}>

     <img src={pic} width='30%'/>
     </div>   

     <div className={classes.indexImage} >
     <img src={image} width='60%' style={{'borderRadius':'5px'}} />
     </div>

      <div className={classes.textContainer}>
      <img src={deco} width='30%' style={{'paddingBottom':'20px'}}/>
      <Typography variant='body1' >
        Cepeda form and design is an established pottery and cheramics company. <br />
        We focus on learning, exploring and understanding the many qualities of clay.<br />
        On this site you can book different courses and tours and of course
        buy our own brand cheramics.  <br />
        Please contact us if you have any questions or want to book a course or tour.
      </Typography>
      </div>

      <div className={classes.header} >
     <img src={courses} width='30%'  />
     </div>
  
       <Grid container justifyContent='center' spacing={4} >
       {items.map((product) => ( 
         
      
         <Grid item key={product.id} xs={12} sm={6} m={4} lg={3}>
         <Product product={product} onAddToCart={onAddToCart}/>

        </Grid>
    ))}
     </Grid>
 </main>
 );
}


export default Products; 