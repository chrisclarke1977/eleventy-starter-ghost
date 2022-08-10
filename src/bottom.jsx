import React from "react";

const Bottom = () => {
    return (
        <div className="viewport-bottom">
            <footer className="site-foot">
                <div className="site-foot-nav container">
                    <div className="site-foot-nav-left">
                        <a aria-current="page" className="" href="/">
                            Eleventy &amp; Ghost
                        </a>
                        © 2020 – Published with
                        <a
                            className="site-foot-nav-item"
                            href="https://ghost.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ghost
                        </a>
                    </div>
                    <div className="site-foot-nav-right">
                        <a className="site-foot-nav-item" href="/about/">
                            About
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default Bottom;
