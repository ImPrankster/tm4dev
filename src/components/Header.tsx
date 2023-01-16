import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar flex space-x-2">
      <Link to="/" className="btn-ghost btn">
        Dashboard
      </Link>
      <Link to="/account" className="btn-ghost btn">
        Account
      </Link>
    </div>
  );
};

export default Header;
