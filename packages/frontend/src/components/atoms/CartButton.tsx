import Image from 'next/image'

const CartButton = () => {
  return (
    <div>
      <span>3</span>
      <Image src="/images/cart.svg" width="20" height="20" />
    </div>
  )
}

export default CartButton
