// React
import { Button, Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addElements } from '../../../redux/slices/shopItems/actionCreators'

const buttonStyle = {
    fontWeight: "700",
    background: "rgb(18, 18, 18)",
    color: "white",
    "&:hover": {
        background: "rgb(18, 18, 18)",
    }
}

const activeButtonStyle = {
    fontWeight: "700",
    background: "white",
    color: "rgb(18, 18, 18)",
    "&:hover": {
        background: "white",
    }
}

let buttons = [
    {
        title: 'All',
    },
    {
        title: 'Vegetables',
    },
    {
        title: 'Meat',
    },
    {
        title: 'Fruits',
    }
]

export default function Categories({ activeCategory, setActiveCategory }) {

    const [activeButton, changeActiveButton] = useState(0)

    const dispatch = useDispatch()

    useEffect(() => {
        axios
            .get("http://localhost:8000/pages")
            .then((res) => {
                changeActiveButton(res.data.activeCategory)
            })
    }, [])


    return (
        <Grid container alignItems="center" justifyContent="space-evenly" sx={{
            height: "80px",
            width: "80%"
        }}>
            {buttons.map((el, i) => {
                return (
                    <Grid item key={"categorieButtons" + i}>
                        <Button sx={i === activeButton
                            ? activeButtonStyle
                            : buttonStyle}
                            onClick={() => {
                                axios.get("http://localhost:8000/pages")
                                    .then(res => res.data.activePage)
                                    .then(res => {
                                        axios.patch('http://localhost:8000/pages', {
                                            activePage: res,
                                            activeCategory: i
                                        })
                                    })
                                el.title != "All"
                                    ? axios.get("http://localhost:8000/shopItems?category=" + el.title.toLowerCase())
                                        .then(res => res.data)
                                        .then(res => {
                                            dispatch(addElements(res))
                                        })
                                    : axios.get("http://localhost:8000/shopItems")
                                        .then(res => res.data)
                                        .then(res => {
                                            dispatch(addElements(res))
                                        })
                                changeActiveButton(i)
                            }}>{el.title}</Button>
                    </Grid>
                )
            })}
        </Grid>
    )
}
