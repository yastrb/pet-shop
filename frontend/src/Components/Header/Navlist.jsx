import React from 'react';
import {Typography} from "@material-tailwind/react";
import {NavLink} from "react-router-dom";

const setActive = ({ isActive }) => isActive ? 'active-link' : 'nav__link';
const Navlist = () => {
    return (
        <div>
            <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal "
            >
                <NavLink to="/cats" className={setActive}>Котам</NavLink>
            </Typography>

            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to="/dogs" className={setActive}>Собакам</NavLink>
            </Typography>

            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to="/smallpets" className={setActive}>Гризунам</NavLink>
            </Typography>

            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
               <NavLink to="/birds" className={setActive}>Птахам</NavLink>
            </Typography>
            
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to="/fish" className={setActive}>Рибам</NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to="/reptiles" className={setActive}>Рептиліям</NavLink>
            </Typography>
        </ul></div>
    )
}

export default Navlist