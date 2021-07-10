import Image from 'next/image';

const NoProductSelected = () => {
  return (
    <aside className="NoProductSelected">
      <div className="NoProductSelected-card">
        <div className="NoProductSelected-card-image">
          {/* <Image src="/image/drink.svg" width={40} height /> */}
        </div>
        <div className="NoProductSelected-card-text">
          <p>
            Here you will see <br /> products your going <br /> to buy
          </p>
        </div>
      </div>
      <div className="NoProductSelected-image">
        <Image src="/images/girl-with-cart.svg" width={245} height={203} />
      </div>
    </aside>
  );
};

export default NoProductSelected;
