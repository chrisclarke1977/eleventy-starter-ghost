import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import your route components too
import App from "./App";
import Home from "./pages/home";
import Recommendation from "./pages/recommendation";
import About from "./pages/about";
import Videos from "./pages/videos";
import Profile from "./pages/profile";
import Contact from "./pages/contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/recommendations" element={<Recommendation />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/kezandunicorns" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
);

/*
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
*/
