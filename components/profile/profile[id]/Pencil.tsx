import React from "react";
import {Container, Grid, Typography} from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';

const Pencil = ({text}) => {
  return(
      <>
        <Container>
            <Grid container ml={5} mt={-4}>
                <Grid mr={.5}>
                    <Typography sx={{
                        color: "#BBC0CB",
                        fontSize: 13,
                        fontWight: "bold"
                    }}>
                        {text}
                    </Typography>
                </Grid>
                <Grid mt={-.5}>
                    <CreateIcon sx={{
                        color:"#BBC0CB",
                        width: 15
                    }}/>
                </Grid>
            </Grid>
        </Container>
      </>
  )
}

export default Pencil