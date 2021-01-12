var city = document.getElementById('name');
var temp = document.getElementById('temp');
var input = document.getElementById('input');
var btn = document.getElementById('btn');
var des = document.getElementById('desc');

btn.addEventListener('click', function (){
    if(input.value.trim().length===0)
    alert('Please enter a city.');
    else {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=e5bd0226a8730b025b8803943b1b1c6c`)
    .then((response) => {
        // console.log(response.json);
        return response.json();
    }).then((data) => {
        city.innerHTML = `Entered city is ${input.value}`;
        let t = data['main'].temp-273.15;
        temp.innerHTML = `Temperature is ${t.toPrecision(3)} degree celsius`;
        des.innerHTML = `Description : ${data['weather'][0].description}`;
        // console.log(data);
    }).catch((error) => {
        city.innerHTML = `${input.value} is probably not a city`;
        temp.innerHTML = '';
        console.log('wrong city');
        
    })
}
});
