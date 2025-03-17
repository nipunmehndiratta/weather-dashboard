# Weather Dashboard

A React-based weather dashboard application that allows users to search for weather information by city name. The application demonstrates various aspects of frontend development including component organization, API integration, error handling, and responsive design.

## Features

- Search for weather by city name
- Display current weather conditions including temperature, humidity, and wind speed
- Responsive design that works on all device sizes
- Loading states and error handling
- Material-UI components for a modern look and feel

## Prerequisites

Before running this application, you need to:

1. Have Node.js installed (version 14 or higher)
2. Get an API key from [WeatherAPI](https://www.weatherapi.com/)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your WeatherAPI key:
   ```
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```

## Running the Application

To start the development server:

```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
  ├── components/       # React components
  │   ├── LoadingSpinner.tsx
  │   ├── SearchBar.tsx
  │   └── WeatherCard.tsx
  ├── services/        # API services
  │   └── weatherService.ts
  ├── types/          # TypeScript interfaces
  │   └── weather.ts
  └── App.tsx         # Main application component
```

## Technologies Used

- React
- TypeScript
- Material-UI
- Axios for API calls
- WeatherAPI for weather data

## Error Handling

The application includes comprehensive error handling for:
- Invalid city names
- API request failures
- Network errors

## Future Improvements

- Add unit tests
- Implement weather forecasts
- Add location detection
- Save favorite locations
- Add dark mode support 