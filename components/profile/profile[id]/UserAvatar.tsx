import React from "react";
import {Avatar, Grid} from "@mui/material";
import Pencil from "./Pencil";

const UserAvatar = () => {
    return(
        <Grid container>
            <Grid xs={9}>
                <Avatar sx={{
                    width: 100,
                    height: 100,
                    marginBottom: 1
                }}/>
            </Grid>
            <Grid xs={12} mt={5} ml={-9}>
                <Pencil text={"Сменить аватарку"}/>
            </Grid>
        </Grid>
    )
}
export default UserAvatar