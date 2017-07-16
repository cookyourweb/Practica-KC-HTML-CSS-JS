
			function initialize() {
				var myLatLng = {lat: 40.499192, lng: -4.065256};


				  var mapProp = {
				    center:myLatLng,
				    zoom:15,
				    mapTypeId:google.maps.MapTypeId.ROADMAP
				  };
				  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

				  var marker = new google.maps.Marker({
				    position: myLatLng,
				    map: map,
				    title: 'Aqui estamos'
				  });
			}
			google.maps.event.addDomListener(window, 'load', initialize);
	