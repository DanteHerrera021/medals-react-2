export default function Country(props) {
  const handleClick = () => {
    setGolds(gold + 1);
  };
  return (
    <>
      <div className="country-container">
        <h2>
          {props.country.name} - {props.country.gold} gold medal
          {props.country.gold != 1 ? "s" : ""}
        </h2>
        {/* <button
          className="gold"
          onClick={() => props.onNewGold(props.country.id)}
        >
          Add medal +
        </button> */}
        <button
          className="remove"
          onClick={() => props.removeCountry(props.country.id)}
        >
          Remove country -
        </button>
      </div>
    </>
  );
}
