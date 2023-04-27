import { urlFor } from "@/lib/client";
import Link from "next/link";
import React from "react";

const FooterBanner = ({
  footerBanner: {
    discount,
    largrText1,
    largrText2,
    saleTime,
    smallText,
    midText,
    product,
    buttonText,
    desc,
    image,
  },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largrText1}</h3>
          <h3>{largrText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        <img
          src={urlFor(image)}
          alt="image-footer"
          className="footer-banner-image"
        />
      </div>
    </div>
  );
};

export default FooterBanner;
