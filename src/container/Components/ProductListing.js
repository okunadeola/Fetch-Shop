import { useEffect, useState } from 'react'
import Products from './Products'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {setProducts} from  '../redux/actions/ProductionsAction'
import Gif from './Gif'
const ProductListing = () => {
  const [ready, setready] = useState(false)
  const products = useSelector((state)=> state.allProducts.products)
  const dispatch = useDispatch()

  useEffect(() => {
   fetchData()
  }, [])
  const fetchData = async ()=>{
    const response = await axios.get("https://fakestoreapi.com/products").catch(err=> console.log(err))

    if (response !== undefined) {
      dispatch(setProducts(response.data)) 
      setready(true)
    }
  } 
  

  return (
    <div className="container">
      {ready ? (
        <Products/> 
      ): (
         <div className="my-5 text-center">
           <Gif/>
          ...loading 
        </div>
       )} 
    </div>
  )
}

export default ProductListing

