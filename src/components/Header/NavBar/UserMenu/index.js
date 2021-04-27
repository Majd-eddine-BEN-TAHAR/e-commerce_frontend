import { Link } from "react-router-dom";
import useStore from "../../../../store/useStore";

const UserMenu = () => {
  const userMenu = useStore((state) => state.userMenu);
  const closeUserMenuAndSidebar = useStore(
    (state) => state.closeUserMenuAndSidebar
  );

  const userInfo = useStore(({ userInfo }) => userInfo);

  const logout = useStore(({ logout }) => logout);

  let loggedIn = false;
  let isAdmin = false;
  if (userInfo !== null) {
    if (userInfo.token) loggedIn = true;
    if (userInfo.role === "admin") isAdmin = true;
  }

  if (!userMenu) return null;

  return (
    <div className="w-auto p-2 capitalize flex flex-col bg-gray-200 absolute top-120% right-0 z-20">
      {loggedIn && isAdmin ? (
        <Link
          to="/admin/products"
          className="font-medium  hover:underline whitespace-nowrap"
          onClick={closeUserMenuAndSidebar}
        >
          admin panel
        </Link>
      ) : null}

      {loggedIn ? (
        <>
          <Link
            to="/dashboard"
            className="font-medium  hover:underline"
            onClick={closeUserMenuAndSidebar}
          >
            dashboard
          </Link>
          <Link
            to="/"
            className="font-medium  hover:underline"
            onClick={() => {
              closeUserMenuAndSidebar();
              logout();
            }}
          >
            logout
          </Link>
        </>
      ) : (
        <>
          <Link
            to="/login"
            className="font-medium hover:underline"
            onClick={closeUserMenuAndSidebar}
          >
            login
          </Link>

          <Link
            to="/register"
            className="font-medium  hover:underline"
            onClick={closeUserMenuAndSidebar}
          >
            register
          </Link>
        </>
      )}
    </div>
  );
};

export default UserMenu;
