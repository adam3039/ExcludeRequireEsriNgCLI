import { MapService } from './services/map.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _mapService: MapService) { }

  ngOnInit() {
    this._mapService.initMap('map');
  }

}
