import Image from 'next/image'
import { FC } from 'react'

const CartItem: FC<Props> = ({ image, name, price }) => {
  return (
    <article>
      <div>
        <Image src={image} width={80} height={80} />
      </div>
      <div>
        <p>{name}</p>
      </div>
      <div>
        <span>${price}</span>
        <button>eliminar</button>
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
