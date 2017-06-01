var pos;

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 52.25, lng: 21},
		zoom: 10
    });

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
			
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } 
	else {
		// Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}
	  
$(document).ready(function() {
	
    $("#myButton").on("click", function() {
		
		$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+pos.lat+"&lon="+pos.lng+"&appid=28816487bf5dc2f433b19b231e01b23e", function(json){
	   
			//place and time
			var country = json.sys.country;
			var city = json.name;
			var apiTime = json.dt;
			
			//mainW 
			var temp = json.main.temp-273.15;
			var pressure = json.main.pressure;
			var wIcon = json.weather[0].icon;	

			//time
			var a = new Date(apiTime * 1000);
			var months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
			var year = a.getFullYear();
			var month = months[a.getMonth()];
			var date = a.getDate();
			var hour = a.getHours();
			var min = a.getMinutes();
			
			var myTemp = temp + "&deg;C ";
			
			var place = city+" ("+country+")";
			var mainW = myTemp +"<img src=http://openweathermap.org/img/w/"+wIcon+".png></img> "+pressure+"hPa";
			var time = date + '.' + month + '.' + year + ' ' + hour + ':' + min;
			
			$("#place").html(place);
			$("#mainW").html(mainW);
			$("#time").html(time);
			
			$("#place").fadeIn(1000);
			$("#mainW").fadeIn(1000);
			$("#time").fadeIn(1000);
			
			
			$("#celButt").on("click", function() {
				
				myTemp = temp + "&deg;C ";
				mainW = myTemp +"<img src=http://openweathermap.org/img/w/"+wIcon+".png></img> "+pressure+"hPa";
				$("#mainW").html(mainW);
			});
			
			$("#fahrButt").on("click", function() {
				
				myTemp = (9/5)*temp+32 + "&deg;F ";
				mainW = myTemp +"<img src=http://openweathermap.org/img/w/"+wIcon+".png></img> "+pressure+"hPa";
				$("#mainW").html(mainW);
			});
				
		});
		
	});
	
});