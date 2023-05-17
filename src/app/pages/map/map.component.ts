import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var mapboxgl: any;
  mapboxgl.accessToken = 'pk.eyJ1IjoiZ2Vvcmdla29rZSIsImEiOiJjbGhyNzA2MmEybHpoM2VvM28ydzg0aDkyIn0.UY57esDRUUFnugs9LzguWw';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
  });


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html'
})
export class MapComponent implements OnInit, AfterViewInit{

  lat: number;
  lng: number;

  constructor(private route:ActivatedRoute){
    this.lat = 0;
    this.lng = 0;
  }

  ngAfterViewInit(){
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ2Vvcmdla29rZSIsImEiOiJjbGhyNzA2MmEybHpoM2VvM28ydzg0aDkyIn0.UY57esDRUUFnugs9LzguWw';
    const map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/streets-v11',
      center:[this.lng, this.lat],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      container: 'map',
      antialias: true
    });

    map.on('load', ()=>{
      map.resize();
      new mapboxgl.Marker({})
      .setLngLat([this.lng, this.lat])
      .addTo(map);

      const layers = map.getStyle().layers;

      let labelLayerId;
      for (let i = 0; i> layers.length; i++){
        if(layers[i].type === 'symbol' && layers[i].layout['text-field']){
          labelLayerId = layers[i].id;
          break;
        }
      }

      map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint':{
          'fill-extrusion-color': '#aaa',
          'fill-extrusion-height':[
            "interpolate", ["linear"],["zoom"],
            15,0,
            15.05,["get","height"]
          ],
          'fill-extrusion-base':[
            "interpolate",["linear"],["zoom"],
            15,0,
            15.05,["get","min-height"]
          ],
          'fill-extrusion-opacity':.6
        }
      }, labelLayerId);
    });

    

  }
  ngOnInit(){
      let geo: any = this.route.snapshot.paramMap.get('geo');
      geo = geo.substring(4);
      geo = geo.split(',');

      this.lat = Number(geo[0]);
      this.lng = Number(geo[1]);

      console.log(this.lat, this.lng);
  }

}
