import React, { useState} from "react";
import BackgoundUser from "../../layouts/ProfileBack/BackgoundUser";
import ProfileTitle from "../../components/profile/profile[id]/ProfileTitle";
import { Button, Grid, Typography} from "@mui/material";
import MentorsList from "../../components/profile/mentors/mentorsList";
import MentorCourse from "../../components/profile/mentors/MentorCourse";


const mentor = [
    {key: 1, text:"Михаил"},
    {key: 2, text:"Михаил"},
    {key: 3, text:"Михаил"},
    {key: 4, text:"Михаил"},
    {key: 5, text:"Михаил"},
]

const list = [
    {key: 1, text:"Объектно-ориентированное программирование"},
    {key: 2, text:"Джанго и Танго"},
    {key: 3, text:"Docker  и с чем его едят"},
    {key: 4, text:"HTML для чайников"},
]


const Mentors = () => {
    const [countriesPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)


    const lastPage: number = currentPage * countriesPerPage
    const fistPage: number = lastPage -countriesPerPage
    const currentPageList = mentor.slice(fistPage, lastPage)

    const next = () => setCurrentPage(prevState => prevState + 1)
    const back = () => setCurrentPage((prevState): any =>  {
        if(prevState>currentPage){
            return prevState - 1
        }else{
            return setCurrentPage(1)
        }
    })


    return(
        <BackgoundUser>
            <ProfileTitle text={"Мои ментора"}/>
            <MentorsList currentPageList={currentPageList}
                         next={next}
                         back={back}/>
            <Grid container>
                <Grid xs={2} mr={2}>
                    <Button sx={{
                        width: 130,
                        color: "white",
                        marginTop: 4,
                        background: "#69CB2D",
                        fontWeight: "bold",
                        borderRadius: 20,
                        "&: hover":{
                            color: "#69CB2D",
                            background: "white",
                            border: "1px solid #69CB2D"
                        }}}>
                        Написать
                    </Button>
                </Grid>
                <Grid mt={4} item ml={1} xs={4}>
                    <Typography sx={{
                        fontSize: 25,
                        fontWeight: "bold",
                        color: "#BBC0CB"
                    }}>
                        Софи Пирогова
                    </Typography>
                </Grid>
                <Grid mt={4}>
                    <MentorCourse list={list}/>
                </Grid>
            </Grid>
        </BackgoundUser>
    )
}

export default Mentors