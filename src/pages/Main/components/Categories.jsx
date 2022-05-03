// React
import React, { useEffect } from "react";
// store
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveCategory } from "../../../redux/slices/pagesSlice/actionCreators";
import { getActiveCategory, selectActiveCategory } from "../../../redux/slices/pagesSlice/pagesSlice";
// component
import { Button, Grid } from "@mui/material";

const buttonStyle = {
  fontWeight: "700",
  background: "rgb(18, 18, 18)",
  color: "white",
  "&:hover": {
    background: "rgb(18, 18, 18)",
  },
};

const activeButtonStyle = {
  fontWeight: "700",
  background: "white",
  color: "rgb(18, 18, 18)",
  "&:hover": {
    background: "white",
  },
};

let buttons = [
  {
    title: "All",
  },
  {
    title: "Vegetables",
  },
  {
    title: "Meat",
  },
  {
    title: "Fruits",
  },
];

export default function Categories() {
  const activeCategory = useSelector(selectActiveCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActiveCategory(activeCategory))
  }, [activeCategory]);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-evenly"
      sx={{
        height: "80px",
        width: "80%",
      }}
    >
      {buttons.map((el, i) => {
        return (
          <Grid item key={"categorieButtons" + i}>
            <Button
              sx={el.title === activeCategory ? activeButtonStyle : buttonStyle}
              onClick={() => {
                axios
                  .patch("http://localhost:8000/pages", {
                    activePage: 0,
                    activeCategory: el.title,
                  })
                  .then(() => {
                    dispatch(changeActiveCategory(el.title));
                  })
              }}
            >
              {el.title}
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
}
