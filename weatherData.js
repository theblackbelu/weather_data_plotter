// Sample historical weather data
const weatherData = {
    dates: [
        '2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05',
        '2024-01-06', '2024-01-07', '2024-01-08', '2024-01-09', '2024-01-10'
    ],
    temperatures: [32, 35, 38, 30, 28, 33, 40, 42, 36, 34],
    humidity: [65, 70, 60, 75, 80, 68, 55, 50, 62, 70],
    precipitation: [0.1, 0.0, 0.0, 0.5, 1.2, 0.0, 0.0, 0.0, 0.3, 0.1]
};

// Function to calculate moving average for trend analysis
function calculateMovingAverage(data, windowSize = 3) {
    const movingAverages = [];
    for (let i = 0; i < data.length; i++) {
        if (i < windowSize - 1) {
            movingAverages.push(null);
        } else {
            const sum = data.slice(i - windowSize + 1, i + 1).reduce((a, b) => a + b, 0);
            movingAverages.push(sum / windowSize);
        }
    }
    return movingAverages;
}

// Export data and functions
window.weatherData = weatherData;
window.calculateMovingAverage = calculateMovingAverage;