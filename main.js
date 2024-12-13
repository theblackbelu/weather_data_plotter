import WeatherCharts from './weatherCharts.js';

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const weatherApp = new WeatherCharts();
    weatherApp.initCharts();
    
    // Add event listeners for interactive features
    this.getElementById('refreshData').addEventListener('click', function() {
        alert('In a real application, this would fetch new data from an API');
        // Here you would typically call an API to get updated data
    });
    
    this.getElementById('exportData').addEventListener('click', function() {
        exportWeatherData();
    });
});

// Function to export weather data as JSON
function exportWeatherData() {
    import('./weatherData.js').then(module => {
        const dataStr = JSON.stringify(module.weatherData, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = 'weather_data.json';
        link.click();
    });
}