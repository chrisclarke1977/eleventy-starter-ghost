import React from "react";
import Top from "../components/top";
import Bottom from "../components/bottom";

export default function About() {
    return (
        <>
            <Top />
            <main className="site-main">
                <div className="container">
                    <h2>About</h2>
                </div>
            </main>
            <Bottom />
        </>
    );
}
