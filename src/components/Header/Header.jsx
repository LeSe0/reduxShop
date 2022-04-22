// React
import React from "react";

// components
import { AppBar, Toolbar, IconButton, Typography, Grid } from "@mui/material";
import { Menu } from "@mui/icons-material";

export default function Header() {
    return (
        <AppBar position="static" sx={{
            height: "50px"
        }}>
            <Grid container alignItems="center" justifyContent="space-between" sx={{
                height: "100%"
            }}>
                <Grid item sx={{
                    ml: "50px",
                }}>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <Menu />
                    </IconButton>
                </Grid>
                <Grid item sx={{
                    mr: "50px"
                }}>
                    <Typography>Items Price : 0</Typography>
                </Grid>
            </Grid>
        </AppBar>
    )
}
