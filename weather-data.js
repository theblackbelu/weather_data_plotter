// Weather data storage and management
class WeatherData {
    constructor() {
        this.data = [];
        this.loadFromStorage();
    }

    // Sample historical weather data
    getSampleData() {
        return [
            { date: '2024-01-01', temperature: 5, humidity: 75, precipitation: 2.1 },
            { date: '2024-01-02', temperature: 7, humidity: 80, precipitation: 1.5 },
            { date: '2024-01-03', temperature: 3, humidity: 85, precipitation: 3.2 },
            { date: '2024-01-04', temperature: 8, humidity: 70, precipitation: 0.5 },
            { date: '2024-01-05', temperature: 12, humidity: 65, precipitation: 0.0 },
            { date: '2024-01-06', temperature: 10, humidity: 75, precipitation: 1.0 },
            { date: '2024-01-07', temperature: 6, humidity: 82, precipitation: 2.8 },
            { date: '2024-01-08', temperature: 9, humidity: 68, precipitation: 0.3 },
            { date: '2024-01-09', temperature: 11, humidity: 72, precipitation: 0.7 },
            { date: '2024-01-10', temperature: 14, humidity: 60, precipitation: 0.0 }
        ];
    }

    addDataPoint(date, temperature, humidity, precipitation) {
        this.data.push({
            date,
            temperature,
            humidity,
            precipitation
        });
        this.saveToStorage();
    }

    getData() {
        if (this.data.length === 0) {
            this.data = this.getSampleData();
        }
        return this.data;
    }

    saveToStorage() {
        localStorage.setItem('weatherData', JSON.stringify(this.data));
    }

    loadFromStorage() {
        const stored = localStorage.getItem('weatherData');
        if (stored) {
            this.data = JSON.parse(stored);
        }
    }

    clearData() {
        this.data = [];
        localStorage.removeItem('weatherData');
    }
}