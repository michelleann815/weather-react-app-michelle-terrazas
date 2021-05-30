import React from "react";

import "./Search";

export default function Search() {
  return (
    <form className="Search">
      <input type="text" placeholder="Enter city here" />
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
}
