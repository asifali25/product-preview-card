import React from "react";
import imgdesktop from "./images/image-product-desktop.jpg";
import imgmob from "./images/image-product-mobile.jpg";
import cartIcon from "./images/icon-cart.svg";
import style from "./Card.module.css";

function Card() {
  return (
    <div className={style.cardbox}>
      <picture className={style.cardimg}>
        <source media="(max-width: 920px)" srcSet={imgmob}></source>
        <img src={imgdesktop} alt="dekstopImg"></img>
      </picture>
      <div className={style.cardtext}>
        <h3 className={style.perfume}>PERFUME</h3>
        <h1 className={style.heading}>Gabrielle Essence Eau De Parfum</h1>
        <p className={style.paragraph}>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className={style.offerbox}>
          <h2 className={style.offerprice}>$149.99</h2>{" "}
          <h5 className={style.withoutofficer}>$169.99</h5>
        </div>
        <button className={style.button}>
          <img src={cartIcon} alt="IconCard"></img>
          <p className={style.buttonPara}>Add to Cart</p>
        </button>
      </div>
    </div>
  );
}

export default Card;
