import React from "react";
import {Grid, Typography} from "@mui/material";
import Link from "next/link";

type LeftMenu = {
    list: List[]
}

type List = {
    key?: number,
    text?: string,
    href: string
}

//Навесить линки на переходы по страницам
const TextLeftMenu: React.FC<LeftMenu> = ({list}) => {
    return (
        <>
            {
                list.map(item=>(
                    <Grid>
                        <Typography key={item.key} sx={{
                            color: "white",
                            fontSize: 25,
                            fontWeight: "bold",
                            "&:hover": {
                                background: "white",
                                color: "#69CB2D"
                            }
                        }}>
                            <Link href={item.href}>{item.text}</Link>
                        </Typography>
                    </Grid>
                ))
            }
        </>
    )
}

export default TextLeftMenu