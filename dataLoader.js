// Utility for loading and processing weather data
class WeatherDataLoader {
    static async loadFromCSV(csvString) {
        // Simple CSV parser
        const lines = csvString.trim().split('\n');
        const headers = lines[0].split(',').map(h => h.trim());
        
        const data = {
            dates: [],
            temperatures: [],
            humidity: [],
            precipitation: []
        };
        
        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',').map(v => v.trim());
            if (values.length === headers.length) {
                data.dates.push(values[0]);
                data.temperatures.push(parseFloat(values[1]));
                data.humidity.push(parseFloat(values[2]));
                data.precipitation.push(parseFloat(values[3]));
            }
        }
        
        return data;
    }
    
    static generateSampleData(days = 30) {
        const data = {
            dates: [],
            temperatures: [],
            humidity: [],
            precipitation: []
        };
        
        const startDate = new Date('2024-01-01');
        
        for (let i = 0; i < days; i++) {
            const currentDate = new Date(startDate);
            currentDate.setDate(startDate.getDate() + i);
            data.dates.push(currentDate.toISOString().split('T')[0]);
            
            // Generate realistic weather data with some randomness
            data.temperatures.push(Math.round(30 + Math.random() * 15));
            data.humidity.push(Math.round(50 + Math.random() * 30));
            data.precipitation.push(parseFloat((Math.random() * 2).toFixed(1)));
        }
        
        return data;
    }
}

// Export the data loader
window.WeatherDataLoader = WeatherDataLoader;