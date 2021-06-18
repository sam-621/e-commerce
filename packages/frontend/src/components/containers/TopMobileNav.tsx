import Image from 'next/image';
import Title from '../atoms/Title';

const TopMobileNav = () => {
  return (
    <nav>
      <div>
        <Image title="Logo" alt="Logo" src="/images/logo.svg" width={40} height={40} />
      </div>
      <div>
        <Title />
      </div>
      <div></div>
    </nav>
  );
};

export default TopMobileNav;
