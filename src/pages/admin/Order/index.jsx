import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Delete, Edit } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import toast from "react-hot-toast";
import { useProductsQuery } from "../../../hooks/queries";
import { BASE_URL, request } from "../../../services/api";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      // backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function OrderList() {
  const classes = useStyles();
  const [orderData, setOrderData] = useState([]);

  const headers = [
    `Ismi`,
    `Telefon raqam`,
    `mahsulot soni`,
    `buyurtma sanasi`,
    `actions`,
  ];

  const handleDelete = (e) => {
    request
      .delete(`/products/${e}`)
      .then((res) => console.log(res))
      .then(() => toast.success(`o'chirildi`));
  };

  useEffect(() => {
    const fetchData = () =>
      request.get("/order").then((res) => setOrderData(res.data.data));

    fetchData();
  }, []);

  console.log(orderData);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headers.map((item) => (
              <StyledTableCell key={item}>{item}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {orderData?.map((item) => (
            <StyledTableRow key={item.name} hover>
              <StyledTableCell>{item.current_user?.fullname}</StyledTableCell>
              <StyledTableCell>{item?.phone}</StyledTableCell>
              <StyledTableCell>{item.products?.length}</StyledTableCell>
              <StyledTableCell>{new Date(item?.createdAt).toLocaleString()}</StyledTableCell>
              <StyledTableCell>
                <Link
                  to={{
                    pathname: `/admin/products/update/${item?._id}`,
                    state: item?._id,
                  }}
                >
                  <IconButton>
                    <Edit />
                  </IconButton>
                </Link>
                <IconButton onClick={() => handleDelete(item?._id)}>
                  <Delete />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
