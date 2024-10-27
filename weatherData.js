// Sample historical weather data
const weatherData = {
    dates: [
        '2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05',
        '2024-01-06', '2024-01-07', '2024-01-08', '2024-01-09', '2024-01-10'
    ],
    temperatures: [12, 14, 16, 18, 20, 22, 24, 21, 19, 17],
    humidity: [65, 68, 70, 72, 75, 73, 71, 69, 67, 66],
    precipitation: [0, 2, 0, 0, 5, 0, 0, 3, 1, 0]
};

// Function to calculate trends
function calculateTrend(data) {
    const n = data.length;
    const x = Array.from({length: n}, (_, i) => i);
    const y = data;
    
    const sumX = x.reduce((a, b) => a + b, 0);
    const sumY = y.reduce((a, b) => a + b, 0);
    const sumXY = x.reduce((a, b, i) => a + b * y[i], 0);
    const sumX2 = x.reduce((a, b) => a + b * b, 0);
    
    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;
    
    return Array.from({length: n}, (_, i) => slope * i + intercept);
}

// Export data and functions
window.weatherData = weatherData;
window.calculateTrend = calculateTrend;