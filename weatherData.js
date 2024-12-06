// Sample historical weather data
const weatherData = {
    dates: [
        '2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05',
        '2024-01-06', '2024-01-07', '2024-01-08', '2024-01-09', '2024-01-10'
    ],
    temperatures: [12, 14, 16, 18, 20, 22, 19, 17, 15, 13],
    humidity: [65, 68, 70, 72, 75, 78, 73, 71, 69, 66],
    precipitation: [0, 2, 0, 0, 5, 8, 3, 1, 0, 0]
};

// Function to calculate moving average for trend lines
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
export { weatherData, calculateMovingAverage };