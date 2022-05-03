import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className="footer">Coded by Emma Marks</footer>
      </div>
    </div>
  );
}
