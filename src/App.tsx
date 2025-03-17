import React, { useState } from 'react';
import { Container, Typography, Alert } from '@mui/material';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import LoadingSpinner from './components/LoadingSpinner';
import { getWeather } from './services/weatherService';
import { WeatherData } from './types/weather';
import './App.css';

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getWeather(city);
      setWeather(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Weather Dashboard
      </Typography>
      
      <SearchBar onSearch={handleSearch} />

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      {loading ? (
        <LoadingSpinner />
      ) : (
        weather && <WeatherCard weather={weather} />
      )}
    </Container>
  );
}

export default App; 