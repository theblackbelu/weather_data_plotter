class WeatherCharts {
    constructor() {
        this.charts = {};
    }

    // Create temperature chart with trend line
    createTemperatureChart() {
        const ctx = document.getElementById('temperatureChart').getContext('2d');
        const trendLine = calculateTrend(weatherData.temperatures);
        
        this.charts.temperature = new Chart(ctx, {
            type: 'line',
            data: {
                labels: weatherData.dates,
                datasets: [
                    {
                        label: 'Temperature (°C)',
                        data: weatherData.temperatures,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.1)',
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Temperature Trend',
                        data: trendLine,
                        borderColor: 'rgb(255, 0, 0)',
                        borderDash: [5, 5],
                        fill: false,
                        pointRadius: 0
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Temperature Trends'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        title: {
                            display: true,
                            text: 'Temperature (°C)'
                        }
                    }
                }
            }
        });
    }

    // Create humidity chart
    createHumidityChart() {
        const ctx = document.getElementById('humidityChart').getContext('2d');
        const trendLine = calculateTrend(weatherData.humidity);
        
        this.charts.humidity = new Chart(ctx, {
            type: 'line',
            data: {
                labels: weatherData.dates,
                datasets: [
                    {
                        label: 'Humidity (%)',
                        data: weatherData.humidity,
                        borderColor: 'rgb(54, 162, 235)',
                        backgroundColor: 'rgba(54, 162, 235, 0.1)',
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Humidity Trend',
                        data: trendLine,
                        borderColor: 'rgb(0, 0, 255)',
                        borderDash: [5, 5],
                        fill: false,
                        pointRadius: 0
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Humidity Trends'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        max: 100,
                        title: {
                            display: true,
                            text: 'Humidity (%)'
                        }
                    }
                }
            }
        });
    }

    // Create precipitation chart
    createPrecipitationChart() {
        const ctx = document.getElementById('precipitationChart').getContext('2d');
        
        this.charts.precipitation = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: weatherData.dates,
                datasets: [{
                    label: 'Precipitation (mm)',
                    data: weatherData.precipitation,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Daily Precipitation'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Precipitation (mm)'
                        }
                    }
                }
            }
        });
    }

    // Initialize all charts
    init() {
        this.createTemperatureChart();
        this.createHumidityChart();
        this.createPrecipitationChart();
    }
}

window.WeatherCharts = WeatherCharts;