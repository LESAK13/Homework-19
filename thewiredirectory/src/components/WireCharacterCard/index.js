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
          <li onClick={() => props.filterCharacter(props.location)} className="filter">
            Location: {props.location}
          </li>
          <li onClick={() => props.sortCharacter(props.episodecount)} className="sort">
            Episode Count: {props.episodecount}
          </li>
        </ul>
      </div>
    </div>
  );
}


export default WireCharacterCard;
