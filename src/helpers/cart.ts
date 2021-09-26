import { addToCartProduct, removeCartProduct } from '@Redux/ducks/cart'
import { IProduct } from '@Types/products'
import { IAction } from '@Types/redux'
import { Dispatch } from 'react'

const CART_FIELD = 'cart'

export const addProductToCartWithNoSession = (product: IProduct, dispatch: Dispatch<IAction>) => {
  const cart: IProduct[] = JSON.parse(localStorage.getItem(CART_FIELD)) || []

  localStorage.setItem(CART_FIELD, JSON.stringify([...cart, product]))
  dispatch(addToCartProduct(product))
}

export const removePorductWithNoSession = (id: number, dispatch: Dispatch<IAction>) => {
  const cart: IProduct[] = JSON.parse(localStorage.getItem(CART_FIELD)) || []

  const coursesFiltered = cart.filter((item) => item.id !== id)

  localStorage.setItem(CART_FIELD, JSON.stringify(coursesFiltered))
  dispatch(removeCartProduct(id))
}

export const getCartProductsFromLS = (): IProduct[] => {
  return JSON.parse(window.localStorage.getItem(CART_FIELD)) || []
}
