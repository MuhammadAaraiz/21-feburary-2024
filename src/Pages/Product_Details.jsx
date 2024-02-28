import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


// return (
// export const Product_Details = () => {
// <div>Product_Details</div>
// )
// }

export function Product_Details() {
  const { id } = useParams()
  const [singleCardrender, setsingleproduct] = useState('')
  console.log(id)
  useEffect(() => {
    const fetchsingledata = axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setsingleproduct(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <div>
       <img src={singleCardrender.image} alt="" />
      </div>
    </>
  )

}