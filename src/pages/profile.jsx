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
                    <section>
                        <p>
                            Coming soon ...{" "}
                            <span role="img" aria-label="heart">
                                💖
                            </span>
                            <span role="img" aria-label="rainbow">
                                🌈
                            </span>
                        </p>
                    </section>
                </div>
            </main>
            <Bottom />
        </>
    );
}
