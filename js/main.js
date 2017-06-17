$(document).ready(function(){

  var long;
  var lat;
  var kTemp;
  var fTemp;
  var cTemp;
  var tempSwap=true;

  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        long =position.coords.longitude;
        lat=position.coords.latitude;

    var api='http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=2721f6147a5547e580ec23a2381e4a3d';


      $.getJSON(api,function(data){


        var weatherType=data.weather[0].description;
        kTemp=data.main.temp;
        var windSpeed=data.wind.speed;
        var city=data.name;
        fTemp=((kTemp)*(9/5)-459.67).toFixed(1);
        cTemp=(kTemp-273).toFixed(1);




       $("#city").html(city);
        $("#weatherType").html(weatherType);
        $("#fTemp").html(fTemp+" &#8457;");


        $("#fTemp").click(function(){
            if(tempSwap===false){

                $("#fTemp").html(fTemp+" &#8457;");


                tempSwap=true;
              }
              else{
                  $("#fTemp").html(cTemp+" &#8451;");
                  tempSwap=false;

              }


        });

          $("#windSpeed").html(windSpeed +" mph");
            if(fTemp>80){


            }
            else if(fTemp>70){

              $('body').css('background-image','url(http://more-sky.com/data/out/6/IMG_109602.jpg)');
            }



      });
})

}
});
