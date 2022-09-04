import React from "react";

import "./style.scss";

const Statistics = ({active, important}) => {
  return (
    <div className="stat">
      <p>
        Done: <span id="done-counter">{active}</span>
      </p>
      <p>
        Important: <span id="important-counter">{important}</span>
      </p>
    </div>
  );
};

export default Statistics;
