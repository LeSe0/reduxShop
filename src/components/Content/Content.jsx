// React
import React from "react";
import { useSelector } from "react-redux";
// components
import { Card, CardMedia, Grid, CardContent, Typography } from "@mui/material";
import { selectShopItems } from "../../redux/slices/shopItems/shopItemsSlice";
import Header from "./components/Header";
import Actions from "./components/CardActions";
import Footer from "./components/Footer";

export default function Content() {
    const shopItems = useSelector(selectShopItems)
    return (
        <Grid container justifyContent="center" sx={{
            mt: "2%",
            mb: "2%",
            flexWrap: "wrap"
        }}>
            {shopItems.map((el, i, arr) => {
                return (
                    <Card sx={{
                        width: "400px",
                        ml: "15px",
                        mr: "15px",
                        mt: "25px",
                        bgcolor: "rgb(18, 18, 18)",
                        color: "rgba(255, 255, 255, 0.7)"
                    }} key={"shopItem" + i}>
                        <Header el={el} />
                        <CardMedia
                            component="img"
                            height="auto"
                            src="https://cdn5.vectorstock.com/i/1000x1000/49/94/e-shop-vector-4804994.jpg"
                        />
                        <Actions el={el} />
                        <Footer el={el} />
                    </Card>
                )
            })}
        </Grid>
    )
}
