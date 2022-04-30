// React
import React from 'react'
import { selectMyInfo } from '../../../redux/slices/myInfo/myInfo'
import { useSelector } from 'react-redux'
import axios from 'axios'
// components
import { Grid, Typography } from '@mui/material'
import { Home, ShoppingBasket } from '@mui/icons-material'

const getSum = (itemsInBusket) => {
    let sum = 0
    itemsInBusket.forEach(({ count }) => {
        return sum += count
    })
    return sum
}

export default function Menu({ setActivePage, activePage }) {

    const myInfo = useSelector(selectMyInfo)

    return (
        <Grid container>
            <Grid item sx={{
                mr: "30px"
            }}>
                <Home sx={{
                    cursor: "pointer",
                    fontSize: "30px",
                    borderBottom: activePage === 0 && '2px solid white',
                }} onClick={() => {
                    setActivePage(0)
                    axios.get("http://localhost:8000/pages")
                        .then(res => res.data.activeCategory)
                        .then(res => {
                            axios.patch('http://localhost:8000/pages', {
                                activePage: 0,
                                activeCategory: res
                            })
                        })
                }} />
            </Grid>
            <Grid item>
                <Grid container sx={{
                    borderBottom: activePage === 1 && '2px solid white',
                    cursor: "pointer"
                }} onClick={() => {
                    setActivePage(1)
                    axios.get("http://localhost:8000/pages")
                        .then(res => res.data.activeCategory)
                        .then(res => {
                            axios.patch('http://localhost:8000/pages', {
                                activePage: 1,
                                activeCategory: res
                            })
                        })
                }} >
                    <ShoppingBasket sx={{
                        fontSize: "30px",
                        mr: "5px",
                    }} />
                    <Typography sx={{
                        fontSize: "20px"
                    }}>{getSum(myInfo)}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}
