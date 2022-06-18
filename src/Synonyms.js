export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <p>
        <strong>Synonyms:</strong>
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </p>
    );
  } else {
    return null;
  }
}
