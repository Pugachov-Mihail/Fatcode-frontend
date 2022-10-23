import React from "react";
import {Avatar, Container, Grid, ListItem, Typography} from "@mui/material";

type PropsMentor = {
    mentor: List[]
}

type List = {
    key: number,
    text: string
}

const MentorsListItem: React.FC<PropsMentor> = ({mentor}) => {

  return(
        <>
                   <ListItem alignItems={"flex-start"}>
                    {mentor.map(item=>(<>
                            <Grid ml={4}  >
                                <Avatar sx={{
                                    width: 90,
                                    height: 90,
                                    marginBottom: 1,
                                    position: "relative",
                                    zIndex: 10,
                                    overflow: "hidden",
                                    "&:hover": {
                                        zIndex: 1,
                                        border: "5px solid #69CB2D",
                                        boxShadow: "0 0 0 60px rgba(253, 253, 253, 0.99)"
                                    }
                                }}/>
                                <Typography ml={2}
                                            zIndex={3}
                                            position={"relative"}
                                            overflow={"hidden"}>
                                    {item.text}
                                </Typography>
                            </Grid>
                        </>
                    ))}
                    </ListItem>

        </>
  )
}

export default MentorsListItem