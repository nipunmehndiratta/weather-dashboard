export interface WeatherData {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    wind_kph: number;
  };
}

export interface WeatherError {
  message: string;
}

export interface LoadingState {
  isLoading: boolean;
  error: string | null;
} 