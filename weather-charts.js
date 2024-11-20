// Weather chart plotting functionality
class WeatherCharts {
    constructor() {
        this.weatherData = new WeatherData();
        this.charts = {};
    }

    // Create temperature trend chart
    plotTemperatureTrend(canvasId) {
        const data = this.weatherData.getData();
        const ctx = document.getElementById(canvasId).getContext('2d');
        
        if (this.charts.temperature) {
            this.charts.temperature.destroy();
        }

        this.charts.temperature = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.map(d => d.date),
                datasets: [{
                    label: 'Temperature (°C)',
                    data: data.map(d => d.temperature),
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Temperature Trend'
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

    // Create multi-metric comparison chart
    plotAllMetrics(canvasId) {
        const data = this.weatherData.getData();
        const ctx = document.getElementById(canvasId).getContext('2d');
        
        if (this.charts.allMetrics) {
            this.charts.allMetrics.destroy();
        }

        this.charts.allMetrics = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.map(d => d.date),
                datasets: [
                    {
                        label: 'Temperature (°C)',
                        data: data.map(d => d.temperature),
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.1)',
                        yAxisID: 'y',
                        tension: 0.4
                    },
                    {
                        label: 'Humidity (%)',
                        data: data.map(d => d.humidity),
                        borderColor: 'rgb(54, 162, 235)',
                        backgroundColor: 'rgba(54, 162, 235, 0.1)',
                        yAxisID: 'y1',
                        tension: 0.4
                    },
                    {
                        label: 'Precipitation (mm)',
                        data: data.map(d => d.precipitation),
                        borderColor: 'rgb(75, 192, 192)',
                        backgroundColor: 'rgba(75, 192, 192, 0.1)',
                        yAxisID: 'y2',
                        tension: 0.4,
                        type: 'bar'
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
                        text: 'Weather Metrics Comparison'
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
                    },
                    y2: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: {
                            display: true,
                            text: 'Precipitation (mm)'
                        },
                        grid: {
                            drawOnChartArea: false,
                        },
                        offset: true
                    }
                }
            }
        });
    }

    // Create precipitation bar chart
    plotPrecipitation(canvasId) {
        const data = this.weatherData.getData();
        const ctx = document.getElementById(canvasId).getContext('2d');
        
        if (this.charts.precipitation) {
            this.charts.precipitation.destroy();
        }

        this.charts.precipitation = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.map(d => d.date),
                datasets: [{
                    label: 'Precipitation (mm)',
                    data: data.map(d => d.precipitation),
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

    // Calculate and display trends
    calculateTrends() {
        const data = this.weatherData.getData();
        if (data.length < 2) return null;

        const temps = data.map(d => d.temperature);
        const humidities = data.map(d => d.humidity);
        const precipitations = data.map(d => d.precipitation);

        const tempTrend = this.calculateLinearTrend(temps);
        const humidityTrend = this.calculateLinearTrend(humidities);
        const precipTrend = this.calculateLinearTrend(precipitations);

        return {
            temperature: tempTrend,
            humidity: humidityTrend,
            precipitation: precipTrend
        };
    }

    calculateLinearTrend(data) {
        const n = data.length;
        const x = Array.from({length: n}, (_, i) => i);
        
        const sumX = x.reduce((a, b) => a + b, 0);
        const sumY = data.reduce((a, b) => a + b, 0);
        const sumXY = x.reduce((sum, xi, i) => sum + xi * data[i], 0);
        const sumX2 = x.reduce((sum, xi) => sum + xi * xi, 0);
        
        const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
        return slope;
    }
}