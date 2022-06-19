import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="phonetics">
        <a
          className="synonym-audio"
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer"
        >
          Listen
        </a>
        <p>{props.phonetic.text}</p>
      </div>
    );
  } else {
    return null;
  }
}
