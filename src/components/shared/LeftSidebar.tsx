// GLOBAL
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

// LOCAL
import { INITIAL_USER, useUserContext } from "@/context/authContext";
import { useSignOutAccount } from "@/lib/react-query/queries";
import Loader from "./Loader";
import { sidebarLinks } from "@/constants";
import { INavLink } from "@/types";
import { Button } from "../ui/button";

const LeftSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user, setUser, setIsAuthenticated, isLoading } = useUserContext();
  const { mutate: signOut } = useSignOutAccount();

  const handleSignOut = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    signOut();
    setIsAuthenticated(false);
    setUser(INITIAL_USER);
    navigate("/sign-in");
  };

  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex items-center">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={55}
            height={55}
            className="-m-px"
          />
          <span className="-ml-3 text-3xl font-light">instaJam</span>
        </Link>

        {isLoading || !user.email ? (
          <div className="h-14">
            <Loader />
          </div>
        ) : (
          <Link
            to={`/profile/${user.id}`}
            className="flex items-center justify-between pr-5"
          >
            <img
              src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
              alt="user image"
              className="rounded-full h-14 w-14"
            />
            <div className="flex flex-col">
              <p className="body-bold">{user.name}</p>
              <p className="small-regular text-light-3">@{user.username}</p>
            </div>
          </Link>
        )}

        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${
                  isActive && "bg-primary-500"
                }`}
              >
                <NavLink
                  to={link.route}
                  className="flex items-center gap-4 p-4"
                >
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert-white ${
                      isActive && "invert-white"
                    }`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <Button
        variant="ghost"
        className="shad-button_ghost"
        onClick={(e) => handleSignOut(e)}
      >
        <img src="/assets/icons/logout.svg" alt="sign out" />
        <p className="small-medium lg:base-medium">sign out</p>
      </Button>
    </nav>
  );
};

export default LeftSidebar;
