import React from 'react';
import navImg from '../../assets/logo.png'
import dollarImg from '../../assets/dollar.png'

const Navbar = ({AvailableBalance}) => {
    return (
        <div className="navbar max-w-[1200px] mx-auto pt-3 text-center">
            <div className="flex-1">
                <img src={navImg} alt="NavImg" />
            </div>
            <div className="flex gap-2 items-center">
                <span>{AvailableBalance}</span>
                <span>$</span>
                <img src={dollarImg} alt="DollarImg" />
            </div>
        </div>
    );
};

export default Navbar;