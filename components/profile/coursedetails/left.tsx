import React, {useState} from 'react';
import {Box, Container, Typography} from "@mui/material";
import CountEx from "../../courses/CountEx";
import LeftInformation from "../../courses/LeftInformation";

const info1 = [
    {key: 1, text: " В курсе вы узнаете о мощных способах хранения и управления данными, а также о полезных\n" +
            "                инструментах\n" +
            "                для обработки данных, которые помогут вам самостоятельно проводить анализ"},
]

const info2 = [
    {key: 1, text: "Python – это высокоуровневый язык программирования общего назначения, который становится\n" +
            "                популярным\n" +
            "                как при создании простых web-сайтов, так и при разработке сложных моделей машинного обучения.\n" +
            "                Компании по всему миру используют Python для решения большого объема самых разноплановых проблем\n" +
            "                и\n" +
            "                задач. В нашем курсе \"Python для начинающих\" вы узнаете о мощных способах хранения и управления\n" +
            "                данными, а также о полезных инструментах для обработки данных, которые помогут вам\n" +
            "                самостоятельно\n" +
            "                проводить анализ. Начните онлайн-курс по Python в DeepSkills прямо сейчас."}
]

export const Left = () => {
    const [experiences, setExperiances] = useState([
        {key: 1, count: 25, text: "монет"},
        {key: 2, count: 11, text: "видео"},
        {key: 3, count: 46, text: "упражнений"},
        {key: 4, count: 4700, text: "опыта"},
    ])

    return (
        <Container>
            <LeftInformation title={"Для чего?"} info={info1}/>
            <Box mt={5} mb={10}>
                <CountEx exp={experiences}/>
            </Box>
            <LeftInformation title={"Описание курса"} info={info2}/>
        </Container>
    );
};
