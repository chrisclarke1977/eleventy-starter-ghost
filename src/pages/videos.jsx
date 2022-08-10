import React from "react";
import Top from "../components/top";
import Bottom from "../components/bottom";
import Posts from "../components/posts";

export default function Videos() {
    return (
        <>
            <Top />
            <main className="site-main">
                <div className="container">
                    <h2>Kez and Unicorns</h2>
                    <Posts />
                </div>
            </main>
            <Bottom />
        </>
    );
}
