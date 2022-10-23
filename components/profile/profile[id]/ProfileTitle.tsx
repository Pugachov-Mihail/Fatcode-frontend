import React from "react";
import {Grid, Typography} from "@mui/material";

const ProfileTitle = ({text}) => {
    return(
        <Grid mb={2}>
            <Typography sx={{
                fontSize: 36,
                fontWeight: "bold"
            }}>
                {text}
            </Typography>
        </Grid>
    )
}

export default ProfileTitle