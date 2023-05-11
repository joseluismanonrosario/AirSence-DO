//js para la pag

var map = L.map('map', { zoomControl: false }).setView([18.478307, -69.967117], 13);

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
circle.bindPopup("<b>a.v 27 de Febrero con a.v Nuñes de Caceres</b>");



//kennedy con gomez (sd)
var circle1 = L.circle([18.481827, -69.914224], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 1,
    radius: 50
}).addTo(map);
circle1.bindPopup("<b>a.v John F. Kennedy con a.v Maximo Gomez</b>");

//kennedy con duarte
var circle2 = L.circle([18.478958, -69.967632], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 1,
    radius: 50
}).addTo(map);
circle2.bindPopup("<b>a.v John F. Kennedy con a.v Juan Pablo Duarte</b>");

//republica de colombia
var circle3 = L.circle([18.506715, -69.977438], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 1,
    radius: 50
}).addTo(map);
circle3.bindPopup("<b>a.v Republica de Colombia</b>");

// avenida nicolas ovando con gomez
var circle4 = L.circle([18.499247, -69.922593], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 1,
    radius: 50
}).addTo(map);
circle4.bindPopup("<b>a.v Nicolas Ovando a.v Maximo Gomez</b>");

//27 con isabela angula
var circle5 = L.circle([18.451318, -69.979692], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 1,
    radius: 50
}).addTo(map);
circle5.bindPopup("<b>a.v 27 con a.v Isabela Angula</b>");

//av.los beisbolistas
var circle6 = L.circle([18.48549, -69.977481], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 1,
    radius: 50
}).addTo(map);
circle6.bindPopup("<b>a.v Los Beisbolistas</b>");

// los alcarrizos
var circle7 = L.circle([18.502701, -69.998958], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 1,
    radius: 50
}).addTo(map);
circle7.bindPopup("<b>Los Alcarrizos</b>");

//puente duarte 
var circle8 = L.circle([18.486384, -69.884686], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 1,
    radius: 50
}).addTo(map);
circle8.bindPopup("<b>Puente Juan Pablo Duarte</b>");

//cafam
var circle9 = L.circle([18.450158, -69.967804], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 1,
    radius: 50
}).addTo(map);
circle9.bindPopup("<b>Colegio CAFAM</b>");

//plaza de la bandera
var circle10 = L.circle([18.449741, -69.975078], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 1,
    radius: 50
}).addTo(map);
circle10.bindPopup("<b>Plaza de la bandera</b>");

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);

//-------------

var infoAQI = L.control({ position: 'topleft' });

infoAQI.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'infoAQI'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
infoAQI.update = function (props) {
    this._div.innerHTML = `<div class="side_wrapper">
    <div class="header">
        <span class="title">Colegio CAFAM,</span>   
        <br>
        <span class="subtitle1">Santo Domingo</span>  
        <br>
        <span class="subtitle2">Jueves, 11 de Mayo</span>          
    </div>
    <div class="content">
        <div class="gauge">
            <div id="chartDiv"></div>
        </div>
    </div>
    <div class="info">
        <p>Air quality is satisfactory, and air pollution poses little or no risk.</p>
    </div>
    <div class="components">
        <div class="row">
            <div class="column">
                <div id="PM_25" style="width: 59px;height: 65px"></div>
            </div>
            <div class="column">
                <div id="PM_10" style="width: 59px;height: 65px"></div>
            </div>
            <div class="column">
                <div id="SO2" style="width: 59px;height: 65px"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div id="NO2" style="width: 59px;height: 65px"></div>
            </div>
            <div class="column">
                <div id="O3" style="width: 59px;height: 65px"></div>
            </div>
            <div class="column">
                <div id="CO" style="width: 59px;height: 65px"></div>
            </div>
        </div>
        
        <!-- 
        
        <div id="NO2" style="max-width: 59px;height: 59px"></div>
        <div id="O3" style="max-width: 59px;height: 59px"></div>
        <div id="CO" style="max-width: 59px;height: 59px"></div> -->
    </div>
</div>`;
};

infoAQI.addTo(map);

const aqiLevels = L.control({ position: 'bottomright' });

aqiLevels.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'aqiLevel'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
aqiLevels.update = function (props) {
    this._div.innerHTML =  `<a href="/"><img class="aqi_img" style="width: 300px;" src="./img/air_quality_index.png" alt="AQI"></a>`;
};

aqiLevels.addTo(map);
// JS 
const porValue=31;
var chart = JSC.chart('chartDiv', { 
  debug: false, 
  type: 'gauge ', 
  legend_visible: false, 
  chartArea_boxVisible: false, 
  xAxis: { 
    /*Used to position marker on top of axis line.*/
    scale: { range: [0, 1], invert: true } 
  }, 
  palette: { 
    pointValue: '%yValue', 
    ranges: [ 
      { value: [0, 50], color: '#8ECDD2' }, 
      { value: [51, 100], color: '#B5DB7F' }, 
      { value: [101, 150], color: '#ECE788' }, 
      { value: [151, 200], color: '#DE965D' },
      { value: [201, 300], color: '#D66B67' }, 
      { value: [301, 500], color: '#A55B80' }
    ] 
  }, 
  yAxis: { 
    defaultTick: { padding: 8, enabled: false }, 
    customTicks: [0, 50, 100 ,150, 200, 300, 500], 
    line: { 
      width: 8, 
      breaks_gap: 0.03, 
      color: 'smartPalette'
    }, 
    scale: { range: [0, 500] } 
  }, 
  defaultSeries: { 
    opacity: 1, 
    shape: { 
      label: { 
        align: 'center', 
        verticalAlign: 'middle'
      } 
    } 
  }, 
  series: [ 
    { 
      type: 'marker', 
      name: 'Score', 
      shape_label: { 
        text: labelText(porValue), 
        style: { fontSize: 35 } 
      }, 
      defaultPoint: { 
        tooltip: '%yValue', 
        marker: { 
          outline: { 
            width: 5, 
            color: 'currentColor'
          }, 
          fill: 'white', 
          type: 'circle', 
          visible: true, 
          size: 20
        } 
      }, 
      points: [[1, porValue]] 
    } 
  ] 
}); 
function labelText(value) { 
  var text = 
    value >= 301 
      ? 'Hazardous!'
      : value >= 201 
      ? 'Very Unhealthy'
      :value >= 151 
      ? 'Unhealthy '
      : value >= 101 
      ? 'Unhealthy<br/>Sensitive Groups'
      : value >= 51 
      ? 'Moderate'
      : 'Good '; 
  return ( 
    `<span style="fontSize: 12">AQI</span><br/>${value} <br/><span style="fontSize: 20"> ${text}</span>`
  ); 
} 



//PM2.5---------------------------------------------------------

var chart = JSC.chart('PM_25', { 
    debug: false, 
    defaultSeries_type: 'gauge linear horizontal', 
    legend_visible: false, 
    xAxis: { staticColumnWidth: 3 }, 
    yAxis: { 
      scale_range: [0, 500], 
      visible: false
    }, 
    defaultSeries: { 
      color: 'green', 
      mouseTracking_enabled: false, 
      shape: { 
        size: '50,40', 
        defaultLabel_align: 'left', 
        label: [ 
          { 
            margin: [0, 0], 
            text: 
              "<span style='color:#838281;fontSize: 12'>%name</span><br/> <span style='fontSize: 15;color:green;font-weight: 600;;'>%sum</span>", 
            style: { fontSize: 10 } 
          } 
        ] 
      } 
    }, 
    series: [ 
      { 
        type: 'column roundCaps', 
        name: 'PM2.5', 
        points: [['PM2.5', 7.48]] 
      }
     
    ], 
    toolbar_visible: false
  });

  //PM10------------------------------------------------
  
var chart = JSC.chart('PM_10', { 
    debug: false, 
    defaultSeries_type: 'gauge linear horizontal', 
    legend_visible: false, 
    xAxis: { staticColumnWidth: 3 }, 
    yAxis: { 
      scale_range: [0, 500], 
      visible: false
    }, 
    defaultSeries: { 
      color: 'green', 
      mouseTracking_enabled: false, 
      shape: { 
        size: '50,40', 
        defaultLabel_align: 'left', 
        label: [ 
          { 
            margin: [0, 0], 
            text: 
            "<span style='color:#838281;fontSize: 12'>%name</span><br/> <span style='fontSize: 15;color:green;font-weight: 600;;'>%sum</span>", 
            style: { fontSize: 10 } 
          } 
        ] 
      } 
    }, 
    series: [ 
      { 
        type: 'column roundCaps', 
        name: 'PM10', 
        points: [['PM10', 17.1]] 
      }
     
    ], 
    toolbar_visible: false
  });

  //SO2------------------------------------------------
  
var chart = JSC.chart('SO2', { 
    debug: false, 
    defaultSeries_type: 'gauge linear horizontal', 
    legend_visible: false, 
    xAxis: { staticColumnWidth: 3 }, 
    yAxis: { 
      scale_range: [0, 500], 
      visible: false
    }, 
    defaultSeries: { 
      color: 'green', 
      mouseTracking_enabled: false, 
      shape: { 
        size: '50,40', 
        defaultLabel_align: 'left', 
        label: [ 
          { 
            margin: [0, 0], 
            text: 
            "<span style='color:#838281;fontSize: 12'>%name</span><br/> <span style='fontSize: 15;color:green;font-weight: 600;;'>%sum</span>", 
            style: { fontSize: 10 } 
          } 
        ] 
      } 
    }, 
    series: [ 
      { 
        type: 'column roundCaps', 
        name: 'SO2', 
        points: [['SO2', 27.4]] 
      }
     
    ], 
    toolbar_visible: false
  });

  //NO2------------------------------------------------
  
var chart = JSC.chart('NO2', { 
    debug: false, 
    defaultSeries_type: 'gauge linear horizontal', 
    legend_visible: false, 
    xAxis: { staticColumnWidth: 3 }, 
    yAxis: { 
      scale_range: [0, 500], 
      visible: false
    }, 
    defaultSeries: { 
      color: 'green', 
      mouseTracking_enabled: false, 
      shape: { 
        size: '50,40', 
        defaultLabel_align: 'left', 
        label: [ 
          { 
            margin: [0, 0], 
            text: 
            "<span style='color:#838281;fontSize: 12'>%name</span><br/> <span style='fontSize: 15;color:green;font-weight: 600;;'>%sum</span>", 
            style: { fontSize: 10 } 
          } 
        ] 
      } 
    }, 
    series: [ 
      { 
        type: 'column roundCaps', 
        name: 'NO2', 
        points: [['NO2', 18.1]] 
      }
     
    ], 
    toolbar_visible: false
  });

   //O3------------------------------------------------
  
var chart = JSC.chart('O3', { 
    debug: false, 
    defaultSeries_type: 'gauge linear horizontal', 
    legend_visible: false, 
    xAxis: { staticColumnWidth: 3 }, 
    yAxis: { 
      scale_range: [0, 500], 
      visible: false
    }, 
    defaultSeries: { 
      color: 'green', 
      mouseTracking_enabled: false, 
      shape: { 
        size: '50,40', 
        defaultLabel_align: 'left', 
        label: [ 
          { 
            margin: [0, 0], 
            text: 
            "<span style='color:#838281;fontSize: 12'>%name</span><br/> <span style='fontSize: 15;color:green;font-weight: 600;;'>%sum</span>",  
            style: { fontSize: 10 } 
          } 
        ] 
      } 
    }, 
    series: [ 
      { 
        type: 'column roundCaps', 
        name: 'O3', 
        points: [['O3', 25.3]] 
      }
     
    ], 
    toolbar_visible: false
  });

  //CO------------------------------------------------
  
var chart = JSC.chart('CO', { 
    debug: false, 
    defaultSeries_type: 'gauge linear horizontal', 
    legend_visible: false, 
    xAxis: { staticColumnWidth: 3 }, 
    yAxis: { 
      scale_range: [0, 500], 
      visible: false
    }, 
    defaultSeries: { 
      color: 'green', 
      mouseTracking_enabled: false, 
      shape: { 
        size: '50,40', 
        defaultLabel_align: 'left', 
        label: [ 
          { 
            margin: [0, 0], 
            text: 
            "<span style='color:#838281;fontSize: 12'>%name</span><br/> <span style='fontSize: 15;color:green;font-weight: 600;;'>%sum</span>", 
            style: { fontSize: 10 } 
          } 
        ] 
      } 
    }, 
    series: [ 
      { 
        type: 'column roundCaps', 
        name: 'CO', 
        points: [['CO', 330]] 
      }
     
    ], 
    toolbar_visible: false
  }); 