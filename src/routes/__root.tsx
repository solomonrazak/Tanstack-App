import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import '../styles.css';

export const Route = createRootRoute({
  component: () => (
    <>
       <div className="nav-container">
      <ul>
        <Link to="/" className="[&.active]:font-bold">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
