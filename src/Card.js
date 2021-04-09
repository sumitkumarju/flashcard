import React from "react";

function Card({ d }) {
  console.log(d);
  return d ? (
    <div className="card">
      <img src={d.flag} alt="flag" />
      <h2>{d.name}</h2>
      <div className="info">
        <h4>
          <strong>Capital:</strong> {d.capital}
        </h4>
        <h4>
          <strong>Languages:</strong> {d.languages.map((l) => l.name + ",")}
        </h4>
        <h4>
          <strong>Population:</strong> {d.population}
        </h4>
        <h4>
          <strong>Currencies:</strong> {d.currencies.map((c) => c.name + ",")}
        </h4>
      </div>
    </div>
  ) : (
    <h2>Loading..</h2>
  );
}

export default Card;
