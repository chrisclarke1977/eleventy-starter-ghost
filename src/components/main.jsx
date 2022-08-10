import React from "react";
import { Link } from "react-router-dom";
import Posts from "./posts";

const Main = () => {
    return (
        <main className="site-main">
            <div className="container">
                <div>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/about"}>About</Link>
                        </li>
                        <li>
                            <Link to={"/recommendations"}>Recommendations</Link>
                        </li>
                    </ul>
                </div>
                <Posts />
            </div>
        </main>
    );
};

export default Main;
