import { Link, Outlet } from "react-router-dom";



const Root = () => {

  return (
    <div>
      <nav>
        <Link to={`/mens`}>Men's Clothing</Link>
        <Link to={`/womens`}>Women's Clothing</Link>
        <Link to={`/jewelry`}>Jewelry</Link>
      </nav>
      < Outlet />
    </div>
  );
};

export default Root;
