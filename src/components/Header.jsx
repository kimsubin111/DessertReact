import React from "react";
import { memberData, menuData } from "../data/headerData";

const Header = () => {
    return (
        <header id="header">
            <div className="header_inner">
                <div className="header_logo">
                    <a href="/">
                        Dessert<em>site</em>
                    </a>
                </div>
                <nav className="header_nav">
                    <ul>
                        {menuData.map((menu, index) => (
                            <li key={index}>
                                <a href={menu.link}>{menu.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="header_member">
                    {memberData.map((mem, index) => (
                        <a href="/" key={index}>
                            {mem}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
