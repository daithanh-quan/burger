import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const MenuBurger = () => {
  const burgerMenu = useSelector(state => state.BurgerReducer)
  const dispatch = useDispatch()
  let { menu, burger, total } = burgerMenu
  const renderMenuBurger = () => {
    let arrayMenu = Object.entries(menu)
    return arrayMenu.map((nameIngredient, index) => {
      let [name, price] = nameIngredient
      return <tr key={index}>
        <td className='text-warning'>{name}</td>
        <td>
          <button
            className="btn btn-info"
            onClick={() => {
              const action = {
                type: 'CHANGE_INGREDIENT',
                name: name,
                number: 1
              }
              dispatch(action)
            }}
          >
            +
          </button>
          <span className="mx-1">{burger[name]}</span>
          <button
            className="btn btn-danger"
            onClick={() => {
              const action = {
                type: 'CHANGE_INGREDIENT',
                name: name,
                number: -1
              }
              dispatch(action)
            }}
          >
            -
          </button>
        </td>
        <td className="text-success">{price}</td>
      </tr>
    })
  }
  return (
    <div className="text-center mt-3">
      <h1 className="pb-4">Menu</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Amount</th>
            <th className="text-success">$</th>
          </tr>
        </thead>
        <tbody>
          {renderMenuBurger()}
        </tbody>
        <tfoot>
          <tr>
            <td className="text-success font-weight-bold">Tổng Tiền</td>
            <td></td>
            <td className="text-success font-weight-bold">{total} $</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default MenuBurger
