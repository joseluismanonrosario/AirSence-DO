//js para la pag

var map = L.map('map').setView([18.478307, -69.967117], 13);

var marker = L.marker([51.5, -0.09]).addTo(map);

L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'

}).addTo(map);





// 27 con nuñez (sd)
var circle = L.circle([18.451726, -69.961452], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 1,
    radius: 50
}).addTo(map);
circle.bindPopup("<b>a.v 27 con a.v presidente Antonio Guzman</b>");

//kennedy con gomez (sd)
var circle1 = L.circle([18.481827, -69.914224], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 1,
    radius: 50
}).addTo(map);

//kennedy con duarte
var circle2 = L.circle([18.478958, -69.967632], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 1,
    radius: 50
}).addTo(map);

//proceres con kennedy
var circle3 = L.circle([18.478968, -69.9676], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 1,
    radius: 50
}).addTo(map);


//republica de colombia
var circle4 = L.circle([18.506715, -69.977438], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 1,
    radius: 50
}).addTo(map);

// avenida nicolas ovando con gomez
var circle5 = L.circle([18.499247, -69.922593], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 1,
    radius: 50
}).addTo(map);

//27 con isabela angula
var circle6 = L.circle([18.451318, -69.979692], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 1,
    radius: 50
}).addTo(map);

//av.los beisbolistas
var circle7 = L.circle([18.48549, -69.977481], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 1,
    radius: 50
}).addTo(map);

// los alcarrizos
var circle8 = L.circle([18.502701, -69.998958], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 1,
    radius: 50
}).addTo(map);

//puente duarte 
var circle9 = L.circle([18.486384, -69.884686], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 1,
    radius: 50
}).addTo(map);

//cafam
var circle10 = L.circle([18.450158, -69.967804], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 1,
    radius: 50
}).addTo(map);

//plaza de la bandera
var circle10 = L.circle([18.449741, -69.975078], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 1,
    radius: 50
}).addTo(map);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);

