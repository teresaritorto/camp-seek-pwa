$(document).ready(function() {

    var weatherData = {};

    var setLocationTitle = function (cityName, countryName) {
        $('#cityName').html(cityName);
        $('#countryName').html(countryName);
    };

    var setChanceOfRainPercentage = function (chanceOfRain) {
        var percentageText = Math.round(chanceOfRain * 100) + '%';

        $('#rainChance').html(percentageText);
    };

    var setTemperatureValues = function (temperatureValues) {
        $('#minTemp').html(temperatureValues.min);
        $('#maxTemp').html(temperatureValues.max);
    };

    var setWeatherTypeImage = function(weatherDescription) {
        $('#weatherImage').removeClass();
        $('#weatherImage').addClass('weather__image--' + weatherDescription);

        $('body').removeClass().addClass('weather__body--' + weatherDescription);
    };

    var showWeatherDataForLocation = function (locationId) {
        var locationWeatherData = weatherData[locationId];

        setLocationTitle(locationWeatherData.city, locationWeatherData.country);
        setChanceOfRainPercentage(locationWeatherData.chanceOfRain);
        setTemperatureValues(locationWeatherData.temperature);
        setWeatherTypeImage(locationWeatherData.description);
    };

    var setupLocationButtons = function (locationDetails) {
        locationDetails.forEach(function (location) {
            var button = $('#button' + location.id);

            button.html(location.city);

            button.on('click', function () {
                showWeatherDataForLocation(location.id);

                $('.weather__location-select-link--selected').removeClass('weather__location-select-link--selected');
                $(this).addClass('weather__location-select-link--selected');

                return false;
            });
        });
    };

    var getWeatherData = function() {
        $.ajax({
            url: 'https://s3-ap-southeast-2.amazonaws.com/camp-seek-16/service'
        }).done(function(data) {
            weatherData = data;

            setupLocationButtons(weatherData);
            showWeatherDataForLocation(0);
        });
    };

    getWeatherData();
});