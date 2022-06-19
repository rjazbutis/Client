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
        height: '2000px',
        m: 0,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
      }}
    >
      <Typography component="h1" variant="h2" sx={{ textAlign: 'center', mb: 3 }}>
        Let&#39;s read together.
      </Typography>
      <Paper
        component="form"
        onSubmit={searchBook}
        sx={{
          p: '2px 4px',
          display: 'flex',
          width: 400,
          borderRadius: '10px',
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
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
