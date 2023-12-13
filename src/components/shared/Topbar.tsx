// GLOBAL
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// LOCAL
import { Button } from "../ui/button";
import { useSignOutAccount } from "@/lib/react-query/queries";
import { useUserContext } from "@/context/AuthContext";

const Topbar = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const { mutate: signOut, isSuccess } = useSignOutAccount();

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess]);

  return (
    <section className="topbar">
      <div className="px-5 py-2 flex-between">
        <Link to="/" className="flex items-center">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={55}
            height={55}
          />
          <span className="-ml-3 text-3xl font-light">instaJam</span>
        </Link>
        <div className="flex">
          <Button
            onClick={() => signOut()}
            variant="ghost"
            className="shad-button_ghost"
          >
            <img src="/assets/icons/logout.svg" alt="sign out" />
          </Button>
          <Link to={`/profile/${user.id}`} className="flex-center">
            <img
              src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
              alt="user image"
              className="w-8 h-8 rounded-full"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
