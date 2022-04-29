// React
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectMyInfo } from '../../redux/slices/myInfo/myInfo'
// components
import { Card, CardMedia, Grid, Stack, Typography } from '@mui/material'
import Actions from '../Main/components/CardActions'
import Footer from '../Main/components/Footer'
import Header from '../Main/components/Header'
import BuyItem from './components/BuyItem'
import axios from 'axios'

const getSum = (itemsInBusket) => {
    let sum = 0
    itemsInBusket.forEach(({ count, price }) => {
        return sum += count * price
    })
    return sum
}

export default function Busket() {

    const myInfo = useSelector(selectMyInfo)

    return (
        <Stack sx={{
            mt: "2%",
            mb: "2%",
            alignItems: "center"
        }}>
            <Typography component="h2" sx={{
                color: "white",
                fontWeight: "700",
                fontSize: "20px"
            }}>Price : {getSum(myInfo)}$</Typography>
            <Grid container justifyContent="center" sx={{
                flexWrap: "wrap"
            }}>
                {myInfo.map((el, i) => {
                    return (
                        <Card sx={{
                            width: "400px",
                            ml: "15px",
                            mr: "15px",
                            mt: "25px",
                            bgcolor: "rgb(18, 18, 18)",
                            color: "rgba(255, 255, 255, 0.7)"
                        }} key={"busketItem" + i}>
                            <Header el={el} />
                            <CardMedia
                                component="img"
                                height="auto"
                                src="https://cdn5.vectorstock.com/i/1000x1000/49/94/e-shop-vector-4804994.jpg"
                            />
                            <Actions el={el} />
                            <Footer el={el} />
                            <BuyItem el={el} />
                        </Card>
                    )
                })}
            </Grid>
        </Stack>
    )
}
