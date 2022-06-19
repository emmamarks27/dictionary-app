import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header"></header>
        <main>
          <Dictionary keyword="hello" />
        </main>
        <footer className="footer">
          Coded by{" "}
          <a
            href="https://github.com/emmamarks27"
            target="_blank"
            rel="noreferrer"
          >
            Emma Marks
          </a>
        </footer>
      </div>
    </div>
  );
}
