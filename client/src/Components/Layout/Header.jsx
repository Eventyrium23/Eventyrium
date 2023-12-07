import React from "react";
import Logo from "../../assets/LOGO.png";
import { NavLink } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import {
  Collapse,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  Bars2Icon,
  UserPlusIcon,
  UserIcon,
  MegaphoneIcon,
  HomeIcon,
  InformationCircleIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

const disconnected = (event) => {

  if (event.target.textContent == "Sign Out") {
    window.localStorage.clear("Token");
    window.location.reload();
  }

};

function Header() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const storedToken = window.localStorage.getItem("Token");
    if (!!storedToken) {
      const decoded = jwtDecode(storedToken);
      setUser(decoded.userName);
    }
  }, []);
  const profileMenuItems = [
    {
      label: user,
      icon: UserIcon,
      path:"/"
    },
    {
      label: "Edit Profile",
      icon: Cog6ToothIcon,
      path:"/editProfile"
    },
    {
      label: "Inbox",
      icon: InboxArrowDownIcon,
      path:"/inbox"
    },
    {
      label: "Help",
      icon: LifebuoyIcon,
      path:"/help"
    },
    {
      label: "Sign Out",
      icon: PowerIcon,
      path:"/"
    },
  ];

  function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = () => setIsMenuOpen(false);
    return (
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          >
            <Avatar
              variant="circular"
              size="sm"
              alt="userLog"
              className="border border-gray-900 p-0.5"
              src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
            />
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1">
          {profileMenuItems.map(({ label, icon,path }, key) => {
            const isLastItem = key === profileMenuItems.length - 1;
            return (
              <MenuItem
                key={label}
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <NavLink to={path}>

                <Typography
                  onClick={disconnected}
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
                </NavLink>

              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    );
  }

  // nav list menu Events:
  const navListMenuItems = [
    {
      title: "Place",
      description: "Know more about us",
      path: "/events/places",
    },
    {
      title: "Food",
      description:
        "Learn how to use @material-tailwind/react, packed with rich components for React.",
      path: "/events/foods",
    },
    {
      title: "Decoration",
      description:
        "A complete set of UI Elements for building faster websites in less time.",
      path: "/events/decoration",
    },
    {
      title: "Pack",
      description:
        "A complete set of UI Elements for building faster websites in less time.",
      path: "/events/packs",
    },
  ];

  function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const renderItems = navListMenuItems.map(({ title, description, path }) => (
      <NavLink href="#" key={title} to={path}>
        <MenuItem>
          <Typography variant="h6" color="blue-gray" className="mb-1">
            {title}
          </Typography>
          <Typography variant="small" color="gray" className="font-normal">
            {description}
          </Typography>
        </MenuItem>
      </NavLink>
    ));

    return (
      <React.Fragment>
        <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
          <MenuHandler>
            <Typography as="a" href="#" variant="small" className="font-normal">
              <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
                <MegaphoneIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
                Events{" "}
                <ChevronDownIcon
                  strokeWidth={2}
                  className={`h-3 w-3 transition-transform ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </MenuItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
            <Card
              color="gray"
              shadow={false}
              variant="gradient"
              className="col-span-3 grid h-full w-full place-items-center rounded-md"
            >
              <MegaphoneIcon strokeWidth={1} className="h-28 w-28" />
            </Card>
            <ul className="col-span-4 flex w-full flex-col gap-1">
              {renderItems}
            </ul>
          </MenuList>
        </Menu>
        <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
          <MegaphoneIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
          Events{" "}
        </MenuItem>
        <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
          {renderItems}
        </ul>
      </React.Fragment>
    );
  }

  // nav list component:
  const navListItems = [
    {
      label: "Home",
      icon: HomeIcon,
      path: "/",
    },
    {
      label: "Services",
      icon: SparklesIcon,
      path: "/services",
    },
    {
      label: "About",
      icon: InformationCircleIcon,
      path: "/about",
    },
  ];

  function NavList() {
    return (
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        <NavListMenu />
        {navListItems.map(({ label, icon, path }, key) => (
          <NavLink
            to={path}
            key={label}
            variant="small"
            color="gray"
            className="font-medium text-blue-gray-500"
          >
            <MenuItem className="flex items-center gap-2 lg:rounded-full">
              {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
              <span className="text-gray-900"> {label}</span>
            </MenuItem>
          </NavLink>
        ))}
        {!user && (
          <NavLink
            size="sm"
            to={"/user/register"}
            variant="small"
            color="gray"
            className="font-medium text-gray-900"
          >
            <MenuItem className="flex items-center gap-2 lg:rounded-full">
              <UserPlusIcon className="h-[18px] w-[18px] text-blue-gray-500" />
              Register
            </MenuItem>
          </NavLink>
        )}
      </ul>
    );
  }

  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <nav className=" mx-auto top-0 w-full p-2 fixed z-50 lg:pl-6  bg-mainHeader	 ">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
       <NavLink to="/"> <img src={Logo} alt="LOGO" className="w-40 mx-8" /></NavLink> 
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        {!user && (
          <>
            <NavLink
              size="sm"
              to={"/user/login"}
              variant="small"
              color="gray"
              className="font-medium text-gray-900"
            >
              <MenuItem className="flex items-center gap-2 lg:rounded-full">
                <UserCircleIcon className="h-[18px] w-[18px] text-blue-gray-500" />
                Login
              </MenuItem>
            </NavLink>
          </>
        )}

        {user && <ProfileMenu />}
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </nav>
  );
}

export default Header;
