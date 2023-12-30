import React from "react";
import CircumIcon from "@klarr-agency/circum-icons-react";
import { DefaultImg } from "./Logo";
import LogoHeader from "../Assets/Images/logo.svg"
import Navlist from "./Navlist";
import {
    Navbar,
    MobileNav,
    IconButton,
    Input,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export function StickyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <div className="mb-6 max-h-[768px] w-full mx-auto">
            <Navbar className="sticky top-0 z-10 h-max mx-auto rounded-none py-2 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900 xl:max-w-[1160px] mx-auto ">
                    <NavLink to="/">
                        <DefaultImg logo={LogoHeader} />
                    </NavLink>

                    <div className="flex items-center gap-4">

                        {/* NavList */}
                        <div className="mr-4 hidden lg:block">
                            <Navlist />
                        </div>

                        {/* Search */}
                        <div>
                            <Input
                                type="search"
                                placeholder="Пошук"
                                containerProps={{
                                    className: "min-w-[288px]",
                                }}
                                className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                        {/* Icons */}
                        <NavLink to="/my-account">
                            <CircumIcon name="user" />
                        </NavLink>
                        <NavLink to="/wishlist">
                            <CircumIcon name="heart" />
                        </NavLink>
                        <NavLink to="/cart">
                            <CircumIcon name="shopping_cart" />
                        </NavLink>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    <Navlist />
                </MobileNav>
            </Navbar>
        </div>
    );
}