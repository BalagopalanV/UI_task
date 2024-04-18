import React from "react";
import Image from "next/image";

function Imagecontent({ imageUrl }) {
  return (
    <div className="image-container">
      <Image
        src={imageUrl}
        alt="Person Image"
        className="background-image"
        width={100}
        height={100}
      />
    </div>
  );
}

export default Imagecontent;
