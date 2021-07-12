import IconLink from '../atoms/IconLink';
import AddToCartButton from '../atoms/Butons/AddToCartButton';

const AsideDesktopNav = () => {
  return (
    <aside className="AsideDesktopNav">
      <div className="AsideDesktopNav-forPadding">
        <div className="AsideDesktopNav-logo">
          <IconLink src="/images/logo.svg" title="home logo" alt="home logo" href="/" />
        </div>
        <div className="AsideDesktopNav-iconLinks">
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
        <div className="AsideDesktopNav-cart">
          <AddToCartButton />
        </div>
      </div>
    </aside>
  );
};

export default AsideDesktopNav;
