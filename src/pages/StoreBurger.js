import React from 'react'
import Burger from '../components/Burger'
import MenuBurger from '../components/MenuBurger'

const StoreBurger = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-12 ">
          <Burger />
        </div>
        <div className="col-lg-5 col-12 text-center ">
          <MenuBurger />
        </div>
      </div>
    </div>
  )
}

export default StoreBurger
