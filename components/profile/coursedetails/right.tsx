import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Link, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {left, right} from "@popperjs/core";

export const Right = () => {
    return (
        <Container fixed
                   sx={{
                       background: "white",
                       borderBottomLeftRadius: 20,
                       borderBottomRightRadius: 20,
                       color: '#1C1D1E',
                       paddingBottom: 10,
                       marginBottom: 10
                   }}>
            <Box
                sx={{
                    // position: 'absolute',
                    mt: 2,
                    float: right
                }}>
                <Button
                    sx={{
                        // position: 'relative',
                        // right: -700,
                        // top: 0,
                        bgcolor: '#69CB2D',
                        borderRadius: '40px',
                        p: '10px',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        color: 'white',
                    }}>
                    Начать обучение
                </Button>
            </Box>
            <Typography
                sx={{
                    mt: '20px',
                    pt: 4,
                    fontFamily: 'Montserrat',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: 38,
                    textAlign: 'left',
                    color: '#000000',
                }}>
                1. Основы Python
            </Typography>
            <Typography
                sx={{
                    mt: '20px',
                    mb: '15px',
                    fontFamily: 'Verdana',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: 20,
                    textAlign: 'left',
                    color: '#000000',
                }}>
                Введение в основные понятия языка Python. Узнайте, как использовать Python в интерактивном
                режиме и
                с помощью скрипта. Создайте свои первые переменные и познакомьтесь с основными типами данных
                Python.
            </Typography>
            <Accordion sx={{
                border: '1px solid #1C1D1E',
                borderRadius: '40px',
                mb: '60px',
                width: 335,
                "&:hover": {border: '1px solid #69CB2D'}
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography
                        sx={{
                            fontFamily: 'Verdana',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '20px',
                            color: '#1C1D1E',
                            textAlign: 'center',
                            "&:hover": {color: '#69CB2D'}
                        }}>
                        Содержание раздела
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                        sx={{
                            fontFamily: 'Verdana',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: 20,
                            color: '#1C1D1E',
                            textAlign: 'left',
                        }}>
                        Функции
                    </Typography>
                    <Typography>
                        Знакомые функции
                    </Typography>
                    <Typography>
                        Помогите
                    </Typography>
                    <Typography>
                        Несколько аргументов
                    </Typography>
                    <Typography>
                        Методы
                    </Typography>
                    <Typography>
                        Методы строк
                    </Typography>
                    <Typography>
                        Методы списка
                    </Typography>
                    <Typography>
                        Методы списка 2
                    </Typography>
                    <Typography>
                        Пакеты
                    </Typography>
                    <Typography>
                        Импорт пакетов
                    </Typography>
                    <Typography>
                        Частичный импорт
                    </Typography>
                    <Typography>
                        Различные способы импорта
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Typography
                sx={{
                    mt: '20px',
                    fontFamily: 'Montserrat',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: 38,
                    textAlign: 'left',
                    color: '#000000',
                }}>
                2. Списки Python
            </Typography>
            <Typography
                sx={{
                    mt: '20px',
                    mb: '15px',
                    fontFamily: 'Verdana',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: 20,
                    textAlign: 'left',
                    color: '#000000',
                }}
            >
                Изучите хранение, доступ и управление данными в списках. Сделайте первый шаг к эффективной работе с
                большими объемами данных.
            </Typography>
            <Accordion sx={{
                border: '1px solid #1C1D1E',
                borderRadius: '40px',
                mb: '60px',
                width: 335,
                "&:hover": {border: '1px solid #69CB2D'}
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography
                        sx={{
                            fontFamily: 'Verdana',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: 20,
                            color: '#1C1D1E',
                            textAlign: 'center',
                            "&:hover": {color: '#69CB2D'}
                        }}>
                        Содержание раздела
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    <Typography>
                        2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Typography
                sx={{
                    mt: '20px',
                    fontFamily: 'Montserrat',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: 38,
                    textAlign: 'left',
                    color: '#000000',
                }}>
                3. Функции и пакеты
            </Typography>
            <Typography
                sx={{
                    mt: '20px',
                    mb: '15px',
                    fontFamily: 'Verdana',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: 20,
                    textAlign: 'left',
                    color: '#000000',
                }}>
                Вы узнаете, как применять функции, методы и пакеты для эффективного использования кода, написанного
                лучшими разработчиками Python. Цель – сократить объем кода, необходимый для решения сложных задач!
            </Typography>
            <Accordion sx={{
                border: '1px solid #1C1D1E',
                borderRadius: '40px',
                mb: '60px',
                width: 335,
                "&:hover": {border: '1px solid #69CB2D'}
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography
                        sx={{
                            fontFamily: 'Verdana',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: 20,
                            color: '#1C1D1E',
                            textAlign: 'center',
                            "&:hover": {color: '#69CB2D'}
                        }}>
                        Содержание раздела
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    <Typography>
                        2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Typography
                sx={{
                    mt: '20px',
                    fontFamily: 'Montserrat',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: 38,
                    textAlign: 'left',
                    color: '#000000',
                }}>
                4. NumPy
            </Typography>
            <Typography
                sx={{
                    mt: '20px',
                    mb: '15px',
                    fontFamily: 'Verdana',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: 20,
                    textAlign: 'left',
                    color: '#000000',
                }}>
                NumPy – это базовый пакет Python для высокопроизводительных научных вычислений и анализа данных.
                Вы
                научитесь работать с мощными инструментами массива NumPy и приступите к анализу данных.
            </Typography>
            <Accordion sx={{
                border: '1px solid #1C1D1E',
                borderRadius: '40px',
                mb: '60px',
                width: 335,
                "&:hover": {border: '1px solid #69CB2D'}
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{"&:hover": {fill: '#69CB2D'}}}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Verdana',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: 20,
                            color: '#1C1D1E',
                            textAlign: 'center',
                            "&:hover": {color: '#69CB2D'}
                        }}>
                        Содержание раздела
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    <Typography>
                        2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Box>
            </Box>
        </Container>
    )
        ;
};
