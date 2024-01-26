import { useUserContext } from "@/context/authContext";
import { Outlet, Navigate } from "react-router-dom";

export default function AuthLayout() {
  const { isAuthenticated } = useUserContext();

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-col items-center justify-center flex-1">
            <Outlet />
          </section>

          <img
            src="/assets/images/side-img.svg"
            alt="logo"
            className="hidden object-cover w-1/2 h-screen bg-no-repeat xl:block"
          />
        </>
      )}
    </>
  );
}
