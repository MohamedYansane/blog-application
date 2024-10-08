import { React, useState } from "react";
import logo from "../../assets/images/Logo.png";
import "./header.scss";
import { Menu, Close, KeyboardArrowDownOutlined } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/actions/user";
import { Link, useNavigate } from "react-router-dom";

const navInfo = [
  { name: "Home", type: "link", href: "/" },
  { name: "Articles", type: "link", href: "/articles" },
  {
    name: "Pages",
    type: "dropdown",
    items: [
      { title: "About us", href: "/about" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  { name: "Pricing", type: "link", href: "/pricing" },
  { name: "Faq", type: "link", href: "/faq" },
];
const NavItem = ({ item }) => {
  // i dont want a drop down for mobile
  const [dropDown, setDropDown] = useState(false);
  const toggleDropDownHandler = () => {
    setDropDown((currentState) => !currentState);
  };

  return (
    <li className="nav-item relative group " key={item.name}>
      {item.type === "link" ? (
        <>
          <Link to={item.href} className="px-4 py-2">
            {item.name}
            <span className="text-blue-500 absolute transition-all duration-500 group-hover:font-bold right-0 top-0  group-hover:right-[90%] opacity-0 group-hover:opacity-100">
              /
            </span>
          </Link>
        </>
      ) : (
        <div className=" ">
          <button
            className=" flex gap-x-1 items-center px-4 py-2"
            onClick={toggleDropDownHandler}
          >
            {item.name}
            <KeyboardArrowDownOutlined />
          </button>

          <div
            className={`${
              dropDown ? "block" : "hidden"
            } lg:hidden w-max lg:group-hover:block transition-all lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full duration-500 pt-4`}
          >
            <ul className="flex flex-col  shadow-lg rounded-lg overflow-hidden">
              {item.items.map((page, index) => (
                <li
                  className="px-4 py-2 hover:bg-dark-hard  hover:text-white "
                  key={index}
                >
                  <Link to={page.href} className="">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};
export const Header = () => {
  const logoutHandler = () => {
    dispatch(logout());
  };
  //after registring user and storing the user info to
  //my local storage and redux store let handle a sign up part (userState)
  const userState = useSelector((state) => state.user);
  const [navIsVisible, setNavIsVisible] = useState(false);
  const navVisibilityHandler = () => {
    setNavIsVisible((currentState) => !currentState);
  };
  const [profileDropDown, setProfileDropDown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <section className="header-section sticky top-0 left-0 right-0 z-50 bg-white">
        <header className="py-4 mx-auto container ">
          <Link to="/" className="logo w-16">
            <img src={logo} alt="ehya" className="w-16" />
          </Link>
          <div className="lg:hidden z-50">
            {navIsVisible ? (
              <Close
                onClick={navVisibilityHandler}
                className="w-6 h-6 cursor-pointer"
              />
            ) : (
              <Menu
                onClick={navVisibilityHandler}
                className="w-6 h-6 cursor-pointer"
              />
            )}
          </div>
          <div
            className={`nav-bar ${
              navIsVisible ? "right-0" : "-right-full"
            } w-full top-0 bottom-0 z-[49] transition-all duration-300 lg:bg-transparent bg-dark-hard lg:bg-dark-soft mt-[56px] lg:mt-0`}
          >
            <ul className="navbar-items font-semibold flex-col items-center gap-y-5 text-white lg:text-dark-soft ">
              {navInfo.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
            </ul>
            {/** Then i'm gonna condiitionnal this */}
            {userState.userInfo ? (
              <div className="navbar-items font-semibold flex-col items-center gap-y-5 text-white lg:text-dark-soft ">
                <div className="relative group">
                  <div className="flex flex-col">
                    <button
                      className=" flex gap-x-1 items-center px-4 py-2 btnSignin border-2 mt-5 lg:mt-0 border-blue-500  rounded-full"
                      onClick={() => setProfileDropDown(!profileDropDown)}
                    >
                      <span>Account</span>
                      <KeyboardArrowDownOutlined />
                    </button>

                    <div
                      className={`${
                        profileDropDown ? "block" : "hidden"
                      } lg:hidden w-max lg:group-hover:block transition-all lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full duration-500 pt-4`}
                    >
                      <ul className="bg-dark-soft gap-y-3 lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden w-fit">
                        <button
                          type="button"
                          className=" hover:bg-dark-hard  px-4 py-2  hover:text-white w-full"
                          onClick={() => navigate("/profile")}
                        >
                          Profile
                        </button>
                        <button
                          onClick={() => logoutHandler()}
                          type="button"
                          className=" hover:bg-dark-hard  px-4 py-2 hover:text-white w-full"
                        >
                          Logout
                        </button>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <button
                className="btnSignin border-2 mt-5 lg:mt-0 border-blue-500 px-4 py-2  rounded-full"
                type="submit"
                onClick={() => navigate("/login")}
              >
                Sign in
              </button>
            )}
          </div>
        </header>
      </section>
    </>
  );
};
