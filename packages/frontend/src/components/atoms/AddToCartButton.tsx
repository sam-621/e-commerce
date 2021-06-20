import Image from 'next/image';

const AddToCartButton = () => {
  return (
    <button type="button">
      <Image src="/images/add.svg" width={20} height={20} />
    </button>
  );
};

export default AddToCartButton;
