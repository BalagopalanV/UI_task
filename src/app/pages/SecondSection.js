import React from "react";
import Button from "../component/Button";
import Imagecontent from "../component/Imagecontent";
import Image from "next/image";
import secondSectionImg from "../asset/image/img_second_section.svg";
import purpleStar from "../asset/image/img_purple_start.svg";
import Al_Veshion_PersonalUseOnly from "../../../public/fonts/Al_Veshion_PersonalUseOnly";
import Poppins_Regular from "../../../public/fonts/Poppins_Regular";
import "../scss/main.scss";
function Secondsection() {
  return (
    <div className="second-page">
      <div className="trendy-collection-container">
        <div className="circle">
          <h1 className={`${Al_Veshion_PersonalUseOnly.className} heading`}>
            Trendy
          </h1>
          <h1 className={`${Al_Veshion_PersonalUseOnly.className} sub-heading`}>
            Collections
          </h1>
        </div>
        <Image src={purpleStar} className="purple-star" alt="purple" />
        <div className="imageContainer">
          <Imagecontent imageUrl={secondSectionImg} />
        </div>
      </div>
      <div className="description-contianer">
        <div className="description-content">
          <div className="header">
            <lable className="lable">Fashion</lable>
            <lable className="lable">Elegant</lable>
            <lable className="lable">Trend</lable>
          </div>
          <div className="body-content">
            <div className="main-content">
              <div className="content">
                <h1
                  className={`${Al_Veshion_PersonalUseOnly.className} heading`}
                >
                  Who We are
                </h1>
                <p className={`${Poppins_Regular.className} para`}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit, corporis saepe minima cupiditate consectetur unde
                  inventore amet dignissimos optio rem soluta ut architecto sit
                  accusantium veniam repellat aut in delectus?
                </p>
              </div>
              <Button text={"Explore"} isFlag={false} />
            </div>
            <div className="marquee-content">
              <label>premium collection</label>
              <label>Trendy collection</label>
              <label>welcome to the Raniey</label>
              <label>premium collection</label>
              <label>Trendy collection</label>
            </div>
          </div>
        </div>
        <div className="dot-line-content"></div>
      </div>
    </div>
  );
}

export default Secondsection;
