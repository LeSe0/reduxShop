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
                                axios.put('http://localhost:8000/shopItems/' + el.id, {
                                    ...el,
                                    count: el.count + 1,
                                    itemsLeft: el.itemsLeft - 1
                                }).then(() => {
                                    dispatch(buyItemAction(el.id))
                                })
                                axios.put('http://localhost:8000/myInfo/' + el.id, {
                                    ...el,
                                    count: el.count + 1,
                                    itemsLeft: el.itemsLeft - 1
                                }).then(() => {
                                    dispatch(addToBasketAction(el))
                                })
                            }
                            else {
                                axios.put('http://localhost:8000/shopItems/' + el.id, {
                                    ...el,
                                    count: el.count + 1,
                                    itemsLeft: el.itemsLeft - 1
                                }).then(() => {
                                    dispatch(buyItemAction(el.id))
                                })
                                axios.post('http://localhost:8000/myInfo', {
                                    ...el,
                                    count: el.count + 1,
                                    itemsLeft: el.itemsLeft - 1
                                }).then(() => {
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
                            if (myInfo.find((elem) => elem.id == el.id)) {
                                if (el.count <= 1) {
                                    axios.put('http://localhost:8000/shopItems/' + el.id, {
                                        ...el,
                                        count: el.count - 1,
                                        itemsLeft: el.itemsLeft + 1
                                    }).then(() => {
                                        dispatch(removeItemAction(el.id));
                                    })
                                    axios.delete('http://localhost:8000/myInfo/' + el.id).then(() => {
                                        dispatch(removeFromBasketAction(el));
                                    })
                                }
                                else {
                                    axios.put('http://localhost:8000/shopItems/' + el.id, {
                                        ...el,
                                        count: el.count - 1,
                                        itemsLeft: el.itemsLeft + 1
                                    }).then(() => {
                                        dispatch(removeItemAction(el.id));
                                    })
                                    axios.put('http://localhost:8000/myInfo/' + el.id, {
                                        ...el,
                                        count: el.count - 1,
                                        itemsLeft: el.itemsLeft + 1
                                    }).then(() => {
                                        dispatch(removeFromBasketAction(el))
                                    })
                                }
                            }
                            else {
                                axios.put('http://localhost:8000/shopItems/' + el.id, {
                                    ...el,
                                    count: el.count - 1,
                                    itemsLeft: el.itemsLeft + 1
                                }).then(() => {
                                    dispatch(removeItemAction(el.id));
                                })
                                axios.put('http://localhost:8000/myInfo' + el.id, {
                                    ...el,
                                    count: el.count - 1,
                                    itemsLeft: el.itemsLeft + 1
                                }).then(() => {
                                    dispatch(removeFromBasketAction(el))
                                })
                            }
                        }
                    }} />
                </Grid>
            </Grid>
        </CardActions>
    )
}
