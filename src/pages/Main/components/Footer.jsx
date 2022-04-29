// React
import React from 'react'
// components
import { CardContent, Typography } from '@mui/material'

export default function Footer({ el }) {
    return (
        <CardContent >
            <Typography>Description : </Typography>
            <Typography sx={{
                display: '-webkit-box',
                fontSize: "14px",
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                overflow: "hidden"
            }} >{el.description}</Typography>
        </CardContent>
    )
}
