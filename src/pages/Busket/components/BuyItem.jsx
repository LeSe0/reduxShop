// React
import React from 'react'
// component
import { Button, Grid } from '@mui/material'

const buttonStyle = {
    fontWeight: "700",
    background: "white",
    color: "rgb(18, 18, 18)",
    "&:hover": {
        background: "white",
    }
}

export default function BuyItem({ el }) {
    return (
        <Grid container justifyContent="center" mb="15px">
            <Button sx={buttonStyle}>Buy {el.count} {el.count > 1 ? 'items' : "item"}</Button>
        </Grid>
    )
}
