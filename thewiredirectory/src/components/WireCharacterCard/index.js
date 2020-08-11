import React from "react";
import "./style.css";

function WireCharacterCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            Name: {props.name}
          </li>
          <li>
            Location: {props.location}
          </li>
          <li>
            Episode Count: {props.episodecount}
          </li>
        </ul>
      </div>
      <button onClick={() => props.filterCharacter(props.location)} className="filter">
        Click to Filter by Location
      </button>
      <button onClick={() => props.sortCharacter(props.episodecount)} className="sort">
        Click to Sort by Episode Count
      </button>
    </div>
  );
}


export default WireCharacterCard;
