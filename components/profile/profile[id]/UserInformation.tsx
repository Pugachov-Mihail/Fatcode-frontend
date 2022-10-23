import React from "react";
import {Container, Grid, ListItem, Typography} from "@mui/material";

type Props = {
    user: User[],
    bcolor: any,
    border: any,
    width: any
}

interface User{
    key: number,
    text: string,
    use: string
}

const UserInformation: React.FC<Props> = ({user, ...props}) => {

    return(
        <>
            {
                user.map(item=>(
                    <Grid key={item.key}>
                        <Grid>
                            <Typography mb={1} mt={1} sx={{
                                fontSize: 22,
                                fontWeight: "bold"
                            }}>
                                {item.text}
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography sx={{
                                background: props.bcolor,
                                borderRadius: "5px",
                                fontSize: 20,
                                padding: .5,
                                paddingLeft: 1,
                                border: props.border,
                                width: props.width,
                            }}>
                                {item.use}
                            </Typography>
                        </Grid>
                    </Grid>
                ))
            }
        </>
    )
}

export default UserInformation