// React
import React from "react";
import { selectMyInfo } from "../../../redux/slices/myInfo/myInfo";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { changeActivePage } from "../../../redux/slices/pagesSlice/actionCreators";
import { selectActivePage, selectPages } from "../../../redux/slices/pagesSlice/pagesSlice";
// components
import { Grid, IconButton, Typography } from "@mui/material";
import { Home, Save, ShoppingBasket } from "@mui/icons-material";
import { selectShopItems } from "../../../redux/slices/shopItems/shopItemsSlice";
import { selectFetch } from "../../../redux/slices/fetchingData/fetchingData";
import { saveData } from "../../../helpers/saveData";

const getSum = (itemsInBusket) => {
  let sum = 0;
  itemsInBusket.forEach(({ count }) => {
    return (sum += count);
  });
  return sum;
};

export default function Menu() {
  const myInfo = useSelector(selectMyInfo);
  const shopItems = useSelector(selectShopItems);
  const pages = useSelector(selectPages);
  const activePageSelect = useSelector(selectActivePage);
  const dispatch = useDispatch();
  const fetchingData = useSelector(selectFetch);

  return (
    <Grid container alignItems="center">
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
      <Grid
        item
        sx={{
          ml: "15px",
          '& .Mui-disabled' : {
            '& svg' : {
              color : "#ccd1db !important",
            }
          }
        }}
      >
        <IconButton disabled={!fetchingData} onClick = {() => {
          dispatch(saveData(myInfo , shopItems , pages))
        }}>
          <Save
            sx={{
              color: "white",
              fontSize : "30px"
            }}
          />
        </IconButton>
      </Grid>
    </Grid>
  );
}
