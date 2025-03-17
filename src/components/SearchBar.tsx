import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        gap: 2,
        maxWidth: 500,
        margin: '0 auto',
        mt: 4,
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar; 