//data  done
// variable to store the data     done
//function to get the data from weather app
//manipulate the variable of already created

let data;  //1

const inputBox=document.getElementById("inputBox")
const countryname=document.getElementById("countryname")   //2
const statename=document.getElementById("statename")
const cityname=document.getElementById("cityname")
const humidity=document.getElementById("humidity")
const windspeed=document.getElementById("windspeed")
const temperature=document.getElementById("temperature");
const logoimg=document.getElementById("logoimg");
const weatherstatus=document.getElementById("weatherstatus");




const  getData=async(event)=>{

    event.preventDefault();

 if(!inputBox.value){


         alert("Please enter your city name:");
        return;
   }
   


    //

     const city=inputBox.value;


     //fetch details



     const fetchData=  await fetch(`https://api.weatherapi.com/v1/current.json?key=f683e14c3c9244b0b5b111311240403&q=${city}`)



     const orgData= await fetchData.json();
     data =orgData;
     console.log(data);

//display the data in html


countryname.innerHTML=data.location.country;  
statename.innerHTML=data.location.region;
cityname.innerHTML=data.location.name;

humidity.innerHTML=data.current.humidity;
windspeed.innerHTML=data.current.wind_kph;
temperature.innerHTML=data.current.temp_c;

//....

logoimg.src=data.current.condition.icon; 
weatherstatus.innerHTML=data.current.condition.text; 



};