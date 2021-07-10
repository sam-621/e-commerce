import Image from 'next/image';

const NoProductSelected = () => {
  return (
    <div className="NoProductSelected">
      <div className="NoProductSelected-image">
        {/* <Image src="/image/drink.svg" width={40} height /> */}
      </div>
      <div className="NoProductSelected-text">
        <p>
          Here you will see <br /> products your going <br /> to buy
        </p>
      </div>
    </div>
  );
};

export default NoProductSelected;
