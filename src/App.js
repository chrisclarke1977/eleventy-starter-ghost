import { useState } from "react";
import { animeDB } from './db.js';
import "./styles.css";

export default function App() {
  const [selectedGenre, setGenre] = useState("Romantic");

  function genreClickHandler(category) {
    setGenre(category);
  }
  return (
    <div className="App">
      <h1>📺 Anime Recommendation</h1>
      <p style={{ fontSize: "medium" }}>
        Here's a list of my fav anime. Select a genre to get started.
      </p>
      <div>
        {Object.keys(animeDB).map((category) => (
          <button
            onClick={() => genreClickHandler(category)}
            style={{
              padding: "1rem",
              borderRadius: "10px",
              border: "2px solid #A4D4FF",
              backgroundColor: "transparent",
              marginRight: "1rem",
              marginBottom: "1rem",
              cursor: "pointer"
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {animeDB[selectedGenre].map((anime) => (
            <li
              key={anime.name}
              style={{
                listStyle: "none",
                border: "2px solid #A4D4FF",
                padding: "1rem",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                width: "50%"
              }}
            >
              <div>
                <div style={{ fontSize: "large" }}>
                  {anime.name} <br />
                </div>
                <div style={{ fontSize: "small" }}>{anime.rating}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}