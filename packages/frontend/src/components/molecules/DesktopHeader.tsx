import PrimaryLink from '../atoms/PrimaryLink';
import SecondaryLink from '../atoms/SecondaryLink';

const DesktopHeader = () => {
  return (
    <header className="DesktopHeader">
      <div className="DesktopHeader-text">
        <h1>
          <strong>Shoppingify</strong> allows you take your
          <br /> shopping list wherever you go
        </h1>
      </div>
      <div className="DesktopHeader-options">
        <SecondaryLink text="Login" url="/login" />
        <PrimaryLink text="Register" url="/Register" />
      </div>
    </header>
  );
};

export default DesktopHeader;
