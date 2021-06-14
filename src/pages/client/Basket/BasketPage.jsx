import React, { useContext, useEffect, useState } from "react";
import { Grid, MenuItem, TextField } from "@material-ui/core";
import { useBasketPageStyles } from "./basketPageStyles";

import { ContextRoot } from "../../../contexts";
import {
  TabMenu,
  BasketList,
  BasketPay,
  InputBasket,
  BreadCrumbs,
  Layout,
} from "../../../components/shared";
import { useFormik } from "formik";
import { NumberFormatCustom } from "../../../components/shared/inputLogin";
import { request } from "../../../services/api";
import toast from "react-hot-toast";

export default function BasketPage() {
  const classes = useBasketPageStyles();
  const [total, setTotal] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);

  const state = useContext(ContextRoot);
  const { trans, userId } = useContext(ContextRoot);
  const { cart, setCart } = state.user;

  const increment = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.cart_quantity += 1;
      }
    });

    setCart([...cart]);
  };

  const decrement = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.cart_quantity === 1
          ? (item.cart_quantity = 1)
          : (item.cart_quantity -= 1);
      }
    });

    setCart([...cart]);
  };

  useEffect(() => {
    const getTotal = () => {
      const total = cart.reduce((prev, item) => {
        return prev + item.price * item.cart_quantity;
      }, 0);

      setTotal(total);
    };

    const getTotalDiscount = () => {
      const discount = cart.reduce((prev, item) => {
        return prev + item.discount * item.cart_quantity;
      }, 0);

      setTotalDiscount(discount);
    };

    getTotal();
    getTotalDiscount();
  }, [cart]);

  const formik = useFormik({
    initialValues: {
      current_user: userId,
      phone: "",
      fullname: "",
      region: "",
      district: "",
      address: "",
      zip_code: "",
      products: cart,
      status: 1,
    },
    // initialValues: {
    //   email: 'foobar@example.com',
    //   password: 'foobar',
    // },
    // validationSchema,
    onSubmit: async (values) => {
      // console.log(values);
      await request.post('/order', values)
          .then((res) => console.log(res.data.data))
          .then((res) => toast.success('Buyurtma qabul qilindi'))
    },
  });

  // const labelsRu = [
  //   {
  //     label: Контактный телефон,
  //     name: "phone",
  //     value: formik.values.order_user.phone ?? "",
  //   },
  //   {
  //     label: Ф.И.О,
  //     name: "fullname",
  //     value: formik.values.order_user.fullname ?? "",
  //   },
  //   {
  //     label: Область,
  //     name: "region",
  //     value: formik.values.order_user.region ?? "",
  //   },
  //   {
  //     label: Город / Район,
  //     name: "district",
  //     value: formik.values.order_user.district ?? "",
  //   },
  //   {
  //     label: Адрес,
  //     name: "address",
  //     value: formik.values.order_user.address ?? "",
  //   },
  //   {
  //     label: Индекс,
  //     name: "zip_code",
  //     value: formik.values.order_user.zip_code ?? "",
  //   },
  // ];

  // const labelsUz = [
  //   {
  //     label: Telefon raqam,
  //     name: "phone",
  //     value: formik.values.order_user.phone ?? "",
  //   },
  //   {
  //     label: F.I.Sh,
  //     name: "fullname",
  //     value: formik.values.order_user.fullname ?? "",
  //   },
  //   {
  //     label: Viloyat,
  //     name: "region",
  //     value: formik.values.order_user.region ?? "",
  //   },
  //   {
  //     label: Shahar / Tuman,
  //     name: "district",
  //     value: formik.values.order_user.district ?? "",
  //   },
  //   {
  //     label: Manzil,
  //     name: "address",
  //     value: formik.values.order_user.address ?? "",
  //   },
  //   {
  //     label: Pochta indeksi,
  //     name: "zip_code",
  //     value: formik.values.order_user.zip_code ?? "",
  //   },
  // ];

  const regions = ["Toshkent shahri"];
  const districts = [
    `Uchtepa tumani`,
    `Bektemir tumani`,
    `Mirzo Ulug'bek tumani`,
    `Sergeli tumani`,
    `Mirobod tumani`,
    `Sergeli tumani`,
    `Olmazor tumani`,
    `Chilonzor tumani`,
    `Shayhontohur tumani`,
    `Yunusobod tumani`,
    `Yakkasaroy tumani`,
    `Yashnobod tumani`,
  ];

  const renderSum = (e) => {
    return String(e).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");
  };

  return (
    <Layout>
      <div className={classes.root}>
        <section className={classes.tabs_box}>
          <TabMenu />
        </section>
        <Grid className={classes.container}>
          <form onSubmit={formik.handleSubmit}>
            <section className={classes.basket_box}>
              <div className={classes.left_box}>
                <BreadCrumbs
                  items={[
                    {
                      link: `/`,
                      titleRu: `Главная`,
                      titleUz: `Asosiy`,
                    },
                    {
                      link: `/`,
                      titleRu: `Корзина`,
                      titleUz: `Xaridlar savati`,
                    },
                  ]}
                />

                <h1>{trans === "ru" ? `Корзина` : `Xaridlar savati`}</h1>
                <div className={classes.basket_list}>
                  {cart.length == 0 ? (
                    <div>Savatda hech narsa yo'q</div>
                  ) : (
                    cart?.map((item) => (
                      <BasketList
                        key={item}
                        data={item}
                        increment={increment}
                        decrement={decrement}
                        total={total}
                        renderSum={renderSum}
                      />
                    ))
                  )}
                </div>
              </div>

              <div className={classes.modal_box}>
                <BasketPay
                  total={total}
                  totalDiscount={totalDiscount}
                  renderSum={renderSum}
                  type="submit"
                  handleSubmit={formik.handleSubmit}
                />
              </div>
            </section>

            <section className={classes.billing_box}>
              <h1>
                {trans === "ru" ? `Информация биллинга` : `To'lov ma'lumotlari`}
              </h1>
              <p>
                {trans
                  ? `Для заказа товаров требуется регистрация.Если вы уже зарегистрированы, войдите в свою учетную запись`
                  : `Mahsulotlarga buyurtma berish uchun ro'yxatdan o'tish kerak. Agar siz allaqachon ro'yxatdan o'tgan bo'lsangiz, iltimos, o'z hisobingizga kiring`}
              </p>
              <section className={classes.input_box}>
                <div className={classes.input_label}>
                  <label htmlFor="phone">
                    {trans === `ru` ? `Контактный телефон` : `Telefon raqam`}
                  </label>
                  <div className={classes.input}>
                    <TextField
                      id="phone"
                      name="phone"
                      variant="outlined"
                      className={classes.textfield}
                      value={formik.values.phone ?? ""}
                      onChange={formik.handleChange}
                      InputProps={{ inputComponent: NumberFormatCustom }}
                    />
                  </div>
                </div>

                <div className={classes.input_label}>
                  <label htmlFor="fullname">
                    {trans === `ru` ? `Ф.И.О` : `F.I.Sh`}
                  </label>
                  <div className={classes.input}>
                    <TextField
                      id="fullname"
                      name="fullname"
                      variant="outlined"
                      className={classes.textfield}
                      value={formik.values.fullname ?? ""}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div className={classes.input_label}>
                  <label htmlFor="region">
                    {trans === `ru` ? `Область` : `Viloyat`}
                  </label>
                  <div className={classes.input}>
                    <TextField
                      select
                      id="region"
                      name="region"
                      variant="outlined"
                      className={classes.textfield}
                      value={formik.values.region ?? ""}
                      onChange={formik.handleChange}
                    >
                      {regions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                </div>

                <div className={classes.input_label}>
                  <label htmlFor="district">
                    {trans === `ru` ? `Город / Район` : `Shahar / Tuman`}
                  </label>
                  <div className={classes.input}>
                    <TextField
                      select
                      id="district"
                      name="district"
                      variant="outlined"
                      className={classes.textfield}
                      value={formik.values.district ?? ""}
                      onChange={formik.handleChange}
                    >
                      {districts.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                </div>

                <div className={classes.input_label}>
                  <label htmlFor="address">
                    {trans === `ru` ? `Адрес` : `Manzil`}
                  </label>
                  <div className={classes.input}>
                    <TextField
                      id="address"
                      name="address"
                      variant="outlined"
                      className={classes.textfield}
                      value={formik.values.address ?? ""}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div className={classes.input_label}>
                  <label htmlFor="zip_code">
                    {trans === `ru` ? `Индекс` : `Indeks`}
                  </label>
                  <div className={classes.input}>
                    <TextField
                      id="zip_code"
                      name="zip_code"
                      variant="outlined"
                      className={classes.textfield}
                      value={formik.values.zip_code ?? ""}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>
              </section>
            </section>
          </form>
        </Grid>
      </div>
    </Layout>
  );
}
