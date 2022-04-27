// React
import React from 'react'
import { addToBasketAction, removeFromBasketAction } from '../../../redux/slices/myInfo/actionCreators';
import { buyItemAction, removeItemAction } from '../../../redux/slices/shopItems/actionCreators';
// components
import { Add, Remove } from '@mui/icons-material';
import { Grid, Typography, CardActions } from '@mui/material';
import { useDispatch } from 'react-redux';

export default function Actions({ el }) {

    const dispatch = useDispatch()

    return (
        <CardActions>
            <Grid container
                justifyContent="space-between"
                alignItems="center"
                px="10px"
                pt="15px"
            >
                <Grid item>
                    <Typography>Price : {el.price}$</Typography>
                </Grid>
                <Grid item pr="10px">
                    <Add sx={{
                        cursor: "pointer",
                        bgcolor: "rgb(26, 32, 39)",
                        color: "white",
                        borderRadius: "100%",
                    }} onClick={() => {
                        if (el.itemsLeft > 0) {
                            dispatch(buyItemAction(el.id));
                            dispatch(addToBasketAction(el))
                        }
                    }} />
                    <Remove sx={{
                        cursor: "pointer",
                        bgcolor: "rgb(26, 32, 39)",
                        color: "white",
                        borderRadius: "100%",
                        ml: "10px"
                    }} onClick={() => {
                        if (el.itemsLeft < el.itemsLeft + el.count) {
                            dispatch(removeItemAction(el.id));
                            dispatch(removeFromBasketAction(el.id))
                        }
                    }} />
                </Grid>
            </Grid>
        </CardActions>
    )
}
