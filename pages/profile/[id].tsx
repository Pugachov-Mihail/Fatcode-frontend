import React from "react";
import {Avatar, Grid, Typography} from "@mui/material";
import BackgoundUser from "../../layouts/ProfileBack/BackgoundUser";
import UserInformation from "../../components/profile/profile[id]/UserInformation";
import Pencil from "../../components/profile/profile[id]/Pencil";
import UserAvatar from "../../components/profile/profile[id]/UserAvatar";
import ProfileTitle from "../../components/profile/profile[id]/ProfileTitle";


const User = () => {
    const user = [
        {key: 1, text: "Логин", use: "Ватрушка"},
        {key: 2, text: "E-mail", use: "vatrushka_pushka@gmail.com"},
        {key: 3, text: "Имя ", use: "Екатерина"},
        {key: 4, text: "Фамилия ", use: "Иванова"},
        {key: 5, text: "Отчество", use: "Гульнаровна"},
    ]

    const userLink = [
        {key: 1, text: "Linkedin", use: "https://www.linkedin.com"},
        {key: 2, text: "Youtube", use: "https://www.youtube.com"},
        {key: 3, text: "VK", use: "https://vk.com"},
    ]

    return(
        <>
            <BackgoundUser>
                <Grid container>
                    <Grid xs={9} mb={1}>
                        <ProfileTitle text={"Профиль"}/>
                        <Grid ml={35}>
                            <Pencil text={"Редактировать"}/>
                        </Grid>
                    </Grid>
                    <Grid xs={7}>
                        <UserInformation
                            user={user} bcolor={"#F3F3F3"}/>
                    </Grid>
                    <Grid xs={3} mt={-5} ml={8}>
                        <UserAvatar/>
                    </Grid>
                    <Grid mt={1}>
                        <UserInformation user={userLink}
                                         bcolor={"white"}
                                         border={"3px solid #F3F3F3"}
                                         width={650}
                                         decoration={"underline"}/>
                    </Grid>
                </Grid>
            </BackgoundUser>
        </>
    )
}

export default User