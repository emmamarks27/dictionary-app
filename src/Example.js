import "./Example.css";

export default function Example(props) {
  if (props.example) {
    return (
      <span className="example">
        <em>{props.example}</em>
      </span>
    );
  } else {
    return null;
  }
}
