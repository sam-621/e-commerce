import DeleteButton from '@Components/atoms/Butons/DeleteButton'
import { removePorductWithNoSession } from '@Helpers/cart'
import Image from 'next/image'
import { FC } from 'react'
import { useDispatch } from 'react-redux'

const CartItem: FC<Props> = ({ image, name, price, id }) => {
  const dispatch = useDispatch()

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
        <DeleteButton onClick={() => removePorductWithNoSession(id, dispatch)} />
      </div>
    </article>
  )
}

interface Props {
  image: string
  name: string
  price: number
  id?: number
}

export default CartItem
