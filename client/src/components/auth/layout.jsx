import { Outlet } from "react-router-dom";
import logo from './logo.png'; 

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
      <img src={logo} alt="BORA MOBILE WORLD " className="absolute top-6 left-6 w-30 h-16" />
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome to 
          </h1>
          <h1 className="text-4xl font-extrabold tracking-tight">
            BORA MOBILE WORLD
          </h1>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
