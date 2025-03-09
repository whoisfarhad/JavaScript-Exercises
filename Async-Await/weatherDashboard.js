// Simulated weather API functions
function fetchCityCoordinates(cityName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate some errors
            if (!cityName || typeof cityName !== 'string') {
                reject(new Error("Invalid city name"));
                return;
            }

            const coordinates = {
                'new york': { lat: 40.7128, lon: -74.0060 },
                'london': { lat: 51.5074, lon: -0.1278 },
                'tokyo': { lat: 35.6762, lon: 139.6503 },
                'sydney': { lat: -33.8688, lon: 151.2093 },
                'cairo': { lat: 30.0444, lon: 31.2357 }
            };

            const result = coordinates[cityName.toLowerCase()];
            if (result) {
                resolve(result);
            } else {
                reject(new Error(`City ${cityName} not found`));
            }
        }, 500)
    });
}

function fetchWeatherData(coordinates) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!coordinates || typeof coordinates !== 'object') {
                reject(new Error("Invalid coordinates"));
                return;
            }

            // Simulate random weather data
            const temperature = Math.floor(Math.random() * 35) + 5; // 5 to 40 °C
            const conditions = ['Sunny', 'Cloudy', 'Windy', 'Rainy', 'Snowy'][Math.floor(Math.random() * 5)];
            const humidity = Math.floor(Math.random() * 60) + 20; // 20% to 80%

            resolve({
                temperature,
                conditions,
                humidity,
                coordinates
            });
        }, 700)
    });
}

function fetchAirQualityData(coordinates) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!coordinates || typeof coordinates !== 'object') {
                reject(new Error("Invalid coordinates"));
                return;
            }

            // Simulate air quality index
            const aqi = Math.floor(Math.random() * 300) + 20;
            let quality;

            if (aqi < 50) quality = "Good";
            else if (aqi < 100) quality = "Moderate";
            else if (aqi < 150) quality = "Unhealthy for sensitive groups";
            else if (aqi < 200) quality = "Unhealthy";
            else if (aqi < 300) quality = "Very unhealthy";

            resolve({
                aqi,
                quality,
                coordinates
            });
        }, 600)
    });
}

// Task: Implement the weather dashboard function
// 1. Take an array of city names
// 2. Fetch weather and air quality data for each city
// 3. Process the data into a user-friendly format
// 4. Handle any errors appropriately
// 5. Return a report object with the results
async function weatherDashboard(cities) {
    const report = {
        successful: [],
        failed: []
    };

    // Process cities individually so one failure doesn't stop everything
    const cityPromises = cities.map(async cityName => {
        try {
            // 1. Get coordinates for this city
            const coordinates = await fetchCityCoordinates(cityName);

            // 2. Once we have coordinates, fetch weather and air quality in parallel
            const [weetherData, airQualityData] = Promise.all([
                fetchWeatherData(coordinates),
                fetchAirQualityData(coordinates)
            ]);

            // 3. Combine all the data in a clean city report object
            const cityReport = {
                name: cityName,
                coordinates,
                weather: {
                    temperature: weatherData.temperature,
                    conditions: weatherData.conditions,
                    humidity: weatherData.humidity
                },
                airQuality: {
                    index: airQualityData.aqi,
                    status: airQualityData.quality
                },
                retrievedAt: new Date().toISOString()
            };

            // Add this successful city report to our results
            report.successful.push(cityReport);

        } catch (error) {
            // If anything goes wrong for this city, add it to the failed
            // But it keeps processing other cities
            report.failed.push({
                name: cityName,
                error: error.message
            });
        }
    });

    // Wait for all city processing to complete
    await Promise.all(cityPromises);

    // Add some summary statistic to the report
    report.summary = {
        totalCities: cities.length,
        successfulRequests: report.successful.length,
        failedRequests: report.failed.length
    };

    return report;
}

// Example usage
async function runWeatherDashboard() {
    try {
        const cities = ["London", "NewYork", "Tokyo", "InvalidCity"];
        const report = await weatherDashboard(cities);
        console.log("Weather Dashboard Report:", report);
    } catch (error) {
        console.error("Dashboard error:", error);
    }
}

runWeatherDashboard();