import React from "react";
import Top from "../components/top";
import Bottom from "../components/bottom";

export default function About() {
    return (
        <>
            <Top />
            <main className="site-main">
                <div className="container">
                    <h1><span role="img" aria-label="unicorn">
                            🦄
                        </span>Unicorns!</h1>
                    <section>
                        <p>
                            Hi I'm Kez and welcome to my little Kawaii spaces! I
                            basically love Unicorns, Japanese Pop Culture and
                            all things Kawaii, but that aesthetic isn't
                            everything. I do social commentary and currently
                            have a series called Makeup &amp; Mental Health
                            Mondays, another called This Is Not Tea, where I
                            talk about YouTube "Tea"/Drama from a different
                            perspective. I do have other content including Wig
                            Reviews, Get Ready With Me's, Fashion &amp; Styling
                            and have more planned and am always keen to hear
                            what you would like to see from me.
                        </p>
                    </section>
                    <section>
                        <p>
                            Thank you so much for visiting, I hope you enjoy the
                            content and choose to subscribe and visit my other
                            social media channels too! Let's have some fun and
                            spread that kawaii unicorn love!
                        </p>
                    </section>
                    <section>
                        <ol>
                            <li>
                                <a href="https://www.patreon.com/kezandunicorns">
                                    Patreon:
                                    https://www.patreon.com/kezandunicorns
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/kezandunicorns">
                                    Instagram
                                    https://www.instagram.com/kezandunicorns
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/kezandunicorns">
                                    Twitter https://twitter.com/kezandunicorns
                                </a>
                            </li>
                        </ol>
                    </section>
                    <section>
                        <p>Arigato gozaimasu, and keep unicorning!</p>
                    </section>
                    <section>
                        <span role="img" aria-label="unicorn">
                            🦄
                        </span>
                        <span role="img" aria-label="heart">
                            💖
                        </span>
                        <span role="img" aria-label="rainbow">
                            🌈
                        </span>
                        <span role="img" aria-label="unicorn">
                            🦄
                        </span>
                    </section>
                </div>
            </main>
            <Bottom />
        </>
    );
}
