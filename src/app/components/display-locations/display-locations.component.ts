import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/locationService';

@Component({
  selector: 'app-display-locations',
  templateUrl: './display-locations.component.html',
  styleUrls: ['./display-locations.component.scss']
})
export class DisplayLocationsComponent implements OnInit {

  public locationsArray: Array<any>;

  constructor(private locationService:LocationService) { }
  
  async ngOnInit(): Promise<void> { 
    this.locationsArray = await this.locationService.getUsersLocations();
  }

}
