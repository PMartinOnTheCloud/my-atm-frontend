import {Injectable} from '@angular/core';

import {ApiEndpoint} from '../resources/apiEndpoint';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


interface RequestOptions {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: string;
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
}

@Injectable()
export class SimpleHttpService {

    public constructor(private client: HttpClient) {}

    public request<T>(endpoint: ApiEndpoint, options: RequestOptions, body: Object = options): Promise<T> {

        return new Promise((resolve, reject) => {
            this.client[endpoint.method.toLowerCase()](endpoint.path, body, options).subscribe(data => {
                resolve(data);
            }, error => reject(error));
        })
    }
}
