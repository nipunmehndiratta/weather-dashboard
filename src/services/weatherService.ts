import axios from 'axios';
import { WeatherData } from '../types/weather';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY || '42e4163fbc5d4520b04181607251703';
const BASE_URL = 'https://api.weatherapi.com/v1';

export const getWeather = async (city: string): Promise<WeatherData> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${city}&aqi=no`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.error.message || 'Failed to fetch weather data');
    }
    throw new Error('An unexpected error occurred');
  }
}; 