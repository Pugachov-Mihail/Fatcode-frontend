import React from 'react';
import {Center} from './../../components/profile/coursedetails/center'
import {Left} from './../../components/profile/coursedetails/left'
import {Right} from './../../components/profile/coursedetails/right'
import {Grid} from "@mui/material";

const Id = () => {

    return (
        <>
        <Grid>
            <Center/>
        </Grid>
        <Grid container>
            <Grid ml={4} xs={5}>
                <Left/>
            </Grid>
            <Grid ml={3} xs={6}>
                <Right/>
            </Grid>
        </Grid>
        </>
    )
};

export default Id;
