import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
} from '@mui/material';
import { WeatherData } from '../types/weather';

interface WeatherCardProps {
  weather: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 500, margin: '0 auto', mt: 4 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {weather.location.name}, {weather.location.country}
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <img
            src={weather.current.condition.icon}
            alt={weather.current.condition.text}
            style={{ width: 64, height: 64 }}
          />
          <Typography variant="h3" component="div" sx={{ ml: 2 }}>
            {weather.current.temp_c}°C
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          {weather.current.condition.text}
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              Humidity: {weather.current.humidity}%
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              Wind: {weather.current.wind_kph} km/h
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WeatherCard; 