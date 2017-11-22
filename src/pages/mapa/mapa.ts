import { Component,ViewChild, ElementRef } from '@angular/core';
import { IonicPage,NavController, Platform } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var google:any;

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

   @ViewChild('map') mapRef:ElementRef;
   map: any;

   constructor(public navCtrl: NavController, public http: Http) 
   {

   }

   ionViewDidLoad() {
    this.DisplayMap();
    this.getMarkers();
  }

  getMarkers() {
    this.http.get('assets/data/markers.json')
    .map((res) => res.json())
    .subscribe(data => {
      this.addMarkersToMap(data);
      console.log(data);
    });
  }

  addMarkersToMap(markers) {
    for(let marker of markers) {
      var position = new google.maps.LatLng(marker.latitude, marker.longitude);
      var dogwalkMarker = new google.maps.Marker({position: position, title: marker.title});
      dogwalkMarker.setMap(this.map);
    }
  }

  DisplayMap() {

    let location = new google.maps.LatLng(-20.417194,-49.970325);

    const options = {
      center:location,
      zoom:15,
      streetViewControl:false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapRef.nativeElement,options);

    //this.addMarker(location,map);
  }

  addMarker(position,map) {
    return new google.maps.Marker({
      position,
      map
    });
  }
}