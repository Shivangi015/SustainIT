import React from 'react'
import './Collection.css'
import new_collection from '../assets/new-collection'
import Item from '../Item/Item'
const Collection = () => {
  return (
    <div className='new-collections'>
        <h1>TRENDING PRODUCTS</h1>
        <hr/>
        <div className='collections'>
            {new_collection.map((item, i)=>{
                return <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
                />
            })}
        </div>
    </div>
  )
}

export default Collection