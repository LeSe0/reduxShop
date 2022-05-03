// React
import React from "react";
import { selectMyInfo } from "../../../redux/slices/myInfo/myInfo";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { changeActivePage } from "../../../redux/slices/pagesSlice/actionCreators";
import { selectActivePage } from "../../../redux/slices/pagesSlice/pagesSlice";
// components
import { Grid, Typography } from "@mui/material";
import { Home, ShoppingBasket } from "@mui/icons-material";

const getSum = (itemsInBusket) => {
  let sum = 0;
  itemsInBusket.forEach(({ count }) => {
    return (sum += count);
  });
  return sum;
};

export default function Menu() {
  const myInfo = useSelector(selectMyInfo);
  const activePageSelect = useSelector(selectActivePage);
  const dispatch = useDispatch();

  return (
    <Grid container>
      <Grid
        item
        sx={{
          mr: "30px",
        }}
      >
        <Home
          sx={{
            cursor: "pointer",
            fontSize: "30px",
            borderBottom: activePageSelect === 0 && "2px solid white",
          }}
          onClick={() => {
            axios
              .get("http://localhost:8000/pages")
              .then((res) => res.data.activeCategory)
              .then((res) => {
                axios
                  .patch("http://localhost:8000/pages", {
                    activePage: 0,
                    activeCategory: res,
                  })
                  .then(() => dispatch(changeActivePage(0, res)));
              });
          }}
        />
      </Grid>
      <Grid item>
        <Grid
          container
          sx={{
            borderBottom: activePageSelect === 1 && "2px solid white",
            cursor: "pointer",
          }}
          onClick={() => {
            axios
              .get("http://localhost:8000/pages")
              .then((res) => res.data.activeCategory)
              .then((res) => {
                axios
                  .patch("http://localhost:8000/pages", {
                    activePage: 1,
                    activeCategory: res,
                  })
                  .then(() => {
                    dispatch(changeActivePage(1, res));
                  });
              });
          }}
        >
          <ShoppingBasket
            sx={{
              fontSize: "30px",
              mr: "5px",
            }}
          />
          <Typography
            sx={{
              fontSize: "20px",
            }}
          >
            {getSum(myInfo)}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
