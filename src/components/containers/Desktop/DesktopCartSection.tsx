import CartItem from '@Components/molecules/CartItem'
import { IProduct } from '@Types/products'
import { IReduxState } from '@Types/redux'
import Image from 'next/image'
import { useSelector } from 'react-redux'

const DesktopCartSection = () => {
  const cart = useSelector<IReduxState>((state) => state.cart) as IProduct[]
  return (
    <aside className='NoProductSelected'>
      <div className='NoProductSelected-card'>
        <p>Cart</p>
      </div>
      <div>
        {cart.map((item) => (
          <CartItem key={item.id} name={item.name} image={item.image} price={item.price} />
        ))}
      </div>
      <div className='NoProductSelected-image'>
        <Image src='/images/girl-with-cart.svg' width={245} height={203} />
      </div>
    </aside>
  )
}

export default DesktopCartSection
