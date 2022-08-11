let loc = document.getElementById("location");
let tempicon = document.getElementById("temp-icon");
let tempvalue = document.getElementById("temp-value");
let climate = document.getElementById("climate");
let iconfile;
const serachInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");


searchButton.addEventListener('click', (e)=>
{
    e.preventDefault();
    getWeather(serachInput.value);
    serachInput.value='';

});

const getWeather=async (city)=>
{
    try{
        const Response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=baab2582e0a02327b122d58b3e463cb4`,
          
        {cors: 'cors'}
        );
        const weatherData=await Response.json();
        console.log(weatherData);
        const{name}=weatherData;
        const{feels_like}=weatherData.main;
        const{id,main}=weatherData.weather[0];
        loc.textContent=name;
        climate.textContent=main;
        tempvalue.textContent=Math.round(feels_like-273);
        
        if(id<300 && id>=200)
                {
                    tempicon.src="thunderstrom.png";
                }
                else if(id<400 && id>=300)
                {
                    tempicon.src="cloud-solid.png";
                }
                else if(id<600 && id>=500)
                {
                    tempicon.src="rain.png";
                }
                else if(id<700 && id>=600)
                {
                    tempicon.src="snow.png";
                }
                else if(id<800 && id>=700)
                {
                    tempicon.src="clouds.png";
                }
                else if(id==800)
                {
                    tempicon.src="sun.png";
                }
                else if(id>800)
                {
                      tempicon.src="cloud 1.png"
                }




    }
    catch(error)
    {
        alert('city not found');
    }
};


window.addEventListener("load", () => {
    let long;
    let lat;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=baab2582e0a02327b122d58b3e463cb4`;

            fetch(api).then((Response) => {
                return Response.json();

            })
            .then(data => {
                const {name} = data;
                const {feels_like} = data.main;
                const {id, main} = data.weather[0];

                loc.textContent = name;
                climate.textContent = main;
                tempvalue.textContent = Math.round(feels_like - 273);
                if(id<300 && id>=200)
                {
                    tempicon.src="thunderstrom.png";
                }
                else if(id<400 && id>=300)
                {
                    tempicon.src="cloud-solid.png";
                }
                else if(id<600 && id>=500)
                {
                    tempicon.src="rain.png";
                }
                else if(id<700 && id>=600)
                {
                    tempicon.src="snow.png";
                }
                else if(id<800 && id>=700)
                {
                    tempicon.src="clouds.png";
                }
                else if(id==800)
                {
                    tempicon.src="sun.png";
                }
                else if(id>800)
                {
                      tempicon.src="cloud 1.png"
                }




            })
        })
    }
})