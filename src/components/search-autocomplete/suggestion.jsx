import "./style.css";

function Suggestion({ data }) {
  return (
    <div>
      {data && data.length
        ? data.map((item, index) => <li key={index}>{item}</li>)
        : null}
    </div>
  );
}

export default Suggestion;
