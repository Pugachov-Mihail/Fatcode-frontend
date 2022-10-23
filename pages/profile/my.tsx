import React from "react";
import BackgoundUser from "../../layouts/ProfileBack/BackgoundUser";
import ProfileTitle from "../../components/profile/profile[id]/ProfileTitle";
import {Container, Grid} from "@mui/material";
import MyTrello from "../../components/profile/mynotes/MyTrello";

const MyNotes = () => {
    return(
      <BackgoundUser>
        <ProfileTitle text={"Мои заметки"}/>
          <Grid container>
            <Container>
              <Grid xs={10}>
                <MyTrello />
              </Grid>
            </Container>
          </Grid>
      </BackgoundUser>
    )
}

export default MyNotes;