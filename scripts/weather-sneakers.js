//GetJSONP function found from https://stackoverflow.com/questions/2499567/how-to-make-a-json-call-to-a-url/2499647#2499647
var weather;

$.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=44.56&lon=-123.26&appid=b16cb60fd11bd63d4136d47f40d7b772&units=imperial", function(data) {
    console.log(data);
    weather = data;
    var temp = weather.main.temp;
    var city = weather.name;

    document.getElementById('temp').innerHTML = temp+'f';
    document.getElementById('city').innerHTML = city+', OR';

    if(temp<45){
        document.getElementById('suggestion').innerHTML = "Yes! Get yourself a jacket, it's cold!";
    }
    else{
        document.getElementById('suggestion').innerHTML = "No! Suns out, guns out! It's over 45f, basically summer!";
    }
});



//This was the original .js i looked up but being a modified jquery file it didn't work with my program.


// window.onload = function(){
    
//     $(".sneakers").sneakers({
//         lockSize: true,  // lock current element size before removing content
//         done: function() {
//             // alert("done");  // optionally handle events
//         }
//     });
// }