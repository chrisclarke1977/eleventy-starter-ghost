import React from "react";
import { Link } from "react-router-dom";

const Top = () => {
    return (
        <>
            <div className="viewport">
                <div className="viewport-top">
                    <header
                        className="site-head"
                        style={{
                            backgroundImage: "url(/assets/top-banner.jpg)"
                        }}
                    >
                        <div className="container">
                            <div className="site-mast">
                                <div className="site-mast-left">
                                    <Link aria-current="page" to="/">
                                        <img
                                            className="site-logo lazyloaded"
                                            src="/assets/author.jpg"
                                            alt="Kez &amp; Unicorns"
                                            data-src="/assets/author.jpg"
                                        />
                                    </Link>
                                </div>
                                <div className="site-mast-right">
                                    <a
                                        href="https://twitter.com/kezandunicorns"
                                        className="site-nav-item"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            width="16"
                                            height="16"
                                            className="site-nav-icon site-nav-icon--twitter"
                                            role="img"
                                            aria-labelledby="twitter-title"
                                        >
                                            <title id="twitter-title">
                                                twitter
                                            </title>
                                            <use fill="currentColor"></use>
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/kezandunicorns"
                                        className="site-nav-item"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            width="16"
                                            height="16"
                                            className="site-nav-icon site-nav-icon--facebook"
                                            role="img"
                                            aria-labelledby="facebook-title"
                                        >
                                            <title id="facebook-title">
                                                facebook
                                            </title>
                                            <use fill="currentColor"></use>
                                        </svg>
                                    </a>
                                    <a
                                        className="site-nav-item"
                                        href="https://feedly.com/i/subscription/feed/%PUBLIC_URL%/feed.xml"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            width="16"
                                            height="16"
                                            className="site-nav-icon site-nav-icon--rss"
                                            role="img"
                                            aria-labelledby="rss-title"
                                        >
                                            <title id="rss-title">rss</title>
                                            <use fill="currentColor"></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="site-banner">
                                <h1
                                    className="site-banner-title"
                                    style={{ display: "none" }}
                                >
                                    Kez and Unicorns
                                </h1>
                                <p
                                    className="site-banner-desc"
                                    style={{ display: "none" }}
                                >
                                    Kezandunicorns a youtuber
                                </p>
                            </div>
                            <nav className="site-nav">
                                <div className="site-nav-left">
                                    <a
                                        className="site-nav-item"
                                        href="https://www.patreon.com/kezandunicorns"
                                    >
                                        Support me
                                    </a>
                                    <Link
                                        aria-current="page"
                                        className="site-nav-item"
                                        to="/"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        className="site-nav-item"
                                        to="/videos/"
                                    >
                                        Videos
                                    </Link>
                                    <Link
                                        className="site-nav-item"
                                        to="/kezandunicorns/"
                                    >
                                        Kez and Unicorns Profile
                                    </Link>
                                    <Link
                                        className="site-nav-item"
                                        to="/contact"
                                    >
                                        Contact
                                    </Link>
                                    
                                    <Link className="site-nav-item" to="/recommendations" >
                                        Recommendations
                                    </Link>
                                    <a
                                        className="site-nav-item"
                                        href="https://github.com/chrisclarke1977/eleventy-starter-ghost"
                                    >
                                        Repo
                                    </a>
                                </div>
                                <div className="site-nav-right">
                                    <Link
                                        to="/about"
                                        className="site-nav-button"
                                    >
                                        About
                                    </Link>
                                </div>
                            </nav>
                        </div>
                    </header>
                </div>
            </div>

            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ height: 0, position: "absolute" }}
                >
                    <symbol id="facebook" viewBox="0 0 512 512">
                        <path
                            fill="#fff"
                            d="M452 0H60C26.916 0 0 26.916 0 60v392c0 33.084 26.916 60 60 60h392c33.084 0 60-26.916 60-60V60c0-33.084-26.916-60-60-60zm20 452c0 11.028-8.972 20-20 20H338V309h61.79L410 247h-72v-43c0-16.975 13.025-30 30-30h41v-62h-41c-50.923 0-91.978 41.25-91.978 92.174V247H216v62h60.022v163H60c-11.028 0-20-8.972-20-20V60c0-11.028 8.972-20 20-20h392c11.028 0 20 8.972 20 20v392z"
                        ></path>
                    </symbol>
                    <symbol id="rss" viewBox="0 0 643 643">
                        <path
                            fill="#fff"
                            d="M93.299 613.7c-50.798 0-92.117-41.348-92.117-92.117 0-50.827 41.319-92.174 92.117-92.174s92.117 41.376 92.117 92.174c.028 50.77-41.319 92.117-92.117 92.117zm0-155.507c-34.894 0-63.304 28.439-63.304 63.39 0 34.922 28.41 63.304 63.304 63.304 34.893 0 63.303-28.382 63.303-63.304.029-34.95-28.381-63.39-63.303-63.39z"
                        ></path>
                        <path
                            fill="#fff"
                            d="M400.537 614.306h-112.2c-7.952 0-14.407-6.454-14.407-14.407 0-69.585-26.883-134.905-75.664-183.945C149.514 366.998 84.654 340 15.704 340c-7.953 0-14.407-6.454-14.407-14.406V213.336c0-7.953 6.454-14.407 14.407-14.407 220.165 0 399.27 179.883 399.27 400.969-.03 7.982-6.455 14.408-14.437 14.408zm-98.139-28.814h83.473c-7.376-193.743-162.912-349.999-355.79-357.461v83.531c71.285 3.486 137.787 33.021 188.585 84.078 50.828 51.086 80.246 118.048 83.732 189.852z"
                        ></path>
                        <path
                            fill="#fff"
                            d="M598.775 614.363H486.604c-7.952 0-14.406-6.454-14.406-14.407 0-253.04-204.721-458.942-456.378-458.942-7.953 0-14.407-6.454-14.407-14.407v-112.2C1.412 6.455 7.866 0 15.819 0c329.397 0 597.363 269.147 597.363 599.956a14.375 14.375 0 0 1-14.407 14.407zm-97.966-28.813h83.387C576.675 282.085 332.307 36.593 30.226 28.987v83.444c256.124 7.549 463.12 215.64 470.583 473.119z"
                        ></path>
                    </symbol>
                    <symbol id="twitter" viewBox="0 0 612.002 612.002">
                        <path
                            fill="#fff"
                            d="M197.553 557.219c-68.018 0-134.159-19.371-191.294-56.047-5.333-3.428-7.591-10.066-5.469-16.051 2.122-5.986 8.189-9.795 14.42-8.896 47.912 5.576 97.919-4.164 139.873-28.16-41.491-12.461-75.228-44.594-88.859-87.199a13.57 13.57 0 0 1 2.802-13.195 13.736 13.736 0 0 1 7.346-4.244c-32.404-24.678-52.864-63.639-52.864-106.436 0-4.816 2.558-10.012 6.72-12.461 4.163-2.449 9.305-3.21 13.495-.925a67.034 67.034 0 0 0 3.646 1.932c-14.719-21.739-22.881-47.749-22.881-74.902 0-23.562 6.23-46.796 18.093-67.147 2.231-3.863 6.23-6.366 10.692-6.72a13.734 13.734 0 0 1 11.59 4.952c55.04 67.501 134.703 110.298 220.624 119.086a135.305 135.305 0 0 1-.571-12.434c0-73.65 59.937-133.588 133.587-133.588 34.199 0 67.311 13.25 92.015 36.648 22.719-5.197 44.484-13.93 64.808-25.983a13.737 13.737 0 0 1 15.399 1.061c4.408 3.537 6.204 9.414 4.489 14.801a132.455 132.455 0 0 1-18.99 37.519 214.647 214.647 0 0 0 16.678-6.584c5.469-2.503 12.025-.979 15.916 3.7 3.891 4.625 4.245 11.291.898 16.324-15.808 23.562-35.07 44.103-57.299 61.162.082 2.938.109 5.904.109 8.842.001 174.453-132.798 354.945-354.973 354.945zm-128.69-53.543c40.458 17.33 84.125 26.336 128.69 26.336 205.17 0 327.766-166.645 327.766-327.765 0-4.979-.136-9.985-.326-14.964a13.59 13.59 0 0 1 5.632-11.59 228.226 228.226 0 0 0 27.507-23.371 255.254 255.254 0 0 1-26.99 4.707c-6.312.898-12.406-2.993-14.501-9.087-2.068-6.067.381-12.76 5.877-16.08a107.521 107.521 0 0 0 28.051-24.296c-13.577 5.197-27.562 9.25-41.845 12.025-4.571.953-9.333-.571-12.543-4.026-20.024-21.331-48.348-33.574-77.677-33.574-58.659 0-106.38 47.721-106.38 106.38 0 8.135.925 16.324 2.774 24.269a13.662 13.662 0 0 1-2.829 11.808c-2.721 3.265-6.829 5.523-11.101 4.843-92.858-4.68-180.33-45.953-243.179-114.189a106.518 106.518 0 0 0-6.094 35.533c0 35.696 17.685 68.753 47.286 88.533a13.578 13.578 0 0 1 5.414 15.454c-1.85 5.768-7.591 9.25-13.358 9.468a133.043 133.043 0 0 1-38.172-6.856c8.407 42.144 40.811 75.555 83.146 84.07 6.203 1.252 10.719 6.557 10.91 12.869.218 6.285-3.917 11.916-9.985 13.604-11.726 3.184-24.051 4.979-36.104 4.734 18.229 32.24 52.456 53.217 90.655 53.979 5.741.109 10.801 3.863 12.624 9.305s0 11.482-4.517 15.02c-38.226 29.953-83.01 47.964-130.731 52.861z"
                        ></path>
                    </symbol>
                    <symbol id="link" viewBox="0 0 16 16">
                        <path d="M5.86 12.7l-.81.8c-.7.7-1.84.7-2.54 0a1.75 1.75 0 0 1 0-2.5l2.98-2.96c.61-.61 1.77-1.52 2.62-.68a1 1 0 1 0 1.4-1.4c-1.44-1.43-3.57-1.17-5.42.67L1.1 9.6a3.72 3.72 0 0 0 0 5.32 3.78 3.78 0 0 0 5.34 0l.8-.8a1 1 0 1 0-1.39-1.42zm9.03-11.5c-1.55-1.53-3.7-1.6-5.14-.19l-1 1a1 1 0 1 0 1.39 1.41l1-1c.75-.74 1.72-.43 2.35.2a1.75 1.75 0 0 1 0 2.5l-3.17 3.15c-1.46 1.45-2.14.77-2.43.48a1 1 0 0 0-1.4 1.4c.67.67 1.43 1 2.23 1 .98 0 2.01-.5 3-1.47l3.17-3.15a3.72 3.72 0 0 0 0-5.32z"></path>
                    </symbol>
                    <symbol id="nav" viewBox="0 0 16 11">
                        <path d="M0 12h16v-2H0v2zm0-5h16V5H0v2zm0-7v2h16V0H0z"></path>
                    </symbol>
                </svg>
            </div>
        </>
    );
};

export default Top;
