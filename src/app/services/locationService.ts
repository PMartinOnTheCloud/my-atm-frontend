
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class LocationService {

    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}

    /*
    public getUsersLocations<T>(){
        this.usersLocations=[];
        this.http.get<T[]>(this.apiUrl + "user/getAll", {withCredentials: true}).subscribe(users => {
            let userLocation = [];;
            for (var i=0; i< users.length; i++){
                userLocation = [];
                userLocation.push(users[i]['id'],users[i]['lat'],users[i]['lon']);
                this.usersLocations.push(userLocation);
            }
            console.log(this.usersLocations);
        });
        console.log(this.usersLocations);
        return this.usersLocations;
    } */

    public getUsersLocations<T>(){
        return new Promise <any>( async resolve => {
            let arrayOfUserLocations = await this.getArrayOfUsersLocations();
            resolve(arrayOfUserLocations);
        });
        
    }

    public getArrayOfUsersLocations<T>() {
        return new Promise <any>( resolve => {
            var usersLocations = [];
            this.http.get<T[]>(this.apiUrl + "user/getAll", {withCredentials: true}).subscribe(users => {
                for (var i=0; i< users.length; i++){
                    usersLocations[i] = { "id": users[i]['id'], "name": users[i]['name'] ,"lat": users[i]['lat']['$numberDecimal'], "lon": users[i]['lon']['$numberDecimal'] };
                }
                resolve(usersLocations);
            });
        });
    }
}
