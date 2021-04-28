import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@material-ui/core'

import { ContextRoot } from '../../../contexts'
import { RatingComp, CheckBox, ProductBrand, ButtonComponent } from '../../../components/shared'
import { Close, FavoriteBlack } from '../../../assets/images/icons'
import oilImg from '../../../assets/images/products/oil.png'
import { useFastBuyModalStyles } from './fastBuyModalStyles'

export default function FastBuyModal() {
    const classes = useFastBuyModalStyles()
    const { trans, sum, openFastBuyModal, setOpenFastBuyModal } = useContext(ContextRoot)

    const handleClickCloseModal = () => {
        setOpenFastBuyModal(false)
    }

    console.log(openFastBuyModal)

    return (
        <Dialog className={classes.root} onClose={handleClickCloseModal} open={openFastBuyModal} >

            <DialogTitle id="customized-dialog-title" onClose={handleClickCloseModal}>
                Modal title
        </DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Typography>
                <Typography gutterBottom>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                    lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
                <Typography gutterBottom>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                    auctor fringilla.
          </Typography>
            </DialogContent>
            <DialogActions>
            </DialogActions>
            {/* <main className={classes.card_box}>
                <section className={classes.text_box}>
                    <div>
                        <h1>Castrol/Автомобильная масло</h1>
                        <div className={classes.secondary_box}>
                            <p className={classes.artikul}>Артикул: 123277394</p>
                            <RatingComp value={5} />
                            <p className={classes.review}> 2339 отзывов</p>
                            <IconButton size="small" className={classes.icon}>
                                <FavoriteBlack />
                            </IconButton>
                            <p className={classes.favorite}>В избранное</p>
                        </div>
                    </div>

                    <IconButton className={classes.close}>
                        <Close />
                    </IconButton>
                </section>

                <section className={classes.content_box}>
                    <section className={classes.image_box}>
                        <img src={oilImg} alt="" />
                    </section>

                    <section className={classes.right_box}>
                        <div className={classes.price}>
                            <h2>{`7,850,000 ${sum}`}</h2>
                            <p>{`9,876,000 ${sum}`}</p>
                        </div>

                        <div className={classes.checkbox}>
                            <CheckBox label="Обратитесь к мастеру службы" />
                        </div>

                        <div className={classes.buttons}>
                            <ButtonComponent title="Войти" />
                            <ButtonComponent outlined title="Добавить в корзину" />
                        </div>

                        <div className={classes.brand}>
                            <ProductBrand />
                        </div>

                        <p className={classes.shipping}>Бесплатная доставка</p>

                    </section>
                </section>

                <section className={classes.link}>
                    <Link> Больше информации о товаре</Link>
                </section>
            </main> */}

        </Dialog>
    )
}
