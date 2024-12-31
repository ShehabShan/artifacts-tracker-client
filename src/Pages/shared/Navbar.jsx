import { Link, NavLink } from "react-router-dom";
import useAuthDetails from "../../Context/AuthContext/useAuthDetails";

import logo from "../../assets/icon/logo2.jpg";

const Navbar = () => {
  const { user, singOutUser } = useAuthDetails();
  console.log(user);

  const hanldeSingOut = () => {
    singOutUser()
      .then(() => {
        console.log("Successful Sing Out");
      })
      .catch((error) => {
        console.log("failed to sing out", error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allArtifacts">All Artifacts</NavLink>
      </li>
      <li>
        <NavLink to="/addArtifacts">Add Artifacts</NavLink>
      </li>
    </>
  );

  const dropDown = (
    <>
      <li>
        <NavLink to="/myArtifacts" className="justify-between">
          My Artifacts
        </NavLink>
      </li>
      <li>
        <NavLink to="/LikedArtifacts">Liked Artifacts</NavLink>
      </li>
      <li>
        <button
          onClick={hanldeSingOut}
          className=" bg-blue-500 text-white py-1 border flex justify-center "
        >
          Sing Out
        </button>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#262626]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-[#7d7d7d] rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img className="w-12 rounded-full" src={logo} alt="Logo" />
          <h3 className="text-2xl ">Historical Artifacts Tracker</h3>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" flex gap-3 text-[#7d7d7d]">{links}</ul>
      </div>

      <div className="navbar-end">
        {!user ? (
          <div className="space-x-4">
            <Link to="singin" className="btn bg-blue-500 text-white ">
              Sing In
            </Link>
          </div>
        ) : (
          <>
            <div id="profilePic" className="dropdown dropdown-end  ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow
                gap-1"
              >
                {dropDown}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <div className="navbar-end space-x-3">
{user ? (
  <>
    <button
      onClick={hanldeSingOut}
      className="btn bg-blue-500 text-white "
    >
      Sing Out
    </button>
  </>
) : (
  <>
    <Link to="/register">Register</Link>
    <Link to="singin" className="btn bg-blue-500 text-white ">
      Sing In
    </Link>
  </>
)}
</div> */
}
