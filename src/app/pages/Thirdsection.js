import React from "react";
// import "../scss/main.scss";
import Button from "../component/Button";
import Image from "next/image";
import startLinear from "../asset/image/img_linear_star.svg";
import greenStar from "../asset/image/img_green_star.svg";
import ladyImage from "../asset/image/img_chairwith_lady.svg";
import Al_Veshion_PersonalUseOnly from "../../../public/fonts/Al_Veshion_PersonalUseOnly";
import Poppins_Regular from "../../../public/fonts/Poppins_Regular";

function Thirdsection() {
  return (
    <div className="third-section">
      <div className="main-contianer">
        <div className="text-container">
          <h1 className={`${Al_Veshion_PersonalUseOnly.className} heading`}>
            New Release Fashion
          </h1>
          <p className={`${Poppins_Regular.className} para`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            tempore incidunt debitis nobis error animi, amet, nam unde quaerat
            sunt officiis enim quod, officia qui earum hic exercitationem
            ratione. Minima.
          </p>
          <div className="btn-contianer">
            <Button icon={false} text={"View More"} whiteArrow={true} />
          </div>
        </div>
        <div className="image-contianer">
          <div className="circle"></div>
          <div className="yellow-circle"></div>
          <div className="linear-circle">
            <Image
              src={startLinear}
              className="linear-image"
              alt="linear-image"
            />
          </div>
          <Image src={ladyImage} className="lady_image" alt="lady_image" />
          <div className="border-circle">
            <Image src={greenStar} className="green-star" alt="green-star" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thirdsection;
