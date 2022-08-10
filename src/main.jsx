import React from "react";
import Anime from "./anime";
import Posts from "./posts";

const Main = () => {
    return (
        <main className="site-main">
            <div className="container">
                <Posts />
                <Anime />
            </div>
        </main>
    );
};

export default Main;
