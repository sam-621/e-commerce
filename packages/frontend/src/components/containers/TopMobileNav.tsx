import Image from 'next/image';

const TopMobileNav = () => {
  return (
    <nav>
      <div>
        <Image title="Logo" alt="Logo" src="/images/logo.svg" width={40} height={40} />
      </div>
      <div></div>
      <div></div>
    </nav>
  );
};

export default TopMobileNav;
