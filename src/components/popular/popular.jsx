import React from 'react'
import './popular.css'
import data_product from '../Assets/data'

export const Popular  = () => {
  return (
    <div className="popular">
      <br></br>
      <br></br>
      <br></br>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>$ {item.new_price}</p>
            <p>$ {item.old_price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
