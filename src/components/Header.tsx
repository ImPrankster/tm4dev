import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="navbar fixed top-0 z-30 flex h-16 w-full justify-center space-x-2 bg-base-100 bg-opacity-70 text-base-content shadow-md 
    backdrop-blur transition-all duration-100"
    >
      <Link to="/" className="btn-ghost btn">
        Dashboard
      </Link>
      <Link to="/account" className="btn-ghost btn ">
        Account
      </Link>
    </div>
  );
};

export default Header;
