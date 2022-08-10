import React from "react";
import { Link } from "react-router-dom";

const Bottom = () => {
    return (
        <div className="viewport-bottom">
            <footer className="site-foot">
                <div className="site-foot-nav container">
                    <div className="site-foot-nav-left">
                        <Link aria-current="page" className="" to="/">
                            Kez &amp; Unicorns
                        </Link>
                        © 2020 – Published with Love
                    </div>
                    <div className="site-foot-nav-right">
                        <Link className="site-foot-nav-item" to="/about/">
                            About
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default Bottom;
