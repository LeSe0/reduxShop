// React
import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'

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
                                changeActiveButton(i)
                            }}>{el.title}</Button>
                    </Grid>
                )
            })}
        </Grid>
    )
}
