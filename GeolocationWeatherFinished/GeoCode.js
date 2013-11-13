		var geocoder;
        var map;
        var infowindow = new google.maps.InfoWindow();
        var marker;
		var LatVal;
		var LongVal;
		var icons = new Skycons({"color": "#31424b"});
		
        function initialize() {
            geocoder = new google.maps.Geocoder();
			getLocation();//zodra locatie bekend is, wordt de map initialized met de juiste coördinaten.
			
        }

        function LatLngToAddress() { //coords to address
            var latlng = new google.maps.LatLng(LatVal, LongVal);
            geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                        map.setZoom(12);
                        marker = new google.maps.Marker({
                            position: latlng,
                            map: map
                        });
                        infowindow.setContent(results[0].formatted_address);
                        infowindow.open(map, marker);
                    } else {
                        alert('No results found');
                    }
                } else {
                    alert('Geocoder failed due to: ' + status);
                }
            });
        }
		
		function getLocation()
			{
				if (navigator.geolocation)
				{
					navigator.geolocation.getCurrentPosition(showPosition);
				}
				else{alert("Geolocation is not supported by this browser.");}
			}
		function showPosition(position)
			{
				var strCoords = position.coords.latitude + "," + position.coords.longitude;

				LatVal = parseFloat(position.coords.latitude);
				LongVal = parseFloat(position.coords.longitude);
				
				var latlng = new google.maps.LatLng(LatVal, LongVal); 
				var mapOptions = {
					zoom: 8,
					center: latlng,
					mapTypeId: 'roadmap'
				}
			map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
			LatLngToAddress();
			GetWeather();
			}
			
			function DegreesCelsius(degrees)
			{
				var c;
				c = Math.round(((degrees - 32) * 5 / 9) * 100) / 100;
				return c;
			}
			
			function GetWeather() {
                var apiKey = '64631cfde3571e1a4a226000fcaaa8f7';
                var url = 'https://api.forecast.io/forecast/';
                var data;

                $.getJSON(url + apiKey + "/" + LatVal + "," + LongVal + "?callback=?",
                    function (data) {
                        $('#weathertoday').html("<p>Min: " + DegreesCelsius(data.daily.data[0].temperatureMin) + "&deg C"
                           + "<br>Max: " + DegreesCelsius(data.daily.data[0].temperatureMax) + "&deg C" + "</p><br>"
                           + "<p class=status>" + data.currently.icon + "</p>")
                            switch (data.currently.icon) {
                                case "clear-day":
                                    icons.set("icontoday", Skycons.CLEAR_DAY);
                                    icons.play();
                                    break;
                                case "clear-night":
                                    icons.set("icontoday", Skycons.CLEAR_NIGHT);
                                    icons.play();
                                    break;
                                case "rain":
                                    icons.set("icontoday", Skycons.RAIN);
                                    icons.play();
                                    break;
                                case "snow":
                                    icons.set("icontoday", Skycons.SNOW);
                                    icons.play();
                                    break;
                                case "sleet":
                                    icons.set("icontoday", Skycons.SLEET);
                                    icons.play();
                                    break;
                                case "wind":
                                    icons.set("icontoday", Skycons.WIND);
                                    icons.play();
                                    break;
                                case "fog":
                                    icons.set("icontoday", Skycons.FOG);
                                    icons.play();
                                    break;
                                case "cloudy":
                                    icons.set("icontoday", Skycons.CLOUDY);
                                    icons.play();
                                    break;
                                case "partly-cloudy-day":
                                    icons.set("icontoday", Skycons.PARTLY_CLOUDY_DAY);
                                    icons.play();
                                    break;
                                case "partly-cloudy-night":
                                    icons.set("icontoday", Skycons.PARTLY_CLOUDY_NIGHT);
                                    icons.play();
                                    break;
                            }
                        ;
                    }
                 );

                $.getJSON(url + apiKey + "/" + LatVal + "," + LongVal + "?callback=?",
                   function (data) {
                       $('#weathertomorrow').html("<p>Min: " + DegreesCelsius(data.daily.data[1].temperatureMin) + "&deg C"
                           + "<br>Max: " + DegreesCelsius(data.daily.data[1].temperatureMax) + "&deg C" + "</p><br>"
                           + "<p class=status>" + data.daily.data[1].icon + "</p>")
                       switch (data.daily.icon) {
                           case "clear-day":
                               icons.set("icontomorrow", Skycons.CLEAR_DAY);
                               icons.play();
                               break;
                           case "clear-night":
                               icons.set("icontomorrow", Skycons.CLEAR_NIGHT);
                               icons.play();
                               break;
                           case "rain":
                               icons.set("icontomorrow", Skycons.RAIN);
                               icons.play();
                               break;
                           case "snow":
                               icons.set("icontomorrow", Skycons.SNOW);
                               icons.play();
                               break;
                           case "sleet":
                               icons.set("icontomorrow", Skycons.SLEET);
                               icons.play();
                               break;
                           case "wind":
                               icons.set("icontomorrow", Skycons.WIND);
                               icons.play();
                               break;
                           case "fog":
                               icons.set("icontomorrow", Skycons.FOG);
                               icons.play();
                               break;
                           case "cloudy":
                               icons.set("icontomorrow", Skycons.CLOUDY);
                               icons.play();
                               break;
                           case "partly-cloudy-day":
                               icons.set("icontomorrow", Skycons.PARTLY_CLOUDY_DAY);
                               icons.play();
                               break;
                           case "partly-cloudy-night":
                               icons.set("icontomorrow", Skycons.PARTLY_CLOUDY_NIGHT);
                               icons.play();
                               break;
                       }
                   });
			}

			google.maps.event.addDomListener(window, 'load', initialize);
