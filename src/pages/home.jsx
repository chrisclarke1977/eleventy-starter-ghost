import React from "react";
import Posts from "../components/posts";
import Top from "../components/top";
import Main from "../components/main";

export default function Home() {
    return (
        <>
            <Top />
            <Main />
            <h2>Home</h2>
            <Posts />
        </>
    );
}
