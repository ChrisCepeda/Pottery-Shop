
import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import { Link } from "react-router-dom";


const Product = ({ product, onAddToCart }) => {
const classes = useStyles();

 


  return (
    <Card className={classes.root} style={{cursor:"pointer"}}>
         <Link className="link" to={`/post/${product._id}`}>

        <CardMedia className={classes.media} image={product.url} title={product.title} />
        
        </Link>
        <CardContent>
   

         <div className={classes.cardContent}>
            
             <Typography variant='h6' gutterBottom>
                 {product.title}
             </Typography>

             <Typography variant='h6'>
                 {product.price}
             </Typography>
             </div>    

             <Typography variant='h6' color="textSecondary">
                 {product.description} 
             </Typography>
            
        
        </CardContent> 
   
    <CardActions disableSpacing className={classes.CardActions}>
        <IconButton aria-label='Add to Cart' onClick={() => onAddToCart(product._id)}> <AddShoppingCart />
        </IconButton>
    </CardActions>
    </Card>
  )
}

export default Product