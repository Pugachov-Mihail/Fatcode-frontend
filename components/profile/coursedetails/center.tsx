import React from 'react';
import {Avatar, Box, Button, Container, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";

export const Center = () => {
    return (
        <Container
            maxWidth={'xl'}
            sx={{
                paddingTop: 3,
                alignItems: 'center',
                bgcolor: '#1C1D1E'
            }}>
            <Grid container>
                <Grid xs={4} mr={5}>
                    <Typography variant='h1' sx={{
                        fontFamily: 'Verdana',
                        fontStyle: 'normal',
                        fontWeight: "bold",
                        fontSize: 50,
                        letterSpacing: 4,
                        textAlign: 'center',
                        color: '#FFFFFF',
                    }}>
                        Python для начинающих
                    </Typography>
                </Grid>
                <Grid mt={8} xs={1}>
                    <Avatar sx={{width: 100, height: 100}}/>
                </Grid>
                <Grid m={2} xs={6}>
                    <Button
                        sx={{
                            fontFamily: 'Verdana',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: 15,
                            textAlign: 'center',
                            borderRadius: '40px',
                            bgcolor: '#69CB2D',
                            color: '#FFFFFF',
                        }}>
                        Михаил Омельченко
                    </Button>
                    <Typography
                        variant='subtitle2'
                        sx={{
                            fontFamily: 'Verdana',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '20px',
                            textAlign: 'left',
                            color: '#FFFFFF',
                        }}>
                        Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem
                        Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а
                        также реальное распределение букв и пробелов в абзацах.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};
