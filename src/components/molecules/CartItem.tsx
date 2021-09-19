import Image from 'next/image'
import { FC } from 'react'

const CartItem: FC<Props> = ({ image, name, price }) => {
  return (
    <article className='CartItem'>
      <div className='CartItem-image'>
        <Image src={image} width={80} height={80} />
      </div>
      <div className='CartItem-name'>
        <p>{name}</p>
      </div>
      <div className='CartItem-actions'>
        <span className='CartItem-actions-price'>${price}</span>
        <button className='CartItem-actions-delete'>eliminar</button>
      </div>
    </article>
  )
}

interface Props {
  image: string
  name: string
  price: number
}

export default CartItem
