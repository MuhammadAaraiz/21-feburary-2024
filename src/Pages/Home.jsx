import React, { useEffect, useState } from 'react'
import CardMedia from '@mui/material/CardMedia';
import axios from 'axios'
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import '../App.css'



export const Home = () => {
  useEffect(() => {
    getdata()
  }, [])
  const [products, setProduct] = useState([])
  const getdata = () => {
    const data = axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProduct(res.data)
      })
  }
  getdata()









  return (<>
    <div className="card-container">
      {products.map((e, i) => (
        <div key={i} className="card">
          <img className="card-image" src={e.image} alt={e.title} />
          <div className="card-content">
            <h3 className="card-title">{e.title}</h3>
            <h3 className="card-description">{e.description}</h3>
            <Button className='buttons'> Show Details</Button>
          </div>
        </div>
      ))}
    </div>
  </>
  );
}