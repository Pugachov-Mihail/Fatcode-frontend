import {Box, Typography} from "@mui/material";
import React from "react";

type TypeProps = {
    title: string
    info: Array<T>
}

type T = {
    key: number,
    text: string
}

const LeftInformation = (props: TypeProps) => {
    const {info, title} = props;

    return (
        <Box mt={-10}
             sx={{
                 border: '1px solid #000000',
                 borderRadius: 7,
                 background: "white",
                 padding: 3
             }}>
            <Typography
                sx={{
                    width: 230,
                    borderRadius: '40px',
                    bgcolor: '#1C1D1E',
                    color: '#FFFFFF',
                    textAlign: 'center'
                }}>
                {title}
            </Typography>
            {info.map(item => (
                <Typography
                    key={item.key}
                    sx={{
                        color: "black",
                    }}>
                    {item.text}
                </Typography>
            ))}
            <Typography>

            </Typography>
        </Box>
    )
}

export default LeftInformation