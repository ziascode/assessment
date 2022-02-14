import React from "react";

function Nav({tabTitle}) {
  return (
    <div className="borders px-5 py-1 items-center transition transform duration-200 ease-out">
        <button>{tabTitle}</button>
    </div>
  )
}

export default Nav