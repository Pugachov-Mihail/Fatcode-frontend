import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const ProgressMyCoursesStart = ({ myCourse }) => {
  return (
    <Box component='div'>
      {myCourse.map((item) => (

        // вывод курса
        <Box key={item.id} sx={{ pb: 5 }}>
          <Typography component='h4'
            sx={{
              fontSize: 18,
              fontWeight: 700,
              paddingBottom: 2,
            }}>
            {item.chapter}
          </Typography>

          {/* вывод раздела и % процент прохождени */}
          <Box>
            {item.thema.map((el) => (
              <Box key={el.name}>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 600,
                    pb: 2
                  }}>
                  {el.name}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {/* отрисовка линий */}
                  <Box sx={{ width: '100%', mr: 1 }}>
                  
                    <LinearProgress variant="determinate" value={el.percent}
                    sx={{
                      backgroundColor: '#FFFFFF', 
                      '.MuiLinearProgress-barColorPrimary': {backgroundColor: '#69CB2D'}
                      }}/>
                  </Box>
                  <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary">{el.percent + '%'}</Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ProgressMyCoursesStart;