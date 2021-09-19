import CartItem from '@Components/molecules/CartItem'
import { IProduct } from '@Types/products'
import { IReduxState } from '@Types/redux'
import { useSelector } from 'react-redux'

const DesktopCartSection = () => {
  const cart = useSelector<IReduxState>((state) => state.cart) as IProduct[]
  return (
    <aside className='NoProductSelected'>
      <div className='NoProductSelected-card'>
        <p>Cart</p>
      </div>
      <div className='NoProductSelected-cards'>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
    </aside>
  )
}

export default DesktopCartSection
