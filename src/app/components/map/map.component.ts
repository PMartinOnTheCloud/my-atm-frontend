import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/locationService';

declare const L: any;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {

  constructor(private locationService:LocationService) {}

  ngOnInit() {
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    const cordenadaLat=51.505;//Aqui se recogueria la latitud del trabajador o el aparato central por la base de datos
    const cordenadaLon=-0.09;//Aqui se recogueria la longitud del trabajador por la base de datos
    const coordenadaZonLat=40.05;//Aqui estamos simulando una posicion en la que estaria la zona
    const coordenadaZonLon=0.05;//Aqui estamos simulando una posicion en la que estaria la zona
    navigator.geolocation.getCurrentPosition(async (position) => {
      const coords = position.coords;
      const latLong = [coords.latitude, coords.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      var mymap = L.map('mapid', { zoomControl: false, attributionControl: false}).setView([position.coords.latitude, position.coords.longitude], 13);
      var locationsArray = await this.locationService.getUsersLocations();

      locationsArray.forEach(element => {
        L.marker([element['lat'],element['lon']]).addTo(mymap).bindPopup(`<strong>${element['name']}</strong>`);
      });
      
      L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap).bindPopup('Mi Location').openPopup();
      //var mymap = L.map('mapid').setView([cordenadaLat, cordenadaLon], 13);//Aqui seria para poner el mapa en la zona especificada
      //var marker = L.marker([cordenadaLat, cordenadaLon]).addTo(mymap);//Aqui seria el marcador de un trabajador para ver su localizacion

      if(cordenadaLat==coordenadaZonLat-10 && cordenadaLon==coordenadaZonLon-10 || cordenadaLat==coordenadaZonLat+10 && cordenadaLon==coordenadaZonLon-10){
        //Aqui arriba se hace una vista de si el trabajador esta cerca de la localizacion de la zona
        //Por ahora este if es pequeño de prueba pero esto se podria pasar a una funcion en la que esa hara la comparacion
        console.log("Estas dentro de zona restringida")//Esto de aqui es la parte de alarma que por ahora es por consola pero se tiene que cambiar a una alerta
      }

      L.control.zoom({position: 'bottomright'}).addTo(mymap);


      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGVjaGRlcGFydCIsImEiOiJja21lbWowazAwbnZ3MnBwNXlqM2RnZGk2In0.EkADwtFnpG3amyctDDYXhA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,//tamaño del mapa
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

  }
    )}

}
