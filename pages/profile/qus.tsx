import React from "react";
import BackgoundUser from "../../layouts/ProfileBack/BackgoundUser";
import ProfileTitle from "../../components/profile/profile[id]/ProfileTitle";
import {Container, Grid} from "@mui/material";
import QuestionAnswer from "../../components/profile/questionAnswer/QuestionAnswer";

const Question = () => {
    return(
      <BackgoundUser>
        <ProfileTitle text={"Вопрос-ответ"}/>
          <Grid container>
            <Container>
              <Grid xs={10}>
                <QuestionAnswer />
              </Grid>
            </Container>
          </Grid>
      </BackgoundUser>
    )
}

export default Question;