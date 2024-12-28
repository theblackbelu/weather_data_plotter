## How to Use the Weather Data Visualization Application

### Prerequisites
- A modern web browser that supports ES6 modules
- Node.js (optional, for local development server)

### Setup Instructions

1. **Clone or download all files** into the same directory:
   - `weatherData.js`
   - `weatherCharts.js`
   - `main.js`
   - `index.html`
   - `package.json`

2. **Quick Start** (Method 1 - Direct File Opening):
   - Simply open `index.html` in your web browser
   - Note: Some browsers may have restrictions when opening local files with modules

3. **Development Server** (Method 2 - Recommended):
   ```bash
   # Install http-server if you don't have it
   npm install -g http-server
   
   # Navigate to the project directory and run
   http-server -p 3000
   
   # Or use the provided script
   npm run dev
   ```
   - Open your browser and go to `http://localhost:3000`

### Features

- **Temperature Chart**: Line chart showing temperature with trend line
- **Humidity Chart**: Line chart showing humidity with trend line
- **Precipitation Chart**: Bar chart showing daily precipitation
- **Combined Chart**: Dual-axis chart comparing temperature and humidity
- **Interactive Controls**: Refresh and export buttons
- **Responsive Design**: Works on desktop and mobile devices

### Customizing Data

To use your own weather data, modify the `weatherData` object in `weatherData.js`:

```javascript
const weatherData = {
    dates: ['your-dates-here'],
    temperatures: [your-temperatures],
    humidity: [your-humidity-values],
    precipitation: [your-precipitation-values]
};
```

### Adding New Features

- To add new weather metrics, extend the `weatherData` object and create new chart methods in `WeatherCharts` class
- For real-time data, implement API calls in the `refreshData` event handler
- Modify chart styles and options in the `weatherCharts.js` file

### Browser Compatibility

This application uses modern JavaScript features (ES6 modules) and requires a relatively recent browser:
- Chrome 61+
- Firefox 60+
- Safari 10.1+
- Edge 16+

The application will automatically display all charts when the page loads and includes trend analysis using moving averages for better data visualization.