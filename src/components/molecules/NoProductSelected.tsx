import Image from 'next/image';

const NoProductSelected = () => {
  return (
    <aside className="NoProductSelected">
      <div className="NoProductSelected-card">
        <p>Here you will see products your going to buy</p>
      </div>
      <div className="NoProductSelected-image">
        <Image src="/images/girl-with-cart.svg" width={245} height={203} />
      </div>
    </aside>
  );
};

export default NoProductSelected;
