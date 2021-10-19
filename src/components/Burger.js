import React from 'react'
import { useSelector } from 'react-redux'
const Burger = (props) => {
  const burgerReducer = useSelector((state) => state.BurgerReducer)

  const renderIngredientBurger = () => {
    const array = Object.entries(burgerReducer.burger)
    return array.map((burger, index) => {
      let [ingredient, value] = burger
      let ingredientBurger = []
      for (let i = 0; i < value; i++) {
        ingredientBurger.push(<div key={i} className={ingredient} ></div>)
      }
      return ingredientBurger
    })
  }
  return (
    <div className="text-center my-3">
      <h1>Burger Image</h1>
      <div className="breadTop"></div>
      {renderIngredientBurger()}
      <div className="breadBottom"></div>
    </div>
  )
}

export default Burger
