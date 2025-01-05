import { NavLink } from "react-router-dom";
import Logo from "./logo/logo";
function MyNavbar() {
  return (
    <>
      {/* navbar => larg screen  */}
      <div className="flex items-center justify-between px-4 py-6">
        {/* Logo */}
        <Logo />
        {/* Items */}
        <ul className="flex items-center gap-8 text-slate-800  text-lg font-semibold">
          <li className="capitalize  hover:text-green-500 transition duration-300">
            <NavLink to="/" className="pb-1">
              home
            </NavLink>
          </li>
          <li className="capitalize text-base hover:text-green-500 transition duration-300">
            <NavLink to="/about" className="pb-1">
              about
            </NavLink>
          </li>
          <li className="capitalize text-base hover:text-green-500 transition duration-300">
            <NavLink to="/service" className="pb-1">
              service
            </NavLink>
          </li>
          <li className="capitalize text-base hover:text-green-500 transition duration-300">
            <NavLink to="/team" className="pb-1">
              team
            </NavLink>
          </li>
        </ul>
      </div>
      {/* navbar => mobile */}
    </>
  );
}
export default MyNavbar;
