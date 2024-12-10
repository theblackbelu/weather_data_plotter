import { weatherData, calculateMovingAverage } from './weatherData.js';

class WeatherCharts {
    constructor() {
        this.charts = {};
    }

    // Initialize all charts
    initCharts() {
        this.createTemperatureChart();
        this.createHumidityChart();
        this.createPrecipitationChart();
        this.createCombinedChart();
    }

    // Temperature chart with trend line
    createTemperatureChart() {
        const ctx = document.getElementById('temperatureChart').getContext('2d');
        const tempTrend = calculateMovingAverage(weatherData.temperatures);
        
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
                        data: tempTrend,
                        borderColor: 'rgb(255, 0, 0)',
                        borderDash: [5, 5],
                        tension: 0.4,
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Temperature Over Time'
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

    // Humidity chart
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
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Humidity Trend',
                        data: humidityTrend,
                        borderColor: 'rgb(0, 0, 255)',
                        borderDash: [5, 5],
                        tension: 0.4,
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Humidity Over Time'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 60,
                        max: 80,
                        title: {
                            display: true,
                            text: 'Humidity (%)'
                        }
                    }
                }
            }
        });
    }

    // Precipitation chart (bar chart)
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

    // Combined chart showing all metrics
    createCombinedChart() {
        const ctx = document.getElementById('combinedChart').getContext('2d');
        
        this.charts.combined = new Chart(ctx, {
            type: 'line',
            data: {
                labels: weatherData.dates,
                datasets: [
                    {
                        label: 'Temperature (°C)',
                        data: weatherData.temperatures,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.1)',
                        yAxisID: 'y',
                        tension: 0.4
                    },
                    {
                        label: 'Humidity (%)',
                        data: weatherData.humidity,
                        borderColor: 'rgb(54, 162, 235)',
                        backgroundColor: 'rgba(54, 162, 235, 0.1)',
                        yAxisID: 'y1',
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                stacked: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Temperature & Humidity Comparison'
                    }
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Temperature (°C)'
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

export default WeatherCharts;