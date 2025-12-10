const input = document.querySelector('.inputCity');
const btn = document.querySelector('.btn');
let name1 = document.querySelector('#city-name');
const region = document.querySelector('.region-info');
const country = document.querySelector('.country');
const time = document.querySelector('.datetime');
const timezone = document.querySelector('.timezone');
const epoch = document.querySelector('#epoch');
const lat = document.querySelector('#lat');
const lon = document.querySelector('#lon');
const img = document.querySelector('img');
const temperature = document.querySelector('#temperature');
const conditionText = document.querySelector('#condition-text');
const feelslike = document.querySelector('#feelslike');
const windkm = document.querySelector('#windkm');
const windmp = document.querySelector('#windmp');
const precipmm = document.querySelector('#precipmm');
const precipin = document.querySelector('#precipin');
const dewc = document.querySelector('#dewc');
const dewf = document.querySelector('#dewf');
const gustm = document.querySelector('#gustm');
const gustk = document.querySelector('#gustk');
const humidity = document.querySelector('#humidity');
const visibilitykm = document.querySelector('#visibilitykm');
const visibilitym = document.querySelector('#visibilitym');
const pressuremb = document.querySelector('#pressuremb');
const pressurein = document.querySelector('#pressurein');
const indexc = document.querySelector('#uv-indexc');
const indexf = document.querySelector('#uv-indexf');
const cloud = document.querySelector('#cloud');
const co = document.querySelector('#co');
const no2 = document.querySelector('#no2');
const o3 = document.querySelector('#o3');
const pm2 = document.querySelector('#pm2');
const pm10 = document.querySelector('#pm10');
const so2 = document.querySelector('#so2');
const lastUpdate = document.querySelector('#lastUpdate');

function loadApi(){
    fetch(`https://api.weatherapi.com/v1/current.json?key=ab9c8380e45540e996a62237250912&q=${input.value}&aqi=yes`)
    .then((response) => response.json())
    .then((data)=>{
        contentText(data.location);
        currentText(data.current);
    })
}

function contentText(data){

    name1.textContent=data.name;
    region.textContent=data.region;
    country.textContent=data.country;
    time.textContent=data.localtime;
    timezone.textContent=data.tz_id;
    epoch.textContent=data.localtime_epoch;
    lat.textContent=data.lat;
    lon.textContent=data.lon;
}

function currentText(data){
    img.setAttribute('src',data.condition.icon);
    temperature.textContent=data.temp_c;
    conditionText.textContent=data.condition.text;
    feelslike.textContent=data.feelslike_c;
    windkm.textContent=data.wind_kph;
    windmp.textContent=data.wind_mph;
    precipmm.textContent=data.precip_mm;
    precipin.textContent=data.precip_in;
    dewc.textContent=data.dewpoint_c;
    dewf.textContent=data.dewpoint_f;
    gustm.textContent=data.gust_mph;
    gustk.textContent=data.gust_kph;
    humidity.textContent=data.humidity;
    visibilitykm.textContent=data.vis_km;
    visibilitym.textContent=data.vis_miles;
    pressuremb.textContent=data.pressure_mb;
    pressurein.textContent=data.pressure_in;
    indexc.textContent=data.heatindex_c;
    indexf.textContent=data.heatindex_f;
    cloud.textContent=data.cloud;
    co.textContent=data.air_quality.co;
    no2.textContent=data.air_quality.no2;
    o3.textContent=data.air_quality.o3;
    pm2.textContent=data.air_quality.pm2_5;
    pm10.textContent=data.air_quality.pm10;
    so2.textContent=data.air_quality.so2;
    lastUpdate.textContent=data.last_updated;

}

btn.addEventListener('click',loadApi);