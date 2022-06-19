import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <p className="synonyms">
        similar:{" "}
        <em>
          {props.synonyms.map(function (synonym, index) {
            return <span key={index}>{synonym}</span>;
          })}
        </em>
      </p>
    );
  } else {
    return null;
  }
}
