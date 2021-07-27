import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Products = () => {
  const products = useSelector((state)=> state.allProducts.products)

  const renderList = products.map((product)=>{
    const {id, image, title, price, category} = product
    return (
      <div key={id} className="col-3 carrd mx-0 my-3">
        <Link to={`/product/${id}`}>
        <div className="card mx-0 ">
          <div className="card-image-top">
            <img className="image" src={image} alt={title} />
          </div>
          <div className="card-body bg-light mx-0">
            <div className="card-title">{title}</div>
            <div>${price}</div>
            <div className="text-muted my-2">{category}</div>
          </div>
        </div>
        </Link>
      </div>
    )
  })
  
  return (
    <div className="row">
      {renderList}
    </div>
  )
}

export default Products
