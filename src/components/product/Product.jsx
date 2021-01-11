import React from "react";
import image1 from "../../images/products/Rectangle 14.png";
import { useProductStyles } from "./productStyles";

export default function Product() {
    const classes = useProductStyles();

    return (
        <div className={classes.product_root}>
            <div className={classes.card}>
                <img src={image1} alt="" />
            </div>

            <div className={classes.price}>
                <h3>4,677,000 сум</h3>
                <p>6,610,000 сум</p>
            </div>

            <div className={classes.brand}>
                <p>Mercedes-Benz / Автомобильный </p>
            </div>
        </div>
    );
}
