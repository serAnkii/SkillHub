import { Link, useNavigate } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import Options from "./Options";
interface NavbarProps {
  isAuthenticated: boolean;
  onLogout: () => void;
  onLogin: () => void;
  toggleSideNavbar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isAuthenticated,
  onLogout,
  onLogin,
  toggleSideNavbar,
}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  const handleSignUp = () => {
    onLogin();
    navigate("/app/dashboard");
  };
  const handleLogin = () => {
    onLogin();
    navigate("/app/dashboard");
  };

  return (
    <nav
      className={`flex items-center fixed justify-between w-full mb-5 py-3 px-8`}
    >
      <div className='flex flex-center items-center'>
        {isAuthenticated ? (
          <button type='button' onClick={toggleSideNavbar}>
            <Hamburger size={25} easing='ease-in' />{" "}
          </button>
        ) : (
          <></>
        )}
        <Link
          to={"/"}
          className='text-2xl cursor-pointer flex flex-center text-white hover:no-underline ml-5'
        >
          <img src={"/logo.png"} className='w-10 h-10' alt='logo' />
          <span className='font-semibold p-1'>SkillHub</span>
        </Link>
        {isAuthenticated ? <Options /> : <> </>}
      </div>
      <div className='flex space-x-4 items-center text-center'>
        {isAuthenticated ? (
          <>
            <button
              onClick={handleLogout}
              className='rounded-[15px] font-semibold w-[100px] py-[10px] transition duration-500 text-pink-500
              border border-transparent hover:text-white hover:shadow-[0_0_20px_rgba(192,7,130,0.6)] hover:border-pink-700'
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              className='rounded-[15px] font-semibold w-[100px] py-[10px] transition duration-500 text-pink-500
              border border-transparent hover:text-white hover:shadow-[0_0_20px_rgba(192,7,130,0.6)] hover:border-pink-700'
              // onClick={() => console.log("Login clicked")}
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className='border-0 rounded-[15px] font-semibold w-[100px] py-[10px] transition duration-500 text-white shadow-[0_5px_5px_rgba(192,7,130,0.4)] bg-pink-700/90 mr-10 hover:shadow-[0_10px_10px_rgba(192,7,130,0.4)] hover:bg-pink-600'
              // onClick={() => console.log("Signup clicked")}
              onClick={handleSignUp}
            >
              Signup
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
