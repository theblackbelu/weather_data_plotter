// Main application controller
class WeatherApp {
    constructor() {
        this.weatherCharts = new WeatherCharts();
        this.initializeEventListeners();
        this.loadDataAndPlot();
    }

    initializeEventListeners() {
        document.getElementById('plotTemperature').addEventListener('click', () => {
            this.weatherCharts.plotTemperatureTrend('temperatureChart');
        });

        document.getElementById('plotAll').addEventListener('click', () => {
            this.weatherCharts.plotAllMetrics('allMetricsChart');
        });

        document.getElementById('plotPrecipitation').addEventListener('click', () => {
            this.weatherCharts.plotPrecipitation('precipitationChart');
        });

        document.getElementById('showTrends').addEventListener('click', () => {
            this.displayTrends();
        });

        document.getElementById('addData').addEventListener('click', () => {
            this.addNewDataPoint();
        });

        document.getElementById('clearData').addEventListener('click', () => {
            this.clearAllData();
        });
    }

    loadDataAndPlot() {
        // Plot initial charts
        this.weatherCharts.plotTemperatureTrend('temperatureChart');
        this.weatherCharts.plotAllMetrics('allMetricsChart');
        this.weatherCharts.plotPrecipitation('precipitationChart');
    }

    displayTrends() {
        const trends = this.weatherCharts.calculateTrends();
        if (!trends) {
            alert('Not enough data to calculate trends');
            return;
        }

        const trendsDiv = document.getElementById('trends');
        trendsDiv.innerHTML = `
            <h3>Weather Trends</h3>
            <p>Temperature Trend: ${trends.temperature > 0 ? '↗ Increasing' : '↘ Decreasing'} (${trends.temperature.toFixed(2)}°C/day)</p>
            <p>Humidity Trend: ${trends.humidity > 0 ? '↗ Increasing' : '↘ Decreasing'} (${trends.humidity.toFixed(2)}%/day)</p>
            <p>Precipitation Trend: ${trends.precipitation > 0 ? '↗ Increasing' : '↘ Decreasing'} (${trends.precipitation.toFixed(2)}mm/day)</p>
        `;
    }

    addNewDataPoint() {
        const date = document.getElementById('newDate').value;
        const temp = parseFloat(document.getElementById('newTemp').value);
        const humidity = parseFloat(document.getElementById('newHumidity').value);
        const precipitation = parseFloat(document.getElementById('newPrecipitation').value);

        if (!date || isNaN(temp) || isNaN(humidity) || isNaN(precipitation)) {
            alert('Please fill all fields with valid numbers');
            return;
        }

        this.weatherCharts.weatherData.addDataPoint(date, temp, humidity, precipitation);
        
        // Clear form
        document.getElementById('newDate').value = '';
        document.getElementById('newTemp').value = '';
        document.getElementById('newHumidity').value = '';
        document.getElementById('newPrecipitation').value = '';

        // Refresh charts
        this.loadDataAndPlot();
        alert('Data point added successfully!');
    }

    clearAllData() {
        if (confirm('Are you sure you want to clear all weather data?')) {
            this.weatherCharts.weatherData.clearData();
            this.loadDataAndPlot();
            document.getElementById('trends').innerHTML = '';
            alert('All data cleared!');
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new WeatherApp();
});