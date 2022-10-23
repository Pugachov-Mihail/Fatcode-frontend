import {Box, Container, ListItem, Typography} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import {Left} from "../profile/coursedetails/left";

type TypeLeft = {
    exp: Array<T>
}

type T = {
    key: number,
    count: number,
    text: string
}

const CountEx = (props: TypeLeft) => {
    const {exp} = props;

    return (
        <ListItem alignItems={"flex-start"}>
            {exp.map(item => (
                <Grid container
                      key={item.key}
                      sx={{
                          background: "#69CB2D",
                          margin: 2,
                          width: "25vh",
                          height: "15vh",
                          padding: 2
                      }}>
                    <Grid xs={12}>
                        <Typography sx={{
                            textAlign: "center",
                            color: "white",
                            fontSize: 20,
                            fontWeight: "bold",
                        }}>
                            {item.count}
                        </Typography>
                    </Grid>
                    <Grid xs={12}>
                        <Typography sx={{
                            color: "white",
                            fontSize: 12,
                            fontWeight: "bold",
                            textAlign: 'center',
                        }}>
                            {item.text}
                        </Typography>
                    </Grid>
                </Grid>

            ))}
        </ListItem>
    )
}

export default CountEx