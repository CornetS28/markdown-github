import React from "react";

// Components
import HomeNavbar from "../components/HomeNavbar";

const home = () => {
  return (
    <div>
      <HomeNavbar />
      <center>
        {" "}
        <h1 className="">Preview your markdown in HTML</h1>
        <img src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg"/>
      </center>
    </div>
  );
};

export default home;
