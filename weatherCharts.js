class WeatherCharts {
    constructor() {
        this.charts = {};
        this.initializeCharts();
    }

    initializeCharts() {
        // Temperature Chart
        this.createTemperatureChart();
        
        // Humidity Chart
        this.createHumidityChart();
        
        // Precipitation Chart
        this.createPrecipitationChart();
        
        // Combined Trends Chart
        this.createTrendsChart();
    }

    createTemperatureChart() {
        const ctx = document.getElementById('temperatureChart').getContext('2d');
        const tempTrend = calculateMovingAverage(weatherData.temperatures);
        
        this.charts.temperature = new Chart(ctx, {
            type: 'line',
            data: {
                labels: weatherData.dates,
                datasets: [
                    {
                        label: 'Temperature (°F)',
                        data: weatherData.temperatures,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.1)',
                        tension: 0.1,
                        fill: true
                    },
                    {
                        label: 'Temperature Trend (3-day avg)',
                        data: tempTrend,
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
                        text: 'Daily Temperature with Trend'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        title: {
                            display: true,
                            text: 'Temperature (°F)'
                        }
                    }
                }
            }
        });
    }

    createHumidityChart() {
        const ctx = document.getElementById('humidityChart').getContext('2d');
        const humidityTrend = calculateMovingAverage(weatherData.humidity);
        
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
                        tension: 0.1,
                        fill: true
                    },
                    {
                        label: 'Humidity Trend (3-day avg)',
                        data: humidityTrend,
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
                        text: 'Daily Humidity with Trend'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
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

    createPrecipitationChart() {
        const ctx = document.getElementById('precipitationChart').getContext('2d');
        
        this.charts.precipitation = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: weatherData.dates,
                datasets: [{
                    label: 'Precipitation (inches)',
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
                            text: 'Precipitation (inches)'
                        }
                    }
                }
            }
        });
    }

    createTrendsChart() {
        const ctx = document.getElementById('trendsChart').getContext('2d');
        
        this.charts.trends = new Chart(ctx, {
            type: 'line',
            data: {
                labels: weatherData.dates,
                datasets: [
                    {
                        label: 'Temperature Trend',
                        data: calculateMovingAverage(weatherData.temperatures),
                        borderColor: 'rgb(255, 99, 132)',
                        fill: false,
                        yAxisID: 'y'
                    },
                    {
                        label: 'Humidity Trend',
                        data: calculateMovingAverage(weatherData.humidity),
                        borderColor: 'rgb(54, 162, 235)',
                        fill: false,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Weather Trends Comparison'
                    }
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Temperature (°F)'
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: {
                            display: true,
                            text: 'Humidity (%)'
                        },
                        grid: {
                            drawOnChartArea: false,
                        },
                    }
                }
            }
        });
    }
}

// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.weatherCharts = new WeatherCharts();
});