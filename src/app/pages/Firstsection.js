import React from "react";
import styles from "../scss/main.scss";
import Imagecontent from "../component/Imagecontent";
import Image from "next/image";
import Button from "../component/Button";
import imageRight from "../asset/image/img_landing_right.svg";
import imageLeft from "../asset/image/img_landing_left.svg";
import yellowStart from "../asset/image/img_yellow_star.svg";
import heartImage from "../asset/image/img_heart.svg";
import bagImage from "../asset/image/img_bag.svg";
import startLinear from "../asset/image/img_linear_star.svg";
import dottedImage from "../asset/image/img_dotted.svg";
import Al_Veshion_PersonalUseOnly from "../../../public/fonts/Al_Veshion_PersonalUseOnly";
import Poppins_Regular from "../../../public/fonts/Poppins_Regular";
import grayArrow from "../asset/image/img_gray_arrow.svg";
import blackArrow from "../asset/image/img_black_arrow.svg";

function Firstsection() {
  return (
    <div className="first-section">
      <div className="body">
        <div className="right-content">
          <h1 className={`${Al_Veshion_PersonalUseOnly.className} heading`}>
            Choose your
          </h1>
          <h1 className={`${Al_Veshion_PersonalUseOnly.className} heading`}>
            Style
          </h1>
          <div className="para-contianer">
            <div className="vl"></div>
            <p className={` ${Poppins_Regular.className} para`}>
              Fashion is part of the daily life and it change with events and
              time. We provide all of the style of fashion product and new
              trands !!
            </p>
          </div>

          <Button text={"Shop Now"} isFlag={true} whiteArrow={true} />
        </div>
        <div className="left-content">
          <div className="right-image-content">
            <div className="image-content">
              <Imagecontent imageUrl={imageRight} className="image" />
            </div>
            <div className="arrow-contianer">
              <Image src={grayArrow} alt="gray" className="gray-arrrow" />
              <Image src={blackArrow} alt="black" className="black-arrrow" />
            </div>
            <div className="bag-container">
              <Image src={bagImage} alt="bag" className="bag-image" />
            </div>
            <div className="linear-container">
              <Image src={startLinear} alt="linear" className="linear-image" />
            </div>
            <div className="dot-container">
              <Image
                src={dottedImage}
                alt="dotted-image"
                className="dotted-image"
              />
            </div>
          </div>
          <div className="left-image-content">
            <div className="circle-border">
              <Image
                src={yellowStart}
                alt="yellow-star"
                className="yellow-star"
              />
            </div>
            <div className="image-content">
              <Imagecontent imageUrl={imageLeft} />
            </div>
            <div className="heart-container">
              <Image
                src={heartImage}
                className="heart-image"
                alt="heart-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Firstsection;
