// React
import React from 'react'
// components
import { MoreVert } from '@mui/icons-material'
import { Avatar, CardHeader, IconButton } from '@mui/material'

export default function Header({ el }) {
    return (
        <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: '#1976d2' }} aria-label="recipe">
                    {el.description[0]}
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                    <MoreVert sx={{
                        color: "white"
                    }} />
                </IconButton>
            }
            title={el.name}
            subheader={`Items left : ${el.itemsLeft}`}
            sx={{
                "& .MuiCardHeader-title": {
                    color: "white"
                },
                '& .MuiCardHeader-subheader': {
                    color: "rgba(255, 255, 255, 0.7)"
                }
            }}
        />
    )
}
