import React from "react";

function Header(props) {
  let date = new Date();
  function showTime(time) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return ` ${month} ${date}, ${year}`;
  }

  return (
    <div className="header" style={props.style}>
      <h1>FLASH CARD ⚡⚡</h1>
      <h2>Country & Flag</h2>
      <h4>Sumit Kumar</h4>
      <h5>{showTime(date)}</h5>
    </div>
  );
}

export default Header;
