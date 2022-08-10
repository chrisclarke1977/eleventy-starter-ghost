import React from "react";
import Top from "../components/top";
import Bottom from "../components/bottom";

export default function Profile() {
    return (
        <>
            <Top />
            <main className="site-main">
                <div className="container">
                    <h1>Kez and Unicorns Profile</h1>
                </div>
            </main>
            <Bottom />
        </>
    );
}
