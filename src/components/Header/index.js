import React from "react";
import "./style.css";

function Header() {
  return (
      <div>
    <button onClick={() => window.location.reload(false)}>Click to reload directory</button>
    <p>Click on a character's episode count to sort.</p>
    <p>Click on a character's location to filter.</p>
    </div>
  );
}

export default Header;