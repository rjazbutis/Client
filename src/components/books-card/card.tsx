/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

// type BookType = {
//   smallThumbnail: any,
//   volumeInfo: any,
//   imageLinks: any,
//   id: any,
// };

// type PropType = {
//   book: BookType[];
// };

const BooksCard: any = ({ book }: any) => (
  <Grid container spacing={5} mt={5}>
    {
      book.map((item: any) => {
        const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        return (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={3}
            key={item.id}
            sx={{
              transition: '0.3s',
              ':hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <Box sx={{
              backgroundImage: `url(${thumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              width: '100%',
              minHeight: '250px',
              display: 'flex',
              borderRadius: '30px 30px 0px 0px',
            }}
            >
              <FavoriteIcon sx={{
                color: 'lightGrey',
                maxWidth: '50px',
                maxHeight: '50px',
                margin: 'auto',
                ':hover': {
                  color: 'white',
                  cursor: 'pointer',
                },
              }}
              />
            </Box>
            <Paper sx={{ textAlign: 'center', width: '100%', borderRadius: '0px 0px 30px 30px' }}>
              <Typography
                component="h2"
                variant="subtitle2"
                sx={{
                  minHeight: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {item.volumeInfo.title}
              </Typography>
            </Paper>
          </Grid>
        );
      })
    }
  </Grid>
);
export default BooksCard;
