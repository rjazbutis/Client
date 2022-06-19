/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import React from 'react';
import {
  Box, Grid, Paper, Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

type BookType = {
  smallThumbnail: any,
  volumeInfo: any,
  imageLinks: any,
  id: any,
};

type PropType = {
  book: BookType[];
};

const BooksCard: any = ({ book }: any) => {
  console.log(book);
  return (
    <Grid container spacing={5}>
      {
        book.map((item: any) => {
          const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          return (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={item.id}>
              <Box sx={{
                backgroundImage: `url(${thumbnail})`,
                width: '100%',
                height: '200px',
                backgroundSize: 'cover',
                display: 'flex',
                flexDirection: 'row-reverse',
              }}
              >
                <FavoriteIcon sx={{
                  color: 'lightGrey',
                  maxWidth: '50px',
                  maxHeight: '50px',
                  ':hover': {
                    color: 'white',
                    cursor: 'pointer',
                  },
                }}
                />
              </Box>
              <Paper sx={{ textAlign: 'center', width: '100%' }}>
                <Typography align="center" variant="h6">{item.volumeInfo.title}</Typography>
              </Paper>
            </Grid>
          );
        })
      }
    </Grid>
  );
};
export default BooksCard;
