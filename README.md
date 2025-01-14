## Weather Data Visualization System

A simple JavaScript application for plotting weather data and trends using Chart.js.

### Files Structure:
- `index.html` - Main HTML file with chart containers
- `weatherData.js` - Contains sample weather data and utility functions
- `weatherCharts.js` - Chart creation and management class
- `dataLoader.js` - Utility for loading and generating weather data

### How to Use:

1. **Basic Setup:**
   - Place all files in the same directory
   - Open `index.html` in a web browser
   - The application will automatically load with sample data

2. **Using Your Own Data:**
   - Modify the `weatherData` object in `weatherData.js`
   - Or use the `WeatherDataLoader` class to load CSV data:

```javascript
// Example CSV format:
// date,temperature,humidity,precipitation
// 2024-01-01,32,65,0.1
// 2024-01-02,35,70,0.0

const csvData = `date,temperature,humidity,precipitation
2024-01-01,32,65,0.1
2024-01-02,35,70,0.0`;

WeatherDataLoader.loadFromCSV(csvData).then(data => {
    window.weatherData = data;
    // Refresh charts with new data
    window.weatherCharts.initializeCharts();
});
```

3. **Features:**
   - Temperature chart with 3-day moving average trend line
   - Humidity chart with trend analysis
   - Precipitation bar chart
   - Combined trends comparison chart
   - Responsive design

4. **Customization:**
   - Modify chart colors in `weatherCharts.js`
   - Change moving average window size in `calculateMovingAverage()` function
   - Add new weather parameters by extending the data structure

### Dependencies:
- Chart.js (loaded via CDN in index.html)

The application provides a clean, interactive visualization of weather data with trend analysis using moving averages to identify patterns over time.