/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  InputBase,
  IconButton,
  Box,
} from '@mui/material';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import img1 from './images/image1.jpg';
import BooksCard from '../../components/books-card/card';

const HomePage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [bookData, setData] = useState([] as any[]);

  const searchBook = (e: any) => {
    const volume = '&maxResults=20';
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_BOOKS_KEY}${volume}`)
      .then((res) => setData(res.data.items))
      .catch((err) => console.log(err));
    e.preventDefault();
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        background: `url(${img1})`,
        minHeight: '1000px',
        maxHeight: '100%',
        backgroundPosition: 'top',
        backgroundSize: 'cover',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography component="h1" variant="h2" sx={{ color: 'white', my: 10 }}>
          Let&#39;s read together
        </Typography>
      </Box>
      <Paper
        component="form"
        onSubmit={searchBook}
        sx={{
          p: '2px 4px',
          display: 'flex',
          margin: 'auto',
          minWidth: 300,
          maxWidth: 500,
          borderRadius: 1,
        }}
      >
        <InputBase
          sx={{ flex: 1, px: 1 }}
          placeholder="Enter a book"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton type="submit" sx={{ p: '10px' }}>
          <SearchIcon />
        </IconButton>
      </Paper>
      <Box sx={{ width: '80%', margin: 'auto' }}>
        <BooksCard book={bookData} />
      </Box>
    </Container>
  );
};

export default HomePage;
