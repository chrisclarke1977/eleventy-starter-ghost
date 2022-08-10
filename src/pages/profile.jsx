import React from "react";
import Top from "../components/top";
import Bottom from "../components/bottom";

export default function Profile() {
    return (
        <>
            <Top />
            <main className="site-main">
                <div className="container">
                    <h2>Kez and Unicorns</h2>
                </div>
            </main>
            <Bottom />
        </>
    );
}
