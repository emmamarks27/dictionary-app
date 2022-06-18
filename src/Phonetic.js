import React from "react";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div>
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
