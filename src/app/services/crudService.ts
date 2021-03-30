
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class CrudService {

    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}


    public getEntities<T>(entityName: string): Observable<T[]> {
        return this.http.get<T[]>(this.apiUrl + entityName + "/getAll", {withCredentials: true});
    }

    public getEntity<T>(entityName: string, id: string): Observable<T[]> {
        return this.http.get<T[]>(this.apiUrl + entityName + "/get/" + id, {withCredentials: true});
    }

    public getManyEntity<T>(entityName: string, field: string, value: string): Observable<T[]> {
        return this.http.get<T[]>(this.apiUrl + entityName + "/getMany/" + field + "/"+value, {withCredentials: true});
    }

    public countEntities<T>(entityName: string): Observable<T[]> {
        return this.http.get<T[]>(this.apiUrl + entityName + "/count/", {withCredentials: true});
    }

    public existsEntity<T>(entityName: string, id: string): Observable<T[]> {
        return this.http.post<T[]>(this.apiUrl + entityName + "/exists/", id, {withCredentials: true});
    }

    public createEntity<T> (entityName: string, entity: T) {
        return this.http.post<T[]>(this.apiUrl + entityName + "/create/", entity, {withCredentials: true});
    }

    public updateEntity<T>(entityName: string, entity: T): Observable<any> {
        return this.http.put<T[]>(this.apiUrl + entityName + "/update/", entity, {withCredentials: true});
    }

    public updateEntities<T>(entityName: string, entities: T): Observable<any> {
        return this.http.put<T[]>(this.apiUrl + entityName + "/update/", entities, {withCredentials: true});
    }

    public deleteEntity<T>(entityName: string, id: string): Observable<any> {
        return this.http.delete<T[]>(this.apiUrl + entityName + "/delete/" + id, {withCredentials: true});
    }

    public deleteEntities<T>(entityName: string, field: string, value: string): Observable<any> {
        return this.http.delete<T[]>(this.apiUrl + entityName + "/delete/" + field + "/" + value, {withCredentials: true});
    }

    public deleteAllEntities<T>(entityName: string): Observable<any> {
        return this.http.delete<T[]>(this.apiUrl + entityName + "/deleteAll/", {withCredentials: true});
    }
    
}
