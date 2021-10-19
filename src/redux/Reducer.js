const defaultState = {
  burger: { salad: 1, beef: 1, cheese: 1 },
  menu: { salad: 10, beef: 35, cheese: 20 },
  total: 65
}
const BurgerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_INGREDIENT': {
      // tạo 1 state burger mới
      const newBurger = { ...state.burger }
      let { name, number } = action
      // cộng số lượng thành phần trong burger
      if (newBurger[name] < 1 && number === -1) {
        return { ...state }
      }
      newBurger[name] += number
      state.total += number * state.menu[name]
      // tính tổng tiền
      // gán lại state burger
      state.burger = newBurger
      return { ...state }
    }
    default: return { ...state }
  }
}
export default BurgerReducer