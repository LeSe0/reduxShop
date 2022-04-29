// React
import React from 'react'
import { addToBasketAction, removeFromBasketAction } from '../../../redux/slices/myInfo/actionCreators';
import { buyItemAction, removeItemAction } from '../../../redux/slices/shopItems/actionCreators';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectMyInfo } from '../../../redux/slices/myInfo/myInfo';
// components
import { Add, Remove } from '@mui/icons-material';
import { Grid, Typography, CardActions } from '@mui/material';

export default function Actions({ el }) {

    const dispatch = useDispatch();
    const myInfo = useSelector(selectMyInfo)

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
                            if (myInfo.find((elem) => elem.id == el.id)) {
                                axios.put('http://localhost:8000/myInfo/' + el.id, {
                                    count: el.count ? el.count + 1 : 1
                                })
                            }
                            else {
                                axios.patch('http://localhost:8000/shopItems/' + el.id, {
                                    count: el.count
                                })
                                axios.post('http://localhost:8000/myInfo', el).then(() => {
                                    dispatch(buyItemAction(el.id))
                                    dispatch(addToBasketAction(el))
                                })
                            }
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
                            dispatch(removeFromBasketAction(el))
                        }
                    }} />
                </Grid>
            </Grid>
        </CardActions>
    )
}
