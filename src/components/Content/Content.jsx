// React
import React from "react";
import { useSelector } from "react-redux";

// components
import { Avatar, Card, CardHeader, CardMedia, Grid, IconButton } from "@mui/material";
import { MoreVert } from "@mui/icons-material";

export default function Content() {
    const storeItems = useSelector((state) => {
        return state;
    });

    console.log(storeItems);

    return (
        <Grid container justifyContent="center" sx={{
            height: "100%",
            mt: "10%",
            flexWrap: "wrap"
        }}>
            {storeItems.map((el, i) => {
                return (
                    <Card s sx={{
                        height: "300px",
                        width: "400px",
                        ml: "15px",
                        mr: "15px",
                        mt: "25px"
                    }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: 'red[500]' }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVert />
                                </IconButton>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            src="https://media.istockphoto.com/photos/shopping-cart-with-different-food-products-picture-id1147086804?k=20&m=1147086804&s=612x612&w=0&h=oZjgcgd7qOd85xV4p6qmLdZDOriLTuCbxLGU3AZfuXo="
                        />
                    </Card>
                )
            })}
        </Grid>
    )
}