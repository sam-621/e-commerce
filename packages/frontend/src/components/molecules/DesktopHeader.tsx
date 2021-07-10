import PrimaryLink from '../atoms/PrimaryLink';

const DesktopHeader = () => {
  return (
    <header>
      <div>
        <h1>
          <strong>Shoppingify</strong>allows you take your shopping list wherever you go
        </h1>
      </div>
      <div>
        <PrimaryLink text="Register" url="/register" />
      </div>
    </header>
  );
};

export default DesktopHeader;
