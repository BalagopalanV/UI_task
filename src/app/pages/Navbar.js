import React from "react";
// import "../scss/main.scss";
import Image from "next/image";
import purpleStart from "../asset/image/img_purple_start.svg";
import searchIcon from "../asset/icon/icon_search.svg";
import shoppingIcon from "../asset/icon/icon_shopping_cart.svg";
import profileIcon from "../asset/icon/icon_profile.svg";

function Navbar() {
  const title = ["New", "Dresses", "Winter wear", "Designer", "Sale"];

  return (
    <div className="nav-bar">
      <Image
        src={purpleStart}
        alt="Picture of the author"
        className="purple-image"
        priority
      />
      <div className="nav-bar_container">
        <h1>Rainyey</h1>
        <div className="nav-bar_container_label">
          {title.map((item, i) => {
            return (
              <h4 key={i} className="nav-item">
                {item}
              </h4>
            );
          })}
        </div>
        <div className="nav-bar_container_search-input">
          <Image
            src={searchIcon}
            alt="nav-bar_container_search-input_search-icon"
            className="nav-bar_container_search-input_search_icon"
            style={{ padding: "7px", width: "0.9em" }}
          />
        </div>
        <Image
          src={shoppingIcon}
          alt="shoppingCart-icon"
          className="nav-bar_container_search-input_shopping-cart_icon"
        />
        <Image
          src={profileIcon}
          alt="search-icon"
          className="nav-bar_container_search-input_profile_icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
