// React
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectMyInfo } from '../../../redux/slices/myInfo/myInfo';
import { addItems, removeItems } from '../../../helpers/AddRemoveItems';
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
                        dispatch(addItems(el , myInfo))
                    }} />
                    <Remove sx={{
                        cursor: "pointer",
                        bgcolor: "rgb(26, 32, 39)",
                        color: "white",
                        borderRadius: "100%",
                        ml: "10px"
                    }} onClick={() => {
                       dispatch(removeItems(el , myInfo))
                    }} />
                </Grid>
            </Grid>
        </CardActions>
    )
}
