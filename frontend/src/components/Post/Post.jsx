import React from 'react';
import useStyles from './styles';
import deco from '../assets/flower.svg';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../../config";


export const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);


  useEffect(() => {
    fetch(`${API_BASE_URL}/pottery/${params.id}`, {
      headers: { "content-type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
    
        } else {
          return response.json();
        }
      })
      .then((json) => {
        setProduct(json);
       
      });
  }, [params.id]);
console.log(params);

  return (
     
    <div className="pottery">

      
      <img className="image" src={product.url} />
      <div className="info"> {product.description} </div>
    </div>
  )
}


export default Product