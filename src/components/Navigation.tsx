import { Outlet, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      <NavLink to="/">home</NavLink>

      <Outlet />
    </>
  );
}

export default Navigation;
