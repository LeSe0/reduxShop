// React
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMyInfo } from "../../redux/slices/myInfo/myInfo";
// components
import { AppBar, IconButton, Grid } from "@mui/material";
import { Delete } from "@mui/icons-material";
import Menu from "./components/Menu";

export default function Header() {

    const myInfo = useSelector(selectMyInfo)

    const dispatch = useDispatch()

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
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => {
                        myInfo.length > 0 && dispatch({ type: "removeAll" })
                    }}>
                        <Delete />
                    </IconButton>
                </Grid>
                <Grid item sx={{
                    mr: "50px"
                }}>
                    <Menu />
                </Grid>
            </Grid>
        </AppBar>
    )
}
