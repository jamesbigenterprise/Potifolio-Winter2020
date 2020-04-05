import { getJSON, getLocation } from './utilities.js';
import QuakesController from './QuakesController.js';
/*
let baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

const geoOptions = {
    enableHighAccuracy: false,
    maximumAge: 30000,
    timeOut: 27000
};

const geolocation = getLocation(geoOptions).then((location) => {
    console.log(location.coords.latitude);
    baseUrl += '&latitude' + location.coords.latitude + '&longitude' + location.coords.longitude;
    console.log(baseUrl);
     
});

const jsonMano = getJSON(baseUrl).then((data) => {console.log('ready after all');
 console.log(data);});
*/

const quakeController = new QuakesController('#quakeList');
quakeController.init();
quakeController.initPos();

