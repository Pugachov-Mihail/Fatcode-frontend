import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, List, ListItem, ButtonBase } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {useRouter} from "next/router";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  fontSize: 20,
  color: '#BBC0CB',
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.25)',
  lineHeight: 1,

}));

const cardsObj = [
  {id: 1, title: 'Django - первые шаги', times: 14, links: ['Python', 'Django', 'Backend']},
  {id: 2, title: 'Flask - знакомство за ужином', times: 5, links: ['HTML']},
  {id: 3, title: 'Matplotlib - учимся строить графики.', times: 5, links: ['CSS']},
  {id: 4, title: 'Django - первые шаги', times: 14, links: ['Python', 'Django', 'Backend']},
  {id: 5, title: 'Flask - знакомство за ужином', times: 5, links: ['HTML']},
  {id: 6, title: 'Matplotlib - учимся строить графики.', times: 5, links: ['CSS']},
  {id: 1, title: 'Django - первые шаги', times: 14, links: ['Python', 'Django', 'Backend']},
  {id: 2, title: 'Flask - знакомство за ужином', times: 5, links: ['HTML']},
  {id: 3, title: 'Matplotlib - учимся строить графики.', times: 5, links: ['CSS']},
  {id: 4, title: 'Django - первые шаги', times: 14, links: ['Python', 'Django', 'Backend']},
  {id: 5, title: 'Flask - знакомство за ужином', times: 5, links: ['HTML']},
  {id: 6, title: 'Matplotlib - учимся строить графики.', times: 5, links: ['CSS']},
];

const buttonsList = ["Frontend", "Backend", "Тестирование", "Кибербезопастность", "Другое",];

export default function CardsCourse() {
  const router = useRouter()
  return (
    <Box sx={{ flexGrow: 1 }} m={3}>
    
      {/* вывод кнопочныx элементов */}
      <Box component='div' sx={{paddingY: 5}}>
        <Box 
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          columnGap: 2,
          justifyContent: 'center',
        }}>
          {buttonsList.map((button) => (
            <ButtonBase key={button} 
              sx={{
               borderRadius: 40,
               my: 1,
               paddingX: 4,
               paddingY: 1, 
               backgroundColor: '#1C1D1E', 
               color: '#FFFFFF',
               ':hover': {backgroundColor: '#69CB2D', transition: '.5s'}
              }}>
              {button}
            </ButtonBase>
          ))}
        </Box>
      </Box>

      {/* Вывод всех курсов */}
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {cardsObj.map((el) => (
          <Grid onClick={()=>router.push("/courses/1")} item xs={2} sm={4} md={4} key={el.id}
          sx={{maxHeight: 356}}>
            <Item>

              {/* вывод заголовка */}
               <Typography variant='h6'
               sx={{
                 height: 60,
                 fontWeight: 700,
                 lineHeight: 1,
                 color: '#1C1D1E',
               }}>
                 {el.title}
               </Typography>

               {/* вывод картинки */}
               <Box sx={{width: '100%', height: 100, backgroundColor: '#BBC0CB', marginY: 1}}></Box>

               {/* вывод тегов и времени */}
               <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <List 
                sx={{
                  display: 'flex',
                  height: 60,
                  lineHeight: 0.2,
                }}>
                  {el.links.map((e) => (
                    <ListItem sx={{paddingX: 0, cursor: 'pointer'}} key={e}>{'#' + e}</ListItem>
                  ))}
                </List>
                <Box sx={{display: 'flex', justifyContent: 'space-between',}}>
                  <AccessTimeIcon/>
                  <Typography>
                    {el.times + ' h'}
                  </Typography>
                </Box>
               </Box>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}