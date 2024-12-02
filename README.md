## Weather Data Visualization App

A simple JavaScript application for plotting weather data and trends using Chart.js.

### Features
- **Temperature Trend Chart**: Line chart showing temperature changes over time
- **Multi-metric Comparison**: Combined chart with temperature, humidity, and precipitation
- **Precipitation Bar Chart**: Bar chart showing daily precipitation
- **Trend Analysis**: Calculates and displays linear trends for all metrics
- **Data Management**: Add new data points and clear existing data

### How to Use

1. **Setup**: Save all files in the same directory and open `index.html` in a web browser

2. **Viewing Charts**:
   - The app loads with sample data and displays all three charts automatically
   - Use the control buttons to refresh individual charts
   - Click "Show Trends" to see calculated trends for temperature, humidity, and precipitation

3. **Adding Data**:
   - Fill in the form with:
     - Date
     - Temperature in °C
     - Humidity in %
     - Precipitation in mm
   - Click "Add Data" to save and update charts

4. **Managing Data**:
   - Data is automatically saved to browser's local storage
   - Use "Clear Data" to remove all stored data and reset to sample data

### File Structure
- `index.html` - Main HTML file with UI and styling
- `weather-data.js` - Data storage and management class
- `weather-charts.js` - Chart plotting and trend calculation
- `weather-app.js` - Main application controller and event handlers

### Dependencies
- Chart.js (loaded via CDN in index.html)

### Browser Compatibility
- Works in all modern browsers that support ES6 classes and localStorage

### Customization
- Modify `getSampleData()` in `weather-data.js` to change default data
- Adjust chart styles