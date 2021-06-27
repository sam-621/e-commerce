import Link from 'next/link';
import Image from 'next/image';
import AddToCartButton from '../atoms/AddToCartButton';

const AsideDesktopNav = () => {
  return (
    <aside className="AsideDesktopNav">
      <div>
        <Link href="/">
          <a href="">
            <Image
              title="main logo"
              alt="main logo"
              src="/images/logo.svg"
              width={40}
              height={40}
            />
          </a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a href="">
            <Image
              title="list logo"
              alt="list logo"
              src="/images/list.svg"
              width={40}
              height={40}
            />
          </a>
        </Link>
        <Link href="/history">
          <a href="">
            <Image
              title="history logo"
              alt="history logo"
              src="/images/history.svg"
              width={40}
              height={40}
            />
          </a>
        </Link>
        <Link href="/stadistics">
          <a href="">
            <Image
              title="stadistics logo"
              alt="stadistics logo"
              src="/images/graphs.svg"
              width={40}
              height={40}
            />
          </a>
        </Link>
      </div>
      <div>
        <AddToCartButton />
      </div>
    </aside>
  );
};

export default AsideDesktopNav;
