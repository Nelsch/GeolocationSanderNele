		var geocoder;
        var map;
        var infowindow = new google.maps.InfoWindow();
        var marker;
		var LatVal;
		var LongVal;
		var icons = new Skycons({"color": "#31424b"});
		
		google.maps.event.addDomListener(window, 'load', initialize);
		
        function initialize() 
		{
            geocoder = new google.maps.Geocoder();
			getLocation(); //zodra locatie bekend is, wordt de map initialized met de juiste coordinaten.
        }

		function getLocation() //vertaalt ip-adres naar latitude - longitude
			{
				if (navigator.geolocation)
				{
					navigator.geolocation.getCurrentPosition(showPosition);
				}
				else{alert("Geolocation is not supported by this browser.");}
			}
			
		function showPosition(position) //gebruikt latitude - longitude om een nieuwe map te initializeren
			{
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
			
			function LatLngToAddress() //vertaalt latitude - longitude naar een adres
			{ 
				var latlng = new google.maps.LatLng(LatVal, LongVal);
				geocoder.geocode({ 'latLng': latlng }, function (results, status) {
					if (status === google.maps.GeocoderStatus.OK) {
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
		
			function GetWeather() //haalt het weerbericht op via JSON van forecast.io
			{
                var apiKey = '64631cfde3571e1a4a226000fcaaa8f7'; //Je kan een key verkrijgen bij forecast.io
                var url = 'https://api.forecast.io/forecast/';
                var data;

                $.getJSON(url + apiKey + "/" + LatVal + "," + LongVal + "?callback=?",
                    function (data) {
						var iconText = data.currently.icon;
                        $('#weathertoday').html("<p><b>Now</b>: " + DegreesCelsius(data.currently.temperature) + "&deg C <br></p>"
						   + "<p class=minmax><b>Min</b>: " + DegreesCelsius(data.daily.data[0].temperatureMin) + "&deg C" //data[0] = vandaag
                           + " - <b>Max</b>: " + DegreesCelsius(data.daily.data[0].temperatureMax) + "&deg C" + "</p><br>" 
                           + "<p class=status>" + iconText + "</p>");
                            SetIcon("icontoday", iconText);
                    }
                 );

                $.getJSON(url + apiKey + "/" + LatVal + "," + LongVal + "?callback=?",
                   function (data) {
						var iconText = data.daily.data[1].icon;
                       $('#weathertomorrow').html("<p><b>Min</b>: " + DegreesCelsius(data.daily.data[1].temperatureMin) + "&deg C" //data[1] = morgen
                           + "<br><b>Max</b>: " + DegreesCelsius(data.daily.data[1].temperatureMax) + "&deg C" + "</p><br>"
                           + "<p class=statustomorrow>" + iconText + "</p>");
						   SetIcon("icontomorrow", iconText);
                   });
			}
			
			function DegreesCelsius(degrees) //vertaalt Fahrenheit naar Celsius
			{
				var c;
				c =(degrees - 32) * 5 / 9;
				return c.toFixed(1);
			}
			
			
			function SetIcon(iconDay, icon) //maakt een switch voor het weers-icoontje te bepalen (vandaag / morgen)
			{
				switch (icon) {
					case "clear-day":
						icons.set(iconDay, Skycons.CLEAR_DAY);
						icons.play();
						break;
					case "clear-night":
						icons.set(iconDay, Skycons.CLEAR_NIGHT);
						icons.play();
						break;
					case "rain":
						icons.set(iconDay, Skycons.RAIN);
						icons.play();
						break;
					case "snow":
						icons.set(iconDay, Skycons.SNOW);
						icons.play();
						break;
					case "sleet":
						icons.set(iconDay, Skycons.SLEET);
						icons.play();
						break;
					case "wind":
						icons.set(iconDay, Skycons.WIND);
						icons.play();
						break;
					case "fog":
						icons.set(iconDay, Skycons.FOG);
						icons.play();
						break;
					case "cloudy":
						icons.set(iconDay, Skycons.CLOUDY);
						icons.play();
						break;
					case "partly-cloudy-day":
						icons.set(iconDay, Skycons.PARTLY_CLOUDY_DAY);
						icons.play();
						break;
					case "partly-cloudy-night":
						icons.set(iconDay, Skycons.PARTLY_CLOUDY_NIGHT);
						icons.play();
						break;
                }
			}			

