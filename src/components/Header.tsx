import LogoImage from "../assets/image/logo.svg"

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header-inner">
          <img src={LogoImage} alt="Logo" className="header-logo" />
          <div className="header-title">
            <span className="casino">Casino</span>
            <span className="calc">Calculator</span>
          </div>
        </div>
      </header>
    </>
  );
}
