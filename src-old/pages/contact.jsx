import React from "react";
import Top from "../components/top";
import Bottom from "../components/bottom";

export default function Contact() {
    return (
        <>
            <Top />
            <main className="site-main">
                <div className="container">
                    <h1>
                        <span role="img" aria-label="heart">
                            💖
                        </span>
                        Get in touch
                    </h1>
                    <section>
                        <form name="contact" netlify>
                            <p>
                                <label>
                                    Name <input type="text" name="name" />
                                </label>
                            </p>
                            <p>
                                <label>
                                    Email <input type="email" name="email" />
                                </label>
                            </p>
                            <p>
                                <label>
                                    Message <input type="text" name="message" />
                                </label>
                            </p>
                            <p>
                                <button type="submit">Send</button>
                            </p>
                        </form>
                    </section>
                </div>
            </main>
            <Bottom />
        </>
    );
}
