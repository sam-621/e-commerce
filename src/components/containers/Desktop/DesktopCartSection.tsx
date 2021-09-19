import Image from 'next/image'

const DesktopCartSection = () => {
  return (
    <aside className='NoProductSelected'>
      <div className='NoProductSelected-card'>
        <p>Cart</p>
      </div>
      <div>cart products</div>
      <div className='NoProductSelected-image'>
        <Image src='/images/girl-with-cart.svg' width={245} height={203} />
      </div>
    </aside>
  )
}

export default DesktopCartSection
