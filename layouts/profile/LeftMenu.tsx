import React from "react";
import {Container} from "@mui/material";
import TextLeftMenu from "./TextLeftMenu";
import Image from "next/image";
import Grid from "@mui/material/Grid";

const LeftMenu = () => {
    const pets = true

    const list = [
        {key: 1, text: "Профиль", href: "1"},
        {key: 2, text: "Мой питомец", href: "mypet"},
        {key: 3, text: "Мои курсы", href: "mycourse"},
        {key: 4, text: "Мои ментора", href: "mentors"},
        {key: 5, text: "Мои донаты", href: "mydonats"},
        {key: 6, text: "Мои заметки", href: "my"},
        {key: 7, text: "Вопрос-ответ", href: "qus"},
    ]

    if (pets){
    return(<>
        <Container sx={{
            background: "#69CB2D",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingTop: 5,
            paddingBottom: 2
        }}>
            <TextLeftMenu list={list}/>
        </Container>
        </>
    )}else {return(<>
            <Container sx={{
                background: "#69CB2D",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                paddingTop: 5,
                paddingBottom: 2
            }}>
                <TextLeftMenu list={list}/>
            </Container>
            <Grid>
                <Image src={"/assets/image/svg/Laps.svg"} width={200} height={200} />
            </Grid>
        </>
    )}
}

export default LeftMenu