import React, { useContext, useState } from "react";
import image1 from "../../images/products/Rectangle 14.png";
import { useProductStyles } from "./productStyles";
import favoriteImg from '../../images/icons/favorite.png'
import { Button, IconButton } from "@material-ui/core";
import { TranslateContext } from "../../contexts/TranslateContext";

export default function Product({ favorite, compare }) {
    const classes = useProductStyles();
    const [showIcon, setShowIcon] = useState(true)
    const { trans, sum } = useContext(TranslateContext)

    return (
        <div className={classes.product_root}>
            <section className={classes.card}>
                <img src={image1} alt="kolodka rasm" />
            </section>
            {
                favorite
                    ? <IconButton
                        className={classes.favorite}
                        size="small"
                        onClick={() => setShowIcon(false)}
                        style={!showIcon ? { display: 'none' } : { display: 'block' }}
                    >
                        <img src={favoriteImg} alt="sevimli" />
                    </IconButton>
                    : ''
            }

            {
                compare
                    ? <section className={classes.compare_box}>
                        <Button className={classes.signin_button} variant="outlined">
                            {trans ? `Войти` : `Kirish`}
                        </Button>
                        <Button className={classes.delete_button}>
                            {trans ? `Удалить` : `O'chirish`}
                        </Button>
                    </section>

                    : <section>
                        <div className={classes.price}>
                            <h3>{`4,677,000 ${sum}`}</h3>
                            <p>{`6,610,000 ${sum}`}</p>
                        </div>

                        <div className={classes.brand}>
                            <p>Mercedes-Benz / Автомобильный </p>
                        </div>
                    </section>
            }
        </div>
    );
}
