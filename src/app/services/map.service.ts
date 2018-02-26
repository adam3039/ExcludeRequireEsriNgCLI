import { Injectable } from '@angular/core';
import Map = require('esri/map');
import esriLoader from 'esri-loader';

@Injectable()
export class MapService {

  map: Map;
  apiOptions = { url: 'https://js.arcgis.com/3.23/' };

  constructor() { }

  initMap(id: string) {

    esriLoader.loadModules(['esri/map'], this.apiOptions)
    .then(([Map]) => {
      this.map = new Map('map', {
        center: [-113.977156, 50.884255],
        zoom: 14,
        basemap: 'streets'
      });
    })
    .catch(err => {
      console.error(err);
    });
  }

}
