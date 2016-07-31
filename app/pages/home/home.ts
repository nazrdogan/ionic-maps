import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Geolocation} from 'ionic-native';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController) {

  }

  ngOnInit() {
    console.log('ngOnInit');
    this.loadMap();
  }

  loadMap() {
    Geolocation.getCurrentPosition().then((resp) => {
      var latlng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      var myOptions = {
        zoom: 8,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map"), myOptions);
    });
  }

}
