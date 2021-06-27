import IconLink from '../atoms/IconLink';
import AddToCartButton from '../atoms/AddToCartButton';

const AsideDesktopNav = () => {
  return (
    <aside className="AsideDesktopNav">
      <div>
        <IconLink src="/images/logo.svg" title="home logo" alt="home logo" href="/" />
      </div>
      <div>
        <IconLink src="/images/list.svg" title="list logo" alt="list logo" href="/" />
        <IconLink
          src="/images/history.svg"
          title="history logo"
          alt="history logo"
          href="/history"
        />
        <IconLink
          src="/images/graphs.svg"
          title="stadistics logo"
          alt="stadistics logo"
          href="/stadistics"
        />
      </div>
      <div>
        <AddToCartButton />
      </div>
    </aside>
  );
};

export default AsideDesktopNav;
